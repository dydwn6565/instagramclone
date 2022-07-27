import React from 'react'
import Header from './Header';

function MyMessage({ setBlurBackground }) {
  return (
    <>
      <Header setBlurBackground={setBlurBackground} />
      <div className="my-message">
    

      </div>
    </>
  );
}

export default MyMessage