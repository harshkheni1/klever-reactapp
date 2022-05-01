import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import { Grid, AppBar, Toolbar, IconButton, Modal, Drawer, InputBase, Divider } from "@material-ui/core";
import Dropdown from 'react-bootstrap/Dropdown';
import SubDropdown from 'react-multilevel-dropdown';
import { GoogleLogout } from 'react-google-login';

import cartIcon2 from '../assets/images/shoppingcart2.svg';
import signupButton from '../assets/images/signupbutton.svg';
import navigationIcon from '../assets/images/navigationicon.svg';
import logoBlack from '../assets/images/logoblack.svg';
import rightExpand from '../assets/images/rightdropdown.svg';
import searchicon from '../assets/images/searchicon.svg';
import cartBlack from '../assets/images/cartblack.svg';
import chalkboard from '../assets/images/chalkboard.svg';
import settingIcon from '../assets/images/settingicon.svg';
import logout from '../assets/images/logouticon.svg';
import menuicon from '../assets/images/menuicon.svg';
import defaultUser from '../assets/images/defaultuser.png';
import cancle from '../assets/images/close.svg';
import bellIconMobile from '../assets/images/bellicon.svg';

import { CategoriesChoice, Login, Signup, NotificationDrawer } from "./index";
import socialId from '../config/social.json';

import './index.css';

function Topbar({ background, logo, searchBar, cartIcon, loginButton, bellIcon, dropdownIcon, margin }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerOpenNotification, setDrawerOpenNotification] = useState(false);
    const [drawerOpenBrowse, setDrawerOpenBrowse] = useState(false);
    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(false);
    const [selectCategory, setSelectCategory] = useState(false);
    const [onLogin, setOnLogin] = useState(localStorage.getItem('Login'))

    const primaryGoogleData = localStorage.getItem('GoogleData');
    console.log("hfviol;fbvhjnl", JSON.parse(primaryGoogleData))

    const GoogleData = JSON.parse(primaryGoogleData);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };
    const handleDrawerToggleNotification = () => {
        setDrawerOpenNotification(!drawerOpenNotification);
        setDrawerOpenBrowse(false);

    };
    const handleDrawerToggleBrowse = () => {
        setDrawerOpenBrowse(!drawerOpenBrowse);
    };

    const handleOpenLogin = () => {
        setLogin(true);
    };
    const handleCloseLogin = () => {
        setLogin(false);
    };
    const handleOpenSignUp = () => {
        setSignup(true);
    };
    const handleCloseSignUp = () => {
        setSignup(false);
    };
    const handleCloseSelectCategory = () => {
        setSelectCategory(false);
    };
    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setOnLogin(false);
    };
    // const onLoginSuccess = () => {
    //     setShowLoginDetail(true);
    // };

    return (
        <div>
            <div className="2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-10 py-5 hidden lg:block">
                <AppBar className={background} >
                    <Toolbar>
                        <Grid container>
                            <Grid item md={3} lg={2} className="flex justify-between">
                                <Link to=""><img className="mt-4" src={logo} alt="Logo" /></Link>
                                <div className="bg-transparent mt-4  ml-3">
                                    <Dropdown className="DropdownOutline">
                                        <Dropdown.Toggle className="flex justify-between">
                                            Browse<img src={dropdownIcon} className={margin} alt="Dropdown" />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="browse">
                                            <SubDropdown.Item>
                                                <Link to="/">
                                                    Home
                                                </Link>
                                            </SubDropdown.Item>
                                            <SubDropdown.Item className="flex justify-between">
                                                <button onClick={handleDrawerToggleNotification}>Notification</button>
                                                <img src={rightExpand} alt="dropdown" />
                                                <SubDropdown.Submenu>
                                                    <SubDropdown.Item className="flex justify-between">
                                                        <Link to="/account">
                                                            Account
                                                        </Link>
                                                        <img src={rightExpand} alt="dropdown" />
                                                        <SubDropdown.Submenu>
                                                            <Link to="/mycourse">
                                                                My Course
                                                            </Link>
                                                        </SubDropdown.Submenu>
                                                    </SubDropdown.Item>
                                                    <SubDropdown.Item>
                                                        Subitem 2
                                                    </SubDropdown.Item>
                                                </SubDropdown.Submenu>
                                            </SubDropdown.Item>
                                            <SubDropdown.Item>
                                                <Link to="/browse">
                                                    Browse
                                                </Link>
                                            </SubDropdown.Item>
                                            <SubDropdown.Item>
                                                <Link to="/unpaidcourse">
                                                    Unpaid Course
                                                </Link>
                                            </SubDropdown.Item>
                                            <SubDropdown.Item>
                                                <Link to="/paidcourse">
                                                    Paid Course
                                                </Link>
                                            </SubDropdown.Item>
                                            <SubDropdown.Item>
                                                <Link to="/webinar">
                                                    Webinar
                                                </Link>
                                            </SubDropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Grid>

                            <Grid item md={2} lg={5}>
                                <div className={searchBar}>
                                    <div className="flex justify-center mt-3 ml-0 md:ml-3 border-solid border-1">
                                        <InputBase
                                            placeholder="Search for course"
                                            inputProps={{ 'aria-label': 'search' }}
                                        />
                                        <div className="mt-2">
                                            <img src={searchicon} alt="search" />
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item md={7} lg={5} className="flex justify-end mt-4">
                                <Link to="" className="mr-4">Become Instructor</Link>
                                <Link to="" ><img className="mr-4" src={cartIcon} alt="shopping cart" /></Link>
                                {onLogin ?
                                    <>
                                        <Link to="" ><img className="mr-4" src={bellIcon} alt="shopping cart" /></Link>
                                        <div className="userDropdown">
                                            <Dropdown
                                                className="bg-transparent mt-0 flex"
                                                title='User Image'
                                                src={GoogleData.imageUrl}
                                            >
                                                <div>
                                                    <h1 className="font-bold">{GoogleData.name}</h1>
                                                    <p1 className="tect-objectblack">{GoogleData.email}</p1>
                                                </div>
                                                <Divider />
                                                <Dropdown.Item
                                                >
                                                    <Link to="/">
                                                        My Courses
                                                    </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    My Cart
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    Wishlist
                                                </Dropdown.Item>
                                                <Dropdown.Item className="flex justify-between">
                                                    <button onClick={handleDrawerToggleNotification}>Notification</button>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    Account Settings
                                                </Dropdown.Item>
                                                <br />
                                                <Dropdown.Item className="text-red">
                                                    <GoogleLogout
                                                        clientId="359016709762-ph10l8mgq7bhut9e06mok2s7igo5ja4h.apps.googleusercontent.com"
                                                        buttonText="Logout"
                                                        onLogoutSuccess={onSignoutSuccess}
                                                        className="google"
                                                    >
                                                    </GoogleLogout>
                                                </Dropdown.Item>
                                            </Dropdown>
                                        </div>

                                    </>
                                    :
                                    <>
                                        <button onClick={handleOpenLogin} className={loginButton}><p1 className="m-5">Login</p1></button>
                                        <button onClick={handleOpenSignUp} ><img className="mr-4" src={signupButton} alt="signup" /></button>

                                    </>
                                }
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>

            <div className="block md:block lg:hidden">
                <AppBar position="fixed" className="bg-white border-b-2 border-offwhite2 shadow-none">
                    <Toolbar className="xl:px-10 px-5">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className="mr-4 border-none outline-none"
                        >
                            <img src={navigationIcon} alt="menu" />
                        </IconButton>
                        <Link to=""><img src={logoBlack} alt="Logo" /></Link>
                        <Grid container>
                            <Grid item xs={12}>
                                <div className="flex justify-end">
                                    <Link to=""><img className="mr-5" src={cartIcon2} alt="shopping cart" /></Link>
                                    <Link to=""><img src={bellIconMobile} alt="Bell" /></Link>
                                </div>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <nav className="md:w-[240px] md:flex-shrink-0 text-black">
                    <Drawer
                        anchor='left'
                        open={drawerOpen ? true : false}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: "w-[300px]",
                        }}
                        ModalProps={{
                            keepMounted: true
                        }}
                    >
                        <div className="sidebar">
                            <div className="lg:px-12 px-6 py-6 flex justify-between">
                                <img src={logoBlack} alt="logo" className="" />
                                <button onClick={handleDrawerToggle}><img src={cancle} alt="close" /></button>
                            </div>
                            <div>
                                {onLogin ?
                                    <>
                                        <Grid container className="flex justify-between">
                                            <Grid item xs={3}>
                                                <img className="m-6" src={GoogleData.imageUrl} alt="user" />
                                            </Grid>
                                            <Grid item xs={9}>
                                                <h1 className="font-bold m-10">{GoogleData.name}<p>{GoogleData.email}</p></h1>

                                            </Grid>
                                        </Grid>

                                    </>
                                    :
                                    <>
                                        <Grid container className="flex justify-between">
                                            <Grid item xs={12}>
                                                <img className="m-6" src={defaultUser} alt="user" />
                                            </Grid>
                                            <Grid item xs={8} className="flex justify-between m-6">
                                                <button className="border border-black"><Link to="/login"><p1 className="m-5 text-black">Login</p1></Link></button>
                                                <Link to="/signup"><img className="" src={signupButton} alt="user" /></Link>
                                            </Grid>
                                        </Grid>

                                    </>
                                }

                                <Divider className="mt-2 mb-2" />
                                <Grid item xs={12} className="mt-5">
                                    <button onClick={handleDrawerToggleBrowse} className="flex inline"><img className="ml-5" src={menuicon} alt="Browse" /><h1 className="ml-5">Browse</h1></button>
                                    <nav className="md:w-[240px] md:flex-shrink-0 text-black">
                                        <Drawer
                                            // variant={isMobile ? "temporary" : "permanent"}
                                            anchor='left'
                                            open={drawerOpenBrowse ? true : false}
                                            onClose={handleDrawerToggleBrowse}
                                            classes={{
                                                paper: "w-[300px]",
                                            }}
                                            ModalProps={{
                                                keepMounted: true
                                            }}
                                        >
                                            <div className="sidebar">
                                                <div className="lg:px-12 px-6 py-6 flex justify-between">
                                                    <img src={logoBlack} alt="logo" className="" />
                                                    <button onClick={handleDrawerToggleBrowse}><img src={cancle} alt="close" /></button>
                                                </div>
                                                <div className="lg:px-12 px-6 py-6 ">
                                                    <h1 className="font-bold">Browse</h1>
                                                    <div className="m-4">
                                                        <button onClick={handleDrawerToggleNotification}><h1 className="font-bold">Design</h1></button>
                                                        <p className="text-objectblack">All About Design Course</p>
                                                    </div>
                                                    <div className="m-4">
                                                        <h1 className="font-bold">Programming</h1>
                                                        <p className="text-objectblack">Website and Mobile Programming</p>
                                                    </div>
                                                    <div className="m-4">
                                                        <Link to="/unpaidcourse"><h1 className="font-bold">Business & Marketing</h1></Link>
                                                        <p className="text-objectblack">Website and Mobile Programming</p>
                                                    </div>
                                                    <div className="m-4">
                                                        <h1 className="font-bold">Photo & Video</h1>
                                                        <p className="text-objectblack">Website and Mobile Programming</p>
                                                    </div>
                                                    <div className="m-4">
                                                        <h1 className="font-bold">Writing</h1>
                                                        <p className="text-objectblack">Website and Mobile Programming</p>
                                                    </div>
                                                    <div className="m-4">
                                                        <h1 className="font-bold">Illustration</h1>
                                                        <p className="text-objectblack">How to be great illustrator</p>
                                                    </div>
                                                    <div className="m-4">
                                                        <h1 className="font-bold">Graphic Design</h1>
                                                        <p className="text-objectblack">Website and Mobile Programming</p>
                                                    </div>
                                                    <div className="m-4">
                                                        <Link to="/browse"><h1 className="font-bold">UI/UX Design</h1></Link>
                                                        <p className="text-objectblack">Website and Mobile Programming</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Drawer>
                                    </nav>
                                </Grid>
                                <Divider className="mt-2 mb-2" />
                                <Grid item xs={12} className="mt-5 flex">
                                    <img className="ml-5" src={cartBlack} alt="cart" />
                                    <h1 className="ml-5">Cart</h1>
                                </Grid>
                                <Grid item xs={12} className="mt-5 flex">
                                    <img className="ml-5" src={chalkboard} alt="chal" />
                                    <h1 className="ml-5">Beacome an Instructor</h1>
                                </Grid>
                                <Grid item xs={12} className="mt-5 flex">
                                    <img className="ml-5" src={settingIcon} alt="Setting" />
                                    <h1 className="ml-5">Settings</h1>
                                </Grid>
                                <Grid item xs={12} className="mt-5 flex">
                                    {/* <img className="ml-5" src={logout} alt="Logout" /> */}
                                    <GoogleLogout
                                        clientId={socialId && socialId.google}
                                        buttonText="Logout"
                                        onLogoutSuccess={onSignoutSuccess}
                                        className="google"
                                    >
                                    </GoogleLogout>
                                </Grid>
                            </div>
                        </div>
                    </Drawer>
                </nav>
            </div>

            <div className="">
                <nav className="md:w-[240px] md:flex-shrink-0 text-black">
                    <Drawer
                        anchor='right'
                        open={drawerOpenNotification ? true : false}
                        onClose={handleDrawerToggleNotification}
                        classes={{
                            paper: "w-[320px]",
                        }}
                        ModalProps={{
                            keepMounted: true
                        }}
                    >
                        <div className="">
                            <div className="m-5 flex justify-between">
                                <h1 className="font-bold">Notifications</h1>
                                <button onClick={handleDrawerToggleNotification}><img src={cancle} alt="close" /></button>
                            </div>
                            <NotificationDrawer />
                        </div>
                    </Drawer>
                </nav>
            </div>


            <div>
                <Modal
                    open={login}
                    onClose={handleCloseLogin}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"

                >
                    <div className="modalAlignment">
                        <Login heading="hidden" footer="hidden" />
                    </div>
                </Modal>
            </div>

            <div>
                <Modal
                    open={signup}
                    onClose={handleCloseSignUp}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"

                >
                    <div className="modalAlignment">
                        <Signup heading="hidden" footer="hidden" />
                    </div>
                </Modal>
            </div>

            <div>
                <Modal
                    open={selectCategory}
                    onClose={handleCloseSelectCategory}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"

                >
                    <div className="modalAlignmentCategories">
                        <CategoriesChoice />
                    </div>
                </Modal>
            </div>

        </div>
    );
}
Topbar.propTypes = {
    background: PropTypes.string,
    logo: PropTypes.string,
    searchBar: PropTypes.string,
    cartIcon: PropTypes.string,
    loginButton: PropTypes.string,
    bellIcon: PropTypes.string,
    dropdownIcon: PropTypes.string,
    margin: PropTypes.string,
}
export default withRouter(Topbar);