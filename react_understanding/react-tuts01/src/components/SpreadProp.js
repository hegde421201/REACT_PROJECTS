import React from "react";
import DemoComponent from "./DemoComponent";

const SpreadProp = () => {
  const product = [
    { pCode: 1003, pName: "Caramel" },
    { pCode: 1004, pName: "Almond" },
    { pCode: 1006, pName: "Gulab" },
  ];

  const listJsx = product.map((elem) => <DemoComponent {...elem} />);

  return (
    <div>
      <p></p>
      {listJsx}
    </div>
  );
};

export default React.memo(SpreadProp);
