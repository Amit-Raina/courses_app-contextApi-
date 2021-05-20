import { Fragment, useState, useContext } from "react";
import { Redirect } from "react-router";
import Header from "../../Reusable_Component/Header/Header";
import "../AddCourse/AddCourse.css";
import {mySetState,myState} from "../../myContext/myContext";

function EditCourse() {

  const state = useContext(myState);
  const setState = useContext(mySetState);

  const [details, setDetails] = useState({
    title: state.CourseDetails[state.selectedToUpdate - 1].title,
    author: state.CourseDetails[state.selectedToUpdate - 1].author,
    category: state.CourseDetails[state.selectedToUpdate - 1].category,
    length: state.CourseDetails[state.selectedToUpdate - 1].length,
    redirect: "/edit-course",
  });

  function getTitle(value){
    setDetails({
      ...details,
      title: value,
    });
  };

  function getAuthor(value){
    setDetails({
      ...details,
      author: value,
    });
  };

  function getCategory(value){
    setDetails({
      ...details,
      category: value,
    });
  };

  function getlength(value){
    setDetails({
      ...details,
      length: value,
    });
  };

  function checkValidity(){
    if (details.title.length === 0) {
      alert("Enter Title");
      return false;
    }
    if (details.author.length === 0) {
      alert("Enter Author");
      return false;
    }
    if (details.category.length === 0) {
      alert("Enter Category");
      return false;
    }
    if (details.length.length === 0) {
      alert("Enter Length");
      return false;
    }

    return true;
  };

  function submitValues(){
    if (checkValidity()) {
      editCourse(
        {
          id: state.selectedToUpdate,
          title: details.title,
          length: details.length,
          category: details.category,
          author: details.author,
        },
        state.selectedToUpdate
      );

      setDetails({
        ...details,
        redirect: "/",
      });
    }
  };

  function editCourse(courseData, id){

    const newCourseDetails = state.CourseDetails.map((data) => {
      if (data.id === id) return courseData;
      return data;
    });
    setState({
      ...state,
      CourseDetails: newCourseDetails,
    });
  }

  return (
    <Fragment>
      <Header />
      <div className="content-body-add-course">
        <div className="add-title">
          <h1>Edit</h1>
        </div>
        <div className="fields">
          <p>Title</p>
          <input
            type="text"
            value={details.title}
            placeholder="Title of the course"
            onChange={(event) => {
              getTitle(event.target.value);
            }}
          />

          <p>Author</p>
          <select
            name="author"
            defaultValue={details.author}
            onChange={(event) => {
              getAuthor(event.target.value);
            }}
          >
            <option value=""></option>
            <option value="cory-house">Cory House</option>
            <option value="scott-allen">Scott Allen</option>
            <option value="dan-wahlin">Dan Wahlin</option>
          </select>

          <p>Category</p>
          <input
            type="text"
            value={details.category}
            placeholder="Category of the course"
            onChange={(event) => {
              getCategory(event.target.value);
            }}
          />

          <p>Length</p>
          <input
            type="text"
            value={details.length}
            placeholder="Length of course in minutes or hours"
            onChange={(event) => {
              getlength(event.target.value);
            }}
          />
        </div>
        <br></br>
        <div className="buttons">
          <span className="button-submit" onClick={() => submitValues()}>
            <Redirect to={details.redirect}></Redirect>
            <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Submit
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span
            className="button-cancel"
            onClick={() => {
              setDetails({...details, redirect: "/" });
            }}
          >
            Cancel
          </span>
        </div>
      </div>
    </Fragment>
  );
}

export default EditCourse;
