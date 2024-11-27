import React, { useEffect, useState } from "react";
import CompA from "./CompA";
import CompB from "./CompB";
import axios from "axios";
import useRupan from "./useFetch";


// const countries = [
//   { name: "India", value: "IN", cities: ["chennai", "mumbai", "kolkata"] },
//   { name: "Pakistan", value: "PK", cities: ["lahore", "karachi"] },
//   { name: "Bangladesh", value: "BG", cities: ["Dhaka", "chittangong"] },
// ];

const App = () => {

const {data,loading,error} = useRupan("https://jsonplaceholder.typicode.com/users")


if(loading){
  return <p>Loading....</p>
}

if(error){
  return <p>Errors: {error.message}</p>
}


  //const [val,setVal] = useState(0);

  // const [country, setCountry] = useState([]);

  // useEffect(() => {
  //   console.log(country[0]);
  // }, [country]);

//   const [todos,setTodos] = useState([])
//   const [todoPerPage,setTodoPerPage] = useState(10)
//   const[currentPage,setCurrentPage] = useState(1)

//  const totalpages = Math.ceil(todos.length /todoPerPage)
// //console.log(totalpages);

// const pages = [...Array(totalpages+1).keys()].slice(1)
// //console.log(pages);

// const last = currentPage + todoPerPage; 
// const first = last-todoPerPage; 

// const dataperpage = todos.slice(first,last)

//   useEffect(()=>{
//   axios.get("https://jsonplaceholder.typicode.com/todos")
//   .then((res)=>setTodos(res.data));
//   },[])

//   const handleprepage = () =>{
//     if(currentPage !=1) setCurrentPage(currentPage-1)
//   }

//   const handlenextpage = () =>{
//     if(currentPage!== totalpages) setCurrentPage(currentPage+1)
//   }

  return (
   
    // <div className="app">
       
    //   {/* 1st dropdown */}
    //   <select
    //     value={country}
    //     onChange={(e) => {
    //       setCountry([e.target.value]);
    //     }}
    //   >
    //     {countries.map((item, index) => {
    //       return (
    //         <option key={index} value={index}>
    //           {item.name}
    //         </option>
    //       );
    //     })}
    //   </select>

    //   {/* 2nd dropdown */}
    //   <select>
    //     {countries[country] &&
    //       countries[country].cities.map((item, index) => {
    //         return (
    //           <option key={index} value={index}>
    //             {item}
    //           </option>
    //         );
    //       })}
    //   </select>
    // </div>
    // <>
    //  {dataperpage.map((todo)=>(
    //   <p key={todo.id}>{todo.title}</p>
    //  ))}
    //  <span onClick={handleprepage}>Prev</span>
    // <p>
    //   {pages.map((page)=>(
    //     <span key={page} onClick={()=>setCurrentPage(page)} 
    //     className={`${currentPage===page ? "active" : ""}`}
    //     >{`${page} | `}</span>
    //   ))}
    // </p>
    // <span onClick={handlenextpage}>Next</span>
    // </>
    <>
        {data?.length && <p>Fetched Data :{JSON.stringify(data)}</p>}    
    </>
  );
};

export default App;
