import React, { Fragment,useEffect } from "react";
import { Container, Form, FormGroup, Input } from "reactstrap";
import { Button } from 'reactstrap';

const AddCour=()=>{
    useEffect(()=>{
        document.title="Add Course";
      },[])
    return(
    <Fragment>
        <h3 className="text-center">Fill Course Details</h3>
        <Form>
            <FormGroup>
                <label for="userId">Course Id</label>
                <Input type="text" placeholder="Enter here" name="userId" id="userId" />
            </FormGroup>
            <FormGroup>
                <label for="title">Course Title</label>
                <Input type="text" placeholder="Enter here" id="title" />
            </FormGroup>
            <FormGroup>
                <label for="description">Course Description</label>
                <Input type="textarea" placeholder="Enter description here" id="description" style={{height:150}} />
            </FormGroup>
            <Container className="text-center">
                <Button color="success">Add Course</Button>
                <Button color="warning">Clear</Button>
            </Container>
        </Form>
    </Fragment>
    );
}

export default AddCour;