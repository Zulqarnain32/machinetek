import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Message = () => {
  return (
    <div>
       <div className="container my-5">
        <h1 className="mb-3 bold">Message from CEO</h1>
        <div className="message">
          Over the course of 40 years,{" "}
          <span className="bold">Machine Tek Engineering</span> has come a long
          way in the field of Gear Manufacturing, Machining of parts,
          Fabrication & Installation and Electroplating. Our company is
          providing cost-effective & technically sound solutions according to
          engineering & our customer’s satisfaction.
          <br />
          <br />
          In the past, our focus was mainly on the parts machining of Paper &
          Board Mill, Ghee Mill, Re-rolling Steel Mill, Dyeing and Finishing
          Units, Tyre Manufacturing Units and Packaging Industries but now we
          are diversifying our field and exploring new horizons in Plant
          Fabrication and Erection as well.
          <br />
          <br />
          Our commitment to excellence is evident in everything we do. We place
          a high value on quality, safety, and sustainability and work towards
          delivering solutions. Hopefully, we will provide you the best services
          as well.
          <br />
          <br />
          Sincerely,
          <div className="mt-4 info">
            <h5>Muhammad Arif</h5>
            <h5>CEO-Machine Tek Engineering (Pvt) Ltd</h5>
            <h5>Mechanical Engineer (UET LAHORE)</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message
