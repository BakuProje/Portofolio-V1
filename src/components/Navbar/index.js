import React from 'react';
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Close } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { Bio } from '../../data/constants'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <DiCssdeck size="3rem" /> 
          <Span>Baku</Span>
        </NavLogo>

        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Book</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen && (
            <MobileMenu isOpen={isOpen}>
              <Close style={{ alignSelf: 'flex-end', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)} />
              <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>About</MobileLink>
              <MobileLink href='#skills' onClick={() => setIsOpen(!isOpen)}>Skills</MobileLink>
              <MobileLink href='#experience' onClick={() => setIsOpen(!isOpen)}>Book</MobileLink>
              <MobileLink href='#projects' onClick={() => setIsOpen(!isOpen)}>Projects</MobileLink>
              <GitHubButton
                style={{
                  padding: '10px 16px',
                  background: theme.primary,
                  color: 'white',
                  width: 'max-content',
                  marginTop: '10px' 
                }}
                href={Bio.github}
                target="_blank"
              >
                Github Profile
              </GitHubButton>
            </MobileMenu>
          )
        }
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
