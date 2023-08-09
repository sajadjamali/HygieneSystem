import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Link } from 'react-router-dom';

const FormsList = () => {

    const classesList = "flex items-center px-6 py-5 rounded-md border-b-4 border-blue-500 shadow-lg shadow-gray-300"

    return (
        <>
         <section className="bg-white overflow-auto h-screen my-5 mx-auto a:w-10/12 md:w-7/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 a:rounded-md">
            <header style={{color: "#2857BD"}} className="flex justify-end items-center border-t-2 border-gray-100 mt-8 py-4 pe-6 shadow-sm shadow-gray-200">
                <p className="font-bold me-16 sm:me-28">لیست فرم های پیش بیمارستانی</p>
                <Link to="/login/mainPage"><ArrowForwardIosOutlinedIcon fontSize="large"/></Link>
            </header>
            <main style={{direction: "rtl"}} className="px-6 mt-12 space-y-8">
                <Link to="/login/mainPage/formList/mission" className={classesList}>
                    <span className="bg-yellow-400 me-2 p-2 rounded-full"></span>
                    <p>ماموریت</p>
                </Link>
                <Link to="/login/mainPage/formList/airEmergency" className={classesList}>
                    <span className="bg-yellow-400 me-2 p-2 rounded-full"></span>
                    <p>اورژانس هوایی</p>
                </Link>
                <Link to="/login/mainPage/formList/ambulanceBus" className={classesList}>
                    <span className="bg-yellow-400 me-2 p-2 rounded-full"></span>
                    <p>اتوبوس آمبولانس</p>
                </Link>
                <Link to="/login/mainPage/formList/motorlance" className={classesList}>
                    <span className="bg-yellow-400 me-2 p-2 rounded-full"></span>
                    <p>موتورلانس</p>
                </Link>
                <Link to="/login/mainPage/formList/injureds" className={classesList}>
                    <span className="bg-yellow-400 me-2 p-2 rounded-full"></span>
                    <p>مصدومین بیمار ورودی</p>
                </Link>
                <Link to="/login/mainPage/formList/heatstroke" className={classesList}>
                    <span className="bg-yellow-400 me-2 p-2 rounded-full"></span>
                    <p>گرمازدگی</p>
                </Link>
            </main>
         </section>
        </>
    );
}

export default FormsList;