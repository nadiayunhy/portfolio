import styled from 'styled-components'

function App() {
  return (
    <Wrapper>
      <NavigationWrapper>
        <NavigationHome>Portfolio</NavigationHome>
        <NavigationItems>
          <NavigationItem>Work</NavigationItem>
          <NavigationItem>About</NavigationItem>
        </NavigationItems>
      </NavigationWrapper>
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  margin-inline: 50px;
`;

const NavigationWrapper = styled.div`
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  height: 98px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const NavigationHome = styled.div`
  font-family: Montserrat, sans-serif;
  font-size: 24px;
  font-weight: 700;
  text-decoration: underline;
  text-decoration-thickness: 3.5px;
  cursor: not-allowed;
`;

const NavigationItems = styled.div`
  display: flex;
  gap: 30px;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: Uppercase;
  cursor: not-allowed;
`;

const NavigationItem = styled.div``;

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
