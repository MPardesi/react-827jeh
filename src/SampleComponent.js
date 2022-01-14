import React from 'react';

export default function SampleComponent({bgColor}){
  let styleObj={backgroundColor:bgColor};
  let a=10;
  let b=20;
  return(
    <>
    <div style={styleObj}>Heading</div>
    <div>Value of a is:{a}</div>
    <div>Value of b is:{b}</div>
    <div>
      Sum of {a} and {b} is:{a+b}
      </div>
    </>
  );
}