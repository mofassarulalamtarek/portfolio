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
              src="/man-svgrepo-com.svg"
              alt="man-svgrepo"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Mofassirul Alam Tarek</strong>, and I’m originally from Bangladesh. Over the years, I’ve built a strong foundation in IT through diverse professional experiences that have sharpened my technical expertise, problem-solving abilities, and adaptability. My journey has been driven by a passion for technology, innovation, and delivering reliable infrastructure solutions that empower businesses to perform at their best.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Seasoned IT Systems and Network Operations Specialist with extensive hands-on experience in managing and optimizing data center environments. Proven expertise across virtualization, cloud, and enterprise networking, with a strong record of ensuring system reliability, scalability, and security.

              Highly skilled in VMware and vCenter ecosystems — including ESXi, Horizon, NSX, and Velocloud — as well as Windows and Linux server administration. Adept at architecting and supporting complex enterprise networks featuring Sophos and Cisco firewalls, and networking technologies from Cisco, Huawei, Meraki, Netgear, and BDCOM.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Comprehensive background in Active Directory, Exchange, Microsoft 365, AWS, Azure, and Veeam backup solutions. Demonstrated proficiency in endpoint security, antivirus management, IPTSP systems, and CCTV infrastructure.
            </ScrollAnimation>

    
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
