import { useState } from "react";
import "./App.css";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import Selected_Courses from "./components/Selected_Courses/Selected_Courses";
import Swal from 'sweetalert2'

function App() {
  const [selectedCourses, SetSetCourses] = useState([]);
  const [creditHour, setCreditHour] = useState(20);
  const [totalHour, setTotalHour] = useState(0);

  const handleSelectButton = (course) => {
    
    const newCourse = [...selectedCourses, course];

    for(const newlySelectedCourse of selectedCourses){
      if(newlySelectedCourse.id === course.id){

        // return alert('Mair dimu duibar select korle')
        return Swal.fire({
          icon: 'error',
          title: 'Sorry...',
          text: "You already selected this course",
        })
      }
    }

    let totalCredit = parseFloat(course.credit_hour);

    if((creditHour - course.credit_hour) < 0){
      return Swal.fire({
        title: 'Error!',
        text: 'You can not select course more than 20hr',
        icon: 'error',
        confirmButtonText: 'Go Back'
      })
    }
    setCreditHour(creditHour - course.credit_hour)
    

    selectedCourses.forEach(item=>
      totalCredit = totalCredit + parseFloat(item.credit_hour)
    )
    setTotalHour(totalCredit)
    console.log(totalCredit);
    SetSetCourses(newCourse);

    console.log(SetSetCourses);
  };

  return (
    <>
      <header>
        <Header></Header>
      </header>

      <main>
        <div className="main-container flex justify-around  mt-5 ">
          <div className="w-[77%] p-4 rounded-md ">
            <Courses handleSelectButton={handleSelectButton}></Courses>
          </div>
          <div className="w-[23%]  p-4 rounded-md bg-white p-3 mt-4">
            <Selected_Courses
              selectedCourses={selectedCourses} creditHour={creditHour} totalHour={totalHour}
            ></Selected_Courses>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
