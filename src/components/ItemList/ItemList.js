import React , {useState} from "react";
import { ReactDOM } from "react";
import { TiTick } from "react-icons/ti";
import { MdOutlineDelete } from "react-icons/md";


const ItemList = (props) =>{

    const {inputData , setInputData} = props;
    const[updatedValue , setUpdatedValue] = useState('');
     console.log(inputData);
    {/* inside the list we have two things one is unchecked  circle 
         and another is list 
     */}
     const handleClick = (e , input , id) =>{
      setInputData((prevData) =>
      prevData?.map((item) =>
      item?.id === id ? { ...item, checked: !item.checked } : item
    )
  );

     }
     const updateInput = (id) => {
        setInputData((prev)=>
           prev?.map((item)=>
              item?.id === id ? {...item , updateInput : true} : item
           )
        );
     }
     const inputUpdation = (e) =>{
      setUpdatedValue(e.target.value);
     }
     const handleUpdate = (e,id) =>{
      const regex = /^[a-zA-Z]+(\s+[a-zA-Z]+)*$/;
     if(e.key === 'Enter' && e.target.value.trim() !== "" && regex.test(e.target.value)){

         setInputData((prev) => 
           prev?.map((item)=>
             item?.id === id ?  {...item , value : e.target.value , updateInput : false}  : item
           )
         )
      } 
     }
     const handleDelete = (e,id) =>{
        setInputData((prev) =>
         prev.filter((item) => item?.id !== id)
      )
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
                  onDoubleClick = {() => updateInput(input?.id)}
                 >
                  {(input?.updateInput === true  && input?.checked === false)? 
                    (
                    <input
                       type = "text"
                       value = {updatedValue}
                      style = {{
                        width : '80%',
                        borderRadius:'5px',
                        height:'40px',
                        border : '1px solid #000000',
                        padding:'5px'
                      }}
                      onChange={inputUpdation}
                      onKeyDown = {(e) => handleUpdate(e,input?.id)}
                    />)
                  :
                  (input?.value)
                }
                </div>
                <div
                  onClick = {(e) => handleDelete(e,input?.id)}
                >
                  <MdOutlineDelete/>
                </div>

               </div>
            )
        })}
        </>
    )
}
export default ItemList;