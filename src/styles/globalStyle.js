export const theme = Object.freeze({
  breakpoints: {
    mobile: '480px',
    totablet: '767px',
    tablet: '768px',
    todesktop: '1199px',
    desktop: '1200px',
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
