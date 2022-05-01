import React, { useState, useEffect } from 'react';
import { withRouter, Link } from "react-router-dom";

import { Grid, Drawer } from '@material-ui/core';
// import axios from 'axios';

import logoBlack from '../assets/images/logoblack.svg';
import cartIcon2 from '../assets/images/shoppingcart2.svg';
import bellIcon from '../assets/images/bellicon.svg';
import joinNow from '../assets/images/joinnow.svg';
import cardDecorationIamge from '../assets/images/carddecorationimage.png';
import dropdownSvgBlack from '../assets/images/dropdowniconblack.svg';
import topindicator from '../assets/images/topindicator.svg';
import homeIndicator from '../assets/images/homeindicator.svg';
import continueButton from '../assets/images/continuebutton.svg';
import arrowBack from '../assets/images/arrowback.svg';
import filter from '../assets/images/filter.svg';

import { Footer, Topbar, Pagination, Course, RatingFilter, VideoFilter, CategoryFilter, LevelFilter, SoftwareFilter, LanguageFilter } from '../components';
import './index.css';
import courseData from '../config/courseData.json';

function Browse() {
    const [course, setCourse] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [coursePerPage] = useState(3);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setCourse(courseData);
    });

    console.log("data", course);

    const indexOfLastCourse = currentPage * coursePerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursePerPage;
    const currentCourse = course.slice(indexOfFirstCourse, indexOfLastCourse);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const handleDrawer = () => {
        setOpen(!open);

    };
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
            <Grid container className="2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-5 py-2 mt-10">
                <Grid item md={4} className="hidden md:block">
                    <Grid container>
                        <Grid item lg={12} sm={6} md={12} xs={12}>
                            <RatingFilter />
                        </Grid>
                        <Grid item lg={12} sm={6} md={12} xs={12}>
                            <VideoFilter />
                        </Grid>

                        <Grid item lg={12} sm={6} md={12} xs={12}>
                            <CategoryFilter />
                        </Grid>

                        <Grid item lg={12} sm={6} md={12} xs={12}>
                            <SoftwareFilter />
                        </Grid>

                        <Grid item lg={12} sm={6} md={12} xs={12}>
                            <LevelFilter />
                        </Grid>

                        <Grid item lg={12} sm={6} md={12} xs={12}>
                            <LanguageFilter />
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item md={8} className="mt-5 hidden md:block">
                    <Grid container xs={12} >
                        <Course course={currentCourse} />
                    </Grid>
                    <Pagination
                        coursePerPage={coursePerPage}
                        totalCourse={course.length}
                        paginate={paginate}
                    />
                </Grid>
            </Grid >
            <div className="2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-10 py-5">
                <div className="bg-darkblue rounded-md w-20 hidden md:block">
                    <Grid container xs={12} className="">
                        <Grid item sm={1} md={1} lg={1}></Grid>
                        <Grid item sm={6} md={6} lg={6}>
                            <h1 className="mt-5 mb-5 text-white text-2xl">Join Klevr now to get 35% off</h1>
                            <p1 className="mt-5 text-white">With our responsive themes and mobile and desktop apps, enjoy a seamless experience on any device so will your blog the best visitors</p1>
                            <br />
                            <button className="sm:mt-6 md:mt-0 lg:mt-10"><img src={joinNow} alt="join button" /></button>
                        </Grid>
                        <Grid item sm={1} md={1} lg={1}></Grid>
                        <Grid item sm={4} md={4} lg={4}>
                            <img className="sm:mt-10 md:mt-10 lg:mt-10" src={cardDecorationIamge} alt="card" />
                        </Grid>
                    </Grid>
                </div>
            </div>

            {/* Mobile view */}

            <div className="block md:hidden">
                <div className="">
                    <div className="m-5 mt-[-5%] flex justify-between">
                        <Link to="/"><img className="mr-4 mt-1" src={arrowBack} alt="back arrow" /></Link>
                        <h1 className="font-bold outline-none border-none">UI Design</h1>
                        <div className="">
                        <button onClick={handleDrawer}><img src={filter} alt="filter" /></button>
                        </div>
                    </div>
                    <div>
                        <Course course={currentCourse} />
                        <Pagination
                            coursePerPage={coursePerPage}
                            totalCourse={course.length}
                            paginate={paginate}
                        />
                    </div>
                </div>
                <div className="">
                    <nav className="md:w-[240px] md:flex-shrink-0 text-black">
                        <Drawer
                            anchor='bottom'
                            open={open ? true : false}
                            onClose={handleDrawer}
                            classes={{
                                paper: "w-full h-[90%] rounded-lg overflow-y-hidden",
                            }}
                            ModalProps={{
                                keepMounted: true
                            }}
                        // className="block md:hidden"
                        >
                            <div className="">
                                <div className="flex justify-center">
                                    <img className="m-3" src={topindicator} alt="Indiacator" />
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="font-bold m-3">Filter</h1>
                                    <button onClick={handleDrawer} className="text-red m-3">Clear</button>
                                </div>
                                <div className="ml-3 h-[47%] overflow-y-scroll">
                                    <RatingFilter />
                                    <VideoFilter />
                                    <CategoryFilter />
                                    <SoftwareFilter />
                                    <LevelFilter />
                                    <LanguageFilter />
                                </div>
                                <div className="flex justify-center">
                                    <img src={continueButton} alt="continue" />
                                </div>
                                {/* <div className="flex justify-center">
                                    <img className="m-3" src={homeIndicator} alt="Indiacator" />
                                </div> */}
                            </div>
                        </Drawer>
                    </nav>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default withRouter(Browse);