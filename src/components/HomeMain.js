import styled from 'styled-components';
import React from 'react';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import Brands from './Brands';
import Recommends from './Recommends';
class HomeMain extends React.Component {
  render() {
    return (
      <>
        <Container>
          <ImageSlider slides={SliderData} />
          <Brands />
          <Recommends />
        </Container>
      </>
    );
  }
}
const Container = styled.main`
  position: relative;
  min-height: cal(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw+5px);
  &:after {
    background: url('/images/home-background.png') center center / cover
      no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default HomeMain;
