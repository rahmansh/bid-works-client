import Banner from "../components/Banner";
import Categories from "../components/Categories";
import FeaturedCompanies from "../components/FeaturedCompanies";
import LatestJobs from "../components/LatestJobs";

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <LatestJobs />
            <FeaturedCompanies />
        </div>
    );
};

export default Home;