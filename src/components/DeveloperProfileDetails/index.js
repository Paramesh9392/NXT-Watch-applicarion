import HeaderComponent from '../HeaderComponent'
import NavigationMenuAsLeftSideBar from '../NavigationMenuAsLeftSideBar'
import NxtWatchContext from '../../Context/NxtWatchContext'

import './index.css'

import {
  NavigationAndComponentContainer,
  ProfileContainer,
  ProfileBgContainer,
  ProfileDetailsContainer,
  ProfileImg,
  NameText,
  BioInfo,
  SkillsContainer,
  Heading,
  SideHeading,
  ToolsText,
  HrLine,
  ResumeDetails,
  ContactDetails,
  EachItems,
} from './StyledComponents'

const DeveloperProfileDetails = () => (
  <div>
    <HeaderComponent />
    <NavigationAndComponentContainer>
      <NavigationMenuAsLeftSideBar />
      <NxtWatchContext.Consumer>
        {value => {
          const {lightTheme} = value
          return (
            <>
              <ProfileContainer value={lightTheme}>
                <ProfileBgContainer>
                  <ProfileDetailsContainer>
                    <ProfileImg
                      src="https://res.cloudinary.com/ddbzrs61m/image/upload/v1719687430/WhatsApp_Image_2024-04-28_at_20.00.23_1_cfixji.jpg"
                      alt="profile-img"
                    />
                    <NameText value={lightTheme}>Paramesh Dupam</NameText>
                    <BioInfo>
                      Full Stack Development Trainee | CCBPian at NxtWave |
                      React JS, Frontend Developer
                      <br />
                      <br />
                      Graduate From Sri KrishnaDevaraya University
                    </BioInfo>
                  </ProfileDetailsContainer>
                  <HrLine value={lightTheme}></HrLine>
                  <Heading>Technical Skills</Heading>

                  <ul className="skills-container">
                    <li className="skill-items">
                      <h1 className="skills-heading">Frontend Developer :</h1>
                      <p className="tools-text">
                        React js, HTML, CSS, Javascript, Bootstrap
                      </p>
                    </li>

                    <li className="skill-items">
                      <h1 className="skills-heading">BackEnd Developer :</h1>
                      <p className="tools-text">
                        Node js, Express js, RESTful APIs
                      </p>
                    </li>

                    <li className="skill-items">
                      <h1 className="skills-heading">Programming Language :</h1>
                      <p className="tools-text">Python</p>
                    </li>

                    <li className="skill-items">
                      <h1 className="skills-heading">Database Management :</h1>
                      <p className="tools-text">MongoDB, SQL</p>
                    </li>

                    <li className="skill-items">
                      <h1 className="skills-heading">Developer Tools :</h1>
                      <p className="tools-text">Visual Studio Code</p>
                    </li>

                    <li className="skill-items">
                      <h1 className="skills-heading">
                        Version Control System :
                      </h1>
                      <p className="tools-text">GitHub</p>
                    </li>
                  </ul>
                  <HrLine value={lightTheme}></HrLine>

                  <Heading>Resume</Heading>
                  <ResumeDetails>
                    <a href="https://res.cloudinary.com/ddbzrs61m/image/upload/v1719825567/DHUPAM_PARAMESH-2_1_z5bsyb.jpg">
                      Click Here to View Resume{' '}
                    </a>
                  </ResumeDetails>
                  <HrLine value={lightTheme}></HrLine>
                  <Heading>Cover Letter</Heading>
                  <ResumeDetails>
                    <a href="https://res.cloudinary.com/ddbzrs61m/image/upload/v1719826278/DHUPAM_PARAMESH_Cover_Letter_edited_nfm6jg.jpg">
                      Click Here to view Cover Letter
                    </a>
                  </ResumeDetails>
                  <HrLine value={lightTheme}></HrLine>
                  <Heading>Contact Information</Heading>
                  <ul className="skills-container">
                    <EachItems>
                      <img
                        src="https://res.cloudinary.com/ddbzrs61m/image/upload/v1719783256/vecteezy_whatsapp-png-icon_16716480_erb0ra.png"
                        alt="watsapp"
                        className="icons"
                      />
                      <ToolsText>+91 9392037976</ToolsText>
                    </EachItems>

                    <EachItems>
                      <img
                        src="https://res.cloudinary.com/ddbzrs61m/image/upload/v1719783256/vecteezy_purple-mail-icon_12909513_vvtn8f.png"
                        alt="email"
                        className="icons"
                      />
                      <ToolsText>ParameshDupam9652@gmail.com</ToolsText>
                    </EachItems>

                    <EachItems>
                      <img
                        src="https://res.cloudinary.com/ddbzrs61m/image/upload/v1719823456/vecteezy_linkedin-png-icon_16716470_sjjrd2.png"
                        alt="Linkedin"
                        className="icons"
                      />
                      <a 
                       href="https://www.linkedin.com/in/paramesh-dupam-80b282285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                       className="tag-text"
                      >
                        Linkedin
                      </a>
                    </EachItems>

                    <EachItems>
                      <img
                        src="https://res.cloudinary.com/ddbzrs61m/image/upload/v1719783257/vecteezy_facebook-png-icon_16716447_gzbpt5.png"
                        alt="facebook"
                        className="icons"
                      />
                      <a 
                        href="https://www.facebook.com/profile.php?id=100022838602838&mibextid=ZbWKwL" 
                        className="tag-text"
                      >
                        Facebook
                      </a>
                    </EachItems>

                    <EachItems>
                      <img
                        src="https://res.cloudinary.com/ddbzrs61m/image/upload/v1719823458/vecteezy_instagram-icon-logo-symbol_24170870_xo9x4n.png"
                        alt="instagram"
                        className="instgram-icons"
                      />
                      <a 
                       href="https://www.instagram.com/paramesh_tarak_9999?igsh=cW9yYmY5YzJ1N2Ns" 
                       className ="tag-text"
                      >
                        Instagram
                      </a>
                    </EachItems>
                  </ul>
                </ProfileBgContainer>
              </ProfileContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    </NavigationAndComponentContainer>
  </div>
)

export default DeveloperProfileDetails
