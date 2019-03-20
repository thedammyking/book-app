import React from 'react'
// import PropTypes from 'prop-types'
import EllipseWithIcon from '../EllipseWithIcon'
import { ReactComponent as LightIcon } from '../../assets/svg/light.svg'

const Signup = props => {
    return (
        <div className="authentication">
            <div
                className="authentication__ellipse authentication__ellipse--1"
                style={{
                    width: '29.9em',
                    height: '29.9em',
                    left: '-5.7em',
                    top: '-13.9em',
                }}
            />
            <div
                className="authentication__ellipse authentication__ellipse--2"
                style={{
                    left: '78.13%',
                    right: '7.03%',
                    top: '35.42em',
                    width: '5.565em',
                    height: '5.565em',
                }}
            />
            <div className="authentication__content">
                <EllipseWithIcon
                    icon={LightIcon}
                    bg="linear-gradient(141.64deg, #FFF17C -3.59%, #FF8B8E 118.04%)"
                    size="136"
                />
                <h1 className="onboarding__title">Review Them</h1>
                <p className="onboarding__text">
                    Create your account to get started. After that, you can
                    share books and make friends.
                </p>
            </div>
        </div>
    )
}

Signup.propTypes = {}

export default Signup
