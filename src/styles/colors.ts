export type ColorShade = '100' | '90' | '80' | '70' | '60' | '50' | '40' | '30';
export type Color = Record<ColorShade, string>;
export type ColorName =
  | 'general'
  | 'primary'
  | 'secondary'
  | 'red'
  | 'green'
  | 'yellow'
  | 'white';

const colors: Record<ColorName, Color> = {
  general: {
    100: '#131523',
    90: '#333752',
    80: '#5A607F',
    70: '#7E84A3',
    60: '#A1A7C4',
    50: '#D7DBEC',
    40: '#E6E9F4',
    30: '#F5F6FA',
  },
  primary: {
    100: '#1E5EFF',
    90: '#336DFF',
    80: '#4F81FF',
    70: '#608DFF',
    60: '#89ABFF',
    50: '#B6CBFF',
    40: '#D9E4FF',
    30: '#ECF2FF',
  },
  secondary: {
    100: '#6E0BD4',
    90: '#8125DF',
    80: '#9645E9',
    70: '#A75EF1',
    60: '#B97FF3',
    50: '#D8B1FF',
    40: '#E9D3FF',
    30: '#F4E9FE',
  },
  red: {
    100: '#F0142F',
    90: '#F12B43',
    80: '#F34359',
    70: '#F45A6D',
    60: '#F8919D',
    50: '#FAB3BC',
    40: '#FCD5D9',
    30: '#FDE7EA',
  },
  green: {
    100: '#06A561',
    90: '#1FD286',
    80: '#25E191',
    70: '#48E9A5',
    60: '#74EFB9',
    50: '#95F6CC',
    40: '#C4F8E2',
    30: '#DAF9EC',
  },
  yellow: {
    100: '#F99600',
    90: '#FFC700',
    80: '#FFD613',
    70: '#FFE45F',
    60: '#FFE582',
    50: '#FFECA3',
    40: '#FFF4C9',
    30: '#FFF9E1',
  },
  white: {
    100: 'rgba(255,255,255,1)',
    90: 'rgba(255,255,255,.9)',
    80: 'rgba(255,255,255,.8)',
    70: 'rgba(255,255,255,.7)',
    60: 'rgba(255,255,255,.6)',
    50: 'rgba(255,255,255,.5)',
    40: 'rgba(255,255,255,.4)',
    30: 'rgba(255,255,255,.3)',
  },
};

export default colors;
