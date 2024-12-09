import Base64Coding from './Base64Coding';
import BHDConverter from './BHDConverter';
import GPACalcualtor from './GPACalcualtor';

export const Works = () => {
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
