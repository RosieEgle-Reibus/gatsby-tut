 import React from 'react'

 const RobotImage = ({src , alt}) => {
     
    return (
        <figure>
            <img src={src} width="200px" alt={alt}/>
        </figure>
     )
 }

 export default RobotImage