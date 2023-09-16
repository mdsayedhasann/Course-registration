import './App.css'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {

  const handleSelectButton = () => {
    console.log('Course Selected');
  }

  return (
    <>
    <header>
    <Header></Header>
    </header>

    <main>
      <div className="main-container flex justify-around gap-6 mt-5 ">
        <div className="w-[80%] p-4 rounded-md ">
          <Courses handleSelectButton={handleSelectButton}></Courses>
        </div>
        <div className="w-[20%]  p-4 rounded-md">Sidebar </div>
      </div>
    </main>
      

      
    </>
  )
}

export default App
