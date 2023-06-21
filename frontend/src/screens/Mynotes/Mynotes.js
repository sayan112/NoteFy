import React, { useEffect } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MainScreen from "../../component/MainScreen";
import { deleteNoteAction, listNotes } from "../../actions/noteAction";
import Loading from "../../component/loading";
import Error from "../../component/erormessage.js";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ReactMarkdown from "react-markdown";
const Mynotes = ({search:search}) => {
  const dispatch = useDispatch();
  const noteList = useSelector((state) => state.notelist);
  const { loading, notes, error } = noteList;
  const history = useHistory();
  const userLogin = useSelector((state) => state.UserLogin);
  const { userInfo } = userLogin;
  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;
  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;
  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: suceessDelete,
  } = noteDelete;

  useEffect(() => {
    // fetchNotes()
    dispatch(listNotes());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    userInfo,
    suceessDelete,
    successUpdate,
    successCreate,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("hey are u sure ? U wanna delete 💀🥲")) {
      dispatch(deleteNoteAction(id));
    }
  };

       const UserLogin = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div>
      <MainScreen title={`Welcome back 👋 ${UserLogin.name}`}>
        <Link to="createNote">
          <Button
            variant="primary"
            style={{ marginBottom: 2, marginLeft: 10 }}
            size="lg"
          >
            Create New Note
          </Button>
        </Link>
        {error && <Error variant="danger">{error}</Error>}
        {loading && <Loading />}
        {notes
          ?.reverse()
          .filter((note) => {
           return   note.title.toLowerCase().includes(search.toLowerCase());
          })
          .map((note) => (
            <Accordion>
              <Accordion.Item eventkey={note._id}>
                <Card style={{ margin: 10 }}>
                  <Card.Header style={{ display: "flex" }}>
                    <span
                      style={{
                        color: "black",
                        textDecoration: "none",
                        flex: 1,
                        cursor: "pointer",
                        alignSelf: "center",
                        fontSize: 15,
                      }}
                    >
                      <Accordion.Button as={Card.Text} variant="link">
                        {note.title}
                      </Accordion.Button>
                    </span>

                    <div>
                      <Button href={`/note/${note._id}`}>Edit</Button>

                      <Button
                        variant="danger"
                        className="mx-2"
                        onClick={() => deleteHandler(note._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Header>
                  <Accordion.Collapse>
                    <Card.Body>
                      <h4>
                        <Badge
                          bg="success"
                          style={{ color: "whitesmoke", fontWeight: 2 }}
                        >
                          Category- {note.category}
                        </Badge>
                      </h4>

                      <blockquote className="blockquote mb-0">
                        <ReactMarkdown>{note.content}</ReactMarkdown>
                        <footer className="blockquote-footer">
                          Created on{" "}
                          <cite title="Source Title">
                            {note.createdAt.substring(0, 10)}
                          </cite>
                        </footer>
                      </blockquote>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion.Item>
            </Accordion>
          ))}
      </MainScreen>
    </div>
  );
};

export default Mynotes;
