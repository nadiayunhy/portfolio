import styled from 'styled-components'

function UberEats() {
  return (
    <Wrapper>
        <ImageWrapper>
            <Image src={"https://uploads-ssl.webflow.com/62a3fdb083e4a17ed853a169/62b1ef96f2707afc814a438f_UberEats%201%20%E2%80%93%203.png"}/>
        </ImageWrapper>
        <HeaderWrapper>
          UberEats
        </HeaderWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WrapperMaxWidth = styled.div`
  max-width: 1200px;
`;

const ImageWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
`;

const Image = styled.img`
`;

const HeaderWrapper = styled.div`
  margin-top: 100px;
  font-family: Montserrat, sans-serif;
  font-size: 40px;
  font-weight: 700;
`;


export default UberEats
