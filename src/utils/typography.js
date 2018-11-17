import Typography from 'typography'
import noriegaTheme from 'typography-theme-noriega'

noriegaTheme.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'body': {
    backgroundColor: '#10171e'
  },
  'a': {
    color: '#F25F5C'
  },
  'blockquote': {
    color: '#8899a6',
    borderLeft: '0.32813rem solid #8899a6',
    paddingLeft: '1rem'
  },
  'h3, h1': {
    lineHeight: '1.3'
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
