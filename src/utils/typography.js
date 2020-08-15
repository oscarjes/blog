import Typography from 'typography'
import noriegaTheme from 'typography-theme-noriega'

noriegaTheme.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'body': {
    backgroundColor: 'white'
  },
  'a': {
    color: '#1d2b36',
  },
  'blockquote': {
    color: '#334854',
    borderLeft: '0.32813rem solid #8899a6',
    paddingLeft: '1rem'
  },
  'p, span': {
    color: '#1d2b36'
  },
  'h3, h1': {
    lineHeight: '1.3'
  },
  'img': {
    borderRadius: '15px'
  },
  'span.gatsby-resp-image-background-image': {
    borderRadius: '15px'
  }
})

delete noriegaTheme.googleFonts

const typography = new Typography(noriegaTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
