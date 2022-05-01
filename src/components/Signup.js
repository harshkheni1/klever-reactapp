import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Grid, TextField } from "@material-ui/core";
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import { Footer, Topbar } from '../components';
import socialId from '../config/social.json';

import signupImage from '../assets/images/signupimage.png';
import signupButtonModal from '../assets/images/signupmodalbutton.svg';
import logo3 from '../assets/images/logo3.svg';
import mailIcon from '../assets/images/mailicon.svg';
import lockIcon from '../assets/images/lockicon.svg';
import loginButton from '../assets/images/loginformodal.svg';
import applebutton from '../assets/images/applebutton.svg';
import arrowBack from '../assets/images/arrowback.svg';

function Signup({ heading, footer }) {
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const responseFacebook = response => {
        console.log(response);
    }
    const componentClicked = () => {
        console.log('Facebook btn clicked');
    }
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };
    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <div className="">
            <div className={heading}>
            <Topbar />
            </div>
            <Grid container >
                <div className={heading}>
                    <div className="font-bold m-5 mt-[65%] flex">
                        <Link to="/"><img className="mr-4 mt-1" src={arrowBack} alt="back arrow" /></Link>
                        <h1>SignUp</h1>
                    </div>
                </div>
                <Grid item md={6} lg={8}>
                    <img className="h-100/100 hidden lg:block" src={signupImage} alt="login" />
                </Grid>
                <Grid item md={6} lg={4}>
                    <div className="py-5 ml-5 mr-5">
                        <img src={logo3} alt="logo" />
                        <p className="mt-3 text-objectblack">Join us and get more benefits. We promise to keep your data safely.</p>
                        <Link><img className="mt-5 mb-5 flex" src={loginButton} alt="login" /></Link>
                        <Link><FacebookLogin
                            appId={socialId && socialId.facebook}
                            autoLoad={true}
                            fields="name,picture"
                            onClick={componentClicked}
                            callback={responseFacebook} /></Link>
                        <Link><img className="mt-5 mb-5 flex" src={applebutton} alt="apple" /></Link>
                        <div>
                            {showloginButton ?
                                <GoogleLogin
                                    clientId={socialId && socialId.google}
                                    buttonText="Continue with Google"
                                    onSuccess={onLoginSuccess}
                                    onFailure={onLoginFailure}
                                    cookiePolicy={'single_host_origin'}
                                    isSignedIn={true}
                                    className="google"
                                /> : null}

                            {showlogoutButton ?
                                <GoogleLogout
                                    clientId={socialId && socialId.google}
                                    buttonText="Sign Out"
                                    onLogoutSuccess={onSignoutSuccess}
                                    className="google"
                                >
                                </GoogleLogout> : null
                            }
                        </div>
                        <h1 className="text-center font-bold">or you can</h1>
                        <TextField
                            className="bg-offwhite focus:bg-lightblack rounded-lg mt-2 mb-2 flex login-input"
                            variant="outlined"
                            placeholder="Email Address"
                            InputProps={{
                                endAdornment:
                                    <img position="end" className="mr-2" src={mailIcon} alt="Mail" />
                            }}
                        />
                        <TextField
                            className="bg-offwhite focus:bg-lightblack rounded-lg mt-2 mb-2 flex login-input"
                            variant="outlined"
                            placeholder="Password"
                            InputProps={{
                                endAdornment:
                                    <img position="end" className="mr-2" src={lockIcon} alt="Lock" />
                            }}
                        />
                        <button><Link><img className="mt-5 mb-5 flex" src={signupButtonModal} alt="signup" /></Link></button>
                        <p className="text-center text-objectblack">Need an Account?<Link className="text-red font-bold ml-2" to="">Sign Up</Link></p>
                    </div>
                </Grid>
            </Grid>
            <div className={footer}>
                <Footer />
            </div>
        </div>
    );
}
Signup.propTypes = {
    heading: PropTypes.string,
    footer: PropTypes.string,
}
export default Signup;