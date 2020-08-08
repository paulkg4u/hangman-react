import React from 'react'

export default function Notification({showNotification}) {
    console.log(showNotification)
    return (
        <div className={`notification-container ${showNotification ? 'show':''}`}>
        <p>You have already entered this letter</p>
    </div>
    )
}
