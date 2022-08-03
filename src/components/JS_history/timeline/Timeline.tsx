import React from 'react'

const Timeline = () => {
  return (
    <div>
      <h5
        className='text-center text-dark
  text-blue-600
  font-bold
  text-4xl
  sm:text-[42px]
  lg:text-[40px]
  xl:text-[42px]
  leading-snug
  mb-3'
        id='timeline'
      >
        Java Script- Timeline
      </h5>
      <div className='text-center place-content-center rounded-3xl  ml-20 mr-20'>
        <div className='container mt-10 mx-auto'>
          <div className='flex flex-col md:grid grid-cols-9 mx-auto mt-6 '>
            <div className='flex flex-row-reverse md:contents'>
              <div className=' col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md border-2 border-black'>
                <h3 className='font-semibold text-lg mb-1'>1995 - Birth of JavaScript</h3>
                <p className='leading-tight text-justify'>
                  JavaScript was created by Brendan Eich, then working at Netscape. The original
                  name of JavaScript was Mocha, a name chosen by Marc Andreessen, founder of
                  Netscape.
                </p>
              </div>
              <div className='col-start-5 col-end-6 md:mx-auto relative mr-10'>
                <div className='h-full w-6 flex items-center justify-center'>
                  <div className='h-full w-1 bg-black pointer-events-none'></div>
                </div>
                <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black shadow'></div>
              </div>
            </div>

            <div className='flex md:contents'>
              <div className='col-start-5 col-end-6 mr-10 md:mx-auto relative'>
                <div className='h-full w-6 flex items-center justify-center'>
                  <div className='h-full w-1 bg-black pointer-events-none'></div>
                </div>
                <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black shadow'></div>
              </div>
              <div className=' col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md border-2 border-black'>
                <h3 className='font-semibold text-lg mb-1'>1996 - Picking up in Popularity</h3>
                <p className='leading-tight text-justify'>
                  A Netscape Press Release puts the number of JavaScript pages at 300,000.
                </p>
              </div>
            </div>

            <div className='flex flex-row-reverse md:contents'>
              <div className=' col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md border-2 border-black'>
                <h3 className='font-semibold text-lg mb-1'>
                  1997 - Making Standard Specifications{' '}
                </h3>
                <p className='leading-tight text-justify'>
                  JavaScript was taken to ECMA to carve out a standard specification, which other
                  browser vendors could then implement based on the work done at Netscape.
                  ECMAScript is the name of the official standard, with JavaScript being the most
                  well known of the implementations.
                </p>
              </div>
              <div className='col-start-5 col-end-6 md:mx-auto relative mr-10'>
                <div className='h-full w-6 flex items-center justify-center'>
                  <div className='h-full w-1 bg-black pointer-events-none'></div>
                </div>
                <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black shadow'></div>
              </div>
            </div>

            <div className='flex flex-row-reverse md:contents'>
              <div className='border-2 border-black col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md'>
                <h3 className='font-semibold text-lg mb-1'>1998 - Relase of ECMAScript 2</h3>
                <p className='leading-tight text-justify'>
                  ECMAScript 2 brought in the ISO/IEC 16262 international standards, the baseline
                  for modern day JavaScript.
                </p>
              </div>
              <div className='col-start-5 col-end-6 md:mx-auto relative mr-10'>
                <div className='h-full w-6 flex items-center justify-center'>
                  <div className='h-full w-1 bg-black pointer-events-none'></div>
                </div>
                <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black shadow'></div>
              </div>
            </div>

            <div className='flex md:contents'>
              <div className='col-start-5 col-end-6 mr-10 md:mx-auto relative'>
                <div className='h-full w-6 flex items-center justify-center'>
                  <div className='h-full w-1 bg-black pointer-events-none'></div>
                </div>
                <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black shadow'></div>
              </div>
              <div className='border-2 border-black col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md'>
                <h3 className='font-semibold text-lg mb-1'>1999 - ECMAScript 3</h3>
                <p className='leading-tight text-justify'>
                  Release of ECMAScript 3 in December 1999.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='container mx-auto'>
          <div className='flex flex-col md:grid grid-cols-9 mx-auto '>
            <div className='flex flex-row-reverse md:contents'>
              <div className='border-2 border-black col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md'>
                <h3 className='font-semibold text-lg mb-1'>2005 - ECMAScript for XML</h3>
                <p className='leading-tight text-justify'>
                  Brendan Eich and Mozilla rejoined Ecma International as a not-for-profit member
                  and work started on ECMAScript for XML (E4X), the ECMA-357 standard.
                </p>
              </div>
              <div className='col-start-5 col-end-6 md:mx-auto relative mr-10'>
                <div className='h-full w-6 flex items-center justify-center'>
                  <div className='h-full w-1 bg-black pointer-events-none'></div>
                </div>
                <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black shadow'></div>
              </div>
            </div>

            <div className='flex md:contents'>
              <div className='col-start-5 col-end-6 mr-10 md:mx-auto relative'>
                <div className='h-full w-6 flex items-center justify-center'>
                  <div className='h-full w-1 bg-black pointer-events-none'></div>
                </div>
                <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black shadow'></div>
              </div>
              <div className='border-2 border-black col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md'>
                <h3 className='font-semibold text-lg mb-1'>2009 - Node.js</h3>
                <p className='leading-tight text-justify'>
                  Node.js was introduced in 2009. It is an open-source, cross-platform JavaScript
                  run-time environment for executing JavaScript code server-side.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
