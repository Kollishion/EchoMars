import { FaRegCheckCircle } from "react-icons/fa"; 
import { Link } from "react-router-dom"; 
import "./animations.css";
import SmokyButton from "./SmokyButton";
const OrderSuccess = () => {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 w-96 min-h-[300px] bg-gray-300 rounded-2xl shadow-2xl p-6 card">
        <FaRegCheckCircle className="text-green-500 icon" size={80} />
	<div className="text-xl font-semibold text">Payment Successful</div>
	<div className="text-gray-700 text">Order placed successfully</div>
	  <Link className="text" to="/">
		<SmokyButton>
	  		Go back to home
		</SmokyButton>
	  </Link>

      </div>
    </div>  
  );
};

export default OrderSuccess;
