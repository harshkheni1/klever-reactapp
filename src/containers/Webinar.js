import React, { useState } from 'react';
import { withRouter, Link } from "react-router-dom";

import { Grid, AppBar, Tabs, Tab, InputBase, CardContent, Card, Drawer, Modal } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import SwipeableViews from 'react-swipeable-views';

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
import eye from '../assets/images/vieweye.svg';
import thumbnail from '../assets/images/webinarthubnail.svg';
import supervised from '../assets/images/supervised_user_circle_24px.svg';
import rate from '../assets/images/rate_review_24px.svg';
import buynow from '../assets/images/buynowbutton.svg';
import preview from '../assets/images/previewbutton.svg';
import square from '../assets/images/Thumbnail.svg';
import livenow from '../assets/images/1stLabel.svg';

import { Footer, Topbar, Payment, VideoPlayer } from '../components';
import './index.css';

function Webinar() {
    const [tabIndex, setTabIndex] = useState(0);
    const [payment, setPayment] = useState(false);
    const [open, setOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [play, setPlay] = useState(true);

    const courseTabs = [
        {
            name: 'About'
        },
        {
            name: 'Live Chat'
        }
    ];
    const handleDrawer = () => {
        setOpen(!open);
    };
    const handlePlay = () => {
        setPlay(false);
    };
    const handleOpenPayment = () => {
        setPayment(true);
    };
    const handleBuyModalOpen = () => {
        setModalOpen(true);
    };
    const handleBuyModalClose = () => {
        setModalOpen(false);
    };
    const handleTabChange = (event, newIndex) => {
        setTabIndex(newIndex);
    };
    const handleViewChangeIndex = (index) => {
        setTabIndex(index);
    };

    const About = () => {
        return (
            <div className="mt-5">
                <p1 className="text-grey ">Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.</p1>
            </div>
        );
    }
    const LiveChat = () => {
        return (
            <div className="">
                <div className="flex justify-between">
                    <div className="flex">
                        <img className="mr-2" src={square} alt="square" />
                        <p1 className="text-red ">Kitani Studio<br /><p1 className="text-grey text-xs">Design Studio</p1></p1>
                    </div>
                    <div className="flex">
                        <img className="mr-2" src={livenow} alt="live" />
                    </div>
                </div>

                <div className="mt-10">

                <div className="mt-3">
                    <Grid container>
                        <Grid xs={1}>
                            <img src={mask1} alt="Mask" />
                        </Grid>
                        <Grid xs={11} className="ml-[-5%]">
                            <h1 className="font-bold ml-5">Leonardo  Da Vinci <br /><p1 className="font-normal text-red">@Sharad</p1> <p1 className="font-normal text-grey">Loved the course. I've learned some very subtle tecniques, expecially on leaves.</p1></h1>
                        </Grid>
                    </Grid>
                </div>
                <div className="mt-3">
                    <Grid container>
                        <Grid xs={1}>
                            <img src={mask2} alt="Mask" />
                        </Grid>
                        <Grid xs={11} className="ml-[-5%]">
                            <h1 className="font-bold ml-5">Titania  S <br /> <p1 className="font-normal text-red">@Sharad</p1> <p1 className="font-normal text-grey">I loved the course, it had been a long time since I had experimented with watercolors and now I will do it more often thanks to Kitani Studio</p1></h1>
                        </Grid>
                    </Grid>
                </div>
                <div className="mt-3">
                    <Grid container>
                        <Grid xs={1}>
                            <img src={mask3} alt="Mask" />
                        </Grid>
                        <Grid xs={11} className="ml-[-5%]">
                            <h1 className="font-bold ml-5">Zhirkov <br /> <p1 className="font-normal text-red">@Sharad</p1> <p1 className="font-normal text-grey">Yes. I just emphasize that the use of Photoshop, for non-users, becomes difficult to follow. What requires a course to master it. Safe and very didactic teacher.</p1></h1>
                        </Grid>
                    </Grid>
                </div>
                <div className="mt-3">
                    <Grid container>
                        <Grid xs={1}>
                            <img src={mask4} alt="Mask" />
                        </Grid>
                        <Grid xs={11} className="ml-[-5%]">
                            <h1 className="font-bold ml-5">Miphoska <br /> <p1 className="font-normal text-red">@Sharad</p1> <p1 className="font-normal text-grey">I haven't finished the course yet, as I would like to have some feedback from the teacher, about the comments I shared on the forum 3 months ago, and I still haven't had any answer.
                                I think the course is well structured, however the explanations and videos are very quick for beginners. However, it is good to go practicing.</p1></h1>
                        </Grid>
                    </Grid>
                </div>
                </div>

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
                        <div>
                            {play ?
                            <>
                            <div className="bgThumbnail">
                                <div className="textAlignmentThumbnail">
                                    <Grid container>
                                        <Grid xs={3}></Grid>
                                        <Grid xs={6}>
                                        <h1 className="font-bold text-white m-5">Purchase to continue this webinar class</h1>
                                        <div className="m-8">
                                    <p1 className="text-grey w-8">You need buy package webinar to see full lessons this course, thank you.</p1>
                                    </div>
                                    <div className="flex justify-center mt-5 mb-5">
                                    <button onClick={handleBuyModalOpen}><img src={buynow} alt="buynow" /></button>
                                    </div>
                                    <div className="flex justify-center mt-5 mb-5">
                                    <button onClick={handlePlay}><img src={preview} alt="preview" /></button>
                                    </div>
                                        </Grid>
                                        <Grid xs={3}></Grid>
                                    </Grid>
                                </div>
                            </div>
                            </>
                             : 
                             <>
                             <VideoPlayer />
                             </>
                            }
                            </div>

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
                                <VideoPlayer />
                            </div>
                        </Card>
                    </Grid>
                </Grid>
                <button onClick={handleDrawer}>TEST</button>
                <Grid container className="2xl:px-40 xl:px-40 lg:px-24 px-12 lg:py-5 py-2">
                    <Grid item xs={12}>
                        <h1 className="font-bold mb-3 mt-3">5. Easy Digital Painting</h1>
                        <div className="flex justify-between">
                            <div className="flex">
                                <img className="mr-2" src={thumbnail} alt="thumbnail" />
                                <p1 className="text-red ">Marius Ciocirland<br /><p1 className="text-grey text-xs">Behance</p1></p1>
                            </div>
                            <div className="flex">
                                <img className="mr-2" src={supervised} alt="Supervised" />
                                <p1 className="text-grey text-xs mt-7 md:mt-4">2.3k</p1>
                                <img className="mr-2 ml-2" src={rate} alt="Supervised" />
                                <p1 className="text-grey text-xs mt-7 md:mt-4">1.4k</p1>

                            </div>
                        </div>

                    </Grid>
                </Grid>

                <div className="">
                    <nav className="md:w-[240px] md:flex-shrink-0 text-black">
                        <Drawer
                            anchor='bottom'
                            open={open ? true : false}
                            onClose={handleDrawer}
                            classes={{
                                paper: "w-full h-[50%] rounded-lg overflow-y-hidden",
                            }}
                            ModalProps={{
                                keepMounted: true
                            }}
                        // className="block md:hidden"
                        >
                            <div className="">
                                <Grid item lg={4} md={4} xs={12}>
                                    <Card className="mb-5 mr-5 shadow-sm">
                                        <CardContent>
                                            <div className="flex">
                                                <h1 className="font-bold text-2xl mb-3">US$22.40</h1>
                                                <p1 className="text-grey mt-1 ml-5">$30.13</p1>
                                            </div>
                                            <img src={offerImage} alt="offer" />

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
                                            <button onClick={handleOpenPayment} className="border-none outline-none"><img className="mt-3 mb-3" src={buyButton} alt="buy" /></button>
                                            <img className="" src={wishlistButton} alt="Wishlist" />
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </div>
                        </Drawer>
                    </nav>
                </div>
            </div>

            <Grid container className="2xl:px-40 xl:px-40 lg:px-24 px-12 lg:py-5 py-2">

                <Grid item lg={8} sm={8} md={8} xs={12}>
                    <div className="mr-3">
                        <div className="flex justify-between hidden md:block">
                            <h1 className="font-bold text-2xl">5. Easy Digital Painting</h1>
                            <div className="flex">
                                <img src={eye} alt="eye" />
                                <p1 className="text-grey mt-1 ml-1">2.3K</p1>
                            </div>
                        </div>
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
                                <About />
                            </div>
                            <div
                                role="tabpanel"
                                hidden={tabIndex !== 1}
                            >
                                <LiveChat />
                            </div>
                        </SwipeableViews>
                    </div>
                </Grid>

                <Grid item lg={4} sm={4} md={4} xs={12}>
                    <div className="mt-5">
                        <div>
                            <Grid container xs={12} className="">
                                <Grid item xs={6} sm={6} className="bgWebinar2">
                                    <Grid item sm={6} md={12} lg={12} className="textAllignmentWebinar">
                                        <img className="mt-3" src={webinar} alt="Webinar" />
                                        <h1 className="text-white text-xs mt-3">Ana Kursova</h1>
                                        <h1 className=" font-bold text-white text-3xl mt-5">Film Maker Skillset for Beginner.</h1>
                                        <button className="mt-5 mb-5"><img src={learnMore} alt="Learn More button" /></button>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} sm={6} className="bgWebinar"></Grid>
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
                    open={modalOpen}
                    onClose={handleBuyModalClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"

                >
                    <div className="modalAlignment">
                        
                    </div>
                </Modal>
            </div>

            <Footer />
        </>
    );
}

export default withRouter(Webinar);