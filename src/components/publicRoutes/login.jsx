import React from 'react';
import './animation.css'
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history=useHistory()

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
                                history.push("/polls")

                            }}>
                    <div className='loginDiv'>
                        <div className='formFileds'>
                            <img className='fingerPrint' src='./Fingerprint.png' alt='fingerprint' />
                        </div>
                        <div className='formFileds'>
                            <input className='loginEl' type='text' placeholder='Username' required />
                        </div>
                        <div className='formFileds'>
                            <input className='loginEl' type='password' placeholder='Password' required />
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