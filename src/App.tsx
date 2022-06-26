import styled from 'styled-components'
import Navigation from './Navigation';

function App() {
  return (
    <Wrapper>
      <WrapperMaxWidth>
        <Navigation />
        <HeaderWrapper>
          Hey there! 🌊 Thanks for stopping by!
        </HeaderWrapper>
        <Description>
          I’m Nadia, a product designer with a background in physical & digital design.
          I’m an inquisitive thinker who’s passionate about using design as a way to connect
          people through stories and crafting meaningful experiences.
        </Description>
        <Footer>
          © 2022 Nadia Hy Design with care. Built with ♡
        </Footer>
      </WrapperMaxWidth>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  margin-inline: 50px;
  display: flex;
  justify-content: center;
`;

const WrapperMaxWidth = styled.div`
  max-width: 1200px;
`;

const HeaderWrapper = styled.div`
  margin-top: 100px;
  font-family: Montserrat, sans-serif;
  font-size: 40px;
  font-weight: 700;
`;

const Description = styled.p`
  margin-top: 24px;
  font-family: Montserrat, sans-serif;
  font-size: 24px;
  font-weight: 400;
`;

const Footer = styled.div`
  padding-block: 40px;
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  font-weight: 400;
`;

export default App
