import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-right.svg'
import { Link } from 'react-router-dom'

const Nav = ({ to, step }) => {
    return (
        <div className="onboarding__nav">
            <div className="nav__box">
                <div className="indicator">
                    <span
                        className={`nav__indicator ${
                            step === 1 ? 'active' : ''
                        }`}
                    />
                    <span
                        className={`nav__indicator ${
                            step === 2 ? 'active' : ''
                        }`}
                    />
                    <span className="nav__indicator" />
                </div>
                <div className="nav__button">
                    <Link to={`/${to}`}>
                        <Arrow />
                    </Link>
                </div>
            </div>

            <Link className="nav__link" to="/signup">
                Skip Intro
            </Link>
        </div>
    )
}

Nav.propTypes = {
    to: PropTypes.string,
}

export default Nav
