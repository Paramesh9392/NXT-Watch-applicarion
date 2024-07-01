import {Link, withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {BiLike, BiDislike} from 'react-icons/bi'

import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  NavigationMenuContainerWrapper,
  NavigationItemsContainer,
  EachNavigationContainer,
  NavigationRouteNames,
  NavigationContactContainer,
  NavigationContactImages,
  NavigationContainerFootLine,
  Icon,
  ProfileImg,
  ProfileNavigationContainer,
  ProfileNavigationRouteNames,
} from './StyledComponents'

const NavigationMenuAsLeftSideBar = props => {
  const {match} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {lightTheme} = value

        return (
          <NavigationMenuContainerWrapper value={lightTheme}>
            <NavigationItemsContainer>
              <li>
                <EachNavigationContainer
                  as={Link}
                  to="/"
                  selection={match.path === '/'}
                  theme={lightTheme}
                >
                  <Icon as={AiFillHome} selection={match.path === '/'} />
                  <NavigationRouteNames>Home</NavigationRouteNames>
                </EachNavigationContainer>
              </li>
              <li>
                <EachNavigationContainer
                  as={Link}
                  to="/trending"
                  selection={match.path === '/trending'}
                  theme={lightTheme}
                >
                  <Icon as={HiFire} selection={match.path === '/trending'} />
                  <NavigationRouteNames>Trending</NavigationRouteNames>
                </EachNavigationContainer>
              </li>
              <li>
                <EachNavigationContainer
                  as={Link}
                  to="/gaming"
                  selection={match.path === '/gaming'}
                  theme={lightTheme}
                >
                  <Icon
                    as={SiYoutubegaming}
                    selection={match.path === '/gaming'}
                  />
                  <NavigationRouteNames>Gaming</NavigationRouteNames>
                </EachNavigationContainer>
              </li>
              <li>
                <EachNavigationContainer
                  as={Link}
                  to="/saved-videos"
                  selection={match.path === '/saved-videos'}
                  theme={lightTheme}
                >
                  <Icon
                    as={MdPlaylistAdd}
                    selection={match.path === '/saved-videos'}
                  />
                  <NavigationRouteNames>Saved videos</NavigationRouteNames>
                </EachNavigationContainer>
              </li>
              <li>
                <EachNavigationContainer
                  as={Link}
                  to="/liked-videos"
                  selection={match.path === '/liked-videos'}
                  theme={lightTheme}
                >
                  <Icon
                    as={BiLike}
                    selection={match.path === '/liked-videos'}
                  />
                  <NavigationRouteNames>Liked videos</NavigationRouteNames>
                </EachNavigationContainer>
              </li>
              <li>
                <EachNavigationContainer
                  as={Link}
                  to="/disliked-videos"
                  selection={match.path === '/disliked-videos'}
                  theme={lightTheme}
                >
                  <Icon
                    as={BiDislike}
                    selection={match.path === '/disliked-videos'}
                  />
                  <NavigationRouteNames>DisLiked videos</NavigationRouteNames>
                </EachNavigationContainer>
              </li>

              <li>
                <ProfileNavigationContainer
                  as={Link}
                  to="/developerDetails"
                  selection={match.path === '/developerDetails'}
                  theme={lightTheme}
                >
                  <ProfileImg
                    src="https://res.cloudinary.com/ddbzrs61m/image/upload/v1719687430/WhatsApp_Image_2024-04-28_at_20.00.23_1_cfixji.jpg"
                    alt="profile-img"
                    selection={match.path === '/developerDetails'}
                  />
                  <ProfileNavigationRouteNames>
                    Developer Details
                  </ProfileNavigationRouteNames>
                </ProfileNavigationContainer>
              </li>
            </NavigationItemsContainer>

            <NavigationContactContainer value={lightTheme}>
              <p>CONTACT US</p>
              <div>
                <NavigationContactImages
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt=" facebook logo"
                />
                <NavigationContactImages
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                  alt="twitter logo"
                />
                <NavigationContactImages
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt=" linked in logo"
                />
              </div>
              <NavigationContainerFootLine>
                Enjoy! Now to see your channels and recommendations!
              </NavigationContainerFootLine>
            </NavigationContactContainer>
          </NavigationMenuContainerWrapper>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(NavigationMenuAsLeftSideBar)
