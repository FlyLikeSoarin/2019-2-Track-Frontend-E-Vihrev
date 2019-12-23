import React from 'react';
import { Link } from 'react-router-dom';
import {
  FlexRowCenter,
  FlexColCenter,
  SmallBanner,
  Banner,
  SmoothDiv,
  WidthHolder,
} from './StyledComponents';

function CityList(props) {
  const citiesData = props.data;
  let cityEntries = [];

  for (const i in citiesData) {
    const cityData = citiesData[i];
    cityEntries.push(
      <CityEntry cityData={cityData} id={i} key={i.toString()} />
    )
  }
  console.log(cityEntries);

  return (
    <FlexRowCenter>
      <WidthHolder>
        {cityEntries}
      </WidthHolder>
    </FlexRowCenter>
  );
}

function CityEntry(props) {
  const {cityData} = props;
  const linkStyle = {display: "contents"}

  return (
    <Link to={"/City/" + props.id.toString()} style={linkStyle}>
      <SmoothDiv>
        <FlexRowCenter>
          <FlexColCenter>
            <SmallBanner> {cityData.name} </SmallBanner>
            <SmallBanner> {cityData.sys.country} </SmallBanner>
          </FlexColCenter>
          <Banner> {(parseInt(cityData.main.temp) - 273).toString() + '°C'} </Banner>
        </FlexRowCenter>
      </SmoothDiv>
    </Link>
  )
}

export default CityList;
