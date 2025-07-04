import Button from "./components/Button";
import Form from "./components/Form";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
      {/* <Home title="This is home" /> */}
      <Form type="register" />
      <Button text="See more" color="red" />
    </>
  );
};

export default App;
