import React, {useState,useEffect,lazy,Suspense } from 'react';
import logo from '../../resources/Interlag_logo.png';
const NavBar = lazy(() => import('../Navbar/Navbar'));
const YearComponent = lazy(() => import('../HomeSection/YearScoolarship'));
const FooterHome = lazy(() => import('../HomeSection/FooterHome'));
const FooterYear = lazy(() => import('../HomeSection/FooterYear'));
const SummerCamp = lazy(() => import('../HomeSection/SummerCamp'));

export default function Home() {
    const [slogan,setSlogan] = useState(true);

    const handleMove  = (e) => {
        e.preventDefault();
        
        window.scrollTo({top: '1000', left: 0, behavior: 'smooth' });


    }
    const showSlogan = () =>{
        if (window.innerWidth <= 960) {
            setSlogan(false);
          } else {
            setSlogan(true);
          }
    }
    useEffect(() =>{
        showSlogan();
    },[])
    window.addEventListener('resize', showSlogan);

    return (
        <>
        <div id="showcase">
        <NavBar />
            <img src={logo} alt="logo Interlag" id="imgLogo"></img>
        <div className="section-main container">
            <p className="hide-on-small">
            <a href="#"> <i onClick={(e) => handleMove(e)}class="arrow down"></i></a>
            </p>
        </div>
        </div>
        <FooterHome />
        <YearComponent />
        <FooterYear />
        <SummerCamp />
        </>
    )
}
