import React from "react";

const ListItem = (props) => {
  const { className, data } = props;
  return (
    <div>
      <hr></hr>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li className={className}>{data}</li>
      </ul>
    </div>
  );
};

export default ListItem;
