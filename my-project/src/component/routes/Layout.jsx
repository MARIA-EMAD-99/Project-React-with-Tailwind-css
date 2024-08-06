
import Sectionfour from "../Doctors/sectionfour"

import Footer from "../footer/footer"
import Resource from "../sectionfive/Resource"
import Departments from "./../sectionsthree/Departments"
import Specialists from "../specialists/SPECIALISTS"
import HeaderOne from "./../header/HeaderOne"
import ResponsiveAppBar from './../nav/Header'
import Aboutus from './About';

function Layout() {
  return (
    <>
     <HeaderOne></HeaderOne>
     <ResponsiveAppBar></ResponsiveAppBar>
     <Specialists></Specialists>
     <Aboutus></Aboutus>
     <Departments></Departments>
     <Sectionfour></Sectionfour>
     <Resource></Resource>
     <Footer></Footer>  
    

    </>
  )
}

export default Layout