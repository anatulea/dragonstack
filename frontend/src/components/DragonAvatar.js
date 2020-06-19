import React, { Component } from 'react';
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
