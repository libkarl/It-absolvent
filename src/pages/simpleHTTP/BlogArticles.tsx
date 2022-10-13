import { Article } from './HttpRequest'
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
  background: ${theme.colors.gray};
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
  padding: 0.75rem 1.2rem;
  margin: 1.2 0;
`

const Link_DemoApp = styled.div`
  width: max-content;
  display: inline-block;
  padding: 0.75rem 1.2rem;
  border-radius: 0.4rem;
`
export const BlogList = (props: { articles: Article[] }) => {
  return (
    <section>
      <Div_PortfolioContainer>
        {props.articles.map(el => {
          return (
            <Article_PortfolioItem key={el.id}>
              <Div_PortfolioItemImg>
                <img src={el.picture} alt='' />
              </Div_PortfolioItemImg>
              <H3_PortfolioItem>{el.text}</H3_PortfolioItem>
            </Article_PortfolioItem>
          )
        })}
      </Div_PortfolioContainer>
    </section>
  )
}
