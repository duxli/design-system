export type GreyShade =
  | '025'
  | '050'
  | '075'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '925'
  | '950'
  | '975';

/**
 * Generated with 20% difference for each 100 value
 * Generated with 5% difference for each 25 value
 * @see https://noeldelgado.github.io/shadowlord/#777777
 */
const grey: Record<GreyShade, string> = {
  '025': '#f8f8f8',
  '050': '#f1f1f1',
  '075': '#ebebeb',
  '100': '#e4e4e4',
  '200': '#c9c9c9',
  '300': '#adadad',
  '400': '#929292',
  '500': '#777777',
  '600': '#5f5f5f',
  '700': '#474747',
  '800': '#303030',
  '900': '#181818',
  '925': '#121212',
  '950': '#0c0c0c',
  '975': '#060606',
};

export default grey;
