import { useState } from 'react';
import './App.css'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import Selected_Courses from './components/Selected_Courses/Selected_Courses';

function App() {

  const [selectedCourses, SetSetCourses] = useState([])
  const handleSelectButton = (course) => {
    const newCourse = [...selectedCourses, course]
    
    SetSetCourses(newCourse)
    console.log(SetSetCourses);
  }

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
        <Selected_Courses selectedCourses={selectedCourses}></Selected_Courses>  
        </div>
      </div>
    </main>
      

      
    </>
  )
}

export default App
