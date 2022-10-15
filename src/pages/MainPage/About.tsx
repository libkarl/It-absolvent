import { A_PrimaryBtn } from './Header'
import { FaUniversity } from 'react-icons/fa'
import { FiAward } from 'react-icons/fi'
import { VscFolder } from 'react-icons/vsc'
import { theme } from '../../helpers/theme'
import { urls } from '../../helpers/urls'
import Me from '../../assets/me-about.jpg'
import React from 'react'
import styled from 'styled-components'

const Div_AboutContainer = styled.div`
  width: ${theme.sizes.containerLG}%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;
  ${theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 0;
  }
`

const Div_AboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(45deg, transparent, ${theme.colors.colorprimary}, transparent);
  display: grid;
  place-items: center;
  ${theme.breakpoints.md} {
    width: 50%;
    margin: 2rem auto 4rem;
  }
  ${theme.breakpoints.sm} {
    width: 65%;
    margin: 0 auto 3rem;
  }
`

const Div_AboutMeImage = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  transform: rotate(10deg);
  transition: all 400ms ease;
  &:hover {
    transform: rotate(0);
  }
`
const Div_AboutContent = styled.div`
  @media screen and (max-width: 1024px) {
    margin: 1rem 0 1.5rem;
  }
  ${theme.breakpoints.sm} {
    text-align: center;
`

const P_AboutContent = styled.p`
  margin: 2rem 0 2.6rem;
  color: ${theme.colors.white};
  opacity: 0.6;
  ${theme.breakpoints.sm} {
    margin: 1.5rem 0;
  }
`
const Div_AboutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  ${theme.breakpoints.sm} {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`

const Article_AboutCard = styled.article`
  background: ${theme.background.colorbgvariant};
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 400ms ease;
  &:hover {
    background: transparent;
    border-color: ${theme.colors.colorprimaryvariant};
    cursor: default;
  }
`
const DIV_AboutIcon = styled.div`
  color: ${theme.colors.colorprimary};
  font-size: 1.4rem;
  margin-bottom: 1rem;
`
const H5_AboutCard = styled.h5`
  font-size: 0.95rem;
`
const Small_AboutCard = styled.small`
  font-size: 0.7rem;
  color: ${theme.colors.white};
  opacity: 0.6;
`
export const About = () => {
  return (
    <section id={urls.portfolioNav.about}>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <Div_AboutContainer>
        <Div_AboutMe>
          <Div_AboutMeImage>
            <img src={Me} alt='About Image' />
          </Div_AboutMeImage>
        </Div_AboutMe>

        <Div_AboutContent>
          <Div_AboutCards>
            <Article_AboutCard>
              <DIV_AboutIcon>
                <FiAward />
              </DIV_AboutIcon>
              <H5_AboutCard>Experience </H5_AboutCard>
              <Small_AboutCard>IT absolvent course + Part time intership</Small_AboutCard>
            </Article_AboutCard>
            <Article_AboutCard>
              <DIV_AboutIcon>
                <FaUniversity />
              </DIV_AboutIcon>
              <H5_AboutCard>University </H5_AboutCard>
              <Small_AboutCard>Thomas Bata University in Zlin</Small_AboutCard>
            </Article_AboutCard>
            <Article_AboutCard>
              <DIV_AboutIcon>
                <VscFolder />
              </DIV_AboutIcon>
              <H5_AboutCard>Projects </H5_AboutCard>
              <Small_AboutCard>20+ Projects</Small_AboutCard>
            </Article_AboutCard>
          </Div_AboutCards>

          <P_AboutContent>
            I&apos;m an undergraduate student from Czech Republic. I have been learning Web
            Development for last year. Now I can work with JavaScript, Typescipt and React Framefork
            for creating dynamic website. I&apos;m also learning backend in Golang which is a fast
            language used for Back-end development. I also have experience with databases like
            PostgresSQL and MongoDB.
          </P_AboutContent>

          <A_PrimaryBtn href={urls.portfolioNav.contact}>Let&apos;s Talk</A_PrimaryBtn>
        </Div_AboutContent>
      </Div_AboutContainer>
    </section>
  )
}
