import React, { useEffect, useState } from "react";

const Ternary = () => {
  const [error, setError] = useState("");

  return (
    <>
      <button className="btn" onClick={() => setError(!error)}>
        Toggle error
      </button>
      {error && <h1>Error...</h1>}
      {error ? (
        <p>Sky is the limit</p>
      ) : (
        <div>
          <h2>Rock bottom!</h2>
        </div>
      )}
    </>
  );
};

export default Ternary;
