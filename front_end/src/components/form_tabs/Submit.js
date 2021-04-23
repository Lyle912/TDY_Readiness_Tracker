import React from "react";

export default function Submit ({ navigation }){
  const { go } = navigation;
  return (
    <div>
      <h3 style={{color:"white"}}>Thank you for submitting.</h3>
        <button onClick={() => go("names")}>New Member</button>
    </div>
  );
};