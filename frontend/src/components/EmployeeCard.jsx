function EmployeeCard({ employee }) {

    return (
        <div className="employee-card">

            <h3>{employee.name}</h3>

            <p><b>Email:</b> {employee.email}</p>

            <p><b>Department:</b> {employee.department}</p>

            <p><b>Designation:</b> {employee.designation}</p>

            <p>
                <b>Date of Joining:</b>{" "}
                {employee.date_of_joining}
            </p>

        </div>
    );
}

export default EmployeeCard;