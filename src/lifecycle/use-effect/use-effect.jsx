import React, { useEffect } from 'react';
const Useeffect = (props)=>{
  useEffect(()=>{
    console.log("use-effect");
    return console.log("clean up");
  });
  return (
    <div>Useeffect</div>
  )
}
export default Useeffect;
