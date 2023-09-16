/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const Selected_Course = ({selectedCourse}) => {
    const {course_title} = selectedCourse; 
    return (
        <li className='py-1'> {course_title} </li>
    );
};

export default Selected_Course;