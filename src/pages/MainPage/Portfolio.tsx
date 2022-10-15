import { A_BasicBtn } from './Header'
import { A_PrimaryBtn } from './Header'
import { Link } from 'react-router-dom'
import { theme } from '../../helpers/theme'
import { urls } from '../../helpers/urls'
import React from 'react'
import httppic from '../../assets/article.jpg'
import laptop from '../../assets/laptop.jpg'
import memorygame from '../../assets/memory-game.jpg'
import mortgagepic from '../../assets/mortgage.jpg'
import reduxpic from '../../assets/todoRedux.jpg'
import startup from '../../assets/startup.jpg'
import styled from 'styled-components'
import workspace from '../../assets/workspace.jpg'
import worktable from '../../assets/worktable.jpg'

const Div_PortfolioContainer = styled.div`
  width: ${theme.sizes.containerLG}%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  ${theme.breakpoints.md} {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }
  ${theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`
const Article_PortfolioItem = styled.article`
  background: ${theme.background.colorbgvariant};
  padding: 1.3rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: all 400ms ease;
  &:hover {
    border-color: ${theme.colors.colorprimaryvariant};
    background: transparent;
  }
`
const Div_PortfolioItemImg = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
  margin-bottom: 1rem;
`
const H3_PortfolioItem = styled.h3`
  margin: 1.2 0 2rem;
  margin-bottom: 1rem;
`

const Div_PortfolioItemCTA = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`
const Link_DemoApp = styled(Link)`
  width: max-content;
  display: inline-block;
  color: ${theme.background.colorbg};
  background: ${theme.colors.colorprimary};
  padding: 0.75rem 1.2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: 1px solid ${theme.colors.colorprimary};
  transition: all 400ms ease;
  &:hover {
    background: ${theme.colors.white};
    color: ${theme.background.colorbg};
    border-color: transparent;
  }
`

export const Portfolio = () => {
  return (
    <section id={urls.portfolioNav.portfolio}>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <Div_PortfolioContainer>
        <Article_PortfolioItem>
          <Div_PortfolioItemImg>
            <img src={workspace} alt='' />
          </Div_PortfolioItemImg>
          <H3_PortfolioItem>JS History Website</H3_PortfolioItem>
          <Div_PortfolioItemCTA>
            <A_BasicBtn href={urls.portfolioProjects.project1} target='_blank' rel='noreferrer'>
              Github
            </A_BasicBtn>
            <Link_DemoApp to={urls.jsHistoryPage}>Live Demo</Link_DemoApp>
          </Div_PortfolioItemCTA>
        </Article_PortfolioItem>

        <Article_PortfolioItem>
          <Div_PortfolioItemImg>
            <img src={laptop} alt='' />
          </Div_PortfolioItemImg>
          <H3_PortfolioItem>Hacker Writter App</H3_PortfolioItem>
          <Div_PortfolioItemCTA>
            <A_BasicBtn href={urls.portfolioProjects.project1} target='_blank' rel='noreferrer'>
              Github
            </A_BasicBtn>
            <Link_DemoApp to={urls.hackerWritter}>Live Demo</Link_DemoApp>
          </Div_PortfolioItemCTA>
        </Article_PortfolioItem>

        <Article_PortfolioItem>
          <Div_PortfolioItemImg>
            <img src={worktable} alt='' />
          </Div_PortfolioItemImg>
          <H3_PortfolioItem>Basic Counter App</H3_PortfolioItem>
          <Div_PortfolioItemCTA>
            <A_BasicBtn href={urls.portfolioProjects.project1} target='_blank' rel='noreferrer'>
              Github
            </A_BasicBtn>
            <Link_DemoApp to={urls.counter}>Live Demo</Link_DemoApp>
          </Div_PortfolioItemCTA>
        </Article_PortfolioItem>

        <Article_PortfolioItem>
          <Div_PortfolioItemImg>
            <img src={startup} alt='' />
          </Div_PortfolioItemImg>
          <H3_PortfolioItem>To Do App with React Context</H3_PortfolioItem>
          <Div_PortfolioItemCTA>
            <A_BasicBtn href={urls.portfolioProjects.project1} target='_blank' rel='noreferrer'>
              Github
            </A_BasicBtn>
            <Link_DemoApp to={urls.toDoApp}>Live Demo</Link_DemoApp>
          </Div_PortfolioItemCTA>
        </Article_PortfolioItem>

        <Article_PortfolioItem>
          <Div_PortfolioItemImg>
            <img src={memorygame} alt='' />
          </Div_PortfolioItemImg>
          <H3_PortfolioItem>Memory Game App</H3_PortfolioItem>
          <Div_PortfolioItemCTA>
            <A_BasicBtn href={urls.portfolioProjects.project1} target='_blank' rel='noreferrer'>
              Github
            </A_BasicBtn>
            <Link_DemoApp to={urls.memorygame}>Live Demo</Link_DemoApp>
          </Div_PortfolioItemCTA>
        </Article_PortfolioItem>

        <Article_PortfolioItem>
          <Div_PortfolioItemImg>
            <img src={reduxpic} alt='' />
          </Div_PortfolioItemImg>
          <H3_PortfolioItem>To-Do ReduxApp</H3_PortfolioItem>
          <Div_PortfolioItemCTA>
            <A_BasicBtn href={urls.portfolioProjects.project1} target='_blank' rel='noreferrer'>
              Github
            </A_BasicBtn>
            <Link_DemoApp to={urls.toDoAppRedux}>Live Demo</Link_DemoApp>
          </Div_PortfolioItemCTA>
        </Article_PortfolioItem>

        <Article_PortfolioItem>
          <Div_PortfolioItemImg>
            <img src={mortgagepic} alt='' />
          </Div_PortfolioItemImg>
          <H3_PortfolioItem>Mortgage Calculator App</H3_PortfolioItem>
          <Div_PortfolioItemCTA>
            <A_BasicBtn href={urls.portfolioProjects.project1} target='_blank' rel='noreferrer'>
              Github
            </A_BasicBtn>
            <Link_DemoApp to={urls.mortgageCalculator}>Live Demo</Link_DemoApp>
          </Div_PortfolioItemCTA>
        </Article_PortfolioItem>

        <Article_PortfolioItem>
          <Div_PortfolioItemImg>
            <img src={httppic} alt='' />
          </Div_PortfolioItemImg>
          <H3_PortfolioItem>Server Article App</H3_PortfolioItem>
          <Div_PortfolioItemCTA>
            <A_BasicBtn href={urls.portfolioProjects.project1} target='_blank' rel='noreferrer'>
              Github
            </A_BasicBtn>
            <Link_DemoApp to={urls.http}>Live Demo</Link_DemoApp>
          </Div_PortfolioItemCTA>
        </Article_PortfolioItem>
      </Div_PortfolioContainer>
    </section>
  )
}
