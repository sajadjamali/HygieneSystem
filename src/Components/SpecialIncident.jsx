import { Link } from "react-router-dom";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const SpecialIncident = () => {
    return (
        <>
        <section className="bg-white overflow-auto h-screen my-5 mx-auto a:w-10/12 md:w-7/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 a:rounded-md">
            <header style={{color: "#2857BD"}} className="flex justify-between items-center border-t-2 border-gray-100 mt-8 py-4 pe-6 shadow-sm shadow-gray-200">
                <p></p>
                <p className="font-bold">فرم حادثه ویژه</p>
                <Link to="/login/mainPage"><ArrowForwardIosOutlinedIcon fontSize="large"/></Link>
            </header>
            <main style={{direction: "rtl"}} className="px-7">
                <form action="#">
                <section>
                    <p className="text-blue-700 mt-10 font-bold">اطلاعات پایه</p>
                    <div className="form-group mt-10 relative rounded-lg border-2 border-gray-400">
                        <label className="bg-white text-gray-700 absolute">تاریخ</label>
                        <input className="w-full focus:outline-none p-2 focus:ring-2" placeholder="تاریخ" type="text" />
                    </div>
                    <div className="form-group mt-8 relative rounded-lg border-2 border-gray-400">
                        <label className="bg-white text-gray-700 absolute">ساعت</label>
                        <input className="w-full focus:outline-none p-2 focus:ring-2" placeholder="ساعت" type="text" />
                    </div>
                </section>
                <section>
                    <p className="text-blue-700 mt-10 font-bold">اطلاعات حادثه</p>
                    <p className="mt-8">پرکردن فیلدهای زیر الزامی می باشد.</p>
                    <div className="form-group mt-10 relative rounded-lg border-2 border-gray-400">
                        <label className="bg-white text-gray-700 absolute">شرح حادثه</label>
                        <input className="w-full focus:outline-none p-2 focus:ring-2" required placeholder="شرح حادثه" type="text" />
                    </div>
                    <div className="form-group mt-8 relative rounded-lg border-2 border-gray-400">
                        <label className="bg-white text-gray-700 absolute">محل حادثه</label>
                        <input className="w-full focus:outline-none p-2 focus:ring-2" required placeholder="محل حادثه" type="text" />
                    </div>
                </section>
                <section>
                    <p className="text-blue-700 mt-10 font-bold">کل مصدومین وفوتی</p>
                    <div className="form-group mt-10 relative rounded-lg border-2 border-gray-400">
                        <label className="bg-white text-gray-700 absolute">مصدوم</label>
                        <input className="w-full focus:outline-none p-2 focus:ring-2" required placeholder="مصدوم" type="text" />
                    </div>
                    <div className="form-group mt-8 relative rounded-lg border-2 border-gray-400">
                        <label className="bg-white text-gray-700 absolute">فوتی</label>
                        <input className="w-full focus:outline-none p-2 focus:ring-2" required placeholder="فوتی" type="text" />
                    </div>
                </section>
                <section>
                    <p className="text-blue-700 mt-10 font-bold">کل مصدومین</p>
                    <div className="form-group mt-10 relative rounded-lg border-2 border-gray-400">
                        <label className="bg-white text-gray-700 absolute">اعزام به مراکز درمانی</label>
                        <input className="w-full focus:outline-none p-2 focus:ring-2" required placeholder="اعزام به مراکز درمانی" type="text" />
                    </div>
                    <div className="form-group mt-8 relative rounded-lg border-2 border-gray-400">
                        <label className="bg-white text-gray-700 absolute">درمان در محل</label>
                        <input className="w-full focus:outline-none p-2 focus:ring-2" required placeholder="درمان در محل" type="text" />
                    </div>
                </section>
                <div className="flex justify-center mt-20">
                    <button style={{color: "#2857BD"}} className="py-2 rounded-md border-2 border-blue-600 w-6/12">انصراف</button>
                    <button className="text-white rounded-md ms-5 w-6/12" style={{backgroundColor: "#2857BD"}}>ذخیره اطلاعات</button>
                </div>
                </form>
            </main>
        </section>
        </>
    );
}

export default SpecialIncident;