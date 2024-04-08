// import { useState } from "react";
// import axios from "axios";

// export default function Home({ logOut }) {
//   const [employeeData, setEmployeeData] = useState({
//     name: "",
//     age: "",
//     email: "",
//   });
//   const [submittedData, setSubmittedData] = useState([]);
//   const [showTable, setShowTable] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setEmployeeData({ ...employeeData, [name]: value });
//   }

//   async function submitForm(e) {
//     e.preventDefault();
//     if (employeeData.name && employeeData.age && employeeData.email) {
//       setSubmittedData([...submittedData, employeeData]);
//       setEmployeeData({
//         name: "",
//         age: "",
//         email: "",
//       });
//       setShowTable(true); // Show the table after submitting the form
//       setShowPopup(false);
//     } else {
//       setShowPopup(true);
//     }
//   }
   
//   // async function submitForm(e) {
//   //   e.preventDefault();
//   //   if (employeeData.name && employeeData.age && employeeData.email) {
//   //     try {
//   //       await axios.post("http://localhost:8080/api/employees", employeeData);
//   //       setSubmittedData([...submittedData, employeeData]);
//   //       setEmployeeData({
//   //         name: "",
//   //         age: "",
//   //         email: "",
//   //       });
//   //       setShowPopup(false);
//   //     } catch (error) {
//   //       console.error("Error submitting employee data:", error);
//   //     }
//   //   } else {
//   //     setShowPopup(true);
//   //   }
//   // }

//   function resetForm() {
//     setEmployeeData({
//       name: "",
//       age: "",
//       email: "",
//     });
//     setShowTable(false);
//     setShowPopup(false);
//   }

//   return (
//     <div className="container">
//       {!showTable ? (
//         <div className="row justify-content-center">
//           <div className="col-md-6">
//             <h2 className="text-center mb-4">Employee Details</h2>
//             <form onSubmit={submitForm}>
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Name"
//                   value={employeeData.name}
//                   onChange={handleChange}
//                   name="name"
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="number"
//                   className="form-control"
//                   placeholder="Age"
//                   value={employeeData.age}
//                   onChange={handleChange}
//                   name="age"
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder="Email"
//                   value={employeeData.email}
//                   onChange={handleChange}
//                   name="email"
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary w-100">
//                 Submit
//               </button>
//             </form>

//             {showPopup && (
//               <div className="alert alert-danger mt-3" role="alert">
//                 Please fill in all fields.
//                 <button
//                   type="button"
//                   className="btn-close"
//                   onClick={() => setShowPopup(false)}
//                 ></button>
//               </div>
//             )}
//           </div>
//         </div>
//       ) : (
//         <div className="row justify-content-center">
//           <div className="col-md-8">
//             <button
//               className="btn btn-secondary mb-3"
//               onClick={resetForm}
//             >
//               Back
//             </button>
//             <table className="table table-striped">
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Age</th>
//                   <th>Email</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {submittedData.map((data, index) => (
//                   <tr key={index}>
//                     <td>{data.name}</td>
//                     <td>{data.age}</td>
//                     <td>{data.email}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import axios from "axios";

export default function Home({ logOut }) {
  const [employeeData, setEmployeeData] = useState({
    name: "",
    age: "",
    email: "",
  });
  const [submittedData, setSubmittedData] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  }

  function submitForm(e) {
    e.preventDefault();
    if (employeeData.name && employeeData.age && employeeData.email) {
      setSubmittedData([...submittedData, employeeData]);
      setEmployeeData({
        name: "",
        age: "",
        email: "",
      });
      setShowTable(true); // Show the table after submitting the form
      setShowPopup(false);
    } else {
      setShowPopup(true);
    }
  }

  function resetForm() {
    setEmployeeData({
      name: "",
      age: "",
      email: "",
    });
    setShowTable(false);
    setShowPopup(false);
  }

  function deleteItem(index) {
    const newData = [...submittedData];
    newData.splice(index, 1);
    setSubmittedData(newData);
  }

  return (
    <div className="container">
      {!showTable ? (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center mb-4">Employee Details</h2>
            <form onSubmit={submitForm}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={employeeData.name}
                  onChange={handleChange}
                  name="name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Age"
                  value={employeeData.age}
                  onChange={handleChange}
                  name="age"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={employeeData.email}
                  onChange={handleChange}
                  name="email"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>

            {showPopup && (
              <div className="alert alert-danger mt-3" role="alert">
                Please fill in all fields.
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowPopup(false)}
                ></button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="row justify-content-center mt-4">
          <div className="col-md-10">
            <button
              className="btn btn-secondary mb-3"
              onClick={resetForm}
            >
              Back
            </button>
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {submittedData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.age}</td>
                      <td>{data.email}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteItem(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
