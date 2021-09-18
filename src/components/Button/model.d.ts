import React from 'react';

export interface IButtonProps extends Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  ariaLabel?: string;
  link?: string;
  children?: React.ReactNode;
  btnColorVariant?: BtnColours.TPaletteColour;
  classes?: string;
  handler?: () => void;
  [key: string]: any;
  className?: string;
}
