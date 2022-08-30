import React from 'react'
import "./MainPageModal.css"
function MainPageModal({mainPageHandler}) {
  return (
    <div>
      <div className="main-page-modal-backdrop" onClick={mainPageHandler} />
      <div className="main-page-div">
        <div className="red">Report</div>
        <hr />
        <div className="red">Cancel follow</div>
        <hr />
        <div>Add fovorites </div>
        <hr />
        <div>Move to post</div>
        <hr />
        <div>Share target </div>
        <hr />
        <div>Copy Link </div>
        <hr />
        <div>Picking up </div>

        <hr />
        <div onClick={mainPageHandler}>Cancel</div>
      </div>
    </div>
  );
}

export default MainPageModal