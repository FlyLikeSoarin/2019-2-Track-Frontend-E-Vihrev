import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import {
  FlexRowCenter,
  Banner,
  BannerBold,
  Background,
  WidthHolder,
  StyledInput,
} from './components/StyledComponents';
import CityDisplay from './components/CityDisplay'
import CityList from './components/CityList'

const API_KEY = 'ba470733edcfc43ba0e9880969858ccb';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.storage = window.localStorage;
    var citiesId = JSON.parse(this.storage.getItem('citiesId'));
    if (citiesId == undefined) {
      citiesId = [524901, 2648110, 2968815, 1850147];
      this.storage.setItem('citiesId', JSON.stringify(citiesId));
    }

    this.state = {
      data: {
        citiesId:   citiesId,
        citiesData: [],
      },
    }
  }

  componentDidMount() {
    this.getCityData();
  }

  getCityData() {
    console.log(this.state.data.citiesId);
    const {citiesId} = this.state.data;
    for (const i in citiesId) {
      const cityId = citiesId[i];
      fetch(`https://api.openweathermap.org/data/2.5/weather?id=` + cityId.toString() + `&appid=` + API_KEY)
        .then(res => res.json())
        .then(data => (
          this.setState((state)=>{
            state.data.citiesData[i] = data;
            return state;
          })
        ));
    }
  }

  render() {
    let foregroundStyle = {zIndex: "10", position: "fixed", top: "0px", left: "0px", height: "100vh", width: "100vw"};
    let backgroundStyle = {zIndex: "1"}
    return (
      <Router>
        <div style={foregroundStyle}>
          <FlexRowCenter>
            <WidthHolder>
              <StyledInput
                placeholder="Find city..."
              />
            </WidthHolder>
          </FlexRowCenter>
          <Switch >
            <Route path="/CityList">
              <CityList data={this.state.data.citiesData} />
            </Route>
            <Route path="/City/:cityId">
              <CityDisplay data={this.state.data.citiesData} />
            </Route>
            <Redirect from='/' to="/City/0" />
          </Switch>
        </div>
        <Background style={backgroundStyle}>
          <FlexRowCenter>
            <BannerBold> WEATHER <br/> NOW </BannerBold> <Banner/> <Banner/>
          </FlexRowCenter>
        </Background>
      </Router>
    );
  }
}

export default App;
