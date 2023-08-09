import Footer from "./Footer";
import Carsoaul from "./Carsoaul";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

import c from "../assets/images/c.png";
const e = new URL('../assets/images/e.PNG', import.meta.url);
const f = new URL('../assets/images/f.PNG', import.meta.url);
const g = new URL('../assets/images/g.PNG', import.meta.url);
const h = new URL('../assets/images/h.PNG', import.meta.url);
const i = new URL('../assets/images/i.PNG', import.meta.url);
const j = new URL('../assets/images/j.PNG', import.meta.url);
const k = new URL('../assets/images/k.PNG', import.meta.url);
const m = new URL('../assets/images/m.PNG', import.meta.url);
const n = new URL('../assets/images/n.PNG', import.meta.url);

const  MainPage = () => {
    return (
        <>
        <section className="bg-white overflow-auto my-5 mx-auto md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 a:rounded-lg">
            <header className="flex justify-around items-center py-3 sm:py-1">
            <img className="w-3/12 sm:w-2/12" src={c} alt="not found" />
            <p style={{color: "#2857BD"}} className="font-bold sm:text-xl">صفحه اصلی</p>
            <Link><MenuIcon style={{color: "#2857BD"}} fontSize="large"/></Link>
            </header>
            <main>
                <section className="flex justify-center">
                    <Carsoaul/>
                </section>
                <section className="mt-7 px-5 grid gap-6 justify-items-center items-end a:grid-cols-2 md:grid-cols-3">
                    <Link><img style={{transition: "transform .3s"}} className="shadow shadow-gray-500 rounded-lg hover:scale-105" src={e} alt="not found" /></Link>
                    <Link><img style={{transition: "transform .3s"}} className="shadow shadow-gray-500 rounded-lg hover:scale-105" src={f} alt="not found" /></Link>
                    <Link to="/login/mainPage/formsList"><img style={{transition: "transform .3s"}} className="shadow shadow-gray-500 rounded-lg hover:scale-105" src={g} alt="not found" /></Link>
                    <Link><img style={{transition: "transform .3s"}} className="shadow shadow-gray-500 rounded-lg hover:scale-105" src={h} alt="not found" /></Link>
                    <Link><img style={{transition: "transform .3s"}} className="shadow shadow-gray-500 rounded-lg hover:scale-105" src={i} alt="not found" /></Link>
                    <Link><img style={{transition: "transform .3s"}} className="shadow shadow-gray-500 rounded-lg hover:scale-105" src={j} alt="not found" /></Link>
                    <Link><img style={{transition: "transform .3s"}} className="shadow shadow-gray-500 rounded-lg hover:scale-105" src={k} alt="not found" /></Link>
                    <Link><img style={{transition: "transform .3s"}} className="shadow shadow-gray-500 rounded-lg hover:scale-105" src={m} alt="not found" /></Link>
                    <Link><img style={{transition: "transform .3s"}} className="shadow shadow-gray-500 rounded-lg hover:scale-105" src={n} alt="not found" /></Link>
                </section>
            </main>
            <Footer value={4}/>
        </section>
        </>
    );
}

export default MainPage;