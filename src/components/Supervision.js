import React from 'react'
import AccountEditSide from './AccountEditSide'
import Header from './Header'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Supervision() {
  return (
    <div className="supervision">
      <Header />
      <div>
        <AccountEditSide />
        <div>
          <h2>Maintance and Supervision</h2>
          <div>
            Family center <ArrowForwardIosIcon />
          </div>
          <div>
            Education Hub <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supervision