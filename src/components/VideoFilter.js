import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Checkbox, Accordion, AccordionSummary, Typography, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function VideoFilter() {
    const [checkState, setCheckState] = useState('')

    const handleChangeCheckbox = (event) => {
        setCheckState(event.target.value);
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
                    <Typography className="font-bold">Video Duration</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="flex-none">
                        <div className="flex">
                            <Checkbox checked={checkState === 'A'} onChange={handleChangeCheckbox} value='A' />
                            <p className="text-grey mt-2 ml-2">0-2 Hours (9.4K)</p>
                        </div>
                        <div className="flex">
                            <Checkbox checked={checkState === 'B'} onChange={handleChangeCheckbox} value='B' />
                            <p className="text-grey mt-2 ml-2">3-5 Hours (4.1K)</p>
                        </div>
                        <div className="flex">
                            <Checkbox checked={checkState === 'C'} onChange={handleChangeCheckbox} value='C' />
                            <p className="text-grey mt-2 ml-2">6-12 Hours (3.8K)</p>
                        </div>
                        <div className="flex">
                            <Checkbox checked={checkState === 'D'} onChange={handleChangeCheckbox} value='D' />
                            <p className="text-grey mt-2 ml-2">12+ Hours (1K)</p>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default VideoFilter;