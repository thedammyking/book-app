import React from 'react'
// import PropTypes from 'prop-types'
import Onboarding from './index'
import EllipseWithIcon from '../../EllipseWithIcon'
import { ReactComponent as ReadIcon } from '../.././../assets/svg/book-open.svg'

const Read = props => {
    return (
        <Onboarding
            ellipseOne={{
                left: '-5.6%',
                right: '85.6%',
                top: '4.93%',
                size: '7.5em',
            }}
            ellipseTwo={{
                left: '71.2%',
                right: '9.41%',
                top: '20.42%',
                size: '7.271em',
            }}
            step={1}
        >
            <EllipseWithIcon
                icon={ReadIcon}
                bg="linear-gradient(73.12deg, #25CED1 -19.51%, #34E6E9 58.02%, #6AFCFF 138%)"
                size="212"
            />
            <h1 className="onboarding__title">Read Books</h1>
            <p className="onboarding__text">
                Create your account to get started. After that, you can share
                books and make friends.
            </p>
        </Onboarding>
    )
}

Read.propTypes = {}

export default Read
