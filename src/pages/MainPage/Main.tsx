import { About } from './About'
import { Experience } from './Experience'
import { Footer } from './Footer'
import { GlobalStyle } from '../../helpers/globalStyle'
import { Header } from './Header'
import { Nav } from './Nav'
import { Portfolio } from './Portfolio'
import React, { Fragment } from 'react'

export const Main = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Footer />
    </Fragment>
  )
}
