import React, { useState } from 'react';

import Individualstar from './ReviewComponents/Individualstar';

const Stars = ({ numberofStars }) => {
  const [numberofstars, setNnumberofStars] = useState([]);

  return (
    <div className='inline-flex'>
      {(function svg() {
        if (numberofStars == 0) {
          return null;
        } else if (numberofStars == 1) {
          return <Individualstar />;
        } else if (numberofStars == 2) {
          return (
            <>
              <Individualstar />
              <Individualstar />
            </>
          );
        } else if (numberofStars == 3) {
          return (
            <>
              <Individualstar />
              <Individualstar />
              <Individualstar />
            </>
          );
        } else if (numberofStars == 4) {
          return (
            <>
              <Individualstar />
              <Individualstar />
              <Individualstar />
              <Individualstar />
            </>
          );
        } else if (numberofStars == 5) {
          return (
            <>
              <Individualstar />
              <Individualstar />
              <Individualstar />
              <Individualstar />
              <Individualstar />
            </>
          );
        }
      })()}
    </div>
  );
};

export default Stars;
