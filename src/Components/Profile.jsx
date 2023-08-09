import Footer from "./Footer";
import c from "../assets/images/c.png";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

const Profile = () => {
    return (
        <>
        <section className="bg-white overflow-auto h-screen my-5 mx-auto a:w-10/12 md:w-7/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 a:rounded-md">
            <header className="flex justify-around mt-8 items-center py-3 sm:py-1">
            <img className="w-3/12 sm:w-2/12" src={c} alt="not found" />
            <p style={{color: "#2857BD"}} className=" font-bold sm:text-xl">پروفایل کاربری</p>
            <Link><MenuIcon style={{color: "#2857BD"}} fontSize="large"/></Link>
            </header>
            <main style={{direction: "rtl"}}>
                <section className="flex items-center mt-16 ps-8">
                   <span className="p-10 rounded-full ring ring-gray-200"></span>
                   <p className="text-xl ms-4">کاربر کمیته بهداشت و درمان</p>
                </section>
                <section className="border-t-2 mt-4 pt-4 mx-8">
                    <ul className="space-y-5">
                       <li className="border-s-2 py-2 ps-1 rounded-sm border-blue-700"><Link to="/login/mainPage/profile/edit" className="flex items-center text-blue-700"><PersonIcon fontSize="large"/><p className="ms-3 font-bold text-xl">تکمیل و ویرایش اطلاعات</p></Link></li>
                       <li className="ps-1 text-gray-600"><Link><AccountBalanceWalletOutlinedIcon fontSize="large"/></Link></li>
                       <li className="ps-1 text-gray-600"><Link><FavoriteBorderRoundedIcon fontSize="large"/></Link></li>
                       <li className="ps-1 text-gray-600"><Link><LocationOnOutlinedIcon fontSize="large"/></Link></li>
                       <li className="ps-1 text-red-600"><Link className="flex items-center"><ExitToAppRoundedIcon fontSize="large"/><p className="ms-2 font-bold">خروج</p></Link></li>
                    </ul>
                </section>
            </main>
            <footer className="mt-64">
                <Footer value={1}/>
            </footer>    
        </section>
        </>
    );
}

export default Profile;