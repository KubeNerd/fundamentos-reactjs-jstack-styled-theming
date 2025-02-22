import React from 'react';

import { Container } from './styles';
import { ThemeIcon } from "../ThemeIcon";

export default function Header({ onToggleTheme, selectedTheme }) {
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button 
          type="button"
          onClick={onToggleTheme}  
        >

          <ThemeIcon selectedTheme={selectedTheme}/>
      </button>
    </Container>

  );
}