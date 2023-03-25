import React from "react";

function Signup(){

    return <>
        <div className="form-container">
            <h1>SIGN UP</h1>
            <form className="field-container">
                <div className="input">
                    <input type="email" name="email" id="email" placeholder="EMAIL"/>
                </div>
                <div className="input">
                    <input type="password" name="password" id="password" placeholder="PASSWORD"/>
                </div>
                <div className="input">
                    <input type="password" name="password" id="password" placeholder="REPEAT PASSWORD"/>
                </div>
                <div className="checkbox2">
                    <input type="checkbox" name="checkbox" id="checkbox"/>
                    <label>Iagree with <a href="#">TERMS & CONDITIONS</a></label>
                </div>
                <div>
                    <button type="submit">CONTINUE</button>
                </div>
            </form>
        </div>
    </>
}

export default Signup