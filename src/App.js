import "./App.css";
import Content from "./components/contentComponent/Content";
import NavBar from "./components/navBar/NavBar";
import Header from "./components/headerComponent/Header";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Header></Header>
      <Content></Content>
    </div>
  );
}

export default App;
