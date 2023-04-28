
node       : ---> v16.20.0
npm        : ---> 9.6.5
sql        : ---> 8.0.25
bootstap   : ---> ^5.2.3
axios      : ---> ^1.3.6
sts        : ---> 4.18.0
java       : ---> java 8


Youtube Link: https://youtu.be/fq3wYm7q2dE

Backend part:

Step 1: Create spring project

    Install Spring Tool Suite (4) for eclipse.
    Link--->    https://spring.io/tools
    Extract file and open ----> /home/pradip/Practice/STS/sts-4.18.0.RELEASE/SpringToolSuite4
    Select workspace and launch ----->/home/pradip/Practice/STS/Workspace 1
    Create Spring Starter Project

Step 2: Create database 

    Download and install mysql workbench
    Link ---> https://dev.mysql.com/downloads/workbench/
    create database using workbench

    edit the applications.properties file in the project--->set database url,username,password,hibernate dialect,ddl-auto

Step 3: Create 

    create the packages in project for model,controller,repository,exception.
    create model class for the employee and give annotations
    create repository interface for employee


Step 4: Create Restful web services

    create custom exception
    create Employcontroller and make api    

Step 5: Test rest api using browser or by using postman
    
    download postman:
    link --> https://www.postman.com/downloads/
    

Frontend Part:

    
Step 6:
    Install node and npm
    terminal --> sudo apt install nodejs
             --> node -v
             --> nmp -v

    Install vscode editor to write code for frontend
    link-->https://code.visualstudio.com/download


    Now create react application:
    terminal --> npx create-react-app frontend_react
             --> cd frontend_react
             --> npm start


Step 7: write code for react application
    
    Integrate Bootstrap css library with react
    terminal--> sudo npm install bootstrap
    import bootstrap into the index.js file

Step 8:
    create Header and Footer component
    Create Employees component to display employee list.
    Add Employees component into App component.


Step 9: Make REST API call to fetch data
    For that we have use third party http library like axios
    So install axios in react application
    
    terminal--> npm install axios --save

    create seperate service class which will invoke api call using axios get method

    set the all api data into employees state in Employees component   

    componentDidMount(){
        EmpService.getAllEmployees().then((res)=>{
            this.setState({employees: res.data});
        });
    }

    sometimes you get origin cross policy issue: to avoid it use annotation 
    @CrossOrigin(origin= "localhost:3000") at Employye model class in spring backend


Step 10:
    Create the routing to navigate between pages.
    for that install react-router-dom package in project
    terminal---> npm install react-router-dom

    make routing in App component
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    <Routes>
        <Route path='/' Component={Employees}></Route>
        <Route path='/employees' Component={Employees}></Route>
    </Routes>


Step 11:
    Now create add employee rest API using backend
    Test the api using postman


Step 12:
    create new component to add employee
    design the AddEmployee component i.e make the form
    make navigation to redirect add employee page

Step 13:
    make rest api call using EmpsService to add employee
    axios.post(base_api_url,employee);
    call EmpService.addEmployee(employee) in AddEmployee component


Convert class component to functional component
    https://www.digitalocean.com/community/tutorials/five-ways-to-convert-react-class-components-to-functional-components-with-react-hooks


React forms:
    https://www.devhandbook.com/react/forms/


Possibly use functional components because it supports useNavigate hook to navigate tabs


Step 14:
    create api using backend to get employee by id
    create api using backend to update employee
  
Step 15: 

    create component to update employee.
    make a routing in App.js to navigate update page
    get id using useparam
    fetch employee using axios
    then store information of employee and show it into the form
    then update the value by using onchange event
    then send the data and id towords api to update it using put method of axios

Step 16:
    create api using backend to delete employee by id

    create button to delete 
    delete the employee using delete method of axios.
    make fresh api call to refresh the component
