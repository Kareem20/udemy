import React from "react";

export const CoursesDataContext = React.createContext();

const CoursesDataProvider = CoursesDataContext.Provider;
const CoursesDataConsumer = CoursesDataContext.Consumer;

export { CoursesDataConsumer, CoursesDataProvider };
