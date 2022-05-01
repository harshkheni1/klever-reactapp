import React, { useState } from 'react';
import { withRouter, Link } from "react-router-dom";

import { Grid, AppBar, Tabs, Tab, CardContent, Card, AccordionSummary, AccordionDetails, Typography, Accordion } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import SwipeableViews from 'react-swipeable-views';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import logoBlack from '../assets/images/logoblack.svg';
import cartIcon2 from '../assets/images/shoppingcart2.svg';
import bellIcon from '../assets/images/bellicon.svg';
import dropdownSvgBlack from '../assets/images/dropdowniconblack.svg';
import arrowBack from '../assets/images/arrowbackwhite.svg';
import webinar from '../assets/images/webinar.svg';
import dot from '../assets/images/dot.svg';
import complete from '../assets/images/completed.svg';
import playing from '../assets/images/playing.svg';
import played from '../assets/images/playcirclegreen.svg';
import playing2 from '../assets/images/playcirclered.svg';
import playgrey from '../assets/images/playcirclegrey.svg';
import square from '../assets/images/Square.svg';
import supervised from '../assets/images/supervised_user_circle_24px.svg';
import rate from '../assets/images/rate_review_24px.svg';
import mask1 from '../assets/images/mask1.png';
import mask2 from '../assets/images/mask2.png';
import mask3 from '../assets/images/mask3.png';
import mask4 from '../assets/images/mask4.png';

import { Footer, Topbar, VideoPlayer } from '../components';
import './index.css';

function PaidCourse() {
    const [tabIndex, setTabIndex] = useState(0);
    const [expanded, setExpanded] = useState(false);

    const handleChange2 = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const courseTabs = [
        {
            name: 'Description'
        },
        {
            name: 'Courses'
        },
        {
            name: 'Review'
        }
    ];

    const handleTabChange = (event, newIndex) => {
        setTabIndex(newIndex);
    };
    const handleViewChangeIndex = (index) => {
        setTabIndex(index);
    };

    const Description = () => {
        return (
            <div className="">
                <h1 className="font-bold mt-5 mb-5 text-3xl">VUE JS SCRATCH COURSE</h1>
                <div className="flex justify-between">
                    <div className="flex">
                        <img className="mr-2" src={square} alt="square" />
                        <p1 className="text-red ">Kitani Studio<br /><p1 className="text-grey text-xs">Design Studio</p1></p1>
                    </div>
                    <div className="flex">
                        <img className="mr-2" src={supervised} alt="Supervised" />
                        <p1 className="text-grey text-xs mt-4">2.3k</p1>
                        <img className="mr-2 ml-2" src={rate} alt="Supervised" />
                        <p1 className="text-grey text-xs mt-4">1.4k</p1>

                    </div>
                </div>
                <div>
                    <h1 className="font-bold mt-5 mb-5">About Course</h1>
                    <p1 className="text-grey">Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.</p1>
                </div>
            </div>
        );
    }
    const Courses = () => {
        return (
            <div>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange2('panel4')} className="shadow-none" >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className="font-bold">Chapter 1: Course Overview</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="flex">
                            <p1 className="text-grey text-sm mr-2">1/12 Videos</p1>
                            <img src={dot} alt="dot" />
                            <p1 className="text-red text-sm ml-2">28m</p1>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange2('panel3')} className="shadow-none" >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography className="font-bold">Chapter 2: Curriculum</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="flex-none">

                            <div className="flex justify-between mt-5">
                                <p1 className="text-grey mr-5">Installing Vue JS</p1>
                            </div>
                            <div className="flex">
                                <img src={played} alt="play" />
                                <p1 className="text-green ml-2">10m</p1>
                            </div>
                            <div className="flex justify-between mt-5">
                                <p1 className="text-grey mr-5">Understand Vue Components</p1>
                            </div>
                            <div className="flex">
                                <img src={playing2} alt="play" />
                                <p1 className="text-red ml-2">59m</p1>
                            </div>
                            <div className="flex justify-between mt-5">
                                <p1 className="text-grey mr-5">Vue Templating</p1>
                            </div>
                            <div className="flex">
                                <img src={playgrey} alt="play" />
                                <p1 className="text-grey ml-2">23m</p1>
                            </div>
                            <div className="flex justify-between mt-5">
                                <p1 className="text-grey mr-5">Vue Templating</p1>
                            </div>
                            <div className="flex">
                                <img src={playgrey} alt="play" />
                                <p1 className="text-grey ml-2">23m</p1>
                            </div>
                            <div className="flex justify-between mt-5">
                                <p1 className="text-grey mr-5">Vue Templating</p1>
                            </div>
                            <div className="flex">
                                <img src={playgrey} alt="play" />
                                <p1 className="text-grey ml-2">23m</p1>
                            </div>
                            <div className="flex justify-between mt-5">
                                <p1 className="text-grey mr-5">Vue Templating</p1>
                            </div>
                            <div className="flex">
                                <img src={playgrey} alt="play" />
                                <p1 className="text-grey ml-2">23m</p1>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange2('panel2')} className="shadow-none" >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography className="font-bold">Chapter 3 : Components</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="flex">
                            <p1 className="text-grey text-sm mr-2">1/12 Videos</p1>
                            <img src={dot} alt="dot" />
                            <p1 className="text-red text-sm ml-2">28m</p1>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange2('panel1')} className="shadow-none" >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className="font-bold">Chapter 4 : Coding</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="flex">
                            <p1 className="text-grey text-sm mr-2">1/12 Videos</p1>
                            <img src={dot} alt="dot" />
                            <p1 className="text-red text-sm ml-2">28m</p1>
                        </div>
                    </AccordionDetails>
                </Accordion>

            </div>

        );
    }
    const Review = () => {
        return (
            <div>
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
                {/* <div className="flex justify-center mt-5">
                    <img src={loadReview} alt="Review" />
                </div> */}

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
                            <VideoPlayer />
                        </Card>

                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                        <Card className="mb-5 mr-5 shadow-sm">
                            <CardContent>
                                <h1 className="font-bold text-2xl mb-3">Chapter 1 : Preparations</h1>
                                <div className="flex">
                                    <p1 className="text-grey mr-5">6 Lectures</p1>
                                    <img src={dot} alt="dot" />
                                    <p1 className="text-yellow ml-5">12% completed</p1>
                                </div>
                                <div className="flex justify-between mt-5">
                                    <p1 className="text-grey mr-5">Installing Vue JS</p1>
                                    <img src={complete} alt="complete" />
                                </div>
                                <div className="flex">
                                    <img src={played} alt="play" />
                                    <p1 className="text-green ml-2">10m</p1>
                                </div>
                                <div className="flex justify-between mt-5">
                                    <p1 className="text-grey mr-5">Understand Vue Components</p1>
                                    <img src={playing} alt="complete" />
                                </div>
                                <div className="flex">
                                    <img src={playing2} alt="play" />
                                    <p1 className="text-red ml-2">59m</p1>
                                </div>
                                <div className="flex justify-between mt-5">
                                    <p1 className="text-grey mr-5">Vue Templating</p1>
                                </div>
                                <div className="flex">
                                    <img src={playgrey} alt="play" />
                                    <p1 className="text-grey ml-2">23m</p1>
                                </div>
                                <div className="flex justify-between mt-5">
                                    <p1 className="text-grey mr-5">Vue Templating</p1>
                                </div>
                                <div className="flex">
                                    <img src={playgrey} alt="play" />
                                    <p1 className="text-grey ml-2">23m</p1>
                                </div>
                                <div className="flex justify-between mt-5">
                                    <p1 className="text-grey mr-5">Vue Templating</p1>
                                </div>
                                <div className="flex">
                                    <img src={playgrey} alt="play" />
                                    <p1 className="text-grey ml-2">23m</p1>
                                </div>
                                <div className="flex justify-between mt-5">
                                    <p1 className="text-grey mr-5">Vue Templating</p1>
                                </div>
                                <div className="flex">
                                    <img src={playgrey} alt="play" />
                                    <p1 className="text-grey ml-2">23m</p1>
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
                            <div>
                                <Link to="/"><img className="arrowBackButton" src={arrowBack} alt="back" /></Link>
                                <VideoPlayer />
                            </div>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container className="2xl:px-40 xl:px-40 lg:px-24 px-12 lg:py-5 py-2">
                    <Grid item xs={12}>
                        <h1 className="font-bold mb-3 mt-3">VUE JS SCRATCH COURSE</h1>
                        <div className="flex justify-between">
                            <div className="flex">
                                <img className="mr-2" src={square} alt="square" />
                                <p1 className="text-red ">Kitani Studio<br /><p1 className="text-grey text-xs">Design Studio</p1></p1>
                            </div>
                            <div className="flex">
                                <img className="mr-2" src={supervised} alt="Supervised" />
                                <p1 className="text-grey text-xs mt-4">2.3k</p1>
                                <img className="mr-2 ml-2" src={rate} alt="Supervised" />
                                <p1 className="text-grey text-xs mt-4">1.4k</p1>

                            </div>
                        </div>

                    </Grid>
                </Grid>
            </div>

            <Grid container className="2xl:px-40 xl:px-40 lg:px-24 px-12 lg:py-5 py-2 mb-10">
                <Grid item lg={8} sm={6} md={8} xs={12}>
                    <div className="mr-2">
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
                                <Description />
                            </div>
                            <div
                                role="tabpanel"
                                hidden={tabIndex !== 1}
                            >
                                <Courses />
                            </div>
                            <div
                                role="tabpanel"
                                hidden={tabIndex !== 2}
                            >
                                <Review />
                            </div>
                        </SwipeableViews>
                    </div>
                </Grid>

                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <div className="ml-2">
                        <div className="bgImagePaidCourses rounded-md w-20 hidden md:block mt-5">
                            <Grid container xs={12} className="">
                                <Grid item sm={6} md={12} lg={12} className="m-5">
                                    <div className="textAlignmentPaidCourses">
                                        <img src={webinar} alt="Webinar" />
                                        <h1 className="text-white text-1xl mt-5">Ana Kursova</h1>
                                        <h1 className="mt-5 font-bold text-white text-3xl">Masterclass in Design Thinking, Innovation & Creativity</h1>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div className="mt-10">
                <Footer />
            </div>
        </>
    );
}

export default withRouter(PaidCourse);