import { Fragment, useState } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import AddCourse from "./Component/AddCourse/AddCourse";
import CoursesScreen from "./Component/CoursesScreen/CoursesScreen";
import EditCourse from "./Component/EditCourse/EditCourse";
import {myState , mySetState} from "./myContext/myContext";

function App() {
  const [state , setState] = useState({
    CourseDetails: [
      {
        id: 1,
        title: "Building Applications in React and Flux",
        length: "5:08",
        category: "JavaScript",
        author: "cory-house",
      },
      {
        id: 2,
        title: "Clean Code: Writing Code for Humans",
        length: "3:10",
        category: "Software Practices",
        author: "cory-house",
      },
      {
        id: 3,
        title: "Architecting Applications for the Real World",
        length: "2:52",
        category: "Software Architecture",
        author: "cory-house",
      },
      {
        id: 4,
        title: "Becoming an Outlier: Reprogramming the Developer Mind",
        length: "2:30",
        category: "Career",
        author: "cory-house",
      },
      {
        id: 5,
        title: "Web Component Fundamentals",
        length: "5:10",
        category: "HTML5",
        author: "cory-house",
      },
    ],
    selectedToUpdate: null,
  })

    return (
      <myState.Provider value={state}>
        <mySetState.Provider value={setState}>
        <Fragment>
          <Switch>
            <Route path="/add-course" component={AddCourse} />
            <Route path="/edit-course" component={EditCourse} />
            <Route path="/" component={CoursesScreen} />
          </Switch>
        </Fragment>
        </mySetState.Provider>
      </myState.Provider>
    );
  }


export default App;
