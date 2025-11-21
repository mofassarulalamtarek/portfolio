import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src="/man-svgrepo-com.png"
              alt="Tarek"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! I am <strong>Mofassirul Alam Tarek</strong>,an IT Systems and Network Operations Specialist from Bangladesh with extensive experience in managing and optimizing data center environments. Skilled in VMware and vCenter ecosystems (ESXi, Horizon, NSX, Velocloud), Windows/Linux server administration, and enterprise networking with Cisco, Sophos, Huawei, Meraki, Netgear, and BDCOM technologies, I bring proven expertise in ensuring system reliability, scalability, and security. My background spans Active Directory, Exchange, Microsoft 365, AWS, Azure, and Veeam backup solutions, complemented by proficiency in endpoint security, antivirus management, IPTSP systems, and CCTV infrastructure — all driven by a passion for technology, innovation, and delivering robust infrastructure solutions that empower businesses.
            </ScrollAnimation>

            <br /><br />
    
            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
