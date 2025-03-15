import { FaCode } from "react-icons/fa";

const Categories = () => {
    return (
        <div className="py-12 md:py-1 mt-14 md:mt-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black md:mb-4">
                Popular Categories
            </h2>
            <p className="text-center mb-10">Find and hire professionals across all skills</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="card w-96 bg-[#F4F1E8] bg-opacity-70 backdrop-blur-lg shadow-lg rounded-lg mx-auto">
                    <div className="card-body">
                        <div className="flex justify-around items-center">
                            <div className="avatar avatar-placeholder">
                                <div className="bg-neutral text-neutral-content w-16 rounded-full">
                                    <span className="text-xl md:text-2xl"><FaCode /></span>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black">Development & IT</h2>
                                <p className="text-sm md:text-base lg:text-lg text-black">15 Jobs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-[#F4F1E8] bg-opacity-70 backdrop-blur-lg shadow-lg rounded-lg mx-auto">
                    <div className="card-body">
                        <div className="flex justify-around items-center">
                            <div className="avatar avatar-placeholder">
                                <div className="bg-neutral text-neutral-content w-16 rounded-full">
                                    <span className="text-xl md:text-2xl"><FaCode /></span>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black">Development & IT</h2>
                                <p className="text-sm md:text-base lg:text-lg text-black">15 Jobs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-[#F4F1E8] bg-opacity-70 backdrop-blur-lg shadow-lg rounded-lg mx-auto">
                    <div className="card-body">
                        <div className="flex justify-around items-center">
                            <div className="avatar avatar-placeholder">
                                <div className="bg-neutral text-neutral-content w-16 rounded-full">
                                    <span className="text-xl md:text-2xl"><FaCode /></span>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black">Development & IT</h2>
                                <p className="text-sm md:text-base lg:text-lg text-black">15 Jobs</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Categories;