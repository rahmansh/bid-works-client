import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';



const Register = () => {
    const { signInWithGoogle, createUser } = useContext(AuthContext)
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
            let user = await createUser(email, password);
            if (user) {
                toast('Register successfully! ');
            }
        } catch (error) {
            console.error("Error while creating user: ", error);
        }
    }

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
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                        <button className="btn btn-neutral" onClick={handleGoogleSignIn}>Google</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;