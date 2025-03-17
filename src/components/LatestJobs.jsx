import { FaRegHeart } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";



const LatestJobs = () => {
    return (
        <div className="py-12 md:py-1 mt-6 md:mt-30 mb-10 px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black md:mb-4">
                Latest Jobs
            </h2>
            <p className="text-center mb-10">2020 jobs live – 293 added today.</p>

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-auto">
                {/* Job Card */}
                {/* 1 */}
                <div className="card lg:w-full flex flex-col justify-between p-5 rounded-lg shadow-lg border border-[#2F2F2F] mx-auto">
                    <div className="flex gap-4">
                        <div className="flex gap-4 w-full">
                            <div className="avatar avatar-placeholder">
                                <div className="bg-neutral text-neutral-content w-16 h-16 rounded-full">
                                    <span className="text-xl">AI</span>
                                </div>
                            </div>
                            <div>
                                <h5 className="mb-2 text-2xl font-bold">Sourcing Manager</h5>
                                <p>by <span>Company Name</span> in <span>Category</span></p>
                            </div>
                        </div>
                        <div className="text-2xl cursor-pointer">
                            <FaRegHeart />
                        </div>
                    </div>
                    <div className="my-5 flex flex-wrap gap-2 lg:gap-1">
                        <span className="badge bg-neutral text-white">Full Time</span>
                        <span className="badge bg-neutral text-white mx-2 flex items-center"><IoLocation /> Berlin</span>
                        <span className="badge bg-neutral text-white">$3000 - $5000/week</span>
                    </div>
                    <div>
                        <span>129 days left to apply</span>
                    </div>
                </div>

                {/* 2 */}
                <div className="card lg:w-full flex flex-col justify-between p-5 rounded-lg shadow-lg border border-[#2F2F2F] mx-auto">
                    <div className="flex gap-4">
                        <div className="flex gap-4 w-full">
                            <div className="avatar avatar-placeholder">
                                <div className="bg-neutral text-neutral-content w-16 h-16 rounded-full">
                                    <span className="text-xl">AI</span>
                                </div>
                            </div>
                            <div>
                                <h5 className="mb-2 text-2xl font-bold">Sourcing Manager</h5>
                                <p>by <span>Company Name</span> in <span>Category</span></p>
                            </div>
                        </div>
                        <div className="text-2xl cursor-pointer">
                            <FaRegHeart />
                        </div>
                    </div>
                    <div className="my-5 flex flex-wrap gap-2 lg:gap-1">
                        <span className="badge bg-neutral text-white">Full Time</span>
                        <span className="badge bg-neutral text-white mx-2 flex items-center"><IoLocation /> Berlin</span>
                        <span className="badge bg-neutral text-white">$3000 - $5000/week</span>
                    </div>
                    <div>
                        <span>129 days left to apply</span>
                    </div>
                </div>

                {/* 3 */}
                <div className="card lg:w-full flex flex-col justify-between p-5 rounded-lg shadow-lg border border-[#2F2F2F] mx-auto">
                    <div className="flex gap-4">
                        <div className="flex gap-4 w-full">
                            <div className="avatar avatar-placeholder">
                                <div className="bg-neutral text-neutral-content w-16 h-16 rounded-full">
                                    <span className="text-xl">AI</span>
                                </div>
                            </div>
                            <div>
                                <h5 className="mb-2 text-2xl font-bold">Sourcing Manager</h5>
                                <p>by <span>Company Name</span> in <span>Category</span></p>
                            </div>
                        </div>
                        <div className="text-2xl cursor-pointer">
                            <FaRegHeart />
                        </div>
                    </div>
                    <div className="my-5 flex flex-wrap gap-2 lg:gap-1">
                        <span className="badge bg-neutral text-white">Full Time</span>
                        <span className="badge bg-neutral text-white mx-2 flex items-center"><IoLocation /> Berlin</span>
                        <span className="badge bg-neutral text-white">$3000 - $5000/week</span>
                    </div>
                    <div>
                        <span>129 days left to apply</span>
                    </div>
                </div>

                {/* 4 */}
                <div className="card lg:w-full flex flex-col justify-between p-5 rounded-lg shadow-lg border border-[#2F2F2F] mx-auto">
                    <div className="flex gap-4">
                        <div className="flex gap-4 w-full">
                            <div className="avatar avatar-placeholder">
                                <div className="bg-neutral text-neutral-content w-16 h-16 rounded-full">
                                    <span className="text-xl">AI</span>
                                </div>
                            </div>
                            <div>
                                <h5 className="mb-2 text-2xl font-bold">Sourcing Manager</h5>
                                <p>by <span>Company Name</span> in <span>Category</span></p>
                            </div>
                        </div>
                        <div className="text-2xl cursor-pointer">
                            <FaRegHeart />
                        </div>
                    </div>
                    <div className="my-5 flex flex-wrap gap-2 lg:gap-1">
                        <span className="badge bg-neutral text-white">Full Time</span>
                        <span className="badge bg-neutral text-white mx-2 flex items-center"><IoLocation /> Berlin</span>
                        <span className="badge bg-neutral text-white">$3000 - $5000/week</span>
                    </div>
                    <div>
                        <span>129 days left to apply</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LatestJobs;