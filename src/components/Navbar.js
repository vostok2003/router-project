
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg"
import toast from "react-hot-toast";

function Navbar(props){
    let isloggedIn=props.isloggedIn;
    let setloggedIn=props.setloggedIn;
    console.log('i am here.')

    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
            <Link to='/'>
            <img src={logo} alt="logo" width={160} height={32} loading="lazy"/>
            </Link>
            
            <nav>
                <ul className="flex gap-x-6 text-richblack-100">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>
            
            <div className="flex items-center gap-x-4">
                { !isloggedIn &&
                    <Link to="/login">
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-x-richblack-700">
                        Login</button>
                    </Link>
                }
                
                { !isloggedIn &&
                    <Link to="/signup">
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-x-richblack-700">
                        Sign Up</button>
                    </Link>
                }
                { isloggedIn &&
                    <Link to="/">
                        <button 
                        className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-x-richblack-700"
                        onClick={()=>{
                            setloggedIn(false)
                            toast.success('Logged Out succesfully')}}>
                        Log Out</button>
                    </Link>
                }
                { isloggedIn &&
                    <Link to="/Dashboard">
                        <button
                        className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-x-richblack-700"
                        >Dashboard</button>
                    </Link>
                }
            </div>
            
        </div>)
}
export default Navbar;