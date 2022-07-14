import styled from 'styled-components'
import { FaHamburger } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import { useState } from 'react';
import { QUERIES } from './Constants';

function Navigation() {
    const [displayMenu, setDisplayMenu] = useState(false);

    return (
        <NavigationWrapper>
            <NavigationHome>Portfolio</NavigationHome>
            <NavigationItems>
                <NavigationItem>Work</NavigationItem>
                <NavigationItem>About</NavigationItem>
            </NavigationItems>
            <MobileMenu>
                <FaHamburger
                    onClick={() => setDisplayMenu(displayMenu => !displayMenu)}
                />
            </MobileMenu>
            {
                !displayMenu ? null : <MenuWrapper>
                    <MenuBackground
                        onClick={() => setDisplayMenu(displayMenu => !displayMenu)}
                    />
                    <Menu>
                        <MenuCloseButtonWrapper
                            onClick={() => setDisplayMenu(displayMenu => !displayMenu)}
                        >
                            <IoIosClose />
                        </MenuCloseButtonWrapper>
                        <MenuItems>
                            <MenuItem>About</MenuItem>
                            <MenuItem>Work</MenuItem>
                        </MenuItems>
                    </Menu>
                </MenuWrapper>
            }
        </NavigationWrapper>
    );
}

const MenuWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const MenuBackground = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: grey;
    opacity: 50%;
    cursor: pointer;
`;

const Menu = styled.div`
    position: fixed;
    right: 0;
    background-color: white;
    width: 66%;
    height: 100%;
`;

const MenuCloseButtonWrapper = styled.div`
    position: fixed;
    top: 30px;
    right: 40px;
    width: 36px;
    font-size: 36px;
    cursor: pointer;
`;

const MenuItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 100%;
    height: 100%;
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-weight: 600;
    text-transform: Uppercase;
`;

const MenuItem = styled.div`
    cursor: pointer;
`;

const NavigationWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  padding-inline: 50px;
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
  letter-spacing: 1px;
  font-weight: 700;
  text-decoration: underline;
  text-decoration-thickness: 3.5px;
  cursor: pointer;
`;

const NavigationItems = styled.div`
  display: flex;
  gap: 50px;
  letter-spacing: 1px;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: Uppercase;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const NavigationItem = styled.div`
    cursor: pointer;
`;

const MobileMenu = styled.div`
    display: none;
    font-size: 20px;
    cursor: pointer;

    @media ${QUERIES.phoneAndSmaller} {
        display: flex;
    }
`;

export default Navigation
