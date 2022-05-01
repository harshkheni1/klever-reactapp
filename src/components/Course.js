import React from "react";
import PropTypes from 'prop-types';

import { Grid, CardContent, CardActionArea, Card, Box} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';

import personIcon from '../assets/images/personoutline.svg';

const Course = ({ course , ratingValue }) => {
   
    return (
        <div className="">
            <Grid container xs={12} className="">
            {course.map(index => (
                <Grid item lg={4} md={6} className="flex">
                <Card className="mb-5 mr-5 shadow-sm">
                    <CardActionArea>
                        <img src={index.image} alt="course" />
                        <CardContent>
                            <h1 className="font-bold mb-1">{index.heading}</h1>
                            <h2 className="flex inline text-red mb-1"><img className="mr-2" src={personIcon} alt="person icon" />{index.name}</h2>
                            <p>{index.discription}</p>
                            <Box component="fieldset" borderColor="transparent" className="flex inline mb-1">
                                <Rating  name="read-only" value={index.ratingValue} readOnly />
                                <p className="text-objectblack">(1.2k)</p>
                            </Box>
                            <h1 className="flex inline font-bold">{index.discountPrice}<p className="ml-2 line-through font-normal">{index.originalPrice}</p></h1>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
                 ))}
            </Grid>
        </div>
    );
}

Course.propTypes = {
    ratingValue: PropTypes.string,
}



export default Course;