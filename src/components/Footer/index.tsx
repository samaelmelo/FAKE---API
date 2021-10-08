// @flow 
import  React from 'react';
import {FooterContainer} from './style'

interface FooterProps{
 
  info: string,
  
}

export function Footer( props: FooterProps) {
  return (
    <div>
      <FooterContainer>
        <small>{props.info}</small>
      </FooterContainer>
    </div>
  );
};