import { Navigate } from "react-router-dom";
export default function NoMatch(){
    return <Navigate to="/" />;
}