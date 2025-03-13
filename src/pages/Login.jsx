import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Login = () => {
    const { signInWithGoogle } = useContext(AuthContext)
    const handleGoogleSignIn = async () => {
        try {
            let user = await signInWithGoogle();
            console.log("Signed in User: ", user)

        } catch (error) {
            console.error("Google Sign-in failed: ", error)
        }
    }

    return (
        <div className="text-center">
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                        <button className="btn btn-neutral" onClick={handleGoogleSignIn}>Google</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;