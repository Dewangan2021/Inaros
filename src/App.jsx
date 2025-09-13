import "./App.css";

import { Chart as ChartJS } from "chart.js/auto";
import { CheckCircle } from "lucide-react";

import NavBar from "./components/NavBar";

import NavBarSide from "./components/NavBarSide";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    function handleNavBarCloseOutside(event) {
      // console.log(event.clientX);
      if (event.clientX > 250 && showNavBar) {
        setShowNavBar(false);
      }
    }

    window.addEventListener("click", handleNavBarCloseOutside);

    return () => {
      window.removeEventListener("click", handleNavBarCloseOutside);
    };
  }, [showNavBar]);

  const handleNavBarSideOpen = () => {
    setShowNavBar(true);
  };

  const handleNavBarSideClose = () => {
    setShowNavBar(false);
  };

  const navBarData = {
    closeNavBar: handleNavBarSideClose,
    navBarlinks: [
      { link: "/", linkName: "Dashboard", icon: CheckCircle },
      { link: "/formPage", linkName: "Form", icon: CheckCircle },
      { link: "/accordianPage", linkName: "Accordion", icon: CheckCircle },
      { link: "/tablePage", linkName: "Table", icon: CheckCircle },
      { link: "/modalPage", linkName: "Modal", icon: CheckCircle },
      {
        link: "/notificationPage",
        linkName: "Notification",
        icon: CheckCircle,
      },
      { link: "/cardPage", linkName: "Card", icon: CheckCircle },
      { link: "/toastPage", linkName: "Toast", icon: CheckCircle },
      { link: "/countPage", linkName: "Count", icon: CheckCircle },
      { link: "/detailsForm", linkName: "Personal Details", icon: CheckCircle },
    ],
  };
  return (
    <>
      <NavBar openNavBar={handleNavBarSideOpen}></NavBar>

      {showNavBar && <NavBarSide navBarData={navBarData}></NavBarSide>}

      <Outlet />
    </>
  );
}

export default App;
