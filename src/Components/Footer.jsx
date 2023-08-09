import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import PersonIcon from '@mui/icons-material/Person';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import o from "../assets/images/o.png";
import { Link } from 'react-router-dom';

const Footer = ({ value }) => {
    return (
        <footer className="flex space-x-3 md:space-x-5 justify-center items-center mt-24">
            {value == 1 ? <Link><PersonIcon style={{fontSize: '2em'}} className="text-blue-700 border-t-4 rounded-sm border-blue-700"/></Link> : <Link to="/login/mainPage/profile"><Person2OutlinedIcon style={{fontSize: '2em'}} className="text-blue-700"/></Link>}
            {value == 2 ? <Link><SettingsIcon style={{fontSize: '2em'}} className="text-blue-700 border-t-4 rounded-sm border-blue-700"/></Link> : <Link><SettingsOutlinedIcon style={{fontSize: '2em'}} className="text-blue-700"/></Link>}
            <Link><div className="px-3 py-4 flex flex-col items-center justify-center rounded-full bg-blue-700 text-white relative bottom-10"><img src={o}  alt="not found"/>گزارش سریع</div></Link>
            {value == 3 ? <Link><GridViewRoundedIcon style={{fontSize: '2em'}} className="text-blue-700 border-t-4 rounded-sm border-blue-700"/></Link> : <Link><GridViewOutlinedIcon style={{fontSize: '2em'}} className="text-blue-700"/></Link>}
            {value == 4 ? <Link><HomeRoundedIcon style={{fontSize: '2em'}} className="text-blue-700 border-t-4 rounded-sm border-blue-700"/></Link> : <Link><HomeOutlinedIcon style={{fontSize: '2em'}} className="text-blue-700"/></Link>}
        </footer>
    );
}

export default Footer;