const Banner = () => {
    return (
        <div className="flex flex-col gap-4 h-60 md:h-80 lg:h-[500px] xl:h-[600px]s justify-start text-center">
            <div className="mt-6 md:mt-8 lg:mt-12 xl:mt-16 flex gap-8 text-lg md:text-xl font-medium justify-center">
                <div>
                    <span className="block text-xl md:text-2xl font-bold">1,200+</span>
                    <span>Jobs Posted</span>
                </div>
                <div>
                    <span className="block text-xl md:text-2xl font-bold">5,800+</span>
                    <span>Applications</span>
                </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black px-6 md:px-8 lg:px-12 xl:px-16">Hire. Work. Succeed.</h1>
            <div className="mt-8 flex justify-center gap-6">
                <button className="btn bg-neutral text-white text-lg px-8 py-3 font-semibold hover:bg-gray-800">
                    Post a Job
                </button>
                <button className="btn bg-white text-black text-lg px-8 py-3 font-semibold border-2 border-black hover:bg-gray-100">
                    Browse Jobs
                </button>
            </div>
        </div>
    );
};

export default Banner;