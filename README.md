Course Registration Website using REACT 

<h1> Features Of this Project</h1>
1 Reduce Duplicate:  One Course can't be selected twice, If someone try to register one course more than one time, it will show a Alert

2 Limited Credit Hour: None can select course more than 7 hour credit hour.

3 Instead of browser default alert, this project have used [@Sweet Alert](https://sweetalert2.github.io/)


<h2> How I manege the state in this assignment project </h2>
1.   const [selectedCourses, SetSetCourses] = useState([]);
        I used this state for selecting courses and keep the selected courses in a array.

2.   const [creditHour, setCreditHour] = useState(20);
        I used this state for getting the Selected courses credit hours in a array.
    
3.   const [totalHour, setTotalHour] = useState(0);
        I used this state for calculating the total Credit Hour taken time in a array

4.  const [courses, setCourses] = useState([]);
        I used this state for getting the Courses data in a Array from the JSON courses.json file
