import React, { useState,useEffect } from 'react'

export default function Demo() {
    const [employees, setEmployees]=useState()


    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('http://localhost:8080/api/employees');
            const data = await response.json();
            setEmployees(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      }, []);
    
      return (
        <div>
          <h2>Employee Table</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                {/* Add more table headers as needed */}
              </tr>
            </thead>
            <tbody>
              {employees.map(employee => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.email}</td>
                  {/* Render other employee data as needed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
