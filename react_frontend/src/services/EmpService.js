import axios from 'axios';

const base_api_url = "http://localhost:8080/pradip/api/employees";

class EmpService {

    getAllEmployees() {
        return axios.get(base_api_url);
    }

    addEmployee(employee) {
        return axios.post(base_api_url, employee);
    }

}
export default new EmpService();