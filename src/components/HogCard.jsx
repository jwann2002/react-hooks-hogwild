import React, { useState } from "react";

const HogCard = ({ hog }) => {
  const [showExtraDetails, setShowExtraDetails] = useState(false);

  const toggleShowExtraDetails = () => setShowExtraDetails(!showExtraDetails);

  return (
    <div className="ui card">
      <div
        className="image"
        style={{ cursor: "pointer" }}
        onClick={toggleShowExtraDetails}
      >
        <img src={hog.image} alt={hog.name} />
      </div>
      <div className="content">
        <div className="header">{hog.name}</div>
      </div>
      {showExtraDetails && (
        <div className="extra content">
          <div className="meta">
            <div>{hog.specialty}</div>
            {hog.greased && <div className="meta">Greased</div>}
            <div>{`Weight: ${hog.weight}`}</div>
            <div>{hog["highest medal achieved"]}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HogCard;
