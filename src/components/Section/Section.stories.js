import React from 'react'
import Section from './index'

export default {
    title: 'Section',
    component: Section,
}

const Template = () => (
    <Section bg='primary'>
        <p>Section</p>
    </Section>
)

export const Default = Template.bind({})

Default.args = {
    bg: 'primary'
}
