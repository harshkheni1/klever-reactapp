import React from "react";

import { Grid, Card, CardContent} from "@material-ui/core";

import notificationImage1 from '../assets/images/notificationimage1.png';
import notificationImage2 from '../assets/images/notificationimage2.png';
import notificationImage3 from '../assets/images/notificationimage3.png';
import notificationImage4 from '../assets/images/notificationimage4.png';
import notificationImage5 from '../assets/images/notificationimage5.png';

function NotificationDrawer() {


    return (
        <div>
            <Card className="shadow-none">
                <CardContent>
                    <Grid container>
                        <Grid item xs={3}>
                            <img className="mr-5" src={notificationImage1} alt="item" />
                        </Grid>
                        <Grid item xs={9}>
                            <h1 className="font-bold">Kitani Studio:</h1>
                            <h2 className="font-normal"> posted a new discussion</h2>
                        </Grid>
                    </Grid>
                    <div className="flex justify-between">
                        <p1>5 days ago</p1>
                        <button className="border border-red-600"><p1 className="m-5 text-red">Comment</p1></button>
                    </div>
                </CardContent>
            </Card>
            <Card className="shadow-none">
                <CardContent>
                    <Grid container>
                        <Grid item xs={3}>
                            <img className="mr-5" src={notificationImage2} alt="item" />
                        </Grid>
                        <Grid item xs={9}>
                            <h1 className="font-bold">Kitani Studio:</h1>
                            <h2 className="inline-flex font-normal">replied on a new discussion</h2>
                        </Grid>
                        <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p1>
                    </Grid>
                    <div className="flex justify-between">
                        <p1>5 days ago</p1>
                        <button className="border border-red-600"><p1 className="m-5 text-red">Comment</p1></button>
                    </div>
                </CardContent>
            </Card>
            <Card className="shadow-none">
                <CardContent>
                    <Grid container>
                        <Grid item xs={3}>
                            <img className="mr-5" src={notificationImage5} alt="item" />

                        </Grid>
                        <Grid item xs={9}>
                            <h1 className="font-bold">Kitani Studio</h1>
                            <h2 className="inline-flex font-normal">replied on a new discussion</h2>
                        </Grid>
                        <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p1>
                    </Grid>
                    <div className="flex justify-between">
                        <p1>5 days ago</p1>
                        <button className="border border-red-600"><p1 className="m-5 text-red">Comment</p1></button>
                    </div>
                </CardContent>
            </Card>
            <Card className="shadow-none">
                <CardContent>
                    <Grid container>
                        <Grid item xs={3}>
                            <img className="mr-5" src={notificationImage3} alt="item" />

                        </Grid>
                        <Grid item xs={9}>
                            <h1 className="font-bold">Kitani Studio:</h1>
                            <h2 className="inline-flex font-normal">replied on a new discussion</h2>
                        </Grid>
                        <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p1>
                    </Grid>
                    <div className="flex justify-between">
                        <p1>5 days ago</p1>
                        <button className="border border-red-600"><p1 className="m-5 text-red">Comment</p1></button>
                    </div>
                </CardContent>
            </Card>
            <Card className="shadow-none">
                <CardContent>
                    <Grid container>
                        <Grid item xs={3}>
                            <img className="mr-5" src={notificationImage4} alt="item" />

                        </Grid>
                        <Grid item xs={9}>
                            <h1 className="font-bold">Kitani Studio:</h1>
                            <h2 className="inline-flex font-normal">replied on a new discussion</h2>
                        </Grid>
                        <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p1>
                    </Grid>
                    <div className="flex justify-between">
                        <p1>5 days ago</p1>
                        <button className="border border-red-600"><p1 className="m-5 text-red">Comment</p1></button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default NotificationDrawer;