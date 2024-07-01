import styled from 'styled-components'

export const NavigationAndComponentContainer = styled.div`
  display: flex;
`
export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  color: ${props => (props.value === true ? '#0f0f0f' : '#ffffff')};
  background-color: ${props => (props.value === true ? '#f4f4f4' : '#0f0f0f')};
  overflow-y: scroll;
`
export const ProfileBgContainer = styled.div`
  background-image: url("https://res.cloudinary.com/ddbzrs61m/image/upload/v1719779721/CCBP_Intensive_LinkedIn_Cover_byiina.png");
  height: 35vh;
  background-size: cover;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const ProfileDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;
`
export const ProfileImg = styled.img`
  height: 160px;
  width: 160px;
  border-radius: 130px;
`
export const NameText = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  margin-top: 15px;
  color:${props => (props.value === true ? '#4a0512' : '#42f5ad')};
`
export const BioInfo = styled.p`
  font-family: 'Roboto';
  font-weight: 450;
  font-size: 22px;
  text-align: center;
  margin-top: 15px;
`
export const SkillsContainer = styled.div`
  display: flex;
  felx-direction: column;
  margin-top: 10px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 24px;
  text-align: left;
  align-self: flex-start;
  margin-top: 8px;
  margin-left: 20px;
  color: darkgreen;
`
export const SideHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 16px;
`
export const ToolsText = styled.span`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  margin-left: 15px
`
export const ResumeDetails = styled.ul`
  display: flex;
  felx-direction: column;
  list-style-type: none;
`
export const ContactDetails = styled.ul`
  display: flex;
  felx-direction: column;
  align-items: center;
  list-style-type: none;
`
export const EachItems = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`
export const HrLine = styled.hr`
  border-color: ${props => (props.value === true ? '#0f0f0f' : '#ffffff')};
  border-width: 1px;
  width: 100%;
  border-style: solid;

`
