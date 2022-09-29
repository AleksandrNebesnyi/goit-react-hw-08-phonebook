import {BreakPoints} from './globalStyleType'

export const theme = Object.freeze({
  breakpoints: {
    mobile:BreakPoints.mobile ,
    totablet: BreakPoints.totablet,
    tablet: BreakPoints.tablet,
    todesktop: BreakPoints.todesktop,
    desktop: BreakPoints.desktop,
  },

  colors: {
    mainColor: '#2196f3',
    secondaryColor: '#333232',
    accentColor: '#F7CC07',
    clearColor: '#fff',

    smallColor: '#4c527d',
    inactiveColor: '#808080',
    borderColor: '#d4d4d4',
    backgroundColor: '#f0f1f3',
    backgroundColorForm: '#E3DEE9',
    borderDisabledColor: '#999999',
    backgroundDisabledColor: '#cccccc',

    boxShadow: `0px 4px 4px rgb(0 0 0 / 15%)`,
  },
  transition: {
    timing: '250ms',
    timingFunction: `cubic-bezier(0.4, 0, 0.2, 1)`,
  },

  //   spacing: value => `${4 * value}px`,
});
