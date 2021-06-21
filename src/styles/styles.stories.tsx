import { Meta, Story } from '@storybook/react';
import colors, { ColorName, ColorShade } from './colors';

export default {
  title: 'Styles',
} as Meta;

export const Colors: Story = () => {
  return (
    <div style={{ display: 'flex' }}>
      {Object.keys(colors).map((colorsKey) => {
        const colorName = colorsKey as ColorName;

        return (
          <div
            key={colorName}
            style={{
              width: '14.2%',
            }}
          >
            <span>{colorName}</span>
            {Object.keys(colors[colorName]).map((colorKey) => {
              const colorShade = colorKey as ColorShade;

              return (
                <div
                  key={colorShade}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: 70,
                    backgroundColor: colors[colorName][colorShade],
                  }}
                >
                  <div
                    style={{
                      color: '#fff',
                    }}
                  >
                    {colorShade}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
