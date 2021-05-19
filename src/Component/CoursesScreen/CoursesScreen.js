import { Fragment, useContext, useState } from "react";
import "./CoursesScreen.css";
import Header from "../../Reusable_Component/Header/Header";
import ContentTile from "../../Reusable_Component/ContentTile/ContentTile";
import { NavLink } from "react-router-dom";
import {mySetState,myState} from "../../myContext/myContext";

function CoursesScreen(){
  
  const [currentlyOn , setCurrenlyOn] = useState(null);
  const state = useContext(myState);
  const setState = useContext(mySetState);

  function deleteCourse(){
    console.log("del")
    
    if (currentlyOn === null) return;
    else {
      const updatedCourseDetails = state.CourseDetails.filter((data) => {
        return data.id !== currentlyOn;
      });
      console.log(updatedCourseDetails)
      for (let key in updatedCourseDetails) {
        updatedCourseDetails[key].id = parseInt(key) + 1;
      }

      setState({...state,
        CourseDetails: updatedCourseDetails})
    }
  }

    return (
      <Fragment>
      <Header />
      <div className="content-body">
        <div className="title">
          <h1>Courses</h1>
        </div>
        <div className="options-bar">
          <NavLink to="/add-course" style={{ textDecoration: "none" }}>
            <div className="options-bar-new">
              <i className="fa fa-plus" aria-hidden="true"></i> New
            </div>
          </NavLink>
          &nbsp;&nbsp;
          <NavLink
            to={currentlyOn === null ? "" : "/edit-course"}
            style={{ textDecoration: "none" }}
          >
            <div className="options-bar-edit">
              <i className="fa fa-pencil" aria-hidden="true"></i> Edit
            </div>
          </NavLink>
          &nbsp;&nbsp;
          <div
            className="options-bar-delete"
            onClick={() => deleteCourse()}
          >
            <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
          </div>
        </div>
        <div className="course-details">
          <table className="table-structure" cellSpacing="0">
            <thead>
              <tr className="table-header">
                <th>
                  Title <i className="fa fa-sort" aria-hidden="true"></i>
                </th>
                <th>
                  Length <i className="fa fa-sort" aria-hidden="true"></i>
                </th>
                <th>
                  Category{" "}
                  <i className="fa fa-sort" aria-hidden="true"></i>
                </th>
                <th>
                  Author <i className="fa fa-sort" aria-hidden="true"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {state.CourseDetails.length === 0 ? (
                <ContentTile category="No Data"></ContentTile>
              ) : (
                state.CourseDetails.map((data, index) => {
                  return (
                    <ContentTile
                      id={data.id}
                      key={index}
                      title={data.title}
                      length={data.length}
                      category={data.category}
                      author={data.author}
                      checked={currentlyOn === data.id}
                      currentSelected={() => {
                        if (currentlyOn === data.id) {
                          setCurrenlyOn(null);
                        } else {
                          setCurrenlyOn(data.id);
                        }
                      }}
                    />
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
    );
}

export default CoursesScreen;
