import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Link } from 'react-router-dom';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { useState, useRef, useEffect } from 'react';

const EditInformation = () => {

    const [flag, setFlag] = useState(false);
    const [name, setName] = useState("نجمه");
    const [lastName, setLastName] = useState("علوی");
    const [email, setEmail] = useState("Example@Gmail.Com");
    const [phoneNumber, setPhoneNumber]= useState("09124956639");
    const [job, setJob] = useState("کارمند");

    const refName = useRef();
    const refLastName = useRef();
    const refEmail = useRef();
    const refPhoneNumber = useRef();
    const refJob = useRef();

    const savedName = useRef("");
    const savedLastName = useRef("");
    const savedEmail = useRef("");
    const savedPhoneNumber = useRef("");
    const savedJob = useRef("");

    useEffect(() => {
        savedName.current = name;
        savedLastName.current = lastName;
        savedEmail.current = email;
        savedPhoneNumber.current = phoneNumber;
        savedJob.current = job;
    }, []);

    const handleSaveInformation = () => {
        setFlag(false);
        setName(refName.current.value);
        setLastName(refLastName.current.value);
        setEmail(refEmail.current.value);
        setJob(refJob.current.value);
        savedName.current = refName.current.value;
        savedLastName.current = refLastName.current.value;
        savedEmail.current = refEmail.current.value;
        savedPhoneNumber.current = refPhoneNumber.current.value;
        savedJob.current = refJob.current.value;
    }

    const handleCancel = () => {
        setFlag(false);
        setName(savedName.current);
        setLastName(savedLastName.current);
        setEmail(savedEmail.current);
        setPhoneNumber(savedPhoneNumber.current);
        setJob(savedJob.current);
    }

    return (
        <>
        <section className="bg-white overflow-auto h-screen my-5 mx-auto a:w-10/12 md:w-7/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 a:rounded-md">
            <header style={{color: "#2857BD"}} className="flex justify-end items-center border-t-2 border-gray-100 mt-8 py-4 pe-6 shadow-sm shadow-gray-200">
                <p className="font-bold me-16 sm:me-28">تکمیل و ویرایش اطلاعات</p>
                <Link to="/login/mainPage/profile"><ArrowForwardIosOutlinedIcon fontSize="large"/></Link>
            </header>
            <main className="mt-16 px-8">
                <form style={{direction: "rtl"}} className="flex flex-col space-y-10" action="#">
                    <div className="form-group relative rounded-lg border-2 border-gray-400">
                        <label className="bg-white text-gray-700 absolute">نام</label>
                        <input ref={refName} readOnly={!flag} value={name} id="name" onChange={(e) => {setName(e.target.value)}} className="w-full focus:outline-none p-2 focus:ring-2" type="text" />
                    </div>
                    <div className="form-group relative rounded-lg border-2 border-gray-400">
                        <label className="bg-white text-gray-700 absolute">نام خانوادگی</label>
                        <input ref={refLastName} readOnly={!flag} value={lastName} id="lastName" onChange={(e) => {setLastName(e.target.value)}} className="w-full focus:outline-none p-2 focus:ring-2" type="text" />
                    </div>
                    <div className="form-group relative rounded-lg border-2 border-gray-400">
                        <label className="bg-white text-gray-700 absolute">آدرس ایمیل</label>
                        <input ref={refEmail} readOnly={!flag} value={email} id="email" onChange={(e) => {setEmail(e.target.value)}} className="w-full focus:outline-none p-2 focus:ring-2" type="email" />
                    </div>
                    <div className="form-group relative rounded-lg border-2 border-gray-400">
                        <label className="bg-white text-gray-700 absolute">شماره همراه</label>
                        <input ref={refPhoneNumber} readOnly={!flag} value={phoneNumber} id="phoneNumber" onChange={(e) => {setPhoneNumber(e.target.value)}} className="w-full focus:outline-none p-2 focus:ring-2" type="text" />
                    </div>
                    <div className="form-group relative rounded-lg border-2 border-gray-400">
                        <label className="bg-white text-gray-700 absolute">سمت</label>
                        <select ref={refJob} disabled={!flag} className="w-full bg-white p-2">
                        <option value="">کارمند</option>
                        <option value="">#</option>
                        <option value="">#</option>
                        </select>
                    </div>
                    { 
                    flag ? (
                        <div className="flex justify-center">
                            <button onClick={handleCancel} style={{color: "#2857BD"}} className="py-2 rounded-md border-2 border-blue-600 w-6/12">انصراف</button>
                            <button onClick={handleSaveInformation} className="text-white rounded-md ms-5 w-6/12" style={{backgroundColor: "#2857BD"}}>ذخیره اطلاعات</button>
                        </div>
                    ) 
                    :
                    <button style={{color: "#2857BD"}} className="flex items-center rounded-md border-2 py-2 mx-auto border-blue-600">
                        <ModeEditOutlinedIcon fontSize="medium"/>
                        <p onClick={() => setFlag(true)} className="text-md ms-3">ویرایش اطلاعات شخصی</p>
                    </button>
                    }
                </form>
            </main>
        </section>
        </>
    );
}

export default EditInformation;