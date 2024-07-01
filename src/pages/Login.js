import Template from "../components/Template";
import loginimg from "../assets/login.png";

function Login({setloggedIn}){
    return(
        <div>
            <Template
                title="Welcome Back"
                desc1="Build skills for today, tomorrow and beyond."
                desc2="Education to future-proof your career."
                image={loginimg}
                formtype="login"
                setloggedIn={setloggedIn}
            />
        </div>)
}
export default Login;