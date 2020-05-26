import axios from 'axios'
 class HelloWorldService{

    excuteHelloWorld(){
        let user='raju1234'
        let pass='123456'
        let basicAuthheader='Basic ' + window.btoa(user + ":" + pass)
        //return axios.get('http://localhost:8080/hello');
         return axios.get('http://localhost:8080/hello'
        // {
        //     headers:{
        //         autorization:basicAuthheader
        //     }
        // }
        );
    }
 }
 export default new HelloWorldService();