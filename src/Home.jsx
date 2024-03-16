import { useState } from "react";

export default function Home({logOut}){
    const [employeeData,setEmployeeData]=useState({
        name:'',
        age:'',
        email:'',
    });
    const[submittedData,setSubmittedData]=useState([]);
    const [showTable, setShowTable] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    function handleChange(e){
        const {name, value} = e.target;
        setEmployeeData({...employeeData, [name]: value});
    }

    function submitForm(e){
        e.preventDefault();
        if (employeeData.name && employeeData.age && employeeData.email) {
            setSubmittedData([...submittedData, employeeData]);
            setEmployeeData({
                name: "",
                age: "", 
                email: ""
            });
            setShowTable(true);
            setShowPopup(false);
        } else {
            setShowPopup(true);
        }
    }

    function resetForm() {
        setEmployeeData({
            name: "",
            age: "", 
            email: ""
        });
        setShowTable(false);
        setShowPopup(false);
    }
   
    return(
        <div>
            {!showTable ? (
                <div>
                    <form action="" onSubmit={submitForm}>
                        <div>
                            Name: <input type="text" value={employeeData.name} onChange={handleChange} name="name"/>
                        </div>
                        <div>
                            Age: <input type="number" value={employeeData.age} onChange={handleChange} name="age"/>
                        </div>
                        <div>
                            Email: <input type="text" value={employeeData.email} onChange={handleChange} name="email"/>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>

                    {showPopup && (
                        <div className="popup">
                            <p>Please fill in all fields.</p>
                            <button onClick={() => setShowPopup(false)}>OK</button>
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <button onClick={resetForm}>Back</button>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {submittedData.map((data,index) => (
                                <tr key={index}> 
                                    <td>{data.name}</td>
                                    <td>{data.age}</td>
                                    <td>{data.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
