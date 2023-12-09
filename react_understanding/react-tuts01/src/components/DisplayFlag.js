import React from "react";

const DisplayFlag = (props) => {
  console.log("Display flag rendered");
  return (
    <div>
      <h2>Flag :{props.flag.toString()}</h2>
    </div>
  );
};

export default React.memo(DisplayFlag);

//React.memo() ensures stoppage of unnecessary rendering
//useCallback() hook does the same job of stopping unnecessary rendering
