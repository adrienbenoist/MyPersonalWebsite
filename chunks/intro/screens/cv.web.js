import React from 'react'
import { Screen } from 'react-dom-chunky'
import { Steps } from 'antd'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Typography } from 'rmwc/Typography'
import Experiences from "../data/experiences"
import Educations from "../data/educations"

const Step = Steps.Step
const CurrentExperienceId = 4
const CurrentEducationId = 5

export default class CvScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
    this._detailsExperience = (experience) => this.detailsExperience.bind(this, experience)
    this._detailsEducation = (education) => this.detailsEducation.bind(this, education)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  detailsExperience (experience) {
    this.triggerRawRedirect(`../data/experiences/${experience.id}`)
  }

  detailsEducation (education) {
    this.triggerRawRedirect(`../data/educations/${education.id}`)
  }

  renderExperience(experience) {
    const description = <div style={{
      marginRight: '30px'
    }}>
      <Typography use='headline3' tag='h3' style={{
        color: '#90A4AE',
        marginBottom: '10px',
        textAlign: 'left' }}>
        { experience.subtitle }
      </Typography>
      <Typography use='body1' tag='h1' style={{
        color: '#90A4AE',
        marginBottom: '10px',
        textAlign: 'left' }}>
        { experience.period }
      </Typography>
      <Typography use='subheading2' tag='h1' style={{
        color: '#90A4AE',
        marginBottom: '10px',
        textAlign: 'left' }}>
        { experience.location }
      </Typography>
      <Typography use='subheading2' tag='h1' style={{
        color: '#90A4AE',
        marginBottom: '10px',
        textAlign: 'left' }}>
        { experience.description }
      </Typography>
    </div>

    return <Step
      key={experience.id}
      title={experience.title}
      description={description} />
  }

  renderEducation(education) {
    const description = <div style={{
      marginRight: '30px'
    }}>
      <Typography use='headline3' tag='h3' style={{
        color: '#90A4AE',
        marginBottom: '10px',
        textAlign: 'left' }}>
        { education.degree }
      </Typography>
      <Typography use='body1' tag='h1' style={{
        color: '#90A4AE',
        marginBottom: '10px',
        textAlign: 'left' }}>
        { education.period }
      </Typography>
      <Typography use='subheading2' tag='h1' style={{
        color: '#90A4AE',
        marginBottom: '10px',
        textAlign: 'left' }}>
        { education.description }
      </Typography>
    </div>

    return <Step
      key={education.id}
      title={education.nom}
      description={description} />
  }

  renderExperiences() {
    return Experiences.map(experience => this.renderExperience(experience))
  }

  renderEducations() {
    return Educations.map(education => this.renderEducation(education))
  }

  renderMainContent() {
    const width = this.isSmallScreen ? '95vw' : '800px'
    const padding = this.isSmallScreen ? '2px' : '30px'
    const direction = this.isSmallScreen ? 'vertical' : 'horizontal'
    const stepsPad = this.isSmallScreen ? 30 : 0

    return (<div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: '50px',
        alignItems: 'center'
      }}>

      <Card style={{ width, margin: '10px', padding }}>
        <Typography use='display1' tag='h1' style={{ color: '#90A4AE', marginBottom: '30px', marginTop: '20px' }}>
          Experience
        </Typography>

        <Steps
          direction={'vertical'}
          style={{margin: `${stepsPad}px`}}
          current={CurrentExperienceId}>

          { this.renderExperiences() }

        </Steps>

        <Typography use='display1' tag='h1' style={{ color: '#90A4AE', marginBottom: '30px', marginTop: '20px' }}>
          Education
        </Typography>

        <Steps
          direction={'vertical'}
          style={{margin: `${stepsPad}px`}}
          current={CurrentEducationId}>

          { this.renderEducations() }

        </Steps>
      </Card>

    </div>)
  }

  components () {
    return super.components().concat([this.renderMainContent()])
  }
}
