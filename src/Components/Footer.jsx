import React from 'react'
import { IoIosCall } from "react-icons/io";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
          <div className="f-logo-content">
             <div className="logo-f">
                 <img src="/assets/logo.png" className='f-logo'/>
                 <h3 className='c-name-f'>Machine Tek Engineering (Pvt) Ltd.</h3>
             </div>
             <p className="f-content">
             Machine Tek Engineering is a 2nd generation family owned business, providing turnkey & cost effective solutions to the industry. Our services cover Basic Design, Basic Engineering, Gear Manufacturing, Rollers Manufacturing & Hard Chrome Plating.
             </p>
          </div>
          <div className="footer-links">
             <div className="f-call"><IoIosCall className='f-icons'/> +92-42-37918132</div>
             <div className="f-email">
                <MdOutlineForwardToInbox className='f-icons'/>
             info@machinetek.pk
             </div>
             <div className="f-location">
                <IoLocationSharp className='f-icons'/>
             27n, Sui Gas Road, Mehboob Park, Jia Musa Shahdara Lahore
             </div>
          </div>
      </div> 
      <div className="patti">
         <p>© 2023 Machinetek All rights reserved</p>
      </div>
    </>
  )
}

export default Footer
