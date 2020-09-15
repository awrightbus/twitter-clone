import React from 'react'
import './SidebarOptions.css'

function SidebarOptions({active, text, Icon}) {
    return (
        <div className={`sidebarOption ${active && "sidebarOption--active" }`}>
            <Icon />
            <h3>{Icon,text}</h3>
        </div>
    )
}

export default SidebarOptions
