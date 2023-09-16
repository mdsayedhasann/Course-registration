/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Selected_Course from "../Selected_Course/Selected_Course";

const Selected_Courses = ({ selectedCourses }) => {
  return (
    <div>
      <div>
        <h3 className="text-[#2F80ED] text-left text-sm font-semibold py-3">
          Credit Hour Remaining 7 hr
        </h3>
        <hr></hr>

        <h3 className="text-black text-left font-extrabold text-sm font-semibold py-3">
          Course Name : {selectedCourses.length}
        </h3>

        <ol className="text-left text-sm  text-[#6B6A67] pb-3" type="A">
          {/* {selectedCourses.map(selectedCourse => (
            <selectedCourse key={selectedCourse.id} selectedCourse={selectedCourse}
            ></selectedCourse>
          ))} */}
          {
              selectedCourses.map(selectedCourse => <Selected_Course key={selectedCourse.id} selectedCourse={selectedCourse}></Selected_Course>)
          }
        </ol>

        <hr></hr>

        <h3 className="text-[#575654] text-left font-extrabold text-sm font-semibold py-3">
          Total Credit Hour : 13
        </h3>
        <hr></hr>

        <h3 className="text-[#575654] text-left font-extrabold text-sm font-semibold py-3">
          Total Price : 48000 USD
        </h3>
        <hr></hr>
      </div>
    </div>
  );
};

export default Selected_Courses;
