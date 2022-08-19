import React from 'react'

function EmailAlarmComponent({title,extraInfo,threeItem}) {
  return (
    <>
      <h3> {title} </h3>
      {threeItem ? (
        <>
          <div>
            <input type="radio" name={title} />
            <span>Inactive</span>
          </div>
          <div>
            <input type="radio" name={title} />
            <span>A person who I follow</span>
          </div>
          <div>
            <input type="radio" name={title} />
            <span>Everyone</span>
          </div>
        </>
      ) : (
        <>
          <div>
            <input type="radio" name={title} />
            <span>Inactive</span>
          </div>
          <div>
            <input type="radio" name={title} />
            <span>Active</span>
          </div>
        </>
      )}

      <div className="email-alarm-extra-info">{extraInfo}</div>

      <div className="hr"></div>
    </>
  );
}

export default EmailAlarmComponent;