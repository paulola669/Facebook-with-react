import React from 'react'

function Form() {
  return (
    <div>
        <form>
            {/* <div id='form-div'> */}
            <input placeholder='Email Address or Phone number' ></input> <br></br>
            <input placeholder='Password' ></input> <br></br>
            <button id='btt-login'>Log in</button> <br></br>
            <a href='#'>forgotten Password? </a> <br></br>
             <hr></hr> <br></br>
            <button id='btt-newaccount'> Creat new account</button> <br></br>
           
            {/* </div> */}
        
        </form>
        <div id='last-para'>Create a Page for a celebrity, brand or business.</div>
    </div>
  )
}

export default Form