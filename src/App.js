import "./App.css";
import React, { useState, useEffect, createContext, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import HomePage from "./components/HomePage";
import CoursePage from "./components/coursePage/CoursePage";
import NoMatchPage from "./components/NoMatchPage";
import { CoursesDataProvider } from "./contexts/DataContext";
import { SearchDataProvider } from "./contexts/SearchData";
import Footer from "./components/footer/Footer";

export const SetSearchTermContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const url = "http://localhost:3000/content";
  //const url ="https://raw.githubusercontent.com/Kareem20/udemy_project_2/phase_2/data.json";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SearchDataProvider value={searchData}>
      <SetSearchTermContext.Provider value={setSearchData}>
        <CoursesDataProvider value={{ coursesData: data }}>
          <div className="App">
            <div>
              <NavBar></NavBar>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses/:courseId" element={<CoursePage />} />
                <Route path="*" element={<NoMatchPage />} />
              </Routes>
              <Footer></Footer>
            </div>
          </div>
        </CoursesDataProvider>
      </SetSearchTermContext.Provider>
    </SearchDataProvider>
  );
}

export default App;
