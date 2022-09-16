import React, { useState } from "react";

const Hoc = (User) => {
  const Newuser = () => {
    const [count, setCount] = useState(0);
    const incrementFriend = () => {
      setCount(count + 1);
    };
    const decrementFriend = () => {
      setCount(count - 1);
    };
    return (
      <div>
        <User
          handleIncrementFriend={incrementFriend}
          handleDecrementFriend={decrementFriend}
          handleFriendCount={count}
        />
      </div>
    );
  };
  return Newuser;
};

export default Hoc;
