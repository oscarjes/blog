import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  state = {
    email: '',
    listFields: {},
    msg: '',
    result: '',
    submitting: false,
  }

  _handleSubmit = async event => {
    this.setState({submitting: true})
    console.log('_handlesubmit')
    event.preventDefault()
    const result = await addToMailchimp(this.state.email, this.state.listFields)
    this.setState({
      msg: result.msg,
      result: result.result,
      submitting: false
    })
  }

  _handleChange = event => {
    this.setState({ email: event.target.value })
  }

  render() {
    return (
      <>
        <div
          style={{
            display: 'flex',
          }}
        >
          <img
            src={profilePic}
            alt={`Oscar Jesionek`}
            style={{
              borderRadius: '50%',
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              width: rhythm(2),
              height: rhythm(2),
            }}
          />
          <p>
            I'm a fullstack marketing developer working remotely from Europe and
            Asia. Sign up below to get my posts delivered to your inbox.
          </p>
        </div>
        {this.state.result == 'error' && (
          <div
            style={{
              marginLeft: rhythm(2.5),
            }}
          >
            <p style={{ color: 'red' }}>Something went wrong :(</p>
          </div>
        )}
        {this.state.result == 'success' ? (
          <div
            style={{
              marginLeft: rhythm(2.5),
            }}
          >
            <p style={{ fontWeight: '700' }}>{this.state.msg}</p>
          </div>
        ) : (
<div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: rhythm(2.5),
            marginLeft: rhythm(2.5),
          }}
        >
          <form
            onSubmit={this._handleSubmit}
            style={{
              width: '100%',
            }}
          >
            <input
              id="email"
              type="email"
              required
              name="email"
              value={this.state.email}
              onChange={this._handleChange}
              placeholder="Enter your email..."
              style={{
                maxWidth: '220px',
                width: '100%',
                border: 'none',
                border: '1px solid #551A8B',
                borderRadius: '5px 0 0 5px',
                padding: '5px',
              }}
            />
            <button
              type="submit"
              value="Subscribe"
              style={{
                color: 'white',
                backgroundColor: '#551A8B',
                border: '1px solid #551A8B',
                cursor: 'pointer',
                borderRadius: '0 5px 5px 0',
                // marginLeft: '15px',
                // borderRadius: '5px',
                fontSize: '1rem',
                fontWeight: '300',
                padding: '5px 10px',
                height: '41px',
              }}
              disabled={this.state.submitting}
            >
              Sign Up
            </button>
          </form>
        </div>
        )}
        
      </>
    )
  }
}

// EmailCaptureForm.defaultProps = {
//   signupMessage: `Enjoyed this post? Receive the next one in your inbox!`,
//   confirmMessage: `Thank you! Youʼll receive your first email shortly.`,
//   overrideCSS: {},
//   isHomepage: false,
//   className: ``,
// }

export default Bio
