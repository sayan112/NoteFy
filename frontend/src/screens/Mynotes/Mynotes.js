import React, { useEffect, useState } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../component/MainScreen";
import axios from "axios";
const Mynotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("hey are u sure ? U wanna delete 💀🥲")) {
    }
  };


 const[notes,setNotes]=useState([]);

   const fetchNotes = async()=>{
     const {data} = await axios.get("/api/sayan/notes");
   setNotes(data);
   }

useEffect (()=>{

  fetchNotes()
}, [])




  return (
    <div>
      <MainScreen title="welcome to the moon...">
        <Link to="createNote">
          <Button
            variant="primary"
            style={{ marginBottom: 2, marginLeft: 10 }}
            size="lg"
          >
            Create New Note
          </Button>
        </Link>

        {notes.map((note) => (
          <Accordion key={note._id}>
            <Accordion.Item eventkey="0">
              <Card style={{ margin: 10 }}>
                <Card.Header style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 20,
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
                      <p> {note.content} </p>
                      <footer className="blockquote-footer">
                        Created date - id{" "}
                        <cite title="Source Title">Source Title</cite>
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
