import { IoLocation } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";


const FeaturedCompanies = () => {
    return (
        <div className="max-w-6xl mx-auto mt-[80px] px-2 mb-4">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-3">Featured companies actively hiring</h2>
                <div className="">
                    <p className="">Over 10000 Jobs</p>
                    <a href="#" className="underline">View All Companies</a>
                </div>
            </div>

            <div className="grid w-full grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto justify-items-center mt-3">
                {/* card 1 */}
                <div className="card w-90 shadow-sm mt-4 p-6">
                    <div className="flex justify-between items-center">
                        <div className="avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-16 h-16 rounded-full">
                                <span className="text-xl">AI</span>
                            </div>
                        </div>
                        <button className="border-2 rounded-2xl py-2 px-7 font-bold">
                            <span className="mr-3 text-xl">+</span>
                            Follow
                        </button>
                    </div>
                    <p className="mt-4 font-semibold text-lg">Giveth</p>
                    <div className="flex items-center font-medium">
                        <div className="flex items-center gap-1 mt-1">
                            <IoLocation />
                            <p>New York</p>
                        </div>
                        <div className="flex items-center gap-1 mx-4">
                            <HiUserGroup />
                            <p>200-300</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaStar />
                            <p>5.0</p>
                        </div>
                    </div>
                    <p className="mt-5">
                        We're the world largest startup community. We help startup change the world.
                    </p>
                    <div className="flex gap-3 items-center mt-4">
                        <div className="badge badge-outline badge-neutral">B2B SaaS</div>
                        <div className="badge badge-outline badge-neutral">SaaS</div>
                    </div>
                    <p className="mt-5">2 Jobs Available</p>
                </div>

                {/* card 2 */}
                <div className="card w-90 shadow-sm mt-4 p-6">
                    <div className="flex justify-between items-center">
                        <div className="avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-16 h-16 rounded-full">
                                <span className="text-xl">AI</span>
                            </div>
                        </div>
                        <button className="border-2 rounded-2xl py-2 px-7 font-bold">
                            <span className="mr-3 text-xl">+</span>
                            Follow
                        </button>
                    </div>
                    <p className="mt-4 font-semibold text-lg">Giveth</p>
                    <div className="flex items-center font-medium">
                        <div className="flex items-center gap-1 mt-1">
                            <IoLocation />
                            <p>New York</p>
                        </div>
                        <div className="flex items-center gap-1 mx-4">
                            <HiUserGroup />
                            <p>200-300</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaStar />
                            <p>5.0</p>
                        </div>
                    </div>
                    <p className="mt-5">
                        We're the world largest startup community. We help startup change the world.
                    </p>
                    <div className="flex gap-3 items-center mt-4">
                        <div className="badge badge-outline badge-neutral">B2B SaaS</div>
                        <div className="badge badge-outline badge-neutral">SaaS</div>
                    </div>
                    <p className="mt-5">2 Jobs Available</p>
                </div>

                {/* card 3 */}
                <div className="card w-90 shadow-sm mt-4 p-6">
                    <div className="flex justify-between items-center">
                        <div className="avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-16 h-16 rounded-full">
                                <span className="text-xl">AI</span>
                            </div>
                        </div>
                        <button className="border-2 rounded-2xl py-2 px-7 font-bold">
                            <span className="mr-3 text-xl">+</span>
                            Follow
                        </button>
                    </div>
                    <p className="mt-4 font-semibold text-lg">Giveth</p>
                    <div className="flex items-center font-medium">
                        <div className="flex items-center gap-1 mt-1">
                            <IoLocation />
                            <p>New York</p>
                        </div>
                        <div className="flex items-center gap-1 mx-4">
                            <HiUserGroup />
                            <p>200-300</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaStar />
                            <p>5.0</p>
                        </div>
                    </div>
                    <p className="mt-5">
                        We're the world largest startup community. We help startup change the world.
                    </p>
                    <div className="flex gap-3 items-center mt-4">
                        <div className="badge badge-outline badge-neutral">B2B SaaS</div>
                        <div className="badge badge-outline badge-neutral">SaaS</div>
                    </div>
                    <p className="mt-5">2 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCompanies;