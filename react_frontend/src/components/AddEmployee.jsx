import React, { useState } from 'react'
import EmpService from '../services/EmpService';
import { useNavigate } from 'react-router-dom';


function AddEmployee(props) {

  const [first_name,setFirstName] = useState('');
  const [last_name,setLastName] = useState('');
  const [email_id,setEmailId] = useState('');
  const [age,setAge] = useState('');
  const [mobile_number,setMobileNumber] = useState('');

  const navigate = useNavigate();

  const addEmployee = (e) => {
    e.preventDefault();
    let employee = {
      first_name: first_name,
      last_name: last_name,
      email_id: email_id,
      age: age,
      mobile_number: mobile_number
    }
    console.log('employee =>' + JSON.stringify(employee));

  EmpService.addEmployee(employee).then(res=>{
    alert('Employee added successfully...');
    navigate('/employees');
  });
    
}


const changeFirstNameHandler = (event) => {
  setFirstName(event.target.value );
}

const changeLastNameHandler = (event) => {
  setLastName(event.target.value );
}

const changeEmailHandler = (event) => {
  setEmailId(event.target.value );
}

const changeAgeHandler = (event) => {
  setAge(event.target.value );
}

const changeMobileNumberHandler = (event) => {
  setMobileNumber(event.target.value );
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
                  value={first_name} onChange={changeFirstNameHandler}
                />
              </div>

              <div className="form-group">
                <label>Last Name:</label>
                <input placeholder='Last Name' name='last_name' type="text" className="form-control"
                  value={last_name} onChange={changeLastNameHandler}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input placeholder='Email' name='email_id' type="text" className="form-control"
                  value={email_id} onChange={changeEmailHandler}
                />
              </div>

              <div className="form-group">
                <label>Age:</label>
                <input placeholder='Age' name='age' type="text" className="form-control"
                  value={age} onChange={changeAgeHandler}
                />
              </div>

              <div className="form-group">
                <label>Mobile Number:</label>
                <input placeholder='Mobile Number' name='mobile_number' type="text" className="form-control"
                  value={mobile_number} onChange={changeMobileNumberHandler}
                />
              </div>
              <div class="d-grid gap-2">
                <button className="btn btn-success mt-2" type="submit" onClick={addEmployee}>Add</button>
              </div>
  
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddEmployee; 








// import React, { Component } from 'react'
// import EmpService from '../services/EmpService';
// import { Route } from 'react-router-dom'

// export default class AddEmployee extends Component {
  
//   constructor(props) {
//     super(props)

//     this.state = {
//       first_name: '',
//       last_name: '',
//       email_id: '',
//       age: '',
//       mobile_number: ''
//     }

//     this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
//     this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
//     this.changeEmailHandler = this.changeEmailHandler.bind(this);
//     this.changeAgeHandler = this.changeAgeHandler.bind(this);
//     this.changeMobileNumberHandler = this.changeMobileNumberHandler.bind(this);
//     this.addEmployee = this.addEmployee.bind(this);

//   }

 
//   addEmployee(e) {
//     e.preventDefault();
//     let employee = {
//       first_name: this.state.first_name,
//       last_name: this.state.last_name,
//       email_id: this.state.email_id,
//       age: this.state.age,
//       mobile_number: this.state.mobile_number
//     }
//     console.log('employee =>' + JSON.stringify(employee));

//     EmpService.addEmployee(employee).then(res=>{
//       this.props.navigate('/employees');
//     });

//   }


//   changeFirstNameHandler = (event) => {
//     this.setState({ first_name: event.target.value });
//   }

//   changeLastNameHandler = (event) => {
//     this.setState({ last_name: event.target.value });
//   }

//   changeEmailHandler = (event) => {
//     this.setState({ email_id: event.target.value });
//   }

//   changeAgeHandler = (event) => {
//     this.setState({ age: event.target.value });
//   }

//   changeMobileNumberHandler = (event) => {
//     this.setState({ mobile_number: event.target.value });
//   }


  

//   render() {
//     return (
//       <div>
//         <div className="container">
//           <div className="row">
//             <div className="card col-md-6 offset-md-3">
//               <h3 className="text-center">Add Employee</h3>
//               <div className="card-body">
//                 <form>

//                   <div className="form-group">
//                     <label>First Name:</label>
//                     <input placeholder='First Name' name='first_name' type="text" className="form-control"
//                       value={this.state.first_name} onChange={this.changeFirstNameHandler}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label>Last Name:</label>
//                     <input placeholder='Last Name' name='last_name' type="text" className="form-control"
//                       value={this.state.last_name} onChange={this.changeLastNameHandler}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label>Email</label>
//                     <input placeholder='Email' name='email_id' type="text" className="form-control"
//                       value={this.state.email_id} onChange={this.changeEmailHandler}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label>Age:</label>
//                     <input placeholder='Age' name='age' type="text" className="form-control"
//                       value={this.state.age} onChange={this.changeAgeHandler}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label>Mobile Number:</label>
//                     <input placeholder='Mobile Number' name='mobile_number' type="text" className="form-control"
//                       value={this.state.mobile_number} onChange={this.changeMobileNumberHandler}
//                     />
//                   </div>
//                   <div class="d-grid gap-2">
//                     <button className="btn btn-success mt-2" onClick={this.addEmployee}>Add</button>
//                   </div>

                  
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

