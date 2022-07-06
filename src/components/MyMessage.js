import React from 'react'
import Header from './Header';

function MyMessage({ setBlurBackground }) {
  return (
    <>
      <Header setBlurBackground={setBlurBackground} />
    </>
  );
}

export default MyMessage