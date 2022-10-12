import { HiBadgeCheck } from 'react-icons/hi'
import { theme } from '../../helpers/theme'
import { urls } from '../../helpers/urls'
import React from 'react'
import styled from 'styled-components'

const Div_ExperienceContainer = styled.div`
  width: ${theme.sizes.containerLG}%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  ${theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
  ${theme.breakpoints.sm} {
    gap: 1rem;
  }
`
const Div_Experience = styled.div`
  background: ${theme.background.colorbgvariant};
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: all 400ms ease;
  &:hover {
    background: transparent;
    border-color: ${theme.colors.colorprimaryvariant};
    cursor: default;
  }
  ${theme.breakpoints.md} {
    width: 80%;
    padding: 2rem;
    margin: 0 auto;
  }
  ${theme.breakpoints.sm} {
    width: 100%;
    padding: 2rem 1rem;
  }
`
const H3_Experience = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
  color: ${theme.colors.colorprimary};
`
const Div_ExperienceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  gap: 1rem;
  ${theme.breakpoints.md} {
    padding: 1rem;
  }
`
const Article_ExperienceDetails = styled.article`
  display: flex;
  gap: 1rem;
`

const Div_ExperienceDetailsIcon = styled.div`
  margin-top: 6px;
  color: ${theme.colors.colorprimary};
`
export const Experience = () => {
  return (
    <section id={urls.portfolioNav.experience}>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <Div_ExperienceContainer>
        <Div_Experience>
          <H3_Experience>Frontend Development</H3_Experience>
          <Div_ExperienceContent>
            <Article_ExperienceDetails>
              <Div_ExperienceDetailsIcon>
                <HiBadgeCheck />
              </Div_ExperienceDetailsIcon>
              <div>
                <h4>HTML</h4>
                <small>Intermediate</small>
              </div>
            </Article_ExperienceDetails>
            <Article_ExperienceDetails>
              <Div_ExperienceDetailsIcon>
                <HiBadgeCheck />
              </Div_ExperienceDetailsIcon>
              <div>
                <h4>CSS</h4>
                <small>Intermediate</small>
              </div>
            </Article_ExperienceDetails>
            <Article_ExperienceDetails>
              <Div_ExperienceDetailsIcon>
                <HiBadgeCheck />
              </Div_ExperienceDetailsIcon>
              <div>
                <h4>JavaScript</h4>
                <small>Intermediate</small>
              </div>
            </Article_ExperienceDetails>
            <Article_ExperienceDetails>
              <Div_ExperienceDetailsIcon>
                <HiBadgeCheck />
              </Div_ExperienceDetailsIcon>
              <div>
                <h4>TypeScript</h4>
                <small>Intermediate</small>
              </div>
            </Article_ExperienceDetails>
            <Article_ExperienceDetails>
              <Div_ExperienceDetailsIcon>
                <HiBadgeCheck />
              </Div_ExperienceDetailsIcon>
              <div>
                <h4>MUI</h4>
                <small>Experienced</small>
              </div>
            </Article_ExperienceDetails>

            <Article_ExperienceDetails>
              <Div_ExperienceDetailsIcon>
                <HiBadgeCheck />
              </Div_ExperienceDetailsIcon>
              <div>
                <h4>Tailwind</h4>
                <small>Experienced</small>
              </div>
            </Article_ExperienceDetails>
            <Article_ExperienceDetails>
              <Div_ExperienceDetailsIcon>
                <HiBadgeCheck />
              </Div_ExperienceDetailsIcon>
              <div>
                <h4>React</h4>
                <small>Intermediate</small>
              </div>
            </Article_ExperienceDetails>
          </Div_ExperienceContent>
        </Div_Experience>
        {/*End of Frontend */}
        <Div_Experience>
          <H3_Experience>Backend Development</H3_Experience>
          <Div_ExperienceContent>
            <Article_ExperienceDetails>
              <Div_ExperienceDetailsIcon>
                <HiBadgeCheck />
              </Div_ExperienceDetailsIcon>
              <div>
                <h4>NodeJS</h4>
                <small>Experienced</small>
              </div>
            </Article_ExperienceDetails>
            <Article_ExperienceDetails>
              <Div_ExperienceDetailsIcon>
                <HiBadgeCheck />
              </Div_ExperienceDetailsIcon>
              <div>
                <h4>PostgreSQL</h4>
                <small>Intermediate</small>
              </div>
            </Article_ExperienceDetails>
            <Article_ExperienceDetails>
              <Div_ExperienceDetailsIcon>
                <HiBadgeCheck />
              </Div_ExperienceDetailsIcon>
              <div>
                <h4>MySQL</h4>
                <small>Experienced</small>
              </div>
            </Article_ExperienceDetails>
            <Article_ExperienceDetails>
              <Div_ExperienceDetailsIcon>
                <HiBadgeCheck />
              </Div_ExperienceDetailsIcon>
              <div>
                <h4>Golang</h4>
                <small>Experienced</small>
              </div>
            </Article_ExperienceDetails>

            <Article_ExperienceDetails>
              <Div_ExperienceDetailsIcon>
                <HiBadgeCheck />
              </Div_ExperienceDetailsIcon>
              <div>
                <h4>Python</h4>
                <small>Experienced</small>
              </div>
            </Article_ExperienceDetails>
          </Div_ExperienceContent>
        </Div_Experience>
      </Div_ExperienceContainer>
    </section>
  )
}
