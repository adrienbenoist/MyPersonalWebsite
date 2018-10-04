import React from 'react'
import { Screen } from 'react-dom-chunky'
import { Steps } from 'antd'
import Experience from "../data/experiences"
import Educations from "../data/educations"

const Step = Steps.Step

export default class CvScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
    this._details = (experience) => this.details.bind(this, experience)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  details (experience) {
    this.triggerRawRedirect(`../data/experiences/${experience.id}`)
  }

  renderExperiences() {

  }

  renderMainContent() {

  }

  components () {
    return super.components().concat([renderMainContent()])
  }
}
