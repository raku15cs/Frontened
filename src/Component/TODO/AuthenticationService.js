import axois from 'axios'
//import API_URL from '../../Constant.js'
const API_URL='http://localhost:8080';
class AuthenticationService{

    // excuteBasicAuthenticationService(username,password){
    //     let basicAuthHeader='Basic ' + window.btoa(username + ":" + password)
    //     return axois.get('http://localhost:8080/basicauth',{headers:{authorization:basicAuthHeader}})

    // }


    excuteJWTAuthenticationService(username,password){
        return axois.post(`${API_URL}/authenticate`,{
            username,
            password
    })

    }

  
    registerSuccessfulForJWTLogin(username,token){
        sessionStorage.setItem('authenticteruser',username);
        this.setUpIntercepter('Bearer '+token)

    }
    registerSuccessfulLogin(username,password){
        sessionStorage.setItem('authenticteruser',username);
    }

    logout(){
        sessionStorage.removeItem('authenticteruser')
        //  this.props.history.push(`/logout`)

    }

    isUSerloggedIn(){
        let isUser = sessionStorage.getItem('authenticteruser')
        if(isUser===null) return false;
         return true;
    }
    isLogout(){
        //  window.location.reload(false);
        let user=sessionStorage.getItem('authenticteruser')
        if(user ===null) return false;
        return true;
    }
      userName(){
        //  window.location.reload(false);
        let user=sessionStorage.getItem('authenticteruser')
        if(user ===null) return null;
        return user;
    }

    //intercepter will add header to all url before calling to url
    setUpIntercepter(token){
        axois.interceptors.request.use(
            (config) => {
                if(this.isUSerloggedIn()){
                config.headers.authorization=token
                }
                return config
            }
        )

    }

}
export default new AuthenticationService();