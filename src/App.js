import 'bootstrap/dist/css/bootstrap.min.css';
import Description from "./Description";
import Image from "./Image";
import Name from "./Name";
import Price from "./Price"; 
// import Button from "react-bootstrap/Button"

import Card from "react-bootstrap/Card";


// this check point is not descriptive enough 
 

function App() {
  return (
    <>
      <Card className="bg-dark text-white" style={{width:"18rem", margin:"2.6rem auto"}}>
      <Image/>
      <Card.Body>
        <Card.Header as="h1"><Name/></Card.Header>
        <Card.Text>
          <Price/>
          <Description/>
        </Card.Text>
      </Card.Body>
      </Card>
      <h2 style={{width:"18rem", margin:"2.6rem auto"}}>Hello Ekwe</h2>
    </>
  );
}

export default App;
