const Validate = (email,password)=>{
    
    const emailValidate = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password);
   
    
    if(!emailValidate)return "Email is not valid";
    if(!passValidate) return "Password is not valid";
    
    return null;

};



export default Validate;