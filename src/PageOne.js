import React from "react";
import {useParams } from 'react-router-dom'
import {useLocation } from 'react-router-dom'
const PageOne = () => {
    let id = useParams ();
    let location = useLocation()
    console.log(id);
    console.log(location);
  return <div>PageOne</div>;
};

export default PageOne;
