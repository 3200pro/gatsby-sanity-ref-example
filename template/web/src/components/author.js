import { propTypes } from "@sanity/block-content-to-react";
import React from "react";

const Author = ({name}) => {
  return (
    <div className='text-center w-full bg-yellow-500 p-12'>
      <h1 className='text-2xl'>This Name Should Update When Changed For Author:</h1>
      <p>Name: {name}</p>
    </div>
  );
};

export default Author;
