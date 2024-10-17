import Header from '../../pages/Header';
import SearchBar from '../../pages/SearchBar';
import Banner from '../../pages/Banner';
import Ads from '../../pages/Ads';
import Footer from '../../pages/Footer';
import ProductList from '../../pages/ProductList';
import Featured from '../../pages/Featured';
import Leading from '../../pages/Leading';

function Home() {

    return (
        <div>
            <div className="min-h-screen">
                <Header />
                <SearchBar />
                <Banner />
                <h2 className="text-xl md:text-2xl font-bold ml-14 mb-4">Featured Collections</h2>
                <ProductList/>
                <Ads />
                <h2 className="text-xl md:text-2xl font-bold mb-4 mx-4 md:mx-10 lg:mx-14">Personalized Outfit Recommendations</h2>
                <ProductList/>
                <Leading/>
                <div className="p-4">
                 <Featured/>
                 <Ads />
                 <h2 className="text-xl md:text-2xl font-bold ml-14 mb-4">Seasonal Trends</h2>
                 <ProductList/>
                 <br />  <br />  <br />
                 <br /><br />
                 <Footer />
                </div>
            </div>
        </div>
    );
}

export default Home;
