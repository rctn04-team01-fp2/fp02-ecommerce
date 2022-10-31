/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    minHeight: {
      1: '30%',
    },
    extend: {},
    screens: {
      xs: '375px', //mobile small
      sm: '425px', //mobile large
      md: '768px', //tablet
      lg: '992px', //notebook
      xl: '1200px', //pc
    },
    colors: {
      primary1: '#A695F9',
      primary2: '#AE9EFA',
      primary3: '#B6A8FA',
      primary4: '#BEB2FB',
      primary5: '#C6BBFB',

      backgroundGreyish: '#FAFAFA',
      backgroundPurple: '#FBFAFF',
      backgroundWhite: '#FFFFFF',

      neutral1: '#FFFFFF',
      neutral2: '#EAEAEA',
      neutral3: '#CDCDCD',
      neutral4: '#9B9A9A',
      neutral5: '#666666',
      neutral6: '#3A3A3A',
      neutral7: '#000000',

      backgroundFillDisabled: '#F8F7F7',
      backgroundFillError: '#FFDFDF',
      backgroundFillInfo: '#E1EBFF',
      backgroundFillSuccess: '#E4FCE4',
      backgroundFillWarning: '#FFF8E0',

      baseDisabled: '#989797',
      baseError: '#E20808',
      baseInfo: '#4785FE',
      baseSuccess: '#18B115',
      baseWarning: '#FFDA55',

      baseBlack: '#000000',
      baseGrey: '#6A6A6A',
      baseLightGrey: '#CECECE',
      baseMain: '#423D66',
      baseWhite: '#FFFFFF',

      dividerBlack: '#1A1A1A',
      overlayDark: '#B0AFAF80',
      overlayLight: '#FFFFFF80',

      buttonBgDefault: '#A695F9',
      buttonBgDisabled: '#CEC5FC',

      lilac: '#DAD9F9',
      purple: '#6C63FF',
      shadowPurple: '#6c63ff40',
    },
    spacing: {
      none: '0',
      2: '2px',
      4: '4px',
      8: '8px',
      16: '16px',
      32: '32px',
      64: '64px',
    },
    fontFamily: {
      sans: ['DM Sans', 'Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
