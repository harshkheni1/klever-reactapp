import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Radio, Accordion, AccordionSummary, Typography, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function LevelFilter() {

    const [selectedValue2, setSelectedValue2] = useState('');

    const handleChange2 = (event) => {
        setSelectedValue2(event.target.value);
    };
    const [expanded, setExpanded] = React.useState(false);

    const handleChange3 = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange3('panel4')} className="shadow-none" >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography className="font-bold">Level</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="flex-none">
                        <div className="flex">
                            <Radio
                                checked={selectedValue2 === 'd'}
                                onChange={handleChange2}
                                value='d'
                            />
                            <p className="text-grey mt-2 ml-2">All Levels</p>
                        </div>
                        <div className="flex">
                            <Radio
                                checked={selectedValue2 === 'e'}
                                onChange={handleChange2}
                                value='e'
                            />
                            <p className="text-grey mt-2 ml-2">Beginner</p>
                        </div>
                        <div className="flex">
                            <Radio
                                checked={selectedValue2 === 'f'}
                                onChange={handleChange2}
                                value='f'
                            />
                            <p className="text-grey mt-2 ml-2">Intermediate</p>
                        </div>
                        <div className="flex">
                            <Radio
                                checked={selectedValue2 === 'g'}
                                onChange={handleChange2}
                                value='g'
                            />
                            <p className="text-grey mt-2 ml-2">Advanced</p>
                        </div>
                    </div>

                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default LevelFilter;