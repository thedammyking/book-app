import React from 'react'
import PropTypes from 'prop-types'

const EllipseWithIcon = ({ icon: Icon, bg, size }) => {
    return (
        <div
            className="ellipse"
            style={{
                background: `${bg}`,
                width: `${size}px`,
                height: `${size}px`,
            }}
        >
            <div className="ellipse__icon-box">
                <Icon />
            </div>
        </div>
    )
}

EllipseWithIcon.propTypes = {
    icon: PropTypes.object,
    bg: PropTypes.string,
    size: PropTypes.string,
}

export default EllipseWithIcon
