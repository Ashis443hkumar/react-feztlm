import React from "react";
import './style.css'

export default function Hero() {
  return (
    <div className="hero">
      <h2>Find Your Dream Home</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia debitis expedita nesciunt, ut minus iure tempore consectetur aperiam doloribus.</p>
      

      <section className="herosection">
        <div className="herobtn">
          <button className="btn bg-white px-4">Rent</button>
          <button className="btn bg-danger mx-3 px-4 text-white">Sale</button>
        </div>
        <div className="herofrom">
          <div className="usefrom">
            {/* <label htmlFor="">Location</label> */}
            <label htmlFor="">Location</label>

            <select name="" id="">
              <option value="">Delhi Ncr</option>
              <option value="">Noida</option>
              <option value="">Bangalore</option>
              <option value="">Hardyabad</option>
              <option value="">Mumbai</option>
              <option value="">Jharkhand</option>
            </select>
          </div>
          <div className="usefrom">
            <label htmlFor="">Property Type</label>
            <select name="sdsdsd" id="">
              <option value="dds">Flate 3Bhk</option>
              <option value="">Flate 2bhk</option>
              <option value="">Flate 4bhk</option>
              <option value="">Flate 1bhk</option>
              <option value="">Flate 3bhk</option>
            </select>
          </div>
          <div className="usefrom">
            <label htmlFor="">Rent Renge</label>
            <select name="" id="">
              <option value="">2Bhk 23.33Lakh</option>
              <option value="">1Bhk 13.33Lakh</option>
              <option value="">4Bhk 43.33Lakh</option>
              <option value="">3Bhk 33.33Lakh</option>
            </select>
          </div>
          <div className="usefrom">
             <button className="btn bg-warning px-2">Serach</button>
          </div>

        </div>
      </section>
    </div>
  );
}
