const Course = ({course}) => {
    const {image, course_title, course_description, price, credit_hour} = course;
    return (
        <div>
            <div className="card bg-[#fff] p-3 bg-white rounded-xl">
                <img src="https://quickyes.in/wp-content/uploads/2020/01/phtyon.jpg" alt="" />
                <h3 className="text-left text-base font-semibold py-2">{course_title}</h3>
                <p className="text-left">{course_description}</p>
                <div className="flex justify-between py-4">
                    <p>Price: {price}</p>
                    <p>Credit: {credit_hour}hr</p>
                </div>
                <button className="bg-[#2F80ED] text-center text-white py-1 w-full rounded-md" >Select</button>
            </div>
        </div>
    );
};

export default Course;