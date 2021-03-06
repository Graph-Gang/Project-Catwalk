import React from 'react';
import { DateTime } from 'luxon';

const Answer = (props) => {

  //create and set reported property to handle displaying if an answer has been reported
  if (props.reported.includes(props.a.id)) {
    props.a.reported = "Reported"
  } else {
    props.a.reported = 'Report';
  }

  //format date
  let date = DateTime.fromISO(props.a.date).toLocaleString(DateTime.DATE_FULL);

  //create image tags for photos
  let photos = []
  props.a.photos.forEach((img, index) => {
    photos.push(<img key={index} src={img} width='150' height='100' />)
  })

  return (
    <div>
    <div className='border'>
      <p className='answerBody'> {props.a.body}</p>
      <p>{photos}</p>
      <p>by {props.a.answerer_name}, {date} | Helpful? <button className='button-a' onClick={() => {props.incAHelp(props.a.id)}}>Yes</button> ({props.a.helpfulness}) | <button className='button-a' onClick={() => {props.reportA(props.q, props.a)}}>{props.a.reported}</button></p>
    </div>
    </div>
  )
}


export default Answer;