import React, { Component } from 'react'
import './ChatHeader.css'
import otherUserImg from '../../assets/user_logo.png'

export default class ChatHeader extends Component {
  render() {
    return (
      <div className="row chatHeaderContainer">
        {/* <h6 className="col-11 m-0 py-2 text-right otherUserName">Pipi con el que habla</h6> */}
        <div className="col-11 mt-3 text-right">
          <div className="m-0 nameContainer">
            <h6 className="otherUserName">Pipi con el que habla</h6>
          </div>
          <div className="m-0 stateContainer">
            <p className="otherUserState">Available</p>
          </div>
        </div>
        <div className="col-1 p-0">
          <img src={otherUserImg} alt="Logo" className="otherUserImg" />
        </div>
      </div>
    )
  }
}
