import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEyeSlash,FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Loginform({setloggedIn}){
    const navi =useNavigate();
    const [formdata,setformdata]=useState({
        email: '',
        password:'',
    })

    const [showpassword,setshowpassword]=useState(false);

    function changeHandler(event){
        setformdata((prev)=>{
            return{
                ...prev,
                [event.target.name]:event.target.value
            }
        })
    }

    function submitHandler(event){
        event.preventDefault();
        setloggedIn(true);
        toast.success('logged in successfully');
        navi('/Dashboard');
    }
    return(
        <div>
            <form onSubmit={submitHandler}
                className="flex flex-col w-full gap-y-4 mt-6"
            >
                <label htmlFor="email" className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address
                <sup className="text-pink-200">*</sup></p>
                <br/>
                <input
                    required
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    onChange={changeHandler}
                    value={formdata.email}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full
                               p-[12px] "
                />
                </label>
                <br/>
                <label htmlFor="password" className="w-full relative">
                    <p  className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">password
                    <sup className="text-pink-200">*</sup></p>
                    <br/>
                    <input
                        required
                        type={showpassword?("text"):("password")}
                        name="password"
                        placeholder="Enter your password"
                        onChange={changeHandler}
                        value={formdata.password}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full
                               p-[12px] "
                    />
                    <span
                    className="absolute cursor-pointer right-3 top-[62px] "
                     onClick={()=>setshowpassword((prev)=>!prev)}>
                        {showpassword?
                        (<FaRegEye fontSize={24} fill="#AFB2BF" />):
                        (<FaRegEyeSlash fontSize={24} fill="#AFB2BF"/>)}
                    </span>
                    <Link to="#" className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                    Forgot Password</Link>
                </label>
                <br/>

                <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-4">
                Sign in</button>
            </form>
        </div>)
}
export default Loginform