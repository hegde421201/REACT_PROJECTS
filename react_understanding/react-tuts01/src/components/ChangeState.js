import React from "react";

const ChangeState = (props) => {
  console.log("ChangeState rendered");

  const btnStyle = { height: "50px", width: "150px", margin: "5px" };

  return (
    <div className="ChangeState">
      <button style={btnStyle} onClick={props.click}>
        {props.caption}
      </button>
    </div>
  );
};

export default React.memo(ChangeState);
