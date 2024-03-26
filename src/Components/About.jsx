import React from "react";
import { BsStarFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="port-info">
          <div className="portfolio ">
            <div className="port-msg">
              <h1 className="bold mb-3">Company Portfolio</h1>
              In 1970 Bashir Ahmad (late) laid the foundation of this business
              in a small rented place and started with1 lathe machine and after
              several years of hardworking and devotion this has now turned into
              a flourished engineering business and a team of committed
              Engineers and Professionals that is <br />
              <br />
              Over 50 years of hard work and 2nd generation of the family has
              devoted themselves whole heartedly to take this business to next
              level. <br />
              <br />
              Machine Tek pvt ltd is a quality fabrication and machining
              company. We are specialized in medium to heavy fabrication and all
              kind of parts machining of Paper & Board Mill, Ghee Mill,
              Re-rolling Steel Mill, Dyeing and Finishing Units and are
              recognized as market leader in Gear manufacturing and Chrome
              plating. <br />
              <br />
              Since our inception, we have strived to be a leading provider of
              engineering solutions that meet the evolving needs of our clients,
              and I am proud of the progress we have made. Our engineering
              company has a team of highly skilled professionals who are
              committed to delivering innovative solutions that drive value for
              our clients.
            </div>
          </div>
          <div className="portfolio-img">
            <img src="/assets/MachiningFabrication.png" alt="image is her" />
          </div>
        </div>
      </div>
      <div className="vision-mission">
        <div className="vm-container">
          <div className="vision">
            <BsStarFill className="ab-icon"/>
            <h1 className="bold">Our Vision</h1>
            <p>
              To become an engineering company
               which provides engineering
              solution to   local industry, serving the nation &   rewarding its
              Employees.
            </p>
          </div>
          <div className="mission">
            <BsStarFill className="ab-icon"/>
            <h1 className="bold">Our Mission</h1>
            <p>
              "To provide cost-effective & technically sound solutions according
              to engineering & our customers satisfaction."
            </p>
          </div>
        </div>
      </div>
    
     {/* Policy  */}
     <div className="policy-container">
        <h1 className="bold">QA/QC POLICY</h1>
        <p className="po">
        Our commitment to quality is reflected by our quality services. Processes and methods used while executing the jobs are closely monitored at each step and make sure that job execution is accomplished in strict accord to quality standards. The quality inspectors work as team to monitor & control the job as per customer specification. Each worker assumes his responsibility for quality. Our commitment is to achieve customer satisfaction by providing in-time delivery.
        </p>
     </div>



    </div>
  );
};

export default About;
