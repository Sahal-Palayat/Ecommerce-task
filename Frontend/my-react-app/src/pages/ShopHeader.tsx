import { FaBell, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa"; 

function ShopHeader() {
  return (
    <div>
    <div className="flex justify-between items-center bg-white p-4 ">
    <span className="text-xl md:text-4xl font-bold m-4 md:m-8">Shop/Customize</span>
    <div className="flex gap-4 m-4 md:m-8">
            <FaBell className="text-black text-2xl md:text-4xl" />
            <FaShoppingCart className="text-black text-2xl md:text-4xl" />
            <FaHeart className="text-black text-2xl md:text-4xl" />
            <FaUser className="text-black text-2xl md:text-4xl" />
        </div>
    </div>
</div>
  )
}

export default ShopHeader
