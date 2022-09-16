import React from "react";
import Hoc from "./Hoc/Hoc";

const Syed = (props) => {
  return (
    <div>
      <h3>Syed Friend : {props.handleFriendCount}</h3>
      <button onClick={props.handleIncrementFriend}>Add Friend</button>
      <button onClick={props.handleDecrementFriend}>Dec Friend</button>
    </div>
  );
};

export default Hoc(Syed);
