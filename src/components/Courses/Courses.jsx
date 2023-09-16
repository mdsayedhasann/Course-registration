import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleSelectButton}) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    } , [])



    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    courses.map(course => <Course handleSelectButton={handleSelectButton} key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;