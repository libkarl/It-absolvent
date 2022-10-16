import { Footer } from './Footer'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Home } from './Home'
import { Nav_bar } from './NavBar'
import { Possibilities } from './Possibilities'
import { Timeline } from './Timeline'
import { Trend } from './Trend'
import React from 'react'
import styled from 'styled-components'

export const JsHistory = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>JS History</title>
          <style>
            {`
            html {
              scroll-behavior: smooth;
              overflow: visible !important;
            }
            `}
          </style>
        </Helmet>
        <Nav_bar />
        <Home />
        <Timeline />
        <Possibilities />
        <Trend />
        <Footer />
      </HelmetProvider>
    </div>
  )
}
