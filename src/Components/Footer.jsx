import React from 'react'
import logo1 from "../assets/footer1.png"
import logo2 from "../assets/footer2.png"
function Footer() {
  return (
    <>
    <div className="container-fluid p-5" style={{backgroundColor:"black"}}>
        <div className="container  " >
            <div className=" row ">
                <div className="col-lg-4 mt-4">
                    <div  style={{height:"100%"}} className="rounded border-secondary d-flex flex-column justify-content-center align-items-center p-3">
                         <h4 style={{color:"white"}} >connect with us</h4>
                         <span style={{color:"white"}}>900000000</span>
                         <span style={{color:"white"}}>info@deepnet.com</span>
                         
                    </div>
                </div>
                <div className="col-lg-4 mt-4">
                   <div style={{height:"100%",position:"relative"}} className="rounded border-secondary d-flex flex-column justify-content-center align-items-center p-3">
                        <img className='logo'  src={logo1} alt="" />
                        <img className='mt-4' width={"50%"} src={logo2} alt="" />
                   </div>
                </div>
                <div className="col-lg-4 mt-4">
                    <div style={{height:"100%"}} className='rounded border-secondary d-flex flex-column justify-content-center align-items-center p-3'>
                        <h4 style={{color:"white"}}>Find us</h4>
                        <span style={{color:"white"}}>location</span>
                        <span style={{color:"white"}}>location</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div  style={{backgroundColor:"#857878",fontSize:"10px",color:"black"}}  className='container-fluid d-flex justify-content-between align-items-center px-3 py-1'>
        <span>© 2024 Deepnetsoft Solutions. All rights reserved.</span>
        <span>Terms & Conditions  Privacy Policy</span> 
    </div>
    </>
  )
}

export default Footer