import React, { Component } from 'react'
import './UserCard.css'
import userImg from '../../assets/user_logo.png'

export default class UserCard extends Component {
  render() {
    return (
      <div className="row cardContainer">
        <div className="col-xs-12 col-md-3">
          <img src={userImg} alt="Logo" className="userImg" />
        </div>
        <div className="col-xs-12 col-md-6 py-2 px-0  ml-lg-2 ml-sm-4 dataContainer">
          <div className="m-0 nameContainer">
            <h5 className="nameData">El Pipi</h5>
          </div>
          <div className="m-0 stateContainer">
            <p className="stateData pl-1">Available</p>
          </div>
        </div>
      </div>
    )
  }
}
