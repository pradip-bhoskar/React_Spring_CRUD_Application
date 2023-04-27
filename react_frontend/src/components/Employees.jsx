import React, { Component, useState,useEffect } from 'react'
import EmpService from '../services/EmpService'
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';


function Employees(){

    const [employ,setEmployees] =useState([]);
    const base_api_url = "http://localhost:8080/pradip/api/employees";

    useEffect(()=>{
        axios.get(base_api_url).then((res) => {
            setEmployees(res.data);
        });  
      },[]);     


      const navigate = useNavigate();
      
      const deleteEmployee =(id)=>{
        EmpService.deleteEmployeeById(id).then(res=>{
            console.log('Employee deleted successfully...');
            
            axios.get(base_api_url).then((res) => {
                setEmployees(res.data);
            }); 

          });
      }

    return(
        
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
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>  
                    {
                        employ.map(emp=>
                        {
                            return (   
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.first_name}</td>
                                <td>{emp.last_name}</td>
                                <td>{emp.age}</td>
                                <td>{emp.email_id}</td>
                                <td>{emp.mobile_number}</td>
                                <td>
                                <Link className='btn btn-success' to={`/update-employee/${emp.id}`} >update</Link><span>  </span>
                                <button className='btn btn-danger'  onClick={()=>{deleteEmployee(emp.id);}}>delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Employees;

// class Employees extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             employees: []
//         }

//     }



//     componentDidMount(){
//         EmpService.getAllEmployees().then((res)=>{
//             this.setState({employees: res.data});
//         });
//     }

    
//     render() {
//         return (
//             <div className='container'>

            
//                 <h4 className='text-center'>Employees</h4>
//                 <div className="row mt-5">
//                     <table className="table table-light table-striped table-hover ">
//                     <thead className='table-dark'>
//                             <tr>
//                                 <th scope="col">#</th>
//                                 <th scope="col">First</th>
//                                 <th scope="col">Last</th>
//                                 <th scope="col">Age</th>
//                                 <th scope="col">Email</th>
//                                 <th scope="col">Mobile</th>
//                                 <th scope="col">Update</th>
//                             </tr>
//                         </thead>
//                         <tbody>
                          
                           
//                             {
//                                 this.state.employees.map(
//                                     emp=>
//                                     <tr key={emp.id}>
//                                         <td>{emp.id}</td>
//                                         <td>{emp.first_name}</td>
//                                         <td>{emp.last_name}</td>
//                                         <td>{emp.age}</td>
//                                         <td>{emp.email_id}</td>
//                                         <td>{emp.mobile_number}</td>
//                                         <td>
//                                         <button className='btn btn-success' onClick={editEmployee}>update</button>
//                                         </td>
//                                     </tr>
//                                 )
//                             }
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         )
//     }
// }


// export default Employees;