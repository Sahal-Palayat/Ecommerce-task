import AllProducts from "../../pages/AllProducts";
import Footer from "../../pages/Footer";
import ShopHeader from "../../pages/ShopHeader";
function Shop() {
    return (
        <div className="min-h-screen bg-white ">      
            <ShopHeader/>
            <div className="flex justify-around gap-4 mt-4 px-5">
                <button className="bg-[#7A7A7A] rounded-lg w-80 h-18 text-white text-base">Gender</button>
                <button className="bg-[#7A7A7A] rounded-lg w-80 h-14 text-white text-base">Consult a Designer</button>
            </div>
            <AllProducts/>
            <br /><br /><br /><br />
             <Footer/>
        </div>
    )
}

export default Shop
