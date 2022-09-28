// write code for Welcome component here
import React from 'react';

const Welcome = props => {
  return(
    <div>
    <h1>Hey ! {props.name}</h1>
    {props.children}
    </div>
  )
}

export default Welcome
