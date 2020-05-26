import axios from 'axios'
const API_URL='http://localhost:8080'
class TodoServiceapi{
// getAllTodo(name){
//   return   axios.get(`http://localhost:8080/user/${name}/todo`);

//   }
  getAllTodo(name){
  
    //return axios.get('http://localhost:8080/hello');
    return axios.get(`${API_URL}/user/${name}/todo`);
           }

getSingleTodo(name,id){
  
  return axios.get(`${API_URL}/user/${name}/todo/${id}`);
}

sinupapi(user){
  return axios.post(`${API_URL}/sinup`,user);
}

deleteTodo(name,id){
 
  return axios.delete(`${API_URL}/user/${name}/todo/${id}`);
}

updateTodo(name,id,todo){
  return axios.put(`${API_URL}/user/${name}/todo/${id}`,todo);
}

Todo(name,id,todo){
  return axios.put(`${API_URL}/user/${name}/todo/${id}`,todo);
}

saveTodo(name){
 
  return axios.post(`${API_URL}/user/${name}/todo/`);
}

savesTodo(name,todo){
 
  return axios.post(`${API_URL}/user/${name}/todo/`,todo);
}

}
export default new TodoServiceapi();