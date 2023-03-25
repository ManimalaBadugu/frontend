import React from "react";



// function userDetails(){
//     if(!email || !password){
//         alert("User doesn't exists.Please register")
//     }
//     else{

//     }
// }
function Login(){
    return <>
        <div className="form-container">
            <h1>Sign In</h1>
            <form action="#" method="POST">
                <div className="field-container">
                    <label for="email">Email address</label>
                    <input type="email" name="email" id="email" placeholder="Enter email"/>
                </div>
                <div className="field-container">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter password"/>
                </div>
                <div className="checkbox">
                    <input type="checkbox" name="checkbox" id="checkbox"/>
                    <label for="checkbox">Remember me</label>
                </div>
                <div>
                    <button className="button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </>
}

export default Login