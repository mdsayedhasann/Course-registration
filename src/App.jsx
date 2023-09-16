import './App.css'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import Selected_Course from './components/Selected_Course/Selected_Course';

function App() {

  const handleSelectButton = (course) => {
    const {course_title, price, credit_hour} = course;
    console.log(`${course_title} which price is ${price} and Credit Hour: ${credit_hour}` );
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
        <Selected_Course></Selected_Course>  
        </div>
      </div>
    </main>
      

      
    </>
  )
}

export default App
