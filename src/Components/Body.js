import React,{useEffect} from 'react';
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utills/firebase';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utills/users';

const Body = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            console.log(user)
          if (user) {
            
            const uid = user.uid;
            const email = user.email;
            const displayName = user.displayName
            dispatch(addUser({uid:uid, email:email, displayName:displayName}))  
          } else {
            dispatch(removeUser())
            
          }
        });
        
      },[])
   return (
    <div>
            Body
    </div>
   
  )
}




/* we need to create browser link to get elements */
export default Body