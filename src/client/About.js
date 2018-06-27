import React, {Component} from 'react';

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="about">
          <img src="temp" alt="" className="about-head"/>
          <h1 className="about-head">Team Strawberry</h1>
        </div>
        <div className="profiles">
          <div className="profiles__profile">
            <img src="temp" alt="" className="team__profile"/>
            <h3 className="name">Stephanie Wang</h3>
            <p className="bio">STEPHY is legit cool</p>
          </div>
          <div className="profiles__profile">
            <img src="temp" alt="" className="team__profile"/>
            <h3 className="name">Matthew Beaty</h3>
            <p className="bio">Matthew is almost as cool as Stephanie, but not quite.</p>
          </div>
        </div>
      </div>
    );
  }
}