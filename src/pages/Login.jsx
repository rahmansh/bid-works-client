import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import { Link } from "react-router";



const Login = () => {
    const { signInWithGoogle, signInUserWithEmailAndPassword } = useContext(AuthContext)

    const handleGoogleSignIn = async () => {
        try {
            let user = await signInWithGoogle();
            console.log("Signed in User: ", user)

        } catch (error) {
            console.error("Google Sign-in failed: ", error)
        }
    }

    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = async (data) => {
        try {
            const { email, password } = data;
            let result = await signInUserWithEmailAndPassword(email, password)

            if (result) {
                // TODO: Redirect user after successful login
                toast('Signed in successfully! ');
            }

        } catch (error) {
            console.error("Error: ", error)
        }
    }

    return (
        <div className="text-center m-2">
            <div className="hero bg-[#F4F1E8] min-h-screen">
                <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input {...register("email")} type="email" className="input w-full" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input {...register("password")} type="password" className="input w-full" placeholder="Password" />
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                        <div className="mt-4"><Link to="/register" className="link link-hover">New User? Register</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;