import { createContext ,useState, useEffect } from "react";
import {onAuthStateChangedListener} from '../firebase/firebase.utils'

export const UserContext  = createContext({
    setcurrentUser:() => null,
    currentUser:  null,
});


export const UserProvdier = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const value ={currentUser, setCurrentUser};

    useEffect(() =>{

        const unsubscribe = onAuthStateChangedListener((user)=>{
            console.log(user)
        });

        return unsubscribe
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

