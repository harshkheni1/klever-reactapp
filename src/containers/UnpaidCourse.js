import React, { useState } from 'react';
import { withRouter, Link } from "react-router-dom";

import { Grid, AppBar, Tabs, Tab, InputBase, CardContent, Card, Modal } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import SwipeableViews from 'react-swipeable-views';
import ReactPlayer from 'react-player'

import logoBlack from '../assets/images/logoblack.svg';
import cartIcon2 from '../assets/images/shoppingcart2.svg';
import bellIcon from '../assets/images/bellicon.svg';
import dropdownSvgBlack from '../assets/images/dropdowniconblack.svg';
import offerImage from '../assets/images/offerimage.png';
import buyButton from '../assets/images/buybutton.svg';
import wishlistButton from '../assets/images/wishlistbutton.svg';
import icon1 from '../assets/images/icon1.svg';
import icon2 from '../assets/images/icon2.svg';
import icon3 from '../assets/images/icon3.svg';
import icon4 from '../assets/images/icon4.svg';
import playArrowButton from '../assets/images/playarrowbutton.svg';
import arrowBack from '../assets/images/arrowbackwhite.svg';
import mask1 from '../assets/images/mask1.png';
import mask2 from '../assets/images/mask2.png';
import mask3 from '../assets/images/mask3.png';
import mask4 from '../assets/images/mask4.png';
import cardDecorationIamge from '../assets/images/carddecorationimage.png';
import webinar from '../assets/images/webinar.svg';
import learnMore from '../assets/images/learnmore.svg';
import loadReview from '../assets/images/loadreviews.svg';
import subscribeButton from '../assets/images/subscribebutton.svg';
import searchicon from '../assets/images/searchwhite.svg';

import { Footer, Topbar, Payment, VideoPlayer } from '../components';
import './index.css';

function UnpaidCourse() {
    const [tabIndex, setTabIndex] = useState(0);
    const [payment, setPayment] = useState(false);

    const courseTabs = [
        {
            name: 'Courses'
        },
        {
            name: 'Review'
        },
        {
            name: 'About'
        }
    ];

    const handleOpenPayment = () => {
        setPayment(true);
    };
    const handleClosePayment = () => {
        setPayment(false);
    };
    const handleTabChange = (event, newIndex) => {
        setTabIndex(newIndex);
    };
    const handleViewChangeIndex = (index) => {
        setTabIndex(index);
    };

    const Courses = () => {
        return (
            <div className="">
                <h1 className="font-bold mt-5 mb-5">About Course</h1>
                <p1 className="text-grey">Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.</p1>
                <h1 className="font-bold mt-5 mb-5">Review</h1>
                <div className="mt-3">
                    <Grid container>
                        <Grid xs={1}>
                            <img src={mask1} alt="Mask" />
                        </Grid>
                        <Grid xs={11} className="ml-[-5%]">
                            <h1 className="font-bold text-red ml-5">Leonardo  Da Vinci <br /> <p1 className="font-normal text-grey">Loved the course. I've learned some very subtle tecniques, expecially on leaves.</p1></h1>
                        </Grid>
                    </Grid>
                </div>
                <div className="mt-3">
                    <Grid container>
                        <Grid xs={1}>
                            <img src={mask2} alt="Mask" />
                        </Grid>
                        <Grid xs={11} className="ml-[-5%]">
                            <h1 className="font-bold text-red ml-5">Titania  S <br /> <p1 className="font-normal text-grey">I loved the course, it had been a long time since I had experimented with watercolors and now I will do it more often thanks to Kitani Studio</p1></h1>
                        </Grid>
                    </Grid>
                </div>
                <div className="mt-3">
                    <Grid container>
                        <Grid xs={1}>
                            <img src={mask3} alt="Mask" />
                        </Grid>
                        <Grid xs={11} className="ml-[-5%]">
                            <h1 className="font-bold text-red ml-5">Zhirkov <br /> <p1 className="font-normal text-grey">Yes. I just emphasize that the use of Photoshop, for non-users, becomes difficult to follow. What requires a course to master it. Safe and very didactic teacher.</p1></h1>
                        </Grid>
                    </Grid>
                </div>
                <div className="mt-3">
                    <Grid container>
                        <Grid xs={1}>
                            <img src={mask4} alt="Mask" />
                        </Grid>
                        <Grid xs={11} className="ml-[-5%]">
                            <h1 className="font-bold text-red ml-5">Miphoska <br /> <p1 className="font-normal text-grey">I haven't finished the course yet, as I would like to have some feedback from the teacher, about the comments I shared on the forum 3 months ago, and I still haven't had any answer.
                                I think the course is well structured, however the explanations and videos are very quick for beginners. However, it is good to go practicing.</p1></h1>
                        </Grid>
                    </Grid>
                </div>
                <div className="flex justify-center mt-5">
                    <img src={loadReview} alt="Review" />
                </div>
            </div>
        );
    }
    const Review = () => {
        return (
            <div className="2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-10 py-5 flex justify-between">

            </div>
        );
    }
    const About = () => {
        return (
            <div className="2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-10 py-5 flex justify-between">

            </div>
        );
    }


    return (
        <>
            <Topbar
                background='fixed bg-white shadow-sm text-black 2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-5 py-2'
                logo={logoBlack}
                searchBar='block'
                cartIcon={cartIcon2}
                loginButton="border border-black mr-4 text-black"
                bellIcon={bellIcon}
                dropdownIcon={dropdownSvgBlack}
                margin="mt-2 ml-2"
            />
            <div className="2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-5 py-2 mt-0 md:mt-10 hidden md:block">
                <Grid container >
                    <Grid item xs={12}>
                        <p1 className="mb-3">Development / Mobile Engineer </p1>
                        <h1 className="font-bold text-3xl mb-3 mt-3">Make Uber Clone App</h1>
                        <div className="flex">
                            <p1 className="text-red mr-5">Steven Arnatouvic</p1>
                            <Rating name="disabled" value={4} disabled />
                            <h1 className="font-bold">4.8</h1>
                            <p1 className="text-grey">(1,812 ratings)</p1>
                        </div>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item lg={8} md={8} xs={12}>
                        <Card className="mt-5">
                            {/* <ReactPlayer
                                url='https://youtu.be/7wtfhZwyrcc'
                                light = {true}
                                playing
                                controls
                            /> */}
                            <VideoPlayer />
                        </Card>

                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                        <Card className="mb-5 mr-5 shadow-sm">
                            <CardContent>
                                <div className="flex">
                                    <h1 className="font-bold text-2xl mb-3">US$22.40</h1>
                                    <p1 className="text-grey mt-1 ml-5">$30.13</p1>
                                </div>
                                <img src={offerImage} alt="offer" />
                                <button onClick={handleOpenPayment} className="border-none outline-none"><img className="mt-3 mb-3" src={buyButton} alt="buy" /></button>
                                <img className="" src={wishlistButton} alt="Wishlist" />
                                <div className="flex">
                                    <img className="mt-5" src={icon1} alt="Icon" />
                                    <p1 className="text-grey mt-5 ml-5">22 Section</p1>
                                </div>
                                <div className="flex">
                                    <img className="mt-5" src={icon2} alt="Icon" />
                                    <p1 className="text-grey mt-5 ml-5">152 Lectures</p1>
                                </div>
                                <div className="flex">
                                    <img className="mt-5" src={icon3} alt="Icon" />
                                    <p1 className="text-grey mt-5 ml-5">21h 33m total lenghts</p1>
                                </div>
                                <div className="flex">
                                    <img className="mt-5" src={icon4} alt="Icon" />
                                    <p1 className="text-grey mt-5 ml-5">English</p1>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>

            {/* Mobile View */}
            <div className="mt-[10%] block md:hidden">
                <Grid container >
                    <Grid item xs={12}>
                        <Card className="mt-5">
                            {/* <div className="videoImage h-[20vh]">
                                <Link to="/"><img className="arrowBackButton" src={arrowBack} alt="back" /></Link>
                                <img className="playButton" src={playArrowButton} alt="Play" />
                            </div> */}
                            <div>
                            <Link to="/"><img className="arrowBackButton" src={arrowBack} alt="back" /></Link>
                            {/* <ReactPlayer
                                url='https://youtu.be/7wtfhZwyrcc'
                                light = {true}
                                playing
                                controls
                            /> */}
                            {/* <VideoPlayer /> */}
                            </div>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container className="m-3">
                    <Grid item xs={12}>
                        <p1 className="mb-3">Development / Mobile Engineer </p1>
                        <h1 className="font-bold text-3xl mb-3 mt-3">Make Uber Clone App</h1>
                        <p1 className="text-red">Steven Arnatouvic</p1>
                        <div className="flex mt-3">
                            <h1 className="font-bold text-2xl mb-3 mr-[25%]">US$22.40</h1>
                            <Rating name="disabled" value={4} disabled />
                            <h1 className="font-bold">4.8</h1>
                        </div>
                        <div className="flex">
                            <p1 className="text-grey mt-1 mr-1">$30.13</p1>
                            <img src={offerImage} alt="offer" />
                            <p1 className="text-grey ml-[25%]">(1,812 ratings)</p1>
                        </div>
                    </Grid>
                    {/* <Grid item xs={12}>
                        <img className="mt-3 mb-3" src={buyButton} alt="buy" />
                        <img className="" src={wishlistButton} alt="Wishlist" />
                    </Grid> */}
                </Grid>
            </div>

            <Grid container className="2xl:px-40 xl:px-40 lg:px-24 px-12 lg:py-5 py-2">
                <Grid item lg={8} md={8} xs={12}>
                    <AppBar position="static" className="bg-white text-black border-none shadow-none">
                        <div className="flex">
                            <Tabs className="nav-tabs" value={tabIndex} onChange={handleTabChange} variant="scrollable" scrollButtons="off" aria-label="setting tabs">
                                {courseTabs && Object.keys(courseTabs).length > 0 && courseTabs.map((st) => (
                                    <Tab label={st && st.name} className="capitalize opacity-100 md:text-base text-sm border-none outline-none" key={st && st.name} />
                                ))}
                            </Tabs>
                        </div>
                    </AppBar>
                    <SwipeableViews
                        axis='x'
                        index={tabIndex}
                        onChangeIndex={handleViewChangeIndex}
                        className=""

                    >
                        <div
                            role="tabpanel"
                            hidden={tabIndex !== 0}
                        >
                            <Courses />
                        </div>
                        <div
                            role="tabpanel"
                            hidden={tabIndex !== 1}
                        >
                            <Review />
                        </div>
                        <div
                            role="tabpanel"
                            hidden={tabIndex !== 2}
                        >
                            <About />
                        </div>
                    </SwipeableViews>
                </Grid>

                <Grid item lg={4} md={4} sm={12}>
                    <div className="">
                        <div className="bg-darkblue rounded-md w-20 hidden md:block mt-5">
                            <Grid container xs={12} className="">
                                <Grid item sm={6} md={12} lg={12} className="m-5">
                                    <img src={webinar} alt="Webinar" />
                                    <h1 className="text-white text-1xl mt-5">Ana Kursova</h1>
                                    <h1 className="mt-5 font-bold text-white text-3xl">Masterclass in Design Thinking, Innovation & Creativity</h1>
                                    <button className="sm:mt-6 md:mt-0 lg:mt-5"><img src={learnMore} alt="Learn More button" /></button>
                                </Grid>
                                <Grid item sm={5} md={12} lg={12}>
                                    <img className="sm:mt-[30%] lg:mt-10" src={cardDecorationIamge} alt="card" />
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Grid>
            </Grid>

            <div className="2xl:px-40 xl:px-40 lg:px-24 px-12 lg:py-5 py-2">
                <div className="bg-skyblue rounded-md w-20 hidden md:block mt-5 bgDecoration">
                    <Grid container xs={12} className="">
                        <Grid item sm={7} md={7} lg={7} className="">
                            <h1 className="font-bold text-white text-3xl m-5">Join and get amazing discount</h1>
                            <p className="text-white text-1xl m-5">With our responsive themes and mobile and desktop apps</p>
                        </Grid>
                        <Grid item sm={5} md={5} lg={5}>
                            <div className="flex m-10">
                                <div className="flex inline">
                                    <InputBase
                                        placeholder="Email Address"
                                        inputProps={{ 'aria-label': 'search' }}
                                        className="text-white"
                                    />
                                    <img className="m-4 -ml-5" src={searchicon} alt="search" />
                                </div>
                                <img src={subscribeButton} alt="Subscribe" />
                            </div>

                        </Grid>
                    </Grid>
                </div>
            </div>

            <div>
                <Modal
                    open={payment}
                    onClose={handleClosePayment}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"

                >
                    <div className="modalAlignment">
                        <Payment />
                    </div>
                </Modal>
            </div>

            <Footer />
        </>
    );
}

export default withRouter(UnpaidCourse);