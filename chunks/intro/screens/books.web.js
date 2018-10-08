import React from 'react'
import { Screen } from 'react-dom-chunky'
import { Steps } from 'antd'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Typography } from 'rmwc/Typography'
import Books from "../data/books"

const Step = Steps.Step
const CurrentBookId = 1

export default class BooksScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
    this.detailsBooks = (book) => this.detailsBooks.bind(this, book)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  detailsBooks(book) {
    this.triggerRawRedirect(`../data/books/${books.id}`)
  }

  renderBook(book) {
    const description = <div style={{
      marginRight: '30px'
    }}>
      <Typography use='headline3' tag='h3' style={{
        color: '#90A4AE',
        marginBottom: '10px',
        textAlign: 'left' }}>
        { book.author }
      </Typography>
      <Typography use='body1' tag='h1' style={{
        color: '#90A4AE',
        marginBottom: '10px',
        textAlign: 'left' }}>
        { book.review }
      </Typography>
    </div>

    return <Step
      key={book.id}
      title={book.title}
      description={description} />
  }

  renderBooks() {
    return Books.map(book => this.renderBook(book))
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
          Books
        </Typography>

        <Steps
          direction={'vertical'}
          style={{margin: `${stepsPad}px`}}
          current={CurrentBookId}>

          { this.renderBooks() }

        </Steps>
      </Card>
    </div>)
  }

  components () {
    return super.components().concat([this.renderMainContent()])
  }
}
