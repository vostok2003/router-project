import Template from "../components/Template";
import signupimg from "../assets/signup.png"

function Signup({setloggedIn}){
    return(
        <div>
            <Template
                title="Welcome Back"
                desc1="Build skills for today, tomorrow and beyond."
                desc2="Education to future-proof your career."
                image={signupimg}
                formtype="signup"
                setloggedIn={setloggedIn}
            />
        </div>)
}
export default Signup;