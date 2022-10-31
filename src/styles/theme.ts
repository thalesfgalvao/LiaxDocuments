export default {
  index: {
    above: 99,
    between: 50,
    under: 1
  },
  shadows: {
    bottom:
      'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;',
    right: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;'
  },
  colors: {
    successColor: '#6AE058',
    warningColor: '#E09B35',
    errorColor: '#E33F36',
    semiWhite: '#E6E6E6',
    white: '#f5f5f5',
    lightGrey: '#C7C7C7',
    shadowgrey: '#C2C2C2',
    dark: '#262626',
    grey: '#4A4A4A',
    default: '#3E79C4'
  },
  fonts: {
    family: {
      default: "'Open Sans', sans-serif",
      secundary: "'Montserrat', sans-serif"
    },
    sizes: {
      xsmall: '0.8rem',
      small: '1.2rem',
      medium: '1.6rem',
      large: '2rem',
      xlarge: '2.5rem',
      xxlarge: '2.5rem',
      huge: '3.5rem',
      xhuge: '5rem'
    },
    screens: {
      medium: '(max-width: 768px)'
    },
    spacings: {
      xsmall: '0.8rem',
      small: '1.2rem',
      medium: '1.6rem',
      large: '2rem',
      xlarge: '2.5rem',
      xxlarge: '2.5rem',
      huge: '3.5rem',
      xhuge: '5rem'
    },
    weight: {
      light: '200',
      default: '300',
      medium: '500',
      bold: '700'
    }
  }
} as const
