import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useAuthListener(){
    const [user, setUser] = useState(JSON.parse(
        localStorage.getItem('authUser')
    ));

    const { firebase } = useContext(FirebaseContext);
// if there is an authenticated and authorized user then set the user from the local storage 
// else remove the user and set the user to null
    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser)=>{
            if(authUser){
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            }
            else{
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });
        return () => listener(); //clean the listener
    }, [])
    return { user };
}

