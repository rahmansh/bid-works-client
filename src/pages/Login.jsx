import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "react-hook-form"


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

    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div className="text-center">
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input {...register("email")} type="email" className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input {...register("password")} type="password" className="input" placeholder="Password" />
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <button className="btn btn-neutral" onClick={handleGoogleSignIn}>Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;