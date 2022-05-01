import React, { useState, useEffect } from 'react';
import { withRouter, Link } from "react-router-dom";

import { Grid, AppBar, Tabs, Tab, TextField, MenuItem, List, ListItem, ListItemIcon, ListItemText, Checkbox, CardContent, Card } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import usericon from '../assets/images/usericon.png';
import editicon from '../assets/images/editicon.svg';
import saveButton from '../assets/images/savebutton.svg';
import membershipImage from '../assets/images/membershipimage.png';
import membershipButton from '../assets/images/membershipbutton.svg';
import logoBlack from '../assets/images/logoblack.svg';
import cartIcon2 from '../assets/images/shoppingcart2.svg';
import bellIcon from '../assets/images/bellicon.svg';
import dropdownSvgBlack from '../assets/images/dropdowniconblack.svg';

import { Footer, Topbar } from '../components';
import './index.css';

const languages = [
    {
        value: 'Hindi',
    },
    {
        value: 'English',
    },
    {
        value: 'Chinese',
    },
    {
        value: 'Spanish',
    },
    {
        value: 'Portuguese',
    },
];

function Account() {
    const [tabIndex, setTabIndex] = useState(0);
    const [language, setLanguage] = useState('English');
    const [checked, setChecked] = useState([0]);
  
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    const accountTabs = [
        {
            name: 'Profile'
        },
        {
            name: 'Personalisation'
        },
        {
            name: 'PaymentMethods'
        },
        {
            name: 'Notifications'
        },
        {
            name: 'Privacy'
        }
    ];

    const handleTabChange = (event, newIndex) => {
        setTabIndex(newIndex);
    };
    const handleViewChangeIndex = (index) => {
        setTabIndex(index);
    };

    const Profile = () => {
        return (
            <div className="2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-10 py-5">
                <Grid container className="pt-4 pb-2">
                    <Grid item xl={12} lg={12} xs={12} className="xl:pr-2">
                        <div className="py-2">
                            <div className="w-[200px] h-[200px] mx-auto relative">
                                <img src={usericon} alt="user" width="200" height="200" className="rounded-full" />
                                <img src={editicon} alt="pencil" className="absolute bottom-8 right-0" />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xl={12} lg={12} xs={12}>
                        <TextField
                            id="standard-helperText"
                            label="First Name"
                            defaultValue="Jonathan"
                            className="w-6/7 mt-3 mb-3"
                        />
                        <TextField
                            id="standard-helperText"
                            label="Last Name"
                            defaultValue="Doe"
                            className="w-6/7 mt-3 mb-3"
                        />
                        <TextField
                            id="standard-helperText"
                            placeholder="Headline"
                            className="w-6/7 mt-3 mb-3"
                        />
                        <TextField
                            id="standard-select-currency"
                            select
                            label="Language"
                            value={language}
                            onChange={handleChange}
                            className="w-6/7 mt-3 mb-3"
                        >
                            {languages.map((option) => (
                                <MenuItem key={option.value} value={option.value}>{option.value}</MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="standard-helperText"
                            label="Link"
                            defaultValue="www.kitani.io"
                            className="w-6/7 mt-3 mb-3"
                        />
                    </Grid>
                    <Grid item xl={12} lg={12} xs={12} className="xl:pr-2 mt-5 flex justify-center">
                        <img src={saveButton} alt="Save" />
                    </Grid>
                </Grid>
            </div>
        );
    }

    const Personalisation = () => {
        return (
            <>
                <div className="2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-10 py-5">

                </div>
            </>
        );
    }
    const PaymentMethods = () => {
        return (
            <>
                <div className="2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-10 py-5">
                    <Grid container className="pt-4 pb-2">
                        <Grid item xl={12} lg={12} xs={12} className="xl:pr-2 flex justify-center">
                            <img src={membershipImage} alt="membership" />
                        </Grid>
                        <Grid item xl={12} lg={12} xs={12} className="xl:pr-2 flex justify-center">
                            <h1 className="font-bold text-center mb-4 text-3xl mt-10">You don’t have any subscriptions</h1>
                        </Grid>
                        <Grid item xl={12} lg={12} xs={12} className="xl:pr-2 flex justify-center">
                            <img className="mt-5" src={membershipButton} alt="membership" />
                        </Grid>
                    </Grid>
                </div>
            </>
        );
    }
    const Notifications = () => {
        return (
            <>
                <Grid container>
                    <Grid item lg={1}></Grid>
                    <Grid item xs={12} lg={10}>
                        <List className="">
                            {[0, 1, 2, 3].map((value) => {
                                const labelId = `checkbox-list-label-${value}`;

                                return (
                                    <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={checked.indexOf(value) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId}>
                                            <h1 className="text-objectblack font-bold">Updates from Classes you’re taking</h1>
                                            <p1>Public discussions outside of a class that teachers share to all of their followers.</p1>
                                        </ListItemText>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Grid>
                    <Grid item lg={1}></Grid>
                </Grid>
                <div className="flex justify-center">
                    <img src={saveButton} alt="Save" />
                </div>
            </>
        );
    }
    const Privacy = () => {
        return (
            <>
                <Grid container>
                    <Grid item lg={1}></Grid>
                    <Grid item xs={12} lg={10}>
                        <Card className="border-solid border-1 mt-3">
                            <CardContent>
                                <h1 className="font-bold text-left mb-4 text-3xl">Privacy policy</h1>
                                <p1>Nisl neque eu lacus, adipiscing purus cursus lacinia. Amet ac mattis quisque amet ut pharetra ac tellus. In nibh purus risus lacus, arcu phasellus aenean dapibus. Augue dolor condimentum mauris enim mattis nulla cras. A habitant tincidunt gravida arcu cursus vitae urna porta. Sit commodo scelerisque elit amet, dictum dapibus. Purus risus fames leo tincidunt. Mauris vel quam porta ut elementum massa id mauris aliquam. Tortor scelerisque nisl ullamcorper in vitae erat senectus non. Nunc ut fusce dictumst feugiat vitae, est fringilla. Vel eget id eu non vitae lacus eros, vitae nullam. At sed odio non tellus faucibus malesuada lorem penatibus lectus.
                                    In tempus amet massa imperdiet.<br /><br /> Dignissim sit at semper id duis eu sollicitudin iaculis. Consequat, nulla amet ullamcorper urna dictum. Enim, lacinia tempor eu adipiscing cras lectus vivamus tristique. Quam aliquet aenean arcu at diam enim, leo. Ac neque placerat orci erat. Sed eu dictum ac interdum morbi posuere. Tellus vitae facilisis tempus mauris risus, orci, ullamcorper justo. In nullam enim sit aenean odio semper amet. Duis in donec pellentesque quisque dignissim integer nunc. Nullam pretium senectus felis quam eleifend vitae.
                                    Id cursus quam pellentesque id.<br /><br /> A vel nunc ut sapien accumsan, morbi placerat aenean. Sed lacus, lectus adipiscing ut ac est auctor. Porttitor vitae aliquam dolor aenean netus quam. Ut a placerat lectus egestas. Fringilla arcu iaculis mauris consectetur dictum scelerisque tempus vitae pellentesque. A eu mi aliquet sagittis tristique lacus a egestas imperdiet. Egestas donec quisque mattis donec lectus nunc eget placerat adipiscing. In massa ultricies parturient urna. Elit egestas elementum, cras urna feugiat etiam. Mi faucibus sit metus eleifend diam neque neque eu tortor.
                                    Tellus vitae arcu, pellentesque proin in. <br /><br /> Hendrerit vulputate nulla eget lobortis amet ac. Amet elementum dui condimentum facilisi aliquet. Vitae fermentum bibendum vitae in et cum leo. Neque praesent pellentesque tempus, id venenatis arcu. Donec velit aliquam sed elit.
                                    Diam magna a augue id in. Urna egestas donec lobortis nam neque nibh. Cras et ultrices enim scelerisque augue malesuada. Blandit aliquet lectus elementum fames ut lectus mauris commodo est. Mi quis arcu pharetra, ultrices eget massa eget integer.
                                    Vitae in ullamcorper gravida vestibulum, mi orci eget tempus. Nulla etiam diam id tortor. Ac lectus duis feugiat eu tellus lorem arcu tempor. Ipsum sed facilisis sollicitudin proin purus. Quis fringilla adipiscing dictum urna in lectus enim ultrices vestibulum. Semper nunc, tristique lectus nunc gravida nunc et tempus non. At vulputate egestas fringilla lorem bibendum eros bibendum.</p1>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={1}></Grid>
                </Grid>
            </>
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
            <Grid className="2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-10 py-5">

                <h1 className="font-bold text-center mb-4 text-3xl">My Account</h1>
                <AppBar position="static" className="bg-white text-black shadow-none">
                    <div className="flex justify-center">
                        <Tabs className="nav-tabs" value={tabIndex} onChange={handleTabChange} variant="scrollable" scrollButtons="off" aria-label="setting tabs">
                            {accountTabs && Object.keys(accountTabs).length > 0 && accountTabs.map((st) => (
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
                        <Profile />
                    </div>
                    <div
                        role="tabpanel"
                        hidden={tabIndex !== 1}
                    >
                        <Personalisation />
                    </div>
                    <div
                        role="tabpanel"
                        hidden={tabIndex !== 2}
                    >
                        <PaymentMethods />
                    </div>
                    <div
                        role="tabpanel"
                        hidden={tabIndex !== 3}
                    >
                        <Notifications />
                    </div>
                    <div
                        role="tabpanel"
                        hidden={tabIndex !== 4}
                    >
                        <Privacy />
                    </div>
                </SwipeableViews>
            </Grid>

            <Footer />
        </>
    );
}

export default withRouter(Account);