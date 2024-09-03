import React, { useContext, useState } from 'react';
import NetflixBackground from '../assets/NetflixBackground.png'
// import { AuthContext } from '../context/AuthContext';

function Login(props) {
const[formData,setFormData]=useState(
 
)
// const{loginForm ,message}=useContext(AuthContext)
const handlInput=(e)=>{
  let {name,value}=e.target;
  setFormData((prev)=>({
    ...prev,
    [name]:[value],
  // [id]:[value] 
  }))
   
}
const handlLoginForm= async(e)=>{
  e.preventDefault()
//   loginForm(formData)
     
}
     
               
    return (
      <header className="showcase">
        

      <div className="logo">
      {/* <img className='h-12 w-49  ' src={Logo} alt='netflix' /> */}
      </div>

      <div className="showcase-content">
          <div className="formm">
              <form>
                  <h1>Log In</h1>
                  {/* <p>{message}</p> */}
                  <div className="info">
                      <input className="email" type="text" name='name' placeholder="Enter your name" onChange={handlInput}/> <br/>
                      <input className="email" type="email" name='email' placeholder="Email or phone number" onChange={handlInput}/> <br/>
                      <input className="email" type="password" placeholder="Password" onChange={handlInput}/>
                  </div>
                  <div className="btn">
                      <button className="btn-primary" type="submit" onClick={handlLoginForm}>Log In</button>
                  </div>
                  <div className="help">
                      <div>
                          <input value="true" type="checkbox"/><label>Remember me</label>
                      </div>

                      <a href="https://www.netflix.com/dz-en/LoginHelp">Need Help ?</a>
                  
                  </div>

              </form>

          </div>
          
          <div className="fcbk">
              <a href="https://facebook.com">
                  <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook"/>
                </a>
              <p>Login with Facebook</p>
          </div>
          <div className="signup">
              <p>New to Netflix ?</p>
              <a href="https://www.netflix.com/dz-en/">Login now</a>
          </div>
          <div className="more">
              <p>
                  This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a> 
              </p>
          </div>


      </div>

 
      <footer>
          
          <div className="ftr-content">
              <div className="contact">
                  <a href="#">Quesions? Contact us.</a>
              </div>
              <div className="ftr">
                  <a href="#">Gift Card Terms</a>
                  <a href="#">Terms of Use</a>
                  <a href="#">Privacy Statement</a>
              </div>
              <div className="select">
                  <select>
                      <option>English</option>
                      <option>العربية</option>
                      <option>Français</option>
                      
                  </select>
              </div>
          </div>
         
      </footer>
 
</header>


    ); 
}

export default Login;