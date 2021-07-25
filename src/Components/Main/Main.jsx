import React, { useState } from 'react';
import { mileStones, awards } from './data';
import image from '../../assets/img/banker.png'
import image2 from '../../assets/img/benefactor.png'
import './Main.scss';

export default () => {
  console.log(mileStones)
  const [showContent, setShowContent] = useState(false);
  const [randomedMileStones, setRandomMileStones] = useState();
  const [randomedAwards, setAwards] = useState();

  const Randomizer = () => {
    const finalMileStones = mileStones.sort(() => Math.random() - Math.random()).slice(0, 5);
    const finalAwards = awards.sort(() => Math.random() - Math.random()).slice(0, 5);
    if (finalMileStones.length < 1 && finalAwards.length < 1) {
      console.log("error");
    } else {
      setShowContent(true);
      setRandomMileStones(finalMileStones);
      setAwards(finalAwards);
    }
  }


  return(
    <div>
      <button onClick={Randomizer}>Randomizer</button>

      <div>
        {!showContent && <h1>Generate</h1>}
        <div>
          <h2 className="title">Milestones</h2>
          <div className="milestones container">
            {
              showContent && randomedMileStones.map(item =>
                <div key={item.id} className="item">
                  <h4>{item.name}</h4>
                </div>
              )
            }
          </div>
          <h2 className="title">Awards</h2>
          <div className="awards container">
            {
              showContent && randomedAwards.map(item =>
                <div key={item.id} className="item">
                  <h4>{item.name}</h4>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}