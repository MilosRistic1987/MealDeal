import React, { useState } from 'react';
import './animation.css'
import { useHistory } from 'react-router-dom';
import userData from  '../../secrets/users.json'
import { useAlert} from 'react-alert'

const Login = () => {
    const alert = useAlert()
    const history=useHistory();
    const[ username, setUsername]=useState('')
    const[ password, setPassword]=useState('')
    
    
    // useEffect(()=>{
    //     localStorage.setItem('myUsernLocalStorage', userValue);
    // },[userValue])
    const setUserToLocalStorage = (user)=>{
        localStorage.setItem('myUserInLocalStorage', user.username)
    }

    const handleUsername = event => setUsername(event.target.value);
    const handlePassword = event => setPassword(event.target.value);

    return (
        <div className='wrapper'>
            <div>
            <div>
                <img className='logo' src='./foodlogo.png' alt='logo'></img>
            </div>
            </div>
        
            <div className='mainPart'>
            <div className='heading'>
                        <h2>Are you hungry <span className='loginSpan'>?</span></h2>
                        <h2>Now is the best time for lunch</h2>
                    </div>
                
                    <form onSubmit={(e)=>{
                                e.preventDefault();
                                const findUsers=userData.find(el=>el.username===username && el.password===password)
                                findUsers ? setUserToLocalStorage({username:username,password:password}) ||
                                history.push("/polls") : alert.show("User does not exist")
                               
           
                            }}>
                    <div className='loginDiv'>
                        <div className='formFileds'>
                            <img className='fingerPrint' src='./Fingerprint.png' alt='fingerprint' />
                        </div>
                        <div className='formFileds'>
                            <input className='loginEl' type='text' placeholder='Username' required onChange={handleUsername} />
                        </div>
                        <div className='formFileds'>
                            <input className='loginEl' type='password' placeholder='Password' required onChange={handlePassword} />
                        </div>
                        <div className='formFileds'>
                            <button  className='loginBtn' type='submit'>Sign in</button>
                        </div>
                        <div className='lastFormDiv formFileds'>
                            <label className='loginLbl'>Have a nice meal !</label>
                        </div>
                        </div>
                    </form>
               
            </div>
        </div>
    )
}

export default Login