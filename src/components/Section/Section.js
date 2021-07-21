import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'

const Section = ({ bg, children, className, style, fluid }) => {
    const removeEdges = {
        marginRight: "-15px",
        marginLeft: "-15px"
    }

    const containerStyle = () => {
        if (fluid) {
            return {
                marginRight: "-15px",
                marginLeft: "-15px"
            }
        } else {
            return {}
        }
    }

    return (
        <div style={style} className={`section bg-${bg} ${className}`}>
            <Container fluid={fluid} style={{...containerStyle}}>{children}</Container>
        </div>
    )
}

Section.propTypes = {
    bg: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    fluid: PropTypes.bool
}

Section.defaultProps = {
    bg: 'white',
    className: '',
    style: {},
    fluid: false
}

export default Section