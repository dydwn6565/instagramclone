import React from 'react'
import AccountEditSide from './AccountEditSide'
import Header from './Header'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccountEditFooter from './AccountEditFooter';

function Help() {
  return (
    <div className="help">
      <Header />
      <div>
        <AccountEditSide />
        <div>
          <h3>Help</h3>
          <div>
            Customer Center <ArrowForwardIosIcon />{" "}
          </div>
          <div>
            Private Info and Security Q&A <ArrowForwardIosIcon />{" "}
          </div>
          <div>
            Support Request <ArrowForwardIosIcon />{" "}
          </div>
        </div>
      </div>
      <AccountEditFooter />
    </div>
  );
}

export default Help