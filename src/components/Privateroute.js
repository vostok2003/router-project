import { Navigate } from "react-router-dom";

function Privateroute({isloggedIn,children}){
    if(isloggedIn){
        return children;
    }
    else{
        return <Navigate to='/login'/>
    }
}
export default Privateroute;