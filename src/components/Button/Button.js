import React from 'react'
import PropTypes from 'prop-types'

export default function Button({ label, backgroundColor, onClick }) {
    return (
        <button className="btn btn-primary" onClick={onClick} style={backgroundColor && { backgroundColor }}>
            {label}
        </button>
    )
}

Button.propTypes = {
    backgroundColor: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    backgroundColor: null,
    onClick: undefined,
}
