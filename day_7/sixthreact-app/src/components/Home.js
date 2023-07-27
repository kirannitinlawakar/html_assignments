import React, { useEffect } from "react";
import {Container, Button} from "reactstrap";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter
} from "reactstrap";

const Home = () => {
  useEffect(()=>{
    document.title="Home || Take Courses";
  },[])
    return(
        <div>
          <Card color="light">
            <CardBody>
              <h2>Courses For Beginners</h2>
              <p>This courses are prepared for the beginners. </p>
              <Container>
                <Button color="primary" outline>Start Using</Button>
              </Container>
            </CardBody>
          </Card>
        </div> 
    );
}

export default Home;