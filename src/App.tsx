import styled from 'styled-components'
import Navigation from './Navigation';
import Home from './Home';
import UberEats from './UberEats';


function App() {
  return (
    <Wrapper>
        <Navigation/>
        <Home/>
        <Footer>
          © 2022 Nadia Hy Design with care. Built with ♡
        </Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;


const Footer = styled.div`
  padding-block: 40px;
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  font-weight: 400;
`;

export default App
