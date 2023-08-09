import App from '../App.jsx'
import ErrorPage from '../Components/ErrorPage.jsx'
import Login from '../Components/Login.jsx'
import MainPage from '../Components/MainPage.jsx'
import Profile from '../Components/Profile.jsx'
import EditInformation from '../Components/EditInformation.jsx'
import FormsList from '../Components/FormsList.jsx'
import SpecialIncident from '../Components/SpecialIncident.jsx'
import Mission from '../Components/Mission.jsx'
import AirEmergency from '../Components/AirEmergency.jsx'
import AmbulanceBus from '../Components/AmbulanceBus.jsx'
import Heatstroke from '../Components/Heatstroke.jsx'
import Motorlance from '../Components/Motorlance.jsx'
import Injured from '../Components/Injureds.jsx'

import { createBrowserRouter } from "react-router-dom";
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path:"/login",
    element: <Login/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login/mainPage",
    element: <MainPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login/mainPage/profile",
    element: <Profile/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login/mainPage/profile/edit",
    element: <EditInformation/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login/mainPage/formsList",
    element: <FormsList/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login/mainPage/formList/specialIncident",
    element: <SpecialIncident/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login/mainPage/formList/mission",
    element: <Mission/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login/mainPage/formList/airEmergency",
    element: <AirEmergency/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login/mainPage/formList/ambulanceBus",
    element: <AmbulanceBus/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login/mainPage/formList/motorlance",
    element: <Motorlance/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login/mainPage/formList/injureds",
    element: <Injured/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login/mainPage/formList/heatstroke",
    element: <Heatstroke/>,
    errorElement: <ErrorPage/>
  }
]);

export default router;