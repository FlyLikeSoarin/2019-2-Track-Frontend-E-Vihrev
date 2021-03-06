import React from "react";
import styled from "styled-components";

const colors = {
  blue: "#008CDA",
  grey: "#3030305C",
  white: "#FFFFFF",
}

const FlexRowCenter = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

const FlexColCenter = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

const Background = styled.div`
  position: fixed;
  top: 0vh;
  left: 0vw;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 200% 200%;
`;

const Banner = styled.div`
  font-size: 50px;
  color: white;
  text-decoration: none;
  flex-grow: 1;
  text-align: center;
  margin: 10px;r
`;

const BannerBold = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  flex-grow: 1;
  text-align: center;
  margin: 10px;
`;

const GiantBanner = styled.div`
  font-size: 100px;
  color: white;
  text-decoration: none;
  flex-grow: 1;
  text-align: center;
  margin: 20px;
`;

const SmallBanner = styled.div`
  font-size: 25px;
  color: white;
  text-decoration: none;
  flex-grow: 1;
  text-align: center;
  margin: 5px;
`;

const SmoothDiv = styled.div`
  background-color: ${colors.grey};
  padding: 0px 10px;
  margin: 10px
  border-radius: 10px;
  border-color: ${colors.grey};
`;

const WidthHolder = styled.div`
  max-width: 1000px;
`;

const StyledInput = styled.input`
  display: block;
  font-size: 16px;
  padding: 5px;
  border: none;
  margin-top: 10px;
  /* border: 2px solid ${colors.grey}; */
  border-radius: 5px;
  color: ${colors.grey};
  transition: all 0.3s ease-out;
  width:  calc(100% - 10px);

  background-color: ${colors.white};

  :focus {
    outline: none;
    /* border-radius: 8px;
    border-color: #EBD292; */
    background-color: ${colors.grey} !important;
    color: ${colors.white} !important;
  }
`;

const MaxWidth = styled.div`
  width:100%;
`;

export {
  FlexRowCenter,
  FlexColCenter,
  Background,
  SmallBanner,
  Banner,
  BannerBold,
  GiantBanner,
  SmoothDiv,
  WidthHolder,
  StyledInput,
  MaxWidth,
};
