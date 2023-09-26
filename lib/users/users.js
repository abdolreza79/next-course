import {notFound} from "next/navigation"
export const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      // return notFound()
    }
    return res.json();
  };
  
  
  export const getUserById = async(userId)=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if(!response.ok){
    }
    return response.json()
  }
  