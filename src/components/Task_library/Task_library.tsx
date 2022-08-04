import { Link } from 'react-router-dom'
import Laptop from '../../assets/laptop.jpg'
import React from 'react'
import Startup from '../../assets/startup.jpg'
import Tilt from 'react-parallax-tilt'
import Workspace from '../../assets/workspace.jpg'
import Worktable from '../../assets/worktable.jpg'

const Task_library = () => {
  return (
    <section className='container w-screen mt-10'>
      <div className='bg-white w-screen flex flex-wrap content-center justify-center mx-auto px-2 py-5 md:px-6 gap-6'>
        <Link to='task01'>
          <Tilt>
            <article className='bg-white overflow-hidden rounded-lg shadow-lg w-72 m-4'>
              <a className='' href='#'>
                <img alt='Placeholder' className='h-48 w-full' src={Workspace}></img>
              </a>

              <div className='rounded-lg z-50 bg-white relative -mt-2 p-4'>
                <header className='leading-tight mb-2'>
                  <h1 className='text-lg font-bold'>
                    <a className='no-underline hover:underline text-black' href='#'>
                      Task_01-03
                    </a>
                  </h1>
                </header>

                <p className='leading-tight pb-2 md:pb-4'>
                  Hablamos sobre las dificultades en el gremio y discutimos sobre nuestros derechos
                  en un mundo donde somos la minoria.
                </p>
                <div className='py-4 flex justify-around flex-wrap'>
                  <span className='inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-1'>
                    #bestfriend
                  </span>
                  <span className='inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-1'>
                    #buddy
                  </span>
                  <span className='inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-1'>
                    #amigo
                  </span>
                </div>
              </div>
            </article>
          </Tilt>
        </Link>

        <Link to='about'>
          <Tilt>
            <article className='bg-white overflow-hidden rounded-lg shadow-lg w-72 m-4'>
              <a className='' href='#'>
                <img alt='Placeholder' className='h-48 w-full' src={Laptop}></img>
              </a>

              <div className='rounded-lg z-50 bg-white relative -mt-2 p-4'>
                <header className='leading-tight mb-2'>
                  <h1 className='text-lg font-bold'>
                    <a className='no-underline hover:underline text-black' href='#'>
                      Task_04
                    </a>
                  </h1>
                </header>

                <p className='leading-tight pb-2 md:pb-4'>
                  Hablamos sobre las dificultades en el gremio y discutimos sobre nuestros derechos
                  en un mundo donde somos la minoria.
                </p>
                <div className='py-4 flex justify-around flex-wrap'>
                  <span className='inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-1'>
                    #bestfriend
                  </span>
                  <span className='inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-1'>
                    #buddy
                  </span>
                  <span className='inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-1'>
                    #amigo
                  </span>
                </div>
              </div>
            </article>
          </Tilt>
        </Link>

        <Link to='about'>
          <Tilt>
            <article className='bg-white overflow-hidden rounded-lg shadow-lg w-72 m-4'>
              <a className='' href='#'>
                <img alt='Placeholder' className='h-48 w-full' src={Worktable}></img>
              </a>

              <div className='rounded-lg z-50 bg-white relative -mt-2 p-4'>
                <header className='leading-tight mb-2'>
                  <h1 className='text-lg font-bold'>
                    <a className='no-underline hover:underline text-black' href='#'>
                      Task_5
                    </a>
                  </h1>
                </header>

                <p className='leading-tight pb-2 md:pb-4'>
                  Hablamos sobre las dificultades en el gremio y discutimos sobre nuestros derechos
                  en un mundo donde somos la minoria.
                </p>
                <div className='py-4 flex justify-around flex-wrap'>
                  <span className='inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-1'>
                    #bestfriend
                  </span>
                  <span className='inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-1'>
                    #buddy
                  </span>
                  <span className='inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-1'>
                    #amigo
                  </span>
                </div>
              </div>
            </article>
          </Tilt>
        </Link>

        <Link to='about'>
          <Tilt>
            <article className='bg-white overflow-hidden rounded-lg shadow-lg w-72 m-4'>
              <a className='' href='#'>
                <img alt='Placeholder' className='h-48 w-full' src={Startup}></img>
              </a>

              <div className='rounded-2xl z-50 bg-white relative -mt-2 p-4'>
                <header className='leading-tight mb-2'>
                  <h1 className='text-lg font-bold'>
                    <a className='no-underline hover:underline text-black' href='#'>
                      Task_06
                    </a>
                  </h1>
                </header>

                <p className='leading-tight pb-2 md:pb-4'>
                  Hablamos sobre las dificultades en el gremio y discutimos sobre nuestros derechos
                  en un mundo donde somos la minoria.
                </p>
                <div className='py-4 flex justify-around flex-wrap'>
                  <span className='inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-1'>
                    #bestfriend
                  </span>
                  <span className='inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-1'>
                    #buddy
                  </span>
                  <span className='inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-1'>
                    #amigo
                  </span>
                </div>
              </div>
            </article>
          </Tilt>
        </Link>
      </div>
    </section>
  )
}

export default Task_library
