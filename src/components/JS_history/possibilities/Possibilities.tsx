import React from 'react'

const Possibilities = () => {
  return (
    <div>
      <div className='py-12 bg-white mt-10' id='possibilities'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:text-center'>
            <h2 className='text-base text-blue-600 font-semibold tracking-wide uppercase text-3xl'>
              What is JavaScript used for?
            </h2>

            <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
              JavaScript is mainly used for web-based applications and web browsers. But it is also
              used beyond the Web in software, servers and embedded hardware controls. Here are some
              basic things JavaScript is used for:
            </p>
          </div>

          <div className='mt-10'>
            <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
              <div className='relative'>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white'>
                    <svg
                      className='h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='2'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                      />
                    </svg>
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                    Adding interactive behavior to web pages
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>
                  JavaScript allows users to interact with web pages. There are almost no limits to
                  the things you can do with JavaScript on a web page.
                </dd>
              </div>

              <div className='relative'>
                <dt>
                  <div className='absolute flex items-center justify-center fill-current h-12 w-12 rounded-md bg-blue-600 text-white '>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M13 16H11V18H13V16Z' fill='currentColor' />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M5 4C5 2.89543 5.89543 2 7 2H17C18.1046 2 19 2.89543 19 4V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V4ZM7 4H17V20H7L7 4Z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                    {' '}
                    Creating mobile apps
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>
                  Developers can use various JavaScript frameworks for developing and building
                  mobile apps. JavaScript frameworks are collections of JavaScript code libraries
                  that provide developers with pre-written code to use for routine programming
                  features and tasks.
                </dd>
              </div>

              <div className='relative'>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M9 6C8.44772 6 8 6.44772 8 7C8 7.55228 8.44772 8 9 8H15C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6H9Z'
                        fill='currentColor'
                      />
                      <path
                        d='M9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12H15C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10H9Z'
                        fill='currentColor'
                      />
                      <path
                        d='M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z'
                        fill='currentColor'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M4 5C4 3.34315 5.34315 2 7 2H17C18.6569 2 20 3.34315 20 5V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V5ZM7 4H17C17.5523 4 18 4.44772 18 5V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V5C6 4.44772 6.44771 4 7 4Z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                    Back-end Web Development
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>
                  JavaScript can also be used for web development on the server. This allows
                  JavaScript developers to use their skills to work with both front-end and back-end
                  aspects of a website.
                </dd>
              </div>

              <div className='relative'>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M11 17H4C2.34315 17 1 15.6569 1 14V6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V14C23 15.6569 21.6569 17 20 17H13V19H16C16.5523 19 17 19.4477 17 20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19H11V17ZM4 5H20C20.5523 5 21 5.44772 21 6V14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14V6C3 5.44772 3.44772 5 4 5Z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                    Desktop Applications
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>
                  JavaScript is also used for creating desktop applications thanks to platforms like
                  Electron and NW.js. Electron is backed by GitHub and is a compelling framework
                  that you can use to build cross-platform desktop applications.{' '}
                </dd>
              </div>

              <div className='relative'>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15.4695 11.2929C15.0789 10.9024 14.4458 10.9024 14.0553 11.2929C13.6647 11.6834 13.6647 12.3166 14.0553 12.7071C14.4458 13.0976 15.0789 13.0976 15.4695 12.7071C15.86 12.3166 15.86 11.6834 15.4695 11.2929Z'
                        fill='currentColor'
                      />
                      <path
                        d='M16.1766 9.17156C16.5671 8.78103 17.2003 8.78103 17.5908 9.17156C17.9813 9.56208 17.9813 10.1952 17.5908 10.5858C17.2003 10.9763 16.5671 10.9763 16.1766 10.5858C15.7861 10.1952 15.7861 9.56208 16.1766 9.17156Z'
                        fill='currentColor'
                      />
                      <path
                        d='M19.7121 11.2929C19.3216 10.9024 18.6885 10.9024 18.2979 11.2929C17.9074 11.6834 17.9074 12.3166 18.2979 12.7071C18.6885 13.0976 19.3216 13.0976 19.7121 12.7071C20.1027 12.3166 20.1027 11.6834 19.7121 11.2929Z'
                        fill='currentColor'
                      />
                      <path
                        d='M16.1766 13.4142C16.5671 13.0237 17.2003 13.0237 17.5908 13.4142C17.9813 13.8048 17.9813 14.4379 17.5908 14.8284C17.2003 15.219 16.5671 15.219 16.1766 14.8284C15.7861 14.4379 15.7861 13.8048 16.1766 13.4142Z'
                        fill='currentColor'
                      />
                      <path d='M6 13H4V11H6V9H8V11H10V13H8V15H6V13Z' fill='currentColor' />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M7 5C3.13401 5 0 8.13401 0 12C0 15.866 3.13401 19 7 19H17C20.866 19 24 15.866 24 12C24 8.13401 20.866 5 17 5H7ZM17 7H7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7Z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                    Game Development
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>
                  JavaScript has also worked its way into the gaming industry. With HTML5,
                  developers can create small games or game elements inside an existing webpage (for
                  example, a banner ad or a moving object on the side of a webpage).
                </dd>
              </div>

              <div className='relative'>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M14.1254 13H10.1254V15H14.1254V13Z' fill='currentColor' />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M8.12537 13C9.22994 13 10.1254 12.1046 10.1254 11C10.1254 9.89543 9.22994 9 8.12537 9C7.0208 9 6.12537 9.89543 6.12537 11C6.12537 12.1046 7.0208 13 8.12537 13ZM8.12537 11.5C8.40151 11.5 8.62537 11.2761 8.62537 11C8.62537 10.7239 8.40151 10.5 8.12537 10.5C7.84922 10.5 7.62537 10.7239 7.62537 11C7.62537 11.2761 7.84922 11.5 8.12537 11.5Z'
                        fill='currentColor'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M18.1254 11C18.1254 12.1046 17.2299 13 16.1254 13C15.0208 13 14.1254 12.1046 14.1254 11C14.1254 9.89543 15.0208 9 16.1254 9C17.2299 9 18.1254 9.89543 18.1254 11ZM16.6254 11C16.6254 11.2761 16.4015 11.5 16.1254 11.5C15.8492 11.5 15.6254 11.2761 15.6254 11C15.6254 10.7239 15.8492 10.5 16.1254 10.5C16.4015 10.5 16.6254 10.7239 16.6254 11Z'
                        fill='currentColor'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M2.74884 14.6663C3.73056 16.6421 5.76939 18 8.12537 18H16.1254C18.5654 18 20.6652 16.5435 21.6029 14.4525C22.3722 13.9093 22.8746 13.0133 22.8746 12C22.8746 10.9867 22.3722 10.0907 21.6029 9.54753C20.6652 7.45651 18.5654 6 16.1254 6H8.12537C5.76939 6 3.73056 7.3579 2.74884 9.33375C1.78448 9.83263 1.12537 10.8393 1.12537 12C1.12537 13.1607 1.78448 14.1674 2.74884 14.6663ZM8.12537 8H16.1254C17.5088 8 18.7282 8.70234 19.4465 9.76991C19.7227 10.4593 19.8746 11.2119 19.8746 12C19.8746 12.7881 19.7227 13.5407 19.4465 14.2301C18.7282 15.2977 17.5088 16 16.1254 16H8.12537C5.91623 16 4.12537 14.2091 4.12537 12C4.12537 9.79086 5.91623 8 8.12537 8Z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                    Artificial Intelligence
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>
                  In addition, there are frameworks for developing A.I.-powered chatbots in
                  JavaScript, like Botkit and Chatfuel. Using these tools, developers can build
                  chatbots that act as personal assistants.
                </dd>
              </div>

              <div className='relative'>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M22.775 8C22.9242 8.65461 23 9.32542 23 10H14V1C14.6746 1 15.3454 1.07584 16 1.22504C16.4923 1.33724 16.9754 1.49094 17.4442 1.68508C18.5361 2.13738 19.5282 2.80031 20.364 3.63604C21.1997 4.47177 21.8626 5.46392 22.3149 6.55585C22.5091 7.02455 22.6628 7.5077 22.775 8ZM20.7082 8C20.6397 7.77018 20.5593 7.54361 20.4672 7.32122C20.1154 6.47194 19.5998 5.70026 18.9497 5.05025C18.2997 4.40024 17.5281 3.88463 16.6788 3.53284C16.4564 3.44073 16.2298 3.36031 16 3.2918V8H20.7082Z'
                        fill='currentColor'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M1 14C1 9.02944 5.02944 5 10 5C10.6746 5 11.3454 5.07584 12 5.22504V12H18.775C18.9242 12.6546 19 13.3254 19 14C19 18.9706 14.9706 23 10 23C5.02944 23 1 18.9706 1 14ZM16.8035 14H10V7.19648C6.24252 7.19648 3.19648 10.2425 3.19648 14C3.19648 17.7575 6.24252 20.8035 10 20.8035C13.7575 20.8035 16.8035 17.7575 16.8035 14Z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                    Data Visualization
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>
                  One of the uses for JavaScript is data visualization, or creating visual
                  representations of data using code. For example, many people use D3.js to create
                  interactive graphs, charts, and maps that update in real-time based on revised
                  data sets.
                </dd>
              </div>

              <div className='relative'>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M9 22C9 22.5523 8.55228 23 8 23C7.44772 23 7 22.5523 7 22C7 21.4477 7.44772 21 8 21C8.55228 21 9 21.4477 9 22ZM13 22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22C11 21.4477 11.4477 21 12 21C12.5523 21 13 21.4477 13 22ZM16 23C16.5523 23 17 22.5523 17 22C17 21.4477 16.5523 21 16 21C15.4477 21 15 21.4477 15 22C15 22.5523 15.4477 23 16 23Z'
                        fill='currentColor'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M9 2C9 2.55228 8.55228 3 8 3C7.44772 3 7 2.55228 7 2C7 1.44772 7.44772 1 8 1C8.55228 1 9 1.44772 9 2ZM13 2C13 2.55228 12.5523 3 12 3C11.4477 3 11 2.55228 11 2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2ZM16 3C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3ZM9 22C9 22.5523 8.55228 23 8 23C7.44772 23 7 22.5523 7 22C7 21.4477 7.44772 21 8 21C8.55228 21 9 21.4477 9 22ZM13 22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22C11 21.4477 11.4477 21 12 21C12.5523 21 13 21.4477 13 22ZM16 23C16.5523 23 17 22.5523 17 22C17 21.4477 16.5523 21 16 21C15.4477 21 15 21.4477 15 22C15 22.5523 15.4477 23 16 23ZM23 16C23 15.4477 22.5523 15 22 15C21.4477 15 21 15.4477 21 16C21 16.5523 21.4477 17 22 17C22.5523 17 23 16.5523 23 16ZM23 12C23 11.4477 22.5523 11 22 11C21.4477 11 21 11.4477 21 12C21 12.5523 21.4477 13 22 13C22.5523 13 23 12.5523 23 12ZM22 7C22.5523 7 23 7.44771 23 8C23 8.55229 22.5523 9 22 9C21.4477 9 21 8.55229 21 8C21 7.44771 21.4477 7 22 7ZM2 15C2.55228 15 3 15.4477 3 16C3 16.5523 2.55228 17 2 17C1.44772 17 1 16.5523 1 16C1 15.4477 1.44772 15 2 15ZM2 11C2.55228 11 3 11.4477 3 12C3 12.5523 2.55228 13 2 13C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11ZM3 8C3 7.44771 2.55228 7 2 7C1.44772 7 1 7.44771 1 8C1 8.55229 1.44772 9 2 9C2.55228 9 3 8.55229 3 8ZM17 6H7C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V7C18 6.44772 17.5523 6 17 6ZM7 4C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V7C20 5.34315 18.6569 4 17 4H7ZM14 10H10V14H14V10ZM8 8V16H16V8H8Z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                    Embedded Device Development and IoT
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>
                  JavaScript is also gaining popularity for embedded device development. This means
                  that you can create apps for very small devices using JavaScript because it’s
                  lightweight and easy to use.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Possibilities
