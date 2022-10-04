import React from 'react'
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./PushAlarmDetail.css"
import EmailAlarmComponent from './EmailAlarmComponent';
import ProfileFooter from '../profilePage/ProfileFooter';
function PushAlarmDetail({
  title,
  componentInfo,
  triggerEvent 
}) {
  return (
    <div>
      <div className="push-alarm-detail">
        <ArrowBackIosNewIcon onClick={triggerEvent} /> <span>{title}</span>
      </div>
      <hr />
      {componentInfo.map((component) => (
        <EmailAlarmComponent
          key={component.title}
          title={component.title}
          extraInfo={component.extraInfo}
          threeItem={component.threeItem}
        />
      ))}
      <div className="resize-footer">
        <ProfileFooter />
      </div>
    </div>
  );
}

export default PushAlarmDetail