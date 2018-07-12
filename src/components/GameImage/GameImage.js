import React from "react";

const GameImage = props => (
    
    <img onClick={() => props.selectChar(props.name)} alt={props.name} src={props.image} />

  );
  
  export default GameImage;
  