import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
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
          I'm a fullstack marketing developer working remotely from Europe and Asia. Follow me on {' '}
          <a href="https://twitter.com/oscarjesionek" target="_blank">
            Twitter
          </a> and {' '}<a href="https://instagram.com/oscarjesionek/" target="_blank">
            Instagram
          </a>.
        </p>
      </div>
    )
  }
}

export default Bio
