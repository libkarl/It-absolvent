import './trend.css'
import React from 'react'
import Webdev from '../../../assets/web_dev.jpg'

const Trend = () => {
  return (
    <div>
      <div className='container my-24 px-6 mx-auto' id='trend'>
        <section className='mb-32 text-gray-800'>
          <div className='container mx-auto xl:px-32 text-center lg:text-left'>
            <div className='grid lg:grid-cols-2 flex items-center'>
              <div className='mb-12 lg:mb-0'>
                <div className='block rounded-lg shadow-lg px-6 py-12 lg:py-6 xl:py-12 md:px-12 lg:-mr-14 extra_style'>
                  <h3 className='text-3xl font-bold mb-3 text-blue-600'>
                    Trends in JavaScript to Look for in 2022
                  </h3>

                  <p className='font-bold mb-4'>Web Components</p>
                  <p className='text-gra-500 mb-6'>
                    Have you noticed that your favorite websites work that little bit better on your
                    mobile devices? “That’s because developers are flocking to web components.Web
                    components require less runtime and rely less on JavaScript, which allows them
                    to work across various libraries, making them a great flexible choice.
                  </p>

                  <p className='font-bold mb-4'>GraphQL on the up</p>
                  <p className='text-gra-500 mb-6'>
                    This is one technology that is looking like the future of query languages. Zain
                    Abadawi, a blogger at Bestbritishessays and Revieweal, says “GraphQL is an
                    efficient method of data fetching that is giving REST a run for its money when
                    it comes to APIs, and has been pinned as the most intriguing language developers
                    at the State of JS.” If you’re looking to get ahead of the curve, take a look at
                    a GraphQL tutorial and see what you could use it for.
                  </p>

                  <p className='font-bold mb-4'>Svelte on the scene</p>
                  <p className='text-gra-500'>
                    Another shiny new piece of kit that’s getting developers excited is Svelte, a
                    component-based UI framework for JavaScript. Svelte generates code that can
                    manipulate the DOM, resulting in improved run-time performance, and the results
                    are very promising. Developers are saying it’s fast and feature-rich, with
                    seamless type value binding that is easy to implement.
                  </p>
                </div>
              </div>

              <div>
                <img src={Webdev} className='w-full rounded-lg shadow-lg' alt='' />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Trend
