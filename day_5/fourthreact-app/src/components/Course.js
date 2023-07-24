import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from "reactstrap";

const Course=({course})=>{
   return (
    <Card className="text-center">
        <CardBody>
            <CardSubtitle>{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className="text-center">
                <Button color="primary">Update</Button>
                <Button color="danger ml-5">Delete</Button>
            </Container>
        </CardBody>
    </Card>
   )
}

export default Course;