import List from "./components/List";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Main from "./components/Main";
import GreenList from "./components/GreenList";
import RedList from "./components/RedList";
import BlackList from "./components/BlackList";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <br></br>
      <br></br>
      <br></br>
      <Form></Form>
      <br></br>
      <br></br>
      <br></br>
      <Main></Main>
      <br></br>
      <br></br>
      <br></br>
      <div style={{"display":"flex","flexDirection":"row","justifyContent":"space-between"}}>
        <div style={{"float":"left"}}>
          <List />
        </div>
        <div style={{"float":"left"}} >
          <GreenList></GreenList>
        </div>
        <div style={{"float":"left"}}>
          <RedList></RedList>
        </div>
        <div style={{"float":"left"}}><BlackList></BlackList></div>
      </div>
    </div>
  );
}

export default App;
