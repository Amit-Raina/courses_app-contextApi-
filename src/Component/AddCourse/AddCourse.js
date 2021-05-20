import {  Fragment } from "react";
import { Redirect } from "react-router";
import Header from "../../Reusable_Component/Header/Header";
import "./AddCourse.css";
import {useState , useContext} from 'react'
import {mySetState,myState} from "../../myContext/myContext";


function AddCourse () {

  const [details,setDetails] = useState({
    isEmpty: true,
    title: "",
    author: "",
    category: "",
    length: "",
    redirect: "/add-course",
  })
  const state = useContext(myState);
  const setState = useContext(mySetState);
 

  function getTitle(value){
    setDetails({...details,
      title: value,
      isEmpty: value.length === 0,
    });
  };

  function getAuthor(value){
    setDetails({...details,
      author: value,
      isEmpty: value.length === 0,
    });
  };

  function getCategory(value){
    setDetails({...details,
      category: value,
      isEmpty: value.length === 0,
    });
  };

  function getlength(value){
    setDetails({...details,
      length: value,
      isEmpty: value.length === 0,
    });
  };

  function clearValues (){
    setDetails({...details,
      isEmpty: true,
      title: "",
      author: "",
      category: "",
      length: "",
    });
  };

  function checkValidity (){
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

 

  function submitData (){
    if (checkValidity()) {
      addCourse({
        id: state.CourseDetails.length + 1,
        title: details.title,
        length:details.length,
        category: details.category,
        author: details.author,
      });
      setDetails({
        ...details,
        redirect: "/",
      });
    }
  };

  function addCourse(data){
    setState({
      ...state,
      CourseDetails: [...state.CourseDetails, data],
      selectedToUpdate: null
    })
 } 

    return (
      <Fragment>
        <Header />
        <div className="content-body-add-course">
          <div className="add-title">
            <h1>Add</h1>
          </div>
          <div className="fields">
            <p>Title</p>
            <input
              required
              type="text"
              value={details.title}
              placeholder="Title of the course"
              onChange={(event) => {
                getTitle(event.target.value);
              }}
            />

            <p>Author</p>
            <select
              required
              name="author"
              value={details.author}
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
              required
              type="text"
              value={details.category}
              placeholder="Category of the course"
              onChange={(event) => {
                getCategory(event.target.value);
              }}
            />

            <p>Length</p>
            <input
              required
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
            <Redirect to={details.redirect}></Redirect>
            <span className="button-submit" onClick={()=>submitData()}>
              <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Submit
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span
              className={
                details.isEmpty
                  ? "button-clear-values-inactive"
                  : "button-clear-values-active"
              }
              onClick={() => {
                clearValues();
              }}
            >
              Clear Values
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span
              className="button-cancel"
              onClick={() => {
                setDetails({...details ,  redirect: "/" });
                setState({...state , selectedToUpdate: null,})
              }}
            >
              Cancel
            </span>
          </div>
        </div>
      </Fragment>
    );
  }

export default AddCourse;
