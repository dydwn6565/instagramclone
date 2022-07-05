import React from 'react'
import "./css/SideFooter.css"
function SideFooter() {
  return (
    <div>
      <div className="side-footer-first-line">
        <span>Instruction</span>
        <span> Help</span>
        <span>Promotion</span>
        <span>Center</span>
        <span>API</span>
        <span>Hiring</span>
      </div>
      <div className="side-footer-second-line">
        <span>Information</span>
        <span>Personal information processing policy</span>
        <span>Term and Conditions</span>
        <span>Location</span>
        <span>Language</span>
      </div>
      <div>© 2022 INSTAGRAM FROM META</div>
    </div>
  );
}

export default SideFooter