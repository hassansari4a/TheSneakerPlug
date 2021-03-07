import React from 'react'

export default function MeassageBox(props) {
  return (
    <div className={`alert alert-${props.variant || 'info'}`}>
      {props.childern}      
    </div>
  )
}