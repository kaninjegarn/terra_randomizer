import React, { useState } from 'react';
import { mileStones, awards } from './data';

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
        <div className="container">
          <div className="milestones">
            <h4>Milestones</h4>
            {
              showContent && randomedMileStones.map(item =>
                <div key={item.id}>{item.name}</div>
              )
            }
          </div>
          <div className="awards">
            <h4>Awards</h4>
            {
              showContent && randomedAwards.map(item =>
                <div key={item.id}>{item.name}</div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}