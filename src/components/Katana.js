import React from 'react';
import katana from '../assets/katana.svg';

const style = {
  width: '100%',
  display: 'block',
  padding: '10em 0 9em',
};

export default function Katana() {
  return <img src={katana} style={style} alt="silhouette of a katana" />;
}
