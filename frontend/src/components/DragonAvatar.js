import React, { Component } from 'react';
import { skinny, slender, sporty, stocky, patchy, plain, spotted, striped } from '../assets';
const propertyMap = {
  backgroundColor: { 
    black:'#0f0f0f', 
    white:'#fffafa', 
    green:'#10b03b', 
    blue:'#0fb0fa'
   },
  build: { 
    slender, 
    stocky, 
    sporty, 
    skinny 
  },
  pattern: { 
    plain, 
    striped, 
    spotted, 
    patchy 
  },
  size: { 
    small:100, 
    medium:140, 
    large:180, 
    enormus:220
   },
};
class DragonAvatar extends Component {
  render() {
    const { dragonId, generationId, traits } = this.props.dragon;
    return (
      <div>
        <span>G{generationId} </span>
        <span>I{dragonId} </span>
        {traits.map(trait => trait.traitValue).join(',')}
      </div>
    );
  }
}
export default DragonAvatar;
