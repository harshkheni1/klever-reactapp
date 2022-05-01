import React, { useState } from 'react';
import { withRouter, Link } from "react-router-dom";

import { Grid, AppBar, Tabs, Tab, InputBase } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import logoBlack from '../assets/images/logoblack.svg';
import cartIcon2 from '../assets/images/shoppingcart2.svg';
import bellIcon from '../assets/images/bellicon.svg';
import dropdownSvgBlack from '../assets/images/dropdowniconblack.svg';
import courseImage1 from "../assets/images/courseimage1.png";
import courseImage2 from "../assets/images/courseimage2.png";
import courseImage3 from "../assets/images/courseimage3.png";
import courseImage4 from "../assets/images/courseiamge4.png";
import courseImage5 from "../assets/images/courseimage5.png";
import courseImage6 from "../assets/images/courseimage6.png";
import courseImage7 from "../assets/images/courseimage7.png";
import courseImage8 from "../assets/images/courseimage8.png";
import explore from '../assets/images/explorecourses.svg';
import subscribeButton from '../assets/images/subscribebutton.svg';
import searchicon from '../assets/images/searchwhite.svg';


import { Footer, Topbar, CourseCard } from '../components';
import './index.css';

function MyCourse() {
    const [tabIndex, setTabIndex] = useState(0);
    const Duration = localStorage.getItem("FinalDuration")
    const finalDuration = Duration * 100;
    console.log("Final Duration" , finalDuration);

    const courseTabs = [
        {
            name: 'My Courses'
        },
        {
            name: 'Wishlist'
        },
        {
            name: 'Completed'
        }
    ];

    const handleTabChange = (event, newIndex) => {
        setTabIndex(newIndex);
    };
    const handleViewChangeIndex = (index) => {
        setTabIndex(index);
    };

    const MyCourses = () => {
        return (
            <div className="mt-5">
                <h1 className="font-bold flex justify-start">My Course</h1>
                <p1 className="text-grey flex justify-start">List of your courses</p1>

                <Grid container xs={12} className="mt-5">
                    <Grid item lg={3} md={3} xs={6} sm={4} >
                        <CourseCard
                            cardHeading="Adobe Illustrator Scretch Course"
                            cardName="Kitani Studio"
                            cardAmount="$24.92"
                            cardMaxAmount="$32.90"
                            cardRatingValue="4"
                            cardImage={courseImage5}
                            finalDuration={finalDuration}
                        />
                    </Grid>
                    <Grid item lg={3} md={3} xs={6} sm={4}>
                        <CourseCard
                            cardHeading="Adobe Illustrator Scretch Course"
                            cardName="Kitani Studio"
                            cardAmount="$24.92"
                            cardMaxAmount="$32.90"
                            cardRatingValue="3"
                            cardImage={courseImage6}
                        />

                    </Grid>
                    <Grid item lg={3} md={3} xs={6} sm={4}>
                        <CourseCard
                            cardHeading="Adobe Illustrator Scretch Course"
                            cardName="Kitani Studio"
                            cardAmount="$24.92"
                            cardMaxAmount="$32.90"
                            cardRatingValue="1"
                            cardImage={courseImage7}
                        />

                    </Grid>
                    <Grid item lg={3} md={3} xs={6} sm={4}>
                        <CourseCard
                            cardHeading="Adobe Illustrator Scretch Course"
                            cardName="Kitani Studio"
                            cardAmount="$24.92"
                            cardMaxAmount="$32.90"
                            cardRatingValue="5"
                            cardImage={courseImage8}
                        />

                    </Grid>
                </Grid>
                <div className="">
                    <div className="bg-skyblue rounded-md w-20 hidden md:block mt-5 bgDecoration">
                        <Grid container xs={12} className="">
                            <Grid item sm={12} md={7} lg={7} className="">
                                <h1 className="font-bold text-white text-3xl m-5">Join and get amazing discount</h1>
                                <p className="text-white text-1xl m-5">With our responsive themes and mobile and desktop apps</p>
                            </Grid>
                            <Grid item sm={12} md={5} lg={5}>
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
            </div>
        );
    }
    const Wishlist = () => {
        return (
            <div className="mt-5">
                <Grid container xs={12} className="">
                    <Grid item lg={3} md={3} xs={6} sm={4} >
                        <CourseCard
                            cardHeading="Adobe Illustrator Scretch Course"
                            cardName="Kitani Studio"
                            cardAmount="$24.92"
                            cardMaxAmount="$32.90"
                            cardRatingValue="4"
                            cardImage={courseImage1}
                            cardDescription="More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now..."
                        />

                    </Grid>
                    <Grid item lg={3} md={3} xs={6} sm={4}>
                        <CourseCard
                            cardHeading="Adobe Illustrator Scretch Course"
                            cardName="Kitani Studio"
                            cardAmount="$24.92"
                            cardMaxAmount="$32.90"
                            cardRatingValue="3"
                            cardImage={courseImage2}
                            cardDescription="More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now..."
                        />

                    </Grid>
                    <Grid item lg={3} md={3} xs={6} sm={4}>
                        <CourseCard
                            cardHeading="Adobe Illustrator Scretch Course"
                            cardName="Kitani Studio"
                            cardAmount="$24.92"
                            cardMaxAmount="$32.90"
                            cardRatingValue="1"
                            cardImage={courseImage3}
                            cardDescription="More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now..."
                        />

                    </Grid>
                    <Grid item lg={3} md={3} xs={6} sm={4}>
                        <CourseCard
                            cardHeading="Adobe Illustrator Scretch Course"
                            cardName="Kitani Studio"
                            cardAmount="$24.92"
                            cardMaxAmount="$32.90"
                            cardRatingValue="5"
                            cardImage={courseImage4}
                            cardDescription="More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now..."
                        />

                    </Grid>
                </Grid>

                <div className="mt-5 mb-5 flex justify-center">
                    <img src={explore} alt="Explore" />
                </div>
            </div>
        );
    }
    const Completed = () => {
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
            <div className="2xl:px-40 xl:px-40 lg:px-24 px-12 lg:py-5 py-2 flex justify-center mt-14 lg:mt-0 lg:-mb-10">
                <h1 className="font-bold">My Course</h1>
            </div>

            <Grid container xs={12} className="2xl:px-40 xl:px-40 lg:px-24 px-12 lg:py-5 py-2">
                <Grid item lg={12} md={12} xs={12}>
                    <AppBar position="static" className="bg-white text-black border-none shadow-none">
                        <div className="flex justify-center">
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
                            <MyCourses />
                        </div>
                        <div
                            role="tabpanel"
                            hidden={tabIndex !== 1}
                        >
                            <Wishlist />
                        </div>
                        <div
                            role="tabpanel"
                            hidden={tabIndex !== 2}
                        >
                            <Completed />
                        </div>
                    </SwipeableViews>
                </Grid>
            </Grid>

            <Footer />
        </>
    );
}

export default withRouter(MyCourse);