import React from 'react'
import PropTypes from 'prop-types'

import SectionFooter from './components/SectionFooter'
import MainHeader from './components/SectionHeader'

const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <SectionFooter />
    </>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
