import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Link } from 'react-router-dom';

const Heatstroke = () => {
    return (
        <>
        <section className="bg-white overflow-auto h-screen my-5 mx-auto a:w-10/12 md:w-7/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 a:rounded-md">
            <header style={{color: "#2857BD"}} className="flex justify-between items-center border-t-2 border-gray-100 mt-8 py-4 pe-6 shadow-sm shadow-gray-200">
                <p></p>
                <p className="font-bold">گرمازدگی</p>
                <Link to="/login/mainPage/formsList"><ArrowForwardIosOutlinedIcon fontSize="large"/></Link>
            </header>
            <main style={{direction: "rtl"}} className="mt-16">
                <form action="#" className="px-8 pb-8 space-y-10">
                <section className="space-y-10">
                        <div className="form-group relative rounded-lg border-2 border-gray-400">
                            <label className="bg-white text-gray-700 absolute">نام استان</label>
                            <input className="w-full focus:outline-none p-2 focus:ring-2" type="text" />
                        </div>
                        <div className="form-group relative rounded-lg border-2 border-gray-400">
                            <label className="bg-white text-gray-700 absolute">نام دانشگاه</label>
                            <input className="w-full focus:outline-none p-2 focus:ring-2" type="text" />
                        </div>
                        <div className="form-group relative rounded-lg border-2 border-gray-400">
                            <label className="bg-white text-gray-700 absolute">نام مرز</label>
                            <input className="w-full focus:outline-none p-2 focus:ring-2" type="text" />
                        </div>
                        <div className="form-group relative rounded-lg border-2 border-gray-400">
                            <label className="bg-white text-gray-700 absolute">تاریخ</label>
                            <input className="w-full focus:outline-none p-2 focus:ring-2" type="text" />
                        </div>
                    </section>
                    <section className="space-y-10">
                        <p style={{color: "#2857BD"}} className="font-bold">نتایج کل ماموریت ها</p>
                        <div className="form-group relative rounded-lg border-2 border-gray-400">
                            <label className="bg-white text-gray-700 absolute">کل بیماران</label>
                            <input className="w-full focus:outline-none p-2 focus:ring-2" type="number" placeholder='0' />
                        </div>
                    </section>
                    <section className="space-y-10">
                        <p style={{color: "#2857BD"}} className="font-bold">جنس</p>
                        <div className="form-group relative rounded-lg border-2 border-gray-400">
                            <label className="bg-white text-gray-700 absolute">مرد</label>
                            <input className="w-full focus:outline-none p-2 focus:ring-2" type="number" placeholder='0' />
                        </div>
                        <div className="form-group relative rounded-lg border-2 border-gray-400">
                            <label className="bg-white text-gray-700 absolute">زن</label>
                            <input className="w-full focus:outline-none p-2 focus:ring-2" type="number" placeholder='0' />
                        </div>
                    </section>
                    <section className="space-y-10">
                        <p style={{color: "#2857BD"}} className="font-bold">ملیت</p>
                        <div className="form-group relative rounded-lg border-2 border-gray-400">
                            <label className="bg-white text-gray-700 absolute">ایرانی</label>
                            <input className="w-full focus:outline-none p-2 focus:ring-2" type="number" placeholder='0' />
                        </div>
                        <div className="form-group relative rounded-lg border-2 border-gray-400">
                            <label className="bg-white text-gray-700 absolute">اتباع</label>
                            <input className="w-full focus:outline-none p-2 focus:ring-2" type="number" placeholder='0' />
                        </div>
                    </section>
                    <section className="space-y-10">
                       <div className="form-group relative rounded-lg border-2 border-gray-400">
                            <label className="bg-white text-gray-700 absolute">درمان سرپایی</label>
                            <input className="w-full focus:outline-none p-2 focus:ring-2" type="number" placeholder='0' />
                        </div>
                        <div className="form-group relative rounded-lg border-2 border-gray-400">
                            <label className="bg-white text-gray-700 absolute">سرم تراپی</label>
                            <input className="w-full focus:outline-none p-2 focus:ring-2" type="number" placeholder='0' />
                        </div>
                        <div className="form-group relative rounded-lg border-2 border-gray-400">
                            <label className="bg-white text-gray-700 absolute">اعزام به مراکز درمانی</label>
                            <input className="w-full focus:outline-none p-2 focus:ring-2" type="number" placeholder='0' />
                        </div>
                    </section>
                    <section className="space-y-10">
                        <p style={{color: "#2857BD"}} className="font-bold">نتیجه اعزام به مرکز درمانی</p>
                        <div className="form-group relative rounded-lg border-2 border-gray-400">
                            <label className="bg-white text-gray-700 absolute">درمان و ترخیص</label>
                            <input className="w-full focus:outline-none p-2 focus:ring-2" type="number" placeholder='0' />
                        </div>
                        <div className="form-group relative rounded-lg border-2 border-gray-400">
                            <label className="bg-white text-gray-700 absolute">بستری در بخش تخصصی</label>
                            <input className="w-full focus:outline-none p-2 focus:ring-2" type="number" placeholder='0' />
                        </div>
                        <div className="form-group relative rounded-lg border-2 border-gray-400">
                            <label className="bg-white text-gray-700 absolute">بستری در مراقبت های ویژه</label>
                            <input className="w-full focus:outline-none p-2 focus:ring-2" type="number" placeholder='0' />
                        </div>
                    </section>
                    <section className="space-y-10">
                        <p style={{color: "#2857BD"}} className="font-bold">نتیجه اعزام به مرکز درمانی</p>
                        <div className="form-group relative rounded-lg border-2 border-gray-400">
                            <label className="bg-white text-gray-700 absolute">در محل حادثه</label>
                            <input className="w-full focus:outline-none p-2 focus:ring-2" type="number" placeholder='0' />
                        </div>
                        <div className="form-group relative rounded-lg border-2 border-gray-400">
                            <label className="bg-white text-gray-700 absolute">در مرکز درمانی</label>
                            <input className="w-full focus:outline-none p-2 focus:ring-2" type="number" placeholder='0' />
                        </div>
                    </section>
                    <section className="flex justify-center">
                        <button style={{color: "#2857BD"}} className="py-2 rounded-md border-2 border-blue-600 w-6/12">انصراف</button>
                        <button className="text-white rounded-md ms-5 w-6/12" style={{backgroundColor: "#2857BD"}}>ذخیره اطلاعات</button>
                    </section>
                </form>
            </main>
        </section>
        </>
    );
}

export default Heatstroke;