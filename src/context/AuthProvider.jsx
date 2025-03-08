import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../services/firebase.config";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });

        return () => unsubscribe();
    }, [auth])


    const signInWithGoogle = async () => {
        setLoading(true)
        try {
            const result = await signInWithPopup(auth, googleProvider)
            setUser(result.user)
            setLoading(false)

        } catch (error) {
            console.error("Google Sign In Error: ", error)
            setLoading(false)
        }
    }




    const logOut = async () => {
        await signOut(auth)
    }


    return (
        <AuthContext.Provider value={{ user, loading, logOut, signInWithGoogle }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;