import React from 'react'
import { Link } from 'react-router-dom'

const Section = props => {
    return (
        <div className="section">
            {props.children}
        </div>
    )
}

export const SectionTitle = props => {
    return (
        <div className="section__title">
            <span>{props.children}</span>
        </div>
    )
}

export const SectionTitleV1 = props => {
    return (
        <div className="section__titleV1">
            <span>{props.children}</span>
            {props.path && <Link to={props.path}>Xem tất cả</Link>}
        </div>
    )
}

export const SectionBody = props => {
    return (
        <div className="section__body">
            {props.children}
        </div>
    )
}

export default Section
