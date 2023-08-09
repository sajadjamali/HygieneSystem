import b from "./assets/images/b.png";
import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();
  setTimeout(() => {document.getElementById("firstPage").style.display = "none"; navigate("/login")},
   1500);

  return (
    <section id="firstPage" className="m-auto lg:w-8/12">
      <div style={{backgroundColor: "#2857BD"}} className="h-screen flex flex-col justify-center items-center">
        <img src={b} className="font-bold h-32" alt="not found" />
      </div> 
    </section>
  )
}

export default App
