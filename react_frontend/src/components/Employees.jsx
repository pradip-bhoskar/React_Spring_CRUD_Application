import React, { Component } from 'react'
import EmpService from '../services/EmpService'

class Employees extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }


    componentDidMount(){
        EmpService.getAllEmployees().then((res)=>{
            this.setState({employees: res.data});
        });
    }

    
    render() {
        return (
            <div className='container'>

            
                <h4 className='text-center'>Employees</h4>
                <div className="row mt-5">
                    <table className="table table-light table-striped table-hover ">
                    <thead className='table-dark'>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Age</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile</th>
                            </tr>
                        </thead>
                        <tbody>
                          
                           
                            {
                                this.state.employees.map(
                                    emp=>
                                    <tr key={emp.id}>
                                        <td>{emp.id}</td>
                                        <td>{emp.first_name}</td>
                                        <td>{emp.last_name}</td>
                                        <td>{emp.age}</td>
                                        <td>{emp.email_id}</td>
                                        <td>{emp.mobile_number}</td>
                                   
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default Employees;