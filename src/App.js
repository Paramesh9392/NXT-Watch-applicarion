import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import LikedVideosRoute from './components/LikedVideosRoute'
import DisLikedVideosRoute from './components/DisLikedVideosRoute'
import DeveloperProfileDetails from './components/DeveloperProfileDetails'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import NotFoundRoute from './components/NotFoundRoute'
import ProtectedRoute from './components/ProtectedRoute'

import NxtWatchContext from './Context/NxtWatchContext'

import './App.css'

class App extends Component {
  state = {lightTheme: true, likedList: [], dislikedList: [], savedList: []}

  changeTheme = () => {
    this.setState(prevState => ({lightTheme: !prevState.lightTheme}))
  }

  changedAttributesOnThemeChange = () => {
    const {lightTheme} = this.state

    let watchLogoImage
    let failureViewImage
    let notFoundImage

    if (lightTheme) {
      watchLogoImage =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      failureViewImage =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      notFoundImage =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
    } else {
      watchLogoImage =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      failureViewImage =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      notFoundImage =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
    }

    const watchLogoImageAlt = 'website logo'
    const failureViewImageAlt = 'failure view'
    const notFoundImageAlt = 'not found'

    return {
      watchLogoImage,
      watchLogoImageAlt,
      failureViewImage,
      failureViewImageAlt,
      notFoundImage,
      notFoundImageAlt,
    }
  }

  addAsLikedVideos = videoDetails => {
    const {likedList, dislikedList} = this.state
    let likedListIds = []
    let dislikedListIds = []
    if (likedList.length !== 0) {
      likedListIds = likedList.map(each => each.id)
    }
    if (likedListIds.includes(videoDetails.id)) {
      this.setState({
        likedList: likedList.filter(each => each.id !== videoDetails.id),
      })
    }
    if (dislikedList.length !== 0) {
      dislikedListIds = dislikedList.map(each => each.id)
    }
    if (dislikedListIds.includes(videoDetails.id)) {
      this.setState({
        dislikedList: dislikedList.filter(each => each.id !== videoDetails.id),
      })
    } else {
      this.setState({likedList: [...likedList, videoDetails]})
    }
  }

  addAsDislikedVideos = videoDetails => {
    const {likedList, dislikedList} = this.state
    let likedListIds = []
    let dislikedListIds = []
    if (likedList.length !== 0) {
      likedListIds = likedList.map(each => each.id)
    }
    if (likedListIds.includes(videoDetails.id)) {
      this.setState({
        likedList: likedList.filter(each => each.id !== videoDetails.id),
      })
    }
    if (dislikedList.length !== 0) {
      dislikedListIds = dislikedList.map(each => each.id)
    }
    if (dislikedListIds.includes(videoDetails.id)) {
      this.setState({
        dislikedList: dislikedList.filter(each => each.id !== videoDetails.id),
      })
    } else {
      this.setState({dislikedList: [...dislikedList, videoDetails]})
    }
  }

  addOrRemoveAsOrFromSavedVideos = videoDetails => {
    const {savedList} = this.state
    let savedListIds = []
    if (savedList.length !== 0) {
      savedListIds = savedList.map(each => each.id)
    }
    if (savedListIds.includes(videoDetails.id)) {
      this.setState({
        savedList: savedList.filter(each => each.id !== videoDetails.id),
      })
    } else {
      this.setState({savedList: [...savedList, videoDetails]})
    }
  }

  render() {
    const {lightTheme, likedList, dislikedList, savedList} = this.state

    console.log(likedList)

    return (
      <NxtWatchContext.Provider
        value={{
          lightTheme,
          changeTheme: this.changeTheme,
          changedAttributesOnThemeChange: this.changedAttributesOnThemeChange,
          likedList,
          dislikedList,
          savedList,
          addAsLikedVideos: this.addAsLikedVideos,
          addAsDislikedVideos: this.addAsDislikedVideos,
          addOrRemoveAsOrFromSavedVideos: this.addOrRemoveAsOrFromSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/developerDetails"
            component={DeveloperProfileDetails}
          />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute
            exact
            path="/liked-videos"
            component={LikedVideosRoute}
          />
          <ProtectedRoute
            exact
            path="/disliked-videos"
            component={DisLikedVideosRoute}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <Route exact path="/not-found" component={NotFoundRoute} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
