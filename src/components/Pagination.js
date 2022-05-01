import React from 'react';

import { Grid } from '@material-ui/core';

const Pagination = ({ coursePerPage, totalCourse, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCourse / coursePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8} className="mb-5 md:mb-0">
          <ul className='flex'>
            {pageNumbers.map(number => (
              <li key={number} className='border border-grey ml-3 rounded'>
                <a onClick={() => paginate(number)} href='#' className='m-3'>
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </nav>
  );
};

export default Pagination;