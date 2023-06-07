// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [alert, setAlert] = useState(false);
  const handleClick = () => setAlert(true);

  return (
    <>
      {alert && <Alert onClick={() => setAlert(false)}>Clicked button</Alert>}
      <Button color="danger" onClick={() => setAlert(true)}>
        Hello <span>World</span>
      </Button>
    </>
  );
}

export default App;
