import React, { useState, useEffect } from 'react';
import { withRouter, Link } from "react-router-dom";

import { Grid, AppBar, Tabs, Tab, TextField } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import search from '../assets/images/search.svg';
import joinNow from '../assets/images/joinnow.svg';
import logoWhite from '../assets/images/logo.svg';
import logoBlack from '../assets/images/logoblack.svg';
import cardDecorationIamge from '../assets/images/carddecorationimage.png';
import getStarted from '../assets/images/getstarted.svg';
import explorePhoto from '../assets/images/explorephotography.svg';
import courseImage1 from "../assets/images/courseimage1.png";
import courseImage2 from "../assets/images/courseimage2.png";
import courseImage3 from "../assets/images/courseimage3.png";
import courseImage4 from "../assets/images/courseiamge4.png";
import cartIcon2 from '../assets/images/shoppingcart2.svg';
import cartIcon from '../assets/images/shoppingcart.svg';
import bellIcon from '../assets/images/bellicon.svg';
import bellIconWhite from '../assets/images/billIconWhite.svg';
import dropdownSvgWhite from '../assets/images/dropdownsvg.svg';
import dropdownSvgBlack from '../assets/images/dropdowniconblack.svg';


import { Footer, Topbar, CourseCard } from '../components';
import './index.css';

function Home() {
    const [tabIndex, setTabIndex] = useState(0);
    const [colorChange, setColorchange] = useState(true);

    useEffect(() => {
        const changeNavbarColor = () =>{
            if(window.scrollY <= 500){
              setColorchange(true);
            }
            else{
              setColorchange(false);
            }
         };
         window.addEventListener('scroll', changeNavbarColor);
      });

    const homeTabs = [
        {
            name: 'Design'
        },
        {
            name: 'Developer'
        },
        {
            name: 'Business'
        },
        {
            name: 'Marketing'
        },
        {
            name: 'Photography'
        }
    ];

    const handleTabChange = (event, newIndex) => {
        setTabIndex(newIndex);
    };
    const handleViewChangeIndex = (index) => {
        setTabIndex(index);
    };

    const Design = () => {
        return (
            <div className="2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-10 py-5 flex justify-between">
                <CourseCard
                    cardHeading="Adobe Illustrator Scretch Course"
                    cardName="Kitani Studio"
                    cardAmount="$24.92"
                    cardMaxAmount="$32.90"
                    cardRatingValue="4"
                    cardImage={courseImage1}
                    hidden="hidden"
                />
                <CourseCard
                    cardHeading="Adobe Illustrator Scretch Course"
                    cardName="Kitani Studio"
                    cardAmount="$24.92"
                    cardMaxAmount="$32.90"
                    cardRatingValue="3"
                    cardImage={courseImage2}
                    hidden="hidden"
                />
                <CourseCard
                    cardHeading="Adobe Illustrator Scretch Course"
                    cardName="Kitani Studio"
                    cardAmount="$24.92"
                    cardMaxAmount="$32.90"
                    cardRatingValue="1"
                    cardImage={courseImage3}
                    hidden="hidden"
                />
                <CourseCard
                    cardHeading="Adobe Illustrator Scretch Course"
                    cardName="Kitani Studio"
                    cardAmount="$24.92"
                    cardMaxAmount="$32.90"
                    cardRatingValue="5"
                    cardImage={courseImage4}
                    hidden="hidden"
                />
            </div>
        );
    }

    const Developer = () => {
        return (
            <>
                <div className="2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-10 py-5 flex justify-between">
                    <CourseCard
                        cardHeading="Adobe Illustrator Scretch Course"
                        cardName="Kitani Studio"
                        cardAmount="$24.92"
                        cardMaxAmount="$32.90"
                        cardRatingValue="5"
                        cardImage={courseImage4}
                        hidden="hidden"
                    />
                </div>
            </>
        );
    }
    const Business = () => {
        return (
            <>
            </>
        );
    }
    const Marketing = () => {
        return (
            <>
                <div className="2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-10 py-5 flex justify-between">
                    <CourseCard
                        cardHeading="Adobe Illustrator Scretch Course"
                        cardName="Kitani Studio"
                        cardAmount="$24.92"
                        cardMaxAmount="$32.90"
                        cardRatingValue="1"
                        cardImage={courseImage3}
                        hidden="hidden"
                    />
                </div>
            </>
        );
    }
    const Photography = () => {
        return (
            <>
            </>
        );
    }

    return (
        <>
            <div className="bgImage hidden lg:block">
                <Topbar 
                background={colorChange ? 'fixed bg-transparent shadow-sm text-white 2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-10 py-5 ' : 'fixed bg-white shadow-sm text-black 2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-5 py-2'}
                logo={colorChange ? logoWhite : logoBlack }
                searchBar={colorChange ? 'hidden' : 'block'} 
                cartIcon={colorChange ? cartIcon : cartIcon2 }
                loginButton={colorChange ? "border border-white mr-4 text-white" : "border border-black mr-4 text-black"}
                bellIcon={colorChange ? bellIconWhite : bellIcon }
                dropdownIcon={colorChange ? dropdownSvgWhite : dropdownSvgBlack }
                margin={colorChange ? "ml-2" : "mt-2 ml-2"}
                />
                <div className="2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-10 py-5 hidden lg:block">
                    <div className="bg-white pt-5 pr-5 pl-5 pb-5 searchContainer">
                        <h1 className="font-bold">What do you want to learn?</h1>
                            <form className="w-full flex justify-between mt-4" noValidate autoComplete="off">
                                <TextField className="login-input outline-none border-0 w-2/8" variant="outlined" placeholder="Find courses, skills, software, etc" />
                                <TextField className="login-input outline-none" variant="outlined" placeholder="Categories" />
                                <TextField className="login-input outline-none" variant="outlined" placeholder="Topic" />
                                <img src={search} alt="search button" />
                            </form>
                    </div>
                </div>
            </div>
            <div className="block lg:hidden">
                <Topbar />
                <div className="bgimageMobile mt-12 md:h-80">
                    <div className="2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-10 py-5">
                        <Grid container xs={12}>
                            <Grid item xs={6}>
                                <h2 className="text-white text-2x1 md:mt-10">Learn something new everyday.</h2>
                            </Grid>
                        </Grid>
                        <Grid container xs={12}>
                            <Grid item xs={8}>
                                <p className="mt-2 text-white text-xs md:mt-5">Become professionals and ready to join the world.</p>
                            </Grid>
                        </Grid>
                        <Grid container xs={12}>
                            <Grid item xs={3} className="mt-3 md:mt-20">
                                <Link to=""><img src={explorePhoto} alt="explore button" /></Link>
                            </Grid>
                            <Grid item xs={5}></Grid>
                            <Grid item xs={4} className="mt-3 md:mt-20">
                                <h2 className="text-white text-sm text-right">Jessica Wong</h2>
                                <p className="text-white text-xs text-right">Photographer</p>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-10 py-5">
                    <h1 className="font-bold">What do you want to learn?</h1>
                    <form className="w-full m-2" noValidate autoComplete="off">
                        <TextField className="login-input outline-none w-6/7 mb-3 border-0" variant="outlined" placeholder="Find courses, skills, software, etc" />
                        <TextField className="login-input outline-none w-6/7 mb-3" variant="outlined" placeholder="Categories" />
                        <TextField className="login-input outline-none w-6/7 mb-3" variant="outlined" placeholder="Topic" />
                    </form>
                    <div className="flex justify-center">
                        <img src={search} alt="search button" />
                    </div>
                </div>
            </div>
            <Grid className="">
                <h1 className="font-bold text-center mb-4 text-3xl">Browse Our Top Courses</h1>

                <AppBar position="static" className="bg-white text-black border-none shadow-none">
                    <div className="flex justify-center">
                        <Tabs className="nav-tabs" value={tabIndex} onChange={handleTabChange} variant="scrollable" scrollButtons="off" aria-label="setting tabs">
                            {homeTabs && Object.keys(homeTabs).length > 0 && homeTabs.map((st) => (
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
                        <Design />
                    </div>
                    <div
                        role="tabpanel"
                        hidden={tabIndex !== 1}
                    >
                        <Developer />
                    </div>
                    <div
                        role="tabpanel"
                        hidden={tabIndex !== 2}
                    >
                        <Business />
                    </div>
                    <div
                        role="tabpanel"
                        hidden={tabIndex !== 3}
                    >
                        <Marketing />
                    </div>
                    <div
                        role="tabpanel"
                        hidden={tabIndex !== 4}
                    >
                        <Photography />
                    </div>
                </SwipeableViews>
            </Grid>
            <div className="2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-10 py-5">
                <div className="bg-darkblue rounded-md w-20 hidden md:block">
                    <Grid container xs={12} className="">
                        <Grid item sm={1} md={1} lg={1}></Grid>
                        <Grid item sm={6} md={6} lg={6}>
                            <h1 className="mt-5 mb-5 text-white text-2xl">Join Klevr now to get 35% off</h1>
                            <p1 className="mt-5 text-white">With our responsive themes and mobile and desktop apps, enjoy a seamless experience on any device so will your blog the best visitors</p1>
                            <br/>
                            <button className="sm:mt-6 md:mt-0 lg:mt-10"><img src={joinNow} alt="join button" /></button>
                        </Grid>
                        <Grid item sm={1} md={1} lg={1}></Grid>
                        <Grid item sm={4} md={4} lg={4}>
                            <img className="sm:mt-10 md:mt-10 lg:mt-10" src={cardDecorationIamge} alt="card" />
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <h1 className="font-bold text-center mb-10 mt-10 text-3xl">Trending Courses</h1>
                    <Grid container>
                        <Grid item xs={12} md={6} sm={6} lg={6}>
                            <div className="bgImageTrendingCourses mr-5 mb-5">
                                <div className="ml-4 text-white textAlignment">
                                    <p >Ana Kursova</p>
                                    <h1 className="font-bold text-3xl">Masterclass in Design Thinking, Innovation & Creativity</h1>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} className="flex flex-wrap">
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <CourseCard
                                    cardHeading="Adobe Illustrator Scretch Course"
                                    cardName="Kitani Studio"
                                    cardAmount="$24.92"
                                    cardMaxAmount="$32.90"
                                    cardRatingValue="4"
                                    cardImage={courseImage1}
                                    hidden="hidden"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <CourseCard
                                    cardHeading="Adobe Illustrator Scretch Course"
                                    cardName="Kitani Studio"
                                    cardAmount="$24.92"
                                    cardMaxAmount="$32.90"
                                    cardRatingValue="4"
                                    cardImage={courseImage2}
                                    hidden="hidden"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <CourseCard
                                    cardHeading="Adobe Illustrator Scretch Course"
                                    cardName="Kitani Studio"
                                    cardAmount="$24.92"
                                    cardMaxAmount="$32.90"
                                    cardRatingValue="4"
                                    cardImage={courseImage2}
                                    hidden="hidden"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <CourseCard
                                    cardHeading="Adobe Illustrator Scretch Course"
                                    cardName="Kitani Studio"
                                    cardAmount="$24.92"
                                    cardMaxAmount="$32.90"
                                    cardRatingValue="4"
                                    cardImage={courseImage1}
                                    hidden="hidden"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>

            <h1 className="font-bold text-center mb-10 mt-10 text-3xl">Upcoming Webinar</h1>
            <div className="2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-10 py-5 flex justify-between overflow-x-auto">
                <CourseCard
                    cardHeading="Adobe Illustrator Scretch Course"
                    cardName="Kitani Studio"
                    cardAmount="$24.92"
                    cardMaxAmount="$32.90"
                    cardRatingValue="4"
                    cardImage={courseImage1}
                    hidden="hidden"
                    cardDescription="More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now..."
                />
                <CourseCard
                    cardHeading="Adobe Illustrator Scretch Course"
                    cardName="Kitani Studio"
                    cardAmount="$24.92"
                    cardMaxAmount="$32.90"
                    cardRatingValue="4"
                    cardImage={courseImage2}
                    hidden="hidden"
                    cardDescription="More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now..."
                />
                <CourseCard
                    cardHeading="Adobe Illustrator Scretch Course"
                    cardName="Kitani Studio"
                    cardAmount="$24.92"
                    cardMaxAmount="$32.90"
                    cardRatingValue="4"
                    cardImage={courseImage3}
                    hidden="hidden"
                    cardDescription="More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now..."
                />
                <CourseCard
                    cardHeading="Adobe Illustrator Scretch Course"
                    cardName="Kitani Studio"
                    cardAmount="$24.92"
                    cardMaxAmount="$32.90"
                    cardRatingValue="4"
                    cardImage={courseImage4}
                    hidden="hidden"
                    cardDescription="More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now..."
                />
            </div>
            <div className="bg-yellow 2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-10 py-5">
                <h1 className="text-center font-bold text-3xl">Get personal learning recommendations based on your needs</h1>
                <Link to="" className="flex justify-center mt-5" ><img src={getStarted} alt="Get-started button" /></Link>
            </div>
            <Footer />
        </>
    );
}

export default withRouter(Home);