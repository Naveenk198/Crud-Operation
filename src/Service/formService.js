import axios from 'axios';

const URL="http://localhost:8080/crud"
class formService{
    getAllForm(){
        return axios.get(URL);
    }
    saveForm(Form){
        return axios.post(URL,Form);
    }
    getFormById(id){
        return axios.get(`${URL}/${id}`) 
    }
    updateForm(id,Form){
        return axios.put(`${URL}/${id}`,Form)
    }
    deleteForm(id){
        return axios.delete(`${URL}/${id}`)
    }
}
export default new formService;