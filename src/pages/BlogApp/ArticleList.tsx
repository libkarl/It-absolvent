import { Article } from './BlogApp'
import { theme } from '../../helpers/theme'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'

const Div_PortfolioContainer = styled.div`
  width: ${theme.sizes.containerLG}%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
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
  background: ${theme.background.lightblue};
  padding: 1.3rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: all 400ms ease;
  &:hover {
    border-color: ${theme.colors.lightBlack};
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

const H2_StyledTitle = tw.div`
  text-lg
  text-center
  italic
  underline
  p-4
`
export const BlogList = (props: { articles: Article[] }) => {
  return (
    <section>
      <Div_PortfolioContainer>
        {props.articles.map(el => {
          return (
            <Article_PortfolioItem key={el.id}>
              <H2_StyledTitle>{el.title}</H2_StyledTitle>
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
