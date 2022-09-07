import "./App.css";
import Content from "./components/contentComponent/Content";
import NavBar from "./components/navBar/NavBar";
import Header from "./components/headerComponent/Header";
import TabsList from "./components/tabList/TabsList";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Header></Header>
      <TabsList></TabsList>
     
    </div>
  );
}

export default App;
