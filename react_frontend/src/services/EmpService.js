import axios from 'axios';

const base_api_url = "http://localhost:8080/pradip/api/employees";

class EmpService {

    getAllEmployees() {
        return axios.get(base_api_url);
    }

    addEmployee(employee) {
        return axios.post(base_api_url, employee);
    }

    getEmployeeById(id) {
        return axios.get(base_api_url + "/" + id);
    }

    updateEmployee(employee, id) {
        console.log(employee, id)
        return axios.put(base_api_url + "/" + id, employee);
    }

    deleteEmployeeById(id){
        return axios.delete(base_api_url + "/" + id)
    }

}
export default new EmpService();