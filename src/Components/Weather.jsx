import React from "react";
import PropTypes from "prop-types"


const Weather = ({ weather }) => {
  const { name, main } = weather;

  if (!name) return null;

  const kevin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>el clima de {name} es de:</h2>
        <p className="temperatura">
          {parseFloat(main.temp - kevin).toFixed(2)} <span> &#x2103;</span>
        </p>
        {parseFloat(main.temp - kevin).toFixed(2) ==
        parseFloat(main.temp_min - kevin).toFixed(2) ? null : (
          <> 
            <p>
              temperatura manima:{parseFloat(main.temp_min - kevin).toFixed(2)}
              <span>&#x2103;</span>
            </p>
            <p>
              temperatura maxima: {parseFloat(main.temp_max - kevin).toFixed(2)}
              <span>&#x2103;</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

Weather.propTypes = {
    weather: PropTypes.object.isRequired
}

export default Weather;
