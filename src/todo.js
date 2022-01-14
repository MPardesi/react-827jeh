import React,{useState} from 'react';
function todo()
{
  let [arr,setArr]=useState([]);
  let[text,setText]=useState('');
  let add=()=>{
    if(text!=="")
    {
      setArr([...arr,text]);
      setText('');
    }
  };
  console.log("Rendered");
  return(
    <div>
      <input type="text" 
      placeholder="add some text" 
      value={text}
      onChange={(e)=>{
        setText(e.target.value);
      }}/>
      <button onClick={add}>Add</button>
      <div>
        Todos:
        {arr.map((ele)=>(<p>{ele}</p>))};
      </div>
    </div>
  );
}

export default todo;