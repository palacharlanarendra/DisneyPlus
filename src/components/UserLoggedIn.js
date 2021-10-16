import styled from 'styled-components';

const UserLoggedIn = (props) => {
  return (
    //   we can take container , content , BgImage components and make it a section,article elements and style in the below
    <FlexibleContainer>
      <Content>
        <Action>
          <ActionLogoOne src='/images/cta-logo-one.svg' />
          <Register>GET THE DISNEY BUNDLE</Register>
          <Description>
            Stream now. <a href='/'>Terms apply.</a>
          </Description>
          <ActionLogoTwo src='/images/cta-logo-two.png' />
        </Action>
        <BgImage />
      </Content>
      #f9f9f9
    </FlexibleContainer>
  );
};
const FlexibleContainer = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.article`
  margin-bottom: 10vw;
  wudth: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8rem 4rem;
  height: 100%;
`;
const BgImage = styled.div`
  height: 100%;
  background-image: url('./images/disney-background.jpg');
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;
const Action = styled.div`
  max-width: 620px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Register = styled.a`
  font-weight: bold;
  color: white;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const ActionLogoOne = styled.img`
  margin-bottom: 1.2rem;
  max-width: 60rem;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const ActionLogoTwo = styled.img`
  max-width: 60rem;
  margin-bottom: 2rem;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default UserLoggedIn;
