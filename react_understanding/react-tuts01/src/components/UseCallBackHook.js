import React, { useCallback, useState } from "react";
import HeaderC from "./HeaderC";
import Footer from "./Footer";
import DisplayCounter from "./DisplayCounter";
import DisplayFlag from "./DisplayFlag";
import ChangeState from "./ChangeState";
const UseCallBackHook = () => {
  const [counter, setCounter] = useState(0);
  const [mFlag, setFlag] = useState(true);

  const changeCounter = useCallback(() => {
    setCounter(1 + counter);
  }, [counter]);

  const changeFlag = useCallback(() => {
    setFlag(!mFlag);
  }, [mFlag]);

  return (
    <div>
      <HeaderC />
      <DisplayCounter counter={counter} />
      <DisplayFlag flag={mFlag} />
      <ChangeState caption="Change counter" click={changeCounter} />
      <ChangeState caption="Change flag" click={changeFlag} />
      <Footer />
    </div>
  );
};

export default UseCallBackHook;

/**
  Memoization is a term used in computing for optimizing the performance by storing the results of
  expensive functions and returning the cached results.

  By using the usecallback() and React.memo(), we practically improve the performance by making sure that the 
  components are not rendered unnecessarily.
 */
