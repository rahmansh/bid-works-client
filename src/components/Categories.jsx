import { useState } from "react";
import { FaCode } from "react-icons/fa";

const Categories = () => {
    // Sample category data
    const categoryData = [
        { title: "Development & IT", description: "15 Jobs" },
        { title: "Design & Creative", description: "20 Jobs" },
        { title: "Marketing & Sales", description: "10 Jobs" },
        { title: "Writing & Translation", description: "5 Jobs" },
        { title: "Customer Support", description: "8 Jobs" },
        { title: "Finance & Accounting", description: "12 Jobs" },
        { title: "Legal & Compliance", description: "6 Jobs" },
        { title: "Healthcare", description: "7 Jobs" },
        { title: "Education", description: "10 Jobs" },
        { title: "Engineering", description: "25 Jobs" },
        { title: "Project Management", description: "14 Jobs" },
        { title: "Business", description: "18 Jobs" },
    ];

    const [visibleCount, setVisibleCount] = useState(6);

    const showMoreHandler = () => {
        setVisibleCount(categoryData.length);
    }



    return (
        <div className="py-12 md:py-1 mt-14 md:mt-10 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black md:mb-4">
                Popular Categories
            </h2>
            <p className="text-center mb-10">Find and hire professionals across all skills</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Rendering 6 cards by default */}
                {categoryData.slice(0, visibleCount).map((category, index) => (
                    <div key={index} className="card w-96 bg-[#F4F1E8] bg-opacity-70 backdrop-blur-lg shadow-lg rounded-lg mx-auto">
                        <div className="card-body">
                            <div className="flex justify-between items-center">
                                <div className="avatar avatar-placeholder">
                                    <div className="bg-neutral text-neutral-content w-16 rounded-full">
                                        <span className="text-xl md:text-2xl"><FaCode /></span>
                                    </div>
                                </div>
                                <div className="flex-1 ml-4">
                                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black">{category.title}</h2>
                                    <p className="text-sm md:text-base lg:text-lg text-black">{category.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show more button */}
            {
                visibleCount < categoryData.length && (
                    <div className="text-center mt-8">
                        <button onClick={showMoreHandler} className="btn btn-neutral">Show More</button>
                    </div>
                )
            }
        </div>
    );
};

export default Categories;