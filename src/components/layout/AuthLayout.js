import { Outlet } from "react-router-dom";
import Header from "./header/Header";

function AuthLayout() {
    return (
        <>
        <Header />
        <div className="min-vh-100 tw-pt-14">
        <Outlet />
        </div>
        </>
        );
    }


export default AuthLayout;