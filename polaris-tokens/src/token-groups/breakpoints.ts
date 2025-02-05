import type {TokenGroup} from '../types';

export const breakpoints = {
  'breakpoints-xs': {
    value: '0px',
    description:
      'Commonly used for sizing containers (e.g. max-width). See below for media query usage.',
  },
  'breakpoints-sm': {
    value: '490px',
    description:
      'Commonly used for sizing containers (e.g. max-width). See below for media query usage.',
  },
  'breakpoints-md': {
    value: '768px',
    description:
      'Commonly used for sizing containers (e.g. max-width). See below for media query usage.',
  },
  'breakpoints-lg': {
    value: '1040px',
    description:
      'Commonly used for sizing containers (e.g. max-width). See below for media query usage.',
  },
  'breakpoints-xl': {
    value: '1440px',
    description:
      'Commonly used for sizing containers (e.g. max-width). See below for media query usage.',
  },
};

export type BreakpointsTokenGroup = TokenGroup<typeof breakpoints>;
export type BreakpointsTokenName = keyof BreakpointsTokenGroup;

export const breakpointsAlias = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export type BreakpointsAlias = typeof breakpointsAlias[number];
