import React, { useState } from 'react'
import MainScreen from '../../component/MainScreen'
import { Button , Card, Form } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import ErrorMessage from '../../component/erormessage'
 import Loading from '../../component/loading'
import { useDispatch, useSelector } from 'react-redux'
 import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { createNoteAction } from '../../actions/noteAction.js'
const CreateNote = ({history}) => {
     const [ title , setTitle]= useState("");
      const [content, setContent] = useState("");
      const [category, setCategory] = useState("");
       const dispatch = useDispatch();
       const noteCreate = useSelector((state)=> state.noteCreate);
       const {loading , error , note}= noteCreate;
        // console.log(note);
         const resetHandeler=()=>{
             setTitle("");
             setContent("");
             setCategory("");
         }
          const submitHandler=(e)=>{
             e.preventDefault();
                    if (!title || !content || !category) {
                      return;
                    }  
            dispatch(createNoteAction(title,content,category));
 
 history.push("/mynotes");
       }

  return (
    <MainScreen title="Create a Note">
      <Card>
        <CardHeader> Create a New Note</CardHeader>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage varient="danger" />}
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                value={title}
                placeholder="Enter the title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                value={content}
                placeholder="Enter the content"
                rows={4}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            {content && (
              <Card>
                <Card.Header>Note Preview</Card.Header>
                <Card.Body>
                  <ReactMarkdown>{content}</ReactMarkdown>
                </Card.Body>
              </Card>
            )}

            <Form.Group controlId="content" style={{marginBottom:"1rem"}}>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="category"
                value={category}
                placeholder="Enter the category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
            <Button type="submit" variant="primary">
              Create Note
            </Button>
            <Button className="mx-2" onClick={resetHandeler} variant="danger">
              Reset Fields
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

export default CreateNote