import React, { useState } from 'react';

import { Radio, Accordion, AccordionSummary, Typography, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function SoftwareFilter() {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const [expanded, setExpanded] = React.useState(false);

    const handleChange2 = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="">
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange2('panel4')} className="shadow-none" >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography className="font-bold">Software</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="flex-none">
                        <div className="flex">
                            <Radio
                                checked={selectedValue === 'b'}
                                onChange={handleChange}
                                value='b'
                            />
                            <p className="mt-2 ml-2">Option 1</p>
                        </div>
                        <br />
                        <div className="flex -mt-6">
                            <Radio
                                checked={selectedValue === 'c'}
                                onChange={handleChange}
                                value='c'
                            />
                            <p className="mt-2 ml-2">Option 1</p>

                        </div>
                        <div className="flex">
                            <Radio
                                checked={selectedValue === 'd'}
                                onChange={handleChange}
                                value='d'
                            />
                            <p className="mt-2 ml-2">Option 1</p>

                        </div>
                    </div>

                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default SoftwareFilter;