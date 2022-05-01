import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Checkbox, Accordion, AccordionSummary, Typography, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function CategoryFilter() {
    const [checkState2, setCheckState2] = useState('')

    const handleChangeCheckbox2 = (event) => {
        setCheckState2(event.target.value);
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
                    <Typography className="font-bold">Categories</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="flex-none">
                        <div className="flex">
                            <Checkbox checked={checkState2 === 'E'} onChange={handleChangeCheckbox2} value='E' />
                            <p className="text-grey mt-2 ml-2">Design (3.2K)</p>
                        </div>
                        <div className="flex">
                            <Checkbox checked={checkState2 === 'F'} onChange={handleChangeCheckbox2} value='F' />
                            <p className="text-grey mt-2 ml-2">Programming (1.4K)</p>
                        </div>
                        <div className="flex">
                            <Checkbox checked={checkState2 === 'G'} onChange={handleChangeCheckbox2} value='G' />
                            <p className="text-grey mt-2 ml-2">Business & Marketing (809)</p>
                        </div>
                        <div className="flex">
                            <Checkbox checked={checkState2 === 'H'} onChange={handleChangeCheckbox2} value='H' />
                            <p className="text-grey mt-2 ml-2">Finance (548)</p>
                        </div>
                        <div className="flex">
                            <Checkbox checked={checkState2 === 'I'} onChange={handleChangeCheckbox2} value='I' />
                            <p className="text-grey mt-2 ml-2">Music & Film (1.9K)</p>
                        </div>
                        <div className="flex">
                            <Checkbox checked={checkState2 === 'J'} onChange={handleChangeCheckbox2} value='J' />
                            <p className="text-grey mt-2 ml-2">Photo & Video (2.3K)</p>
                        </div>
                        <div className="flex">
                            <Checkbox checked={checkState2 === 'K'} onChange={handleChangeCheckbox2} value='K' />
                            <p className="text-grey mt-2 ml-2">Writing (753)</p>
                        </div>
                    </div>

                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default CategoryFilter;