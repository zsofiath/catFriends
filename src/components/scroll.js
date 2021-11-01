import React from 'react'
import './scroll.css'

export default function Scroll(props) {
    return (
        <div className='scroll-box'>
            {props.children}
        </div>
    )
}
