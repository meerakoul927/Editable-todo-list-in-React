import React , {useState} from 'react';
import { ReactDOM } from 'react';


const SearchBox = (props) =>{

    const {inputData , setInputData} = props;
    const [searchData , setSearchData] = useState();

   const onHandleChange = (e) =>{
    setSearchData(e.target.value);
   }
    const handleValue = (e) =>{
      const regex = /^[a-zA-Z]+$/; // Regular expression to match only letters
    if(e.key === 'Enter' && e.target.value.trim() !== "" && regex.test(e.target.value)){
         setInputData((prevInputData) => [
             ...prevInputData , 
             {value : e.target.value,
              id : Date.now(),
              checked : false
            },

         ]);
          setSearchData('');
    }
}
      return (
        <>
        
        <input 
        type="text"
        
          style = {{
             width : '60%',
             borderRadius:'5px',
             height:'40px',
             border : '1px solid #000000',
             padding:'5px'
          }}
          onKeyDown = {handleValue}
          onChange={onHandleChange}
          value = {searchData}
        
        />
        </>
      )
}
export default SearchBox;