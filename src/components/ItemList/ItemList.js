import React , {useState} from "react";
import { ReactDOM } from "react";
import { TiTick } from "react-icons/ti";

const ItemList = (props) =>{

    const {inputData , setInputData} = props;
    const [completeState , setCompleteState] = useState();
    console.log(inputData);
    {/* inside the list we have two things one is unchecked  circle 
         and another is list 
     */}
     const handleClick = (e , input , id) =>{
         console.log("input and targeted value" , e ,input);
      setInputData((prevData) =>
      prevData?.map((item) =>
      item?.id === id ? { ...item, checked: !item.checked } : item
    )
  );
        console.log("div is being clicked");

     }

    return (
        <>
      
        {inputData?.map((input)=> {
            return(
               <div
                 style = {{
                    display : 'flex',
                    width : '60%',
                    borderBottom : '2px solid #000000',
                    justifyContent:'center',
                    alignItems:'center',
                    gap:'2em',
                    padding:'5px'
                 }}
                 
               >
                 <div
                   style = {{
                     width : '40px',
                     height : '40px',
                     borderRadius:'50%',
                     border:'1px solid #36802D',
                     display : 'flex',
                     alignItems:'center',
                     justifyContent:'center'
                   }}
                   onClick={(e) => handleClick(e,input , input?.id)}
                 >
                  {input?.checked === true ?  
                    <TiTick
                     width = "10px"
                     height = "10px"
                    /> : null}
                 </div>
                 <div
                  style = {{
                     fontSize : '16px',
                     fontColor : '#000000',
                     flexGrow:'1',
                     textDecoration:input?.checked === true ? 'underline' : '',
                     cursor : input?.checked === true ? '' : 'pointer'
                    //  H2 { text-decoration: line-through }

                  }}
                 >{input?.value}</div>
               </div>
            )
        })}
        </>
    )
}
export default ItemList;