import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './components/SearchBox/SearchBox';
import ItemList from './components/ItemList/ItemList';

export const App = () =>{

     const[inputData , setInputData] = useState([]);

     {/*  creating a todo list whenever we type data on input box 
     that will be append on the list
     a search box when we hit enter that will be entered inside the list 
   */}
     return(
      
          <>
          <div
            style = {{
                display : 'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center',
                margin:'10px',
            }}
          >          
          <SearchBox
           setInputData = {setInputData}
           inputData = {inputData}
          />
          <ItemList
            inputData = {inputData}
            setInputData = {setInputData}
          />
          </div>
          </>
     )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// we pass some specfic routes and we tell to the browser that these  will be visible on the screen 
/// what will  happen on the specfic route
root.render(<App/>);

