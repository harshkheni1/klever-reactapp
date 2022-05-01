import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Grid, AppBar, Tabs, Tab, InputBase, CardContent, Card, Modal, TextField, InputAdornment, Radio, Divider } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import primary from '../assets/images/primarycard.svg';
import secondry from '../assets/images/secondrycard.svg';
import creditCard from '../assets/images/creditcard.svg';
import paypal from '../assets/images/paypal.svg';
import close from '../assets/images/close.svg';
import courseImage from '../assets/images/courseiamge4.png';
import checkout from '../assets/images/checkout.svg';

function PaymentModal() {
    const [tabIndex, setTabIndex] = useState(0);
    const [selectedValue, setSelectedValue] = useState('');


    const handleTabChange = (event, newIndex) => {
        setTabIndex(newIndex);
    };
    const handleViewChangeIndex = (index) => {
        setTabIndex(index);
    };
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const paymentTabs = [
        {
            name: 'Payment Method'
        },
        {
            name: 'Checkout'
        }
    ];

    const PaymentMethod = ({handleClose}) => {
        return (
            <div className="m-5">
                <h1 className="font-bold">Saved cards</h1>

                <TextField
                    id="outlined-password-input"
                    placeholder="Visa ending in 2006 - 4/2023"
                    variant="outlined"
                    className="w-6/7 mb-5 mt-5"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <img src={primary} alt="primary" />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    id="outlined-password-input"
                    placeholder="Rupay ending in 2006 - 4/2023"
                    variant="outlined"
                    className="w-6/7 mb-5"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <img src={secondry} alt="secondry" />
                            </InputAdornment>
                        ),
                    }}
                />

                <h1 className="font-bold">Other methods</h1>
                <div className="flex mt-5">
                <Radio
                        checked={selectedValue === 'a'}
                        onChange={handleChange}
                        value='a'
                    />
                    <img className="ml-5" src={creditCard} alt="Card" />
                    <p1 className="text-grey ml-5 mt-2">Credit Card</p1>
                </div>
                <div className="flex mt-5">
                <Radio
                        checked={selectedValue === 'b'}
                        onChange={handleChange}
                        value='b'
                    />
                    <img className="ml-5" src={creditCard} alt="Card" />
                    <p1 className="text-grey ml-5 mt-2">Debit Card</p1>
                </div>
                <div className="flex mt-5">
                <Radio
                        checked={selectedValue === 'c'}
                        onChange={handleChange}
                        value='c'
                    />
                    <img className="ml-5" src={paypal} alt="Paypal" />
                    <p1 className="text-grey ml-5 mt-2">Paypal</p1>
                </div>

            </div>
        );
    }
    const Checkout = () => {
        return (
            <div className="2xl:px-60 xl:px-40 lg:px-24 px-12 lg:py-10 py-5 flex justify-between">

            </div>
        );
    }


    return (
        <div>
            <Grid container xs={12}>
                <Grid item lg={8} md={12} sm={12} xs={12}>
                    <AppBar position="static" className="bg-white text-black border-none shadow-none">
                        <div className="flex">
                            <Tabs className="nav-tabs" value={tabIndex} onChange={handleTabChange} variant="scrollable" scrollButtons="off" aria-label="setting tabs">
                                {paymentTabs && Object.keys(paymentTabs).length > 0 && paymentTabs.map((st) => (
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
                            <PaymentMethod />
                        </div>
                        <div
                            role="tabpanel"
                            hidden={tabIndex !== 1}
                        >
                            <Checkout />
                        </div>
                    </SwipeableViews>
                </Grid>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                <div className="m-5 flex justify-between">
                <h1>Order Summary</h1>
                <img  src={close} alt="close" />
                {/* <button onClick={handleClose}><img  src={close} alt="close" /></button> */}
                </div>
                <Grid container xs={12}>
                    <Grid item xs={6}>
                        <img className="mt-3 rounded-lg" src={courseImage} alt="Course" />
                    </Grid>
                    <Grid item xs={6}>
                        <div className="mt-3 ml-3">
                        <h1 className="font-bold text-3X1">Make Uber Clone App</h1>
                        <p1 className="text-red">Steven Arnatouvic</p1>
                        </div>
                    </Grid>
                </Grid>
                <Card className="shadow-none">
                    <CardContent className="m-3">
                        <div className="flex justify-between mt-3">
                            <p1 className="text-grey">Last Price</p1>
                            <p2 className="text-grey">$2,999.00</p2>
                        </div>
                        <div className="flex justify-between mt-3">
                            <p1 className="text-grey">Discount</p1>
                            <p2 className="text-red">-$749.75</p2>
                        </div>
                        <div className="flex justify-between mt-3">
                            <p1 className="text-grey">Special Offer</p1>
                            <p2 className="text-red">-$750.00</p2>
                        </div>
                        <div className="flex justify-between mt-3">
                            <p1 className="text-grey">Price</p1>
                            <p2 className="text-grey">$1,499.25</p2>
                        </div>
                        <Divider className="mt-3"/>
                        <div className="flex justify-between mt-3">
                            <p1 className="text-grey">Total</p1>
                            <p2 className="text-grey">$1500.00</p2>
                        </div>
                        <Divider className="mt-3"/>
                        <div className="flex justify-between mt-3 mb-3">
                            <p1 className="text-grey">You pay</p1>
                            <p2 className="text-green">$1500.00</p2>
                        </div>
                        <img className="m-3" src={checkout} alt="checkout" />
                    </CardContent>
                </Card>
                

                </Grid>

            </Grid>

        </div>
    );
}

PaymentModal.propTypes = {
    handleClose: PropTypes.string,
}

export default PaymentModal;