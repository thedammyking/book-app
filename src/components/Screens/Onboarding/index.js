import React from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav'

const setTo = step => {
    switch (step) {
        case 1:
            return 'review'
        case 2:
            return 'review'
        default:
            break
    }
}

const Onboarding = ({ children, ellipseOne, ellipseTwo, step }) => {
    return (
        <div className="onboarding">
            <div
                className="onboarding__ellipse onboarding__ellipse--1"
                style={{
                    left: ellipseOne.left,
                    right: ellipseOne.right,
                    top: ellipseOne.top,
                    width: ellipseOne.size,
                    height: ellipseOne.size,
                }}
            />
            <div
                className="onboarding__ellipse onboarding__ellipse--2"
                style={{
                    left: ellipseTwo.left,
                    right: ellipseTwo.right,
                    top: ellipseTwo.top,
                    width: ellipseTwo.size,
                    height: ellipseTwo.size,
                }}
            />
            <div className="onboarding__ellipse onboarding__ellipse--3" />
            <div className="onboarding__content">
                {children}
                <Nav to={setTo(step)} step={step} />
            </div>
        </div>
    )
}

Onboarding.propTypes = {
    children: PropTypes.node,
    ellipseOne: PropTypes.object,
    ellipseTwo: PropTypes.object,
    step: PropTypes.string,
}

export default Onboarding
