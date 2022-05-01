import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Radio, Accordion, AccordionSummary, Typography, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Rating from '@material-ui/lab/Rating';

function RatingFilter({ onHandleRatingOne }) {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const [expanded, setExpanded] = React.useState(false);

    const handleChange2 = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange2('panel4')} className="shadow-none" >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography className="font-bold">Rating</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="flex-none">
                        <div className="flex">
                            <Radio
                                checked={selectedValue === 'a'}
                                onChange={handleChange}
                                onClick={onHandleRatingOne}
                                value='a'
                            />
                            <Rating name="read-only" defaultValue={4.5} precision={0.5} readOnly className="mt-2" />
                            <p className="text-grey mt-2 ml-2">4.5 & up (5.8K)</p>
                        </div>
                        <br />
                        <div className="flex -mt-6">
                            <Radio
                                checked={selectedValue === 'b'}
                                onChange={handleChange}
                                value='b'
                            />
                            <Rating name="read-only" defaultValue={3.5} precision={0.5} readOnly className="mt-2" />
                            <p className="text-grey mt-2 ml-2">3.5 & up (1.2K)</p>
                        </div>
                        <div className="flex">
                            <Radio
                                checked={selectedValue === 'c'}
                                onChange={handleChange}
                                value='c'
                            />
                            <Rating name="read-only" defaultValue={2.5} precision={0.5} readOnly className="mt-2" />
                            <p className="text-grey mt-2 ml-2">3.0 & up (867)</p>
                        </div>
                    </div>

                </AccordionDetails>
            </Accordion>
        </div>
    );
}

RatingFilter.propTypes = {
    onHandleRatingOne: PropTypes.string,
}

export default RatingFilter;