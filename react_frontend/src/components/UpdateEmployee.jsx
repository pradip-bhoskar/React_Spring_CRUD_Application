import { React, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import EmpService from '../services/EmpService';

function UpdateEmployee() {

  const [employee, setEmployee] = useState({
    first_name: '',
    last_name: '',
    email_id: '',
    age: '',
    mobile_number: ''
  });

  const { id } = useParams();
  const base_api_url = "http://localhost:8080/pradip/api/employees";

  useEffect(() => {
    EmpService.getEmployeeById(id).then((res) => {
      setEmployee({
        ...employee,
        first_name: res.data.first_name,
        last_name: res.data.last_name,
        email_id: res.data.email_id,
        age: res.data.age,
        mobile_number: res.data.mobile_number
      })
    }).catch((err) => {
      console.log(err)
    })
  }, [])


  const navigate = useNavigate();

  const updateEmployee = (e) => {
    e.preventDefault();
    console.log('employee =>' + JSON.stringify(employee));

    EmpService.updateEmployee(employee, id).then(res => {
      navigate('/employees');
    });
  }


  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h3 className="text-center">Add Employee</h3>
            <div className="card-body">
              <form>

                <div className="form-group">
                  <label>First Name:</label>
                  <input placeholder='First Name' name='first_name' type="text" className="form-control"
                    value={employee.first_name}
                    onChange={event => {
                      setEmployee({ ...employee, first_name: event.target.value });
                    }}
                  />
                </div>

                <div className="form-group">
                  <label>Last Name:</label>
                  <input placeholder='Last Name' name='last_name' type="text" className="form-control"
                    value={employee.last_name}
                    onChange={event => {
                      setEmployee({ ...employee, last_name: event.target.value });
                    }}
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input placeholder='Email' name='email_id' type="text" className="form-control"
                    value={employee.email_id}
                    onChange={event => {
                      setEmployee({ ...employee, email_id: event.target.value });
                    }}
                  />
                </div>

                <div className="form-group">
                  <label>Age:</label>
                  <input placeholder='Age' name='age' type="text" className="form-control"
                    value={employee.age}
                    onChange={event => {
                      setEmployee({ ...employee, age: event.target.value });
                    }}
                  />
                </div>

                <div className="form-group">
                  <label>Mobile Number:</label>
                  <input placeholder='Mobile Number' name='mobile_number' type="text" className="form-control"
                    value={employee.mobile_number}
                    onChange={event => {
                      setEmployee({ ...employee, mobile_number: event.target.value });
                    }}
                  />
                </div>
                <div class="d-grid gap-2">
                  <button className="btn btn-success mt-2" type="submit" onClick={updateEmployee}>Update Employee</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateEmployee