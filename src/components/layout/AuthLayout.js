import Header from './header/Header';
import { Outlet } from 'react-router-dom';

function AuthLayout(){
    return (
        <>
           <Header />
           <Outlet />
        </>
    );
}
export default AuthLayout;