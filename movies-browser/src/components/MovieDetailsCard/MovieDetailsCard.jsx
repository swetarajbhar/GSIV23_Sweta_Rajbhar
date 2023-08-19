import * as React from 'react';
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import { get } from "lodash"

import "./MovieDetailsCard.scss"

momentDurationFormatSetup(moment);
const MovieDetailsCard = ({ data }) => {

  return (
    <div className='MovieDetailsCard'>
      <div className="container">
        <div className="MovieImage">
          {get(data, 'picture') &&
            <img src={get(data, 'picture')} width="100%"></img>
          }
        </div>
        <div className="MovieInfo">
          <div className='MovieTitle'>
            {get(data, "title")}
            <span> ({get(data, "vote_average")})</span>
          </div>
          <div className='MovieDetails'>
            <p>{get(data, "release_date")} | {
              moment.duration(get(data, "runtime"), "seconds").format()
            } {get(data, "director") && `| ${get(data, "director")}`}</p>
            <p>Cast: {get(data, "cast") && get(data, "cast").toString()}</p>
          </div>

          <p style={{ marginTop: "0.5em" }}>Description: {get(data, "overview")}</p>
        </div>
      </div>
    </div>

  );
}


export default MovieDetailsCard;