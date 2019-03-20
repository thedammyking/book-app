import React from 'react'
// import PropTypes from 'prop-types'
import Onboarding from './index'
import EllipseWithIcon from '../../EllipseWithIcon'
import { ReactComponent as StarIcon } from '../.././../assets/svg/star.svg'

const Review = props => {
    return (
        <Onboarding
            ellipseOne={{
                left: '9.87%',
                right: '80%',
                top: '11.95%',
                size: '3.8em',
            }}
            ellipseTwo={{
                left: '54.67%',
                right: '10.06%',
                top: '-12.03%',
                size: '13.23em',
            }}
            step={2}
        >
            <EllipseWithIcon
                icon={StarIcon}
                bg="linear-gradient(141.64deg, #FFF17C -3.59%, #FF8B8E 118.04%)"
                size="212"
            />
            <h1 className="onboarding__title">Review Them</h1>
            <p className="onboarding__text">
                Create your account to get started. After that, you can share
                books and make friends.
            </p>
        </Onboarding>
    )
}

Review.propTypes = {}

export default Review
