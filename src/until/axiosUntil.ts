import axios from "axios";

const UserInstance = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 5000,

})

export default UserInstance