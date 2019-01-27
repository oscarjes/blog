import React from 'react'

class JustComments extends React.Component {
  constructor(...args) {
    super(...args)
    this.ref = React.createRef()
  }
  render() {
    if (window) {
      window.jcMyTheme = {
        buttons: {
          primaryColor: 'white',
          primaryBgColor: '#551A8B',
          primaryColorAlt: '#8899a6',
          secondaryColor: '#595959',
          secondaryBgColor: '#333',
          secondaryColorAlt: '#135784',
          disabledBgColor: '#D3D3D3',
        },
        text: {
          primaryColor: '#333',
          primaryColorAlt: '#135784',
          secondaryColor: '#595959',
          secondaryColorAlt: '#135784',
        },
        borderColor: '#dedede',
        borderRadius: '15px',
        backgroundColor: 'white',
        outlineStyle: '2px dotted #595959',
        avatar: {
          borderRadius: '50%',
          backgroundColor: '#D3D3D3',
          color: 'grey',
        },
      }
    }

    return (
      <div
        ref={this.ref}
        className="just-comments"
        data-theme="jcMyTheme"
        data-apikey="cf974a53-c123-4526-9ad1-555d44d4383f"
      />
    )
  }
  componentDidMount() {
    const s = document.createElement('script')
    s.src = '//just-comments.com/w.js'
    s.setAttribute('data-timestamp', +new Date())
    this.ref.current.appendChild(s)
  }
}

export default JustComments
