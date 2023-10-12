import { Hourglass } from  'react-loader-spinner'

import "./Personal.css";

const Personal = () => {
  return (
    <div className="PersonalSpaceContainer">
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
      <p className="personal_heading">Personal Space</p>
      <h1>Coming Soon...</h1>
      
    </div>
  );
};

export default Personal;
