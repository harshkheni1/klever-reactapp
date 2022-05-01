import React from "react";
import { Grid, Divider } from "@material-ui/core";

import logo2icon from '../assets/images/logo2.svg';
import twittericon from '../assets/images/twitter.svg';
import instagramicon from '../assets/images/instagram.svg';
import facebookicon from '../assets/images/facebook.svg';

function Footer() {
    const techlinks = ['Web Programming', 'Mobile Programming', 'Java Beginner', 'PHP Beginner'];
    const designlinks = ['Adobe Illustrator', 'Adobe Photoshop', 'Design Logo'];
    const otherlinks = ['Writing Course', 'Photography', 'Video Making'];

    return (
        <div className="bg-surfaceblack 2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-10 py-5">
            <Grid container spacing={2}>
                <Grid item sm={3} xs={12}>
                    <img src={logo2icon} alt="logo2" className="sm:mb-0 mb-3" />
                </Grid>
                <Grid item sm={3} xs={12}>
                    {techlinks && Object.keys(techlinks).length > 0 ? techlinks.map((techlink, index) => (
                        <p className="text-white text-base font-normal mb-3" key={index}>{techlink}</p>
                    )) : null}
                </Grid>
                <Grid item sm={3} xs={12}>
                    {designlinks && Object.keys(designlinks).length > 0 ? designlinks.map((designlink, index) => (
                        <p className="text-white text-base font-normal mb-3" key={index}>{designlink}</p>
                    )) : null}
                </Grid>
                <Grid item sm={3} xs={12}>
                    {otherlinks && Object.keys(otherlinks).length > 0 ? otherlinks.map((otherlink, index) => (
                        <p className="text-white text-base font-normal mb-3" key={index}>{otherlink}</p>
                    )) : null}
                </Grid>
            </Grid>
            <Divider className="bg-objectwhite opacity-20 mt-10 mb-3 hidden md:block" />
            <Grid container className="hidden md:block">
                <Grid item md={12}>
                    <p className="text-objectwhite text-base font-normal opacity-60">Copyright © Klevr 2020. All Rights Reserved</p>
                </Grid>
                <Grid item md={12} className="flex justify-end space-x-4 -mt-7">
                    <img src={twittericon} alt="twitter" />
                    <img src={instagramicon} alt="instagram" />
                    <img src={facebookicon} alt="facebook" />
                </Grid>
            </Grid>

            <Grid container className="block md:hidden">
                <Grid item xs={12} className="flex justify-center space-x-4 mb-5 mt-5">
                    <img src={twittericon} alt="twitter" />
                    <img src={instagramicon} alt="instagram" />
                    <img src={facebookicon} alt="facebook" />
                </Grid>
                <Grid item xs={12}>
                    <p className="text-objectwhite text-base font-normal opacity-60">Copyright © Klevr 2020. All Rights Reserved</p>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;