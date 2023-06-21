import React, { useEffect, useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("takle");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  //if the text is empty --- then the && operator returns nothing, else it returns text to the right of the && operator
  //if the text is empty --- then the || operator returns the concatenation result or else returns text to the left of the || operator

  return (
    <>
      <h1>{firstValue}</h1>
      <h2>value: {secondValue}</h2>

      {text && <h3>Yeh kya hain, takle?</h3>}
    </>
  );
};

export default ShortCircuit;
