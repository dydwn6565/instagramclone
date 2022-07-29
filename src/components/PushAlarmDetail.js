import React from 'react'
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./css/PushAlarmDetail.css"
import EmailAlarmComponent from './EmailAlarmComponent';
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
      {/* <EmailAlarmComponent
        title={"like"}
        extraInfo={"johnappleseed likes your photo"}
        threeItem={true}
      />
      <EmailAlarmComponent
        title={" Like or comment on which you are on a photo"}
        extraInfo={
          " johnappleseed leaves a comment on a post where you are tagged"
        }
        threeItem={true}
      />
      <EmailAlarmComponent
        title={"Comment"}
        extraInfo={"johnappleseed leave a comment 'This is great'"}
        threeItem={true}
      />
      <EmailAlarmComponent
        title={"Comment Like"}
        extraInfo={"johnappleseed likes your comment 'This is great'"}
        threeItem={true}
      />
      <EmailAlarmComponent
        title={"Your first post and story"}
        extraInfo={"This is alarm for johnappleseed ' first Instagram story post"}
        threeItem={true}
      /> */}
    </div>
  );
}

export default PushAlarmDetail