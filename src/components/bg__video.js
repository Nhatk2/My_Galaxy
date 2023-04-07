import React from 'react'
import VD from "../assets/video/bg_Galaxy.mp4"
import "../assets/style/bg__video.css"
function bg__video() {
  return (
    <div className='video'>
        <video src={VD} autoPlay loop muted/>
    </div>
  )
}

export default bg__video