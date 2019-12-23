import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FlexRowCenter,
  FlexColCenter,
  SmallBanner,
  Banner,
  GiantBanner,
  SmoothDiv,
} from './StyledComponents';

function CityDisplay(props) {
  const {cityId} = useParams();
  if (props.data[cityId] !== undefined) {
    const cityData = props.data[cityId]
    console.log(cityData);
    const linkStyle = {display: "contents"}
    const buttonBannerStyle = {fontWeight: "bold", color: "white"}

    return (
      <FlexRowCenter>
        <SmoothDiv>
          <FlexColCenter>
            <FlexRowCenter>
              <Link to="/CityList" style={linkStyle}>
                <SmoothDiv>
                  <SmallBanner style={buttonBannerStyle}> List of cities </SmallBanner>
                </SmoothDiv>
              </Link>
            </FlexRowCenter>

            <FlexRowCenter>
              <Banner> {cityData.name} </Banner>
            </FlexRowCenter>

            <FlexRowCenter>
              <GiantBanner> {(parseInt(cityData.main.temp) - 273).toString() + '°C'} </GiantBanner>
            </FlexRowCenter>

            <FlexRowCenter>
              <Banner> {cityData.weather[0].main} </Banner>
            </FlexRowCenter>
          </FlexColCenter>
        </SmoothDiv>
      </FlexRowCenter>
    );
  } else {
    return (
      <FlexRowCenter>
        <Banner>
          loading...
        </Banner>
      </FlexRowCenter>
    )
  }
}

export default CityDisplay;
