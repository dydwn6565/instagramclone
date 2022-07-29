import React from 'react'

function EmailAlarmComponent({title,extraInfo,threeItem}) {
  return (
    <>
      <h3> {title} </h3>
      {threeItem ? (
        <>
          <div>
            <input type="radio" />
            <span>Inactive</span>
          </div>
          <div>
            <input type="radio" />
            <span>A person who I follow</span>
          </div>
          <div>
            <input type="radio" />
            <span>Everyone</span>
          </div>
        </>
      ) : (
        <>
          <div>
            <input type="radio" />
            <span>Inactive</span>
          </div>
          <div>
            <input type="radio" />
            <span>Active</span>
          </div>
        </>
      )}
     

      <div className="email-alarm-extra-info">{extraInfo}</div>

      <hr />
    </>
  );
}

export default EmailAlarmComponent;