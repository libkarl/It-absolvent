import Angular from '../../../assets/angular.png'
import Node from '../../../assets/node.png'
import React from 'react'
import React_icon from '../../../assets/react.png'
import Vue from '../../../assets/vue.png'

const Home = () => {
  return (
    <div>
      <div className='relative pt-[120px] lg:pt-[150px] pb-[110px] bg-white mt-36 mx-auto'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap -mx-4'>
            <div className='w-full lg:w-5/12 px-4'>
              <div className='hero-content'>
                <h1
                  className='
                    text-dark
                    font-bold
                    text-4xl
                    text-blue-600
                    sm:text-[42px]
                    lg:text-[40px]
                    xl:text-[42px]
                    leading-snug
                    mb-3
                  '
                >
                  WebDeveloper <br />
                  Education Website <br />
                </h1>
                <p className='text-base mb-8 text-body-color max-w-3xl text-lg'>
                  JavaScript was created at Netscape Communications by Brendan Eich in 1995.
                  Netscape and Eich designed JavaScript as a scripting language for use with the
                  company is flagship web browser, Netscape Navigator. Initially known as
                  LiveScript, Netscape changed the name to JavaScript so they could position it as a
                  companion for the Java language, a product of their partner, Sun Microsystems.
                  Apart from some superficial syntactic similarities, though, JavaScript is in no
                  way related to the Java programming language.
                </p>

                <div className='clients pt-16'>
                  <h6
                    className='
                    text-dark
                    font-bold
                    text-3xl
                    leading-snug
                    mb-3
                    '
                  >
                    JavaScript based Technologies
                    <span className='w-8 h-[1px] bg-body-color inline-block ml-2'></span>
                  </h6>
                  <div className='flex items-center gap-5'>
                    <div className='w-full py-3 mr-4'>
                      <img src={React_icon} alt='ayroui' />
                    </div>
                    <div className='w-full py-3 mr-4'>
                      <img src={Angular} alt='graygrids' />
                    </div>
                    <div className='w-full py-3 mr-4'>
                      <img src={Vue} alt='uideck' />
                    </div>
                    <div className='w-full py-3 mr-4'>
                      <img src={Node} alt='uideck' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='hidden lg:block lg:w-1/12 px-4'></div>
            <div className='w-full lg:w-6/12 px-4'>
              <div className='lg:text-right lg:ml-auto'>
                <div className='relative inline-block z-10 pt-11 lg:pt-0'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png'
                    alt='hero'
                    className='max-w-full lg:ml-auto'
                  />
                  <span className='absolute -left-8 -bottom-8 z-[-1]'>
                    <svg
                      width='93'
                      height='93'
                      viewBox='0 0 93 93'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle cx='2.5' cy='2.5' r='2.5' fill='#3056D3' />
                      <circle cx='2.5' cy='24.5' r='2.5' fill='#3056D3' />
                      <circle cx='2.5' cy='46.5' r='2.5' fill='#3056D3' />
                      <circle cx='2.5' cy='68.5' r='2.5' fill='#3056D3' />
                      <circle cx='2.5' cy='90.5' r='2.5' fill='#3056D3' />
                      <circle cx='24.5' cy='2.5' r='2.5' fill='#3056D3' />
                      <circle cx='24.5' cy='24.5' r='2.5' fill='#3056D3' />
                      <circle cx='24.5' cy='46.5' r='2.5' fill='#3056D3' />
                      <circle cx='24.5' cy='68.5' r='2.5' fill='#3056D3' />
                      <circle cx='24.5' cy='90.5' r='2.5' fill='#3056D3' />
                      <circle cx='46.5' cy='2.5' r='2.5' fill='#3056D3' />
                      <circle cx='46.5' cy='24.5' r='2.5' fill='#3056D3' />
                      <circle cx='46.5' cy='46.5' r='2.5' fill='#3056D3' />
                      <circle cx='46.5' cy='68.5' r='2.5' fill='#3056D3' />
                      <circle cx='46.5' cy='90.5' r='2.5' fill='#3056D3' />
                      <circle cx='68.5' cy='2.5' r='2.5' fill='#3056D3' />
                      <circle cx='68.5' cy='24.5' r='2.5' fill='#3056D3' />
                      <circle cx='68.5' cy='46.5' r='2.5' fill='#3056D3' />
                      <circle cx='68.5' cy='68.5' r='2.5' fill='#3056D3' />
                      <circle cx='68.5' cy='90.5' r='2.5' fill='#3056D3' />
                      <circle cx='90.5' cy='2.5' r='2.5' fill='#3056D3' />
                      <circle cx='90.5' cy='24.5' r='2.5' fill='#3056D3' />
                      <circle cx='90.5' cy='46.5' r='2.5' fill='#3056D3' />
                      <circle cx='90.5' cy='68.5' r='2.5' fill='#3056D3' />
                      <circle cx='90.5' cy='90.5' r='2.5' fill='#3056D3' />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
