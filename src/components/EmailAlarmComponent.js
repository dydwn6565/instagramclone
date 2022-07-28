import React from 'react'

function EmailAlarmComponent({title,extraInfo}) {
  return (
    <>
      <h3> {title} </h3>
      <div>
        <input type="radio" />
        <span>Inactive</span>
      </div>
      <div>
        <input type="radio" />
        <span>Active</span>
      </div>

      <div className="email-alarm-extra-info">{extraInfo}</div>

      <hr />
    </>
  );
}

export default EmailAlarmComponent;