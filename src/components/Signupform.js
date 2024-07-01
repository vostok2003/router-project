import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEyeSlash,FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Signupform({setloggedIn}){
    const navi =useNavigate();
    const [formdata,setformdata]= useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confirmpassword:'',
    });
    const [showpassword,setshowpassword]= useState(false);
    const [showconfirmpassword,setshowconfirmpassword]= useState(false);
    const [accounttype,setaccounttype]=useState('student')

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
        if(formdata.password!==formdata.confirmpassword){
            toast.error("Password and Confirm Password does not match");
            return;
        }
        setloggedIn(true);
        toast.success("Account Created");
        navi("/Dashboard")
    }
    return(
        <div>
            <div
                className="flex bg-richblack-800 p-1 gap-x-1 my-1 rounded-full max-w-max"
            >
                <button
                    onClick={()=>setaccounttype("student")}
                    className={`${accounttype==='student'?
                    "bg-richblack-900 text-richblack-5":
                    "bg-transparent text-richblack-200"}
                    py-2 px-5 rounded-full transition-all duration-200`}
                >Student</button>
                <button
                    onClick={()=>setaccounttype("instructor")}
                    className={`${accounttype==='instructor'?
                    "bg-richblack-900 text-richblack-5":
                    "bg-transparent text-richblack-200"}
                    py-2 px-5 rounded-full transition-all duration-200`}
                >Instructor</button>
            </div>

            <form onSubmit={submitHandler}>
                <div className="flex gap-x-4 mt-[10px]">
                <label className="w-full"><p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                First Name <sup className="text-pink-200">*</sup></p>
                    <br/>
                    <input
                        required
                        type="text"
                        name="firstname"
                        placeholder="Enter First Name"
                        onChange={changeHandler}
                        value={formdata.firstname}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full
                               p-[12px] "
                    />
                </label>
                <label className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Last Name <sup className="text-pink-200">*</sup></p>
                    <br/>
                    <input
                        required
                        type="text"
                        name="lastname"
                        placeholder="Enter Last Name"
                        onChange={changeHandler}
                        value={formdata.lastname}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full
                               p-[12px] "
                    />
                </label>
                </div>
                
                <label htmlFor="email" className="mt-[10px]">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Email Address<sup className="text-pink-200">*</sup></p>
                <br/>
                <input
                    required
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    onChange={changeHandler}
                    value={formdata.email}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full
                               p-[12px] "
                /></label>
                <br/>
                <div className="flex gap-x-4 mt-[10px]">
                <label htmlFor="password" className="w-full relative">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    password<sup className="text-pink-200">*</sup></p>
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
                    <span onClick={()=>setshowpassword((prev)=>!prev)}
                        className="absolute cursor-pointer right-3 top-[66px] ">
                        {showpassword?
                        (<FaRegEye fontSize={24} fill="#AFB2BF" />):
                        (<FaRegEyeSlash fontSize={24} fill="#AFB2BF" />)}
                    </span>
                    
                </label>
                <label htmlFor="password" className="w-full relative">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Confirm Password<sup className="text-pink-200">*</sup></p>
                    <br/>
                    <input
                        required
                        type={showconfirmpassword?("text"):("password")}
                        name="confirmpassword"
                        placeholder="Enter your confirm password"
                        onChange={changeHandler}
                        value={formdata.confirmpassword}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full
                               p-[12px] "
                    />
                    <span onClick={()=>setshowconfirmpassword((prev)=>!prev)}
                            className="absolute cursor-pointer right-3 top-[62px] ">
                        {showconfirmpassword?
                        (<FaRegEye fontSize={24} fill="#AFB2BF" />):
                        (<FaRegEyeSlash  fontSize={24} fill="#AFB2BF"/>)}
                    </span>
                    
                </label>
                </div>
                
                <br/>
                <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-4 w-full"
                >Create Account</button>
            </form>
        </div>
    )
}
export default Signupform;