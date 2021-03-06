import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [code, setCode] = useState(0);

    const onChange = (e) => {
        e.preventDefault();
        setCode(e.target.value);
    }

    const submitCode = async () => {
        await axios.post('https://api-v2.yacchat.com/api/v1/users/login', {
            email: localStorage.getItem('email'),
            loginCode: code,
            deviceToken: "fireBaseToken Generated For Device"
        })
            .then(function (res) {
                if (res.data.status === true) {
                    const access_token = res.data.data.id + "!" + res.data.data.token;
                    window.location.assign(`${localStorage.getItem('redirect')}#state=${localStorage.getItem('state')}&access_token=${access_token}&token_type=Bearer`);
                } else {
                    localStorage.setItem('message', res.data.message);
                    window.location.assign('../error')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <h1>Verify Your Email</h1>
            <p>We just sent an email to <b>{localStorage.getItem('email')}</b>.
            Enter your 6 digit verification code below to continue.</p>
            <input type='text' placeholder='Verification Code' onChange={onChange} /><br />
            <button className='btn__primary' onClick={submitCode}>Continue</button>
        </>);
}

export default Login;
