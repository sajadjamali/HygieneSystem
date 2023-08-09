import a from "../assets/images/a.png"
import c from "../assets/images/c.png"
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
        <section className="bg-white h-screen overflow-auto my-5 mx-auto a:w-10/12 md:w-7/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 a:rounded-md">
        <header className="flex flex-col justify-center items-center space-y-8 pt-8">
            <img src={a} alt="not found" />
            <p style={{color: "#2857BD"}} className="font-bold text-2xl">ورود به سامانه</p>
        </header>
        <main className="mt-14 px-5" style={{direction: "rtl"}}>
            <div>
                <p className="text-xl">شماره ملی / کد ملی</p>
                <input className="rounded-md border-2 ps-5 py-2 border-gray-400 mt-3 w-full focus:outline-none focus:ring-4" type="text" placeholder="شماره ملی / کد ملی"/>
            </div>
            <div className="mt-7">
                <p className="text-xl">گذرواژه</p>
                <input className="rounded-md border-2 ps-5 py-2 border-gray-400 mt-3 w-full focus:outline-none focus:ring-4" type="text" placeholder="گذرواژه"/>
            </div>
            <Link style={{backgroundColor: "#F1C40F", color:"D9D9D9"}} to="/login/mainPage" className="mt-14 py-2 text-center text-xl text-gray-900 rounded-md block w-full m-auto shadow-lg hover:shadow-gray-500">ورود</Link>
            <p className="mt-10 text-lg">ورود به اپلیکیشن به منزله قبول <Link className="text-blue-700">قوانین و مقررات</Link> است.</p>
         </main>
         <footer className="flex justify-center mt-16">
            <img src={c} alt="not found" />
         </footer>
        </section>
        </>
    );
}

export default Login;