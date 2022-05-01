import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';

import { Grid, CardContent, CardActionArea, Card, Box, LinearProgress} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';

import personIcon from '../assets/images/personoutline.svg';
import setting from '../assets/images/settingToggle.svg';

function CourseCard({cardHeading,cardName,cardAmount,cardMaxAmount,cardRatingValue,cardImage,cardDescription, finalDuration, hidden, visible}) {
    const [value] = useState(cardRatingValue);
    const [test, setTest] = useState([]);

    useEffect(() => {
        setTest(value)
      });
      
    localStorage.setItem('ratingValue' , test);
    console.log("gfnkjlf" , test)

    return (
        <div className="">
            <Grid container className="">
                <Card className="mb-5 mr-5 shadow-sm">
                    <CardActionArea>
                        <img src={cardImage} alt="course" />
                        <div className={hidden}>
                        <img src={setting} alt="setting" className="settingAlligment"/>
                        <LinearProgress variant="determinate" value={finalDuration} className="progressBar" />
                        </div>
                        <CardContent>
                            <h1 className="font-bold mb-1">{cardHeading}</h1>
                            <h2 className="flex inline text-red mb-1"><img className="mr-2" src={personIcon} alt="person icon" />{cardName}</h2>
                            <p>{cardDescription}</p>
                            <Box component="fieldset" borderColor="transparent" className="flex inline mb-1">
                                <Rating  name="read-only" value={value} readOnly />
                                <p className="text-objectblack">(1.2k)</p>
                            </Box>
                            <h1 className="flex inline font-bold">{cardAmount}<p className="ml-2 line-through font-normal">{cardMaxAmount}</p></h1>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </div>
    );
}

CourseCard.propTypes = {
    cardHeading: PropTypes.string,
    cardName: PropTypes.string,
    cardAmount: PropTypes.string,
    cardMaxAmount: PropTypes.string,
    cardRatingValue: PropTypes.number,
    cardImage: PropTypes.string,
    cardDescription: PropTypes.string,
    finalDuration: PropTypes.string,
    hidden: PropTypes.string,
    visible: PropTypes.string,
}

export default CourseCard;