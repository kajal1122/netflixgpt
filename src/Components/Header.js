import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from '../utills/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utills/users';
import { netflixLogo,netflixUserLogo } from '../utills/constants';

const Header = () => {
    const loggedInUser = useSelector(state=> state.user.loggedInUser);
    console.log('strore coming in header',loggedInUser);
    const navigate = useNavigate();
    const handleSignOutClick = ()=>{
        signOut(auth).then(()=>{
            console.log('sign out is succesful')
            navigate("/")
        }).catch((error)=>{
            console.log('error', error);
        })

    }
    const dispatch = useDispatch();

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user)
          if (user) {
            
            const uid = auth.currentUser.uid;
            const email = auth.currentUser.email;
            const displayName = auth.currentUser.displayName
            dispatch(addUser({uid:uid, email:email, displayName:displayName})) ;
            navigate("/browse");
          } else {
            dispatch(removeUser())
            navigate("/")
            
          }
        });
        // unsubscribe when compoenet unmounts
        return ()=>unSubscribe();
        
      },[])
    
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img  className="w-44 mx-auto md:mx-0" src={netflixLogo} alt="netflix-logo" />
        { loggedInUser.uid !== null &&
        <div className='flex p-2 justify-between'>
            <img className='w-12 h-12' src={netflixUserLogo} alt="user-logo"/>
            <button className='bg-white m-2' onClick={handleSignOutClick}>(Sign Out)</button>

        </div>}
    </div>
  )
}

export default Header