import React from "react";
import Hoc from "./Hoc/Hoc";

const Ahamed = (props) => {
  return (
    <div>
      <h3>Ahamed Friend : {props.handleFriendCount}</h3>
      <button onClick={props.handleIncrementFriend}>Add Friend</button>
      <button onClick={props.handleDecrementFriend}>Dec Friend</button>
    </div>
  );
};

export default Hoc(Ahamed);
