import React from 'react'

import Layout from './Layout'

export default {
    title: 'Layout',
    component: Layout,
    // argTypes: {
    //     children: 'node',
    //     className: 'string',
    // },
}

const Template = () => {
    return (
        <Layout>
            <p>This is a layout</p>
        </Layout>
    )
}

export const Default = Template.bind({})
// Default.args = {
//     children: '<h1>Default</h1>',
//     className: '',
// }
