import React, { FC } from 'react';
import Base64Coding from './Base64Coding';
import BHDConverter from './BHDConverter';
import GPACalcualtor from './GPACalcualtor';

const Works: FC = () => {
  return (
    <div>
      {/* <div style={{ height: '100px', backgroundColor: '#000' }}></div> */}
      <Base64Coding />
      <BHDConverter />
      <GPACalcualtor />
      {/* <div style={{ height: '100px', backgroundColor: '#000' }}></div> */}
    </div>
  );
};

export default Works;
