import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const links = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/jobs"}>Jobs</Link></li>
        <li><a>Job Categories</a></li>
        <li><a>Companies</a></li>
        <li><a>Blogs</a></li>
    </>

    return (
        <div className="bg-[#F4F1E8] shadow-sm">
            <div className="max-w-6xl mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-[#F4F1E8] rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                                {links}
                            </ul>
                        </div>
                        <Link to={"/"} className="btn btn-ghost text-3xl font-extrabold">BidWork</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-semibold">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {user ? (<div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-[#F4F1E8] rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><a>Settings</a></li>
                                <li><button onClick={() => logOut()}>Logout</button></li>
                            </ul>
                        </div>) : (
                            <Link to="/login"><button className="btn btn-neutral">Login</button></Link>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
