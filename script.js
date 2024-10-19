function Register(){
    if (JSON.parse(localStorage.getItem('User'))){
        User=JSON.parse(localStorage.getItem('User'))
    }
    else{
        User ={}
    }
    
   User[uname.value]={
        username : uname.value,
        email : email.value,
        password : password.value
        
    }

//check null or not
    if(
        uname.value==''||email.value==''||password.value==''
    ){

 //check already exist or not
 alert('please enter the details')
    }
   else{
    if(User.username in localStorage){
        alert('User already exist')
     }else{
        localStorage.setItem('User',JSON.stringify(User))
    
        alert('Registered Successfully')
     }
   }  
   window.location='./index.html' 
}

function Login(){
    if (JSON.parse(localStorage.getItem('User'))){
        getUser=JSON.parse(localStorage.getItem('User'))
    }
    else{
       getUser ={}
    }
   if(
    username.value==''||password.value==''
){
alert('please enter the details')
}else{
    
    
    
    if(username.value in getUser){
        if(password.value==getUser[username.value].password){
window.location='./home.html'
        }
        else{
            alert("password doesn't match")
        }
    }else{
        alert("account doesn't exist")
    }
}

    
}