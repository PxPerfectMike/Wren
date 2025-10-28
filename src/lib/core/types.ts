import { CSSProperties, ReactNode } from 'react';

/**
 * Fluid scale values using CSS clamp()
 * Format: 'fluid-{1-10}' or custom clamp expression
 */
export type FluidScale =
  | 'fluid-1' | 'fluid-2' | 'fluid-3' | 'fluid-4' | 'fluid-5'
  | 'fluid-6' | 'fluid-7' | 'fluid-8' | 'fluid-9' | 'fluid-10'
  | string;

/**
 * Fixed spacing scale values
 */
export type SpacingScale =
  | 'scale-1' | 'scale-2' | 'scale-3' | 'scale-4' | 'scale-5'
  | 'scale-6' | 'scale-7' | 'scale-8' | 'scale-9' | 'scale-10'
  | number
  | string;

/**
 * Typography scale for fluid text sizing
 */
export type TypographyScale =
  | 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl'
  | 'text-2xl' | 'text-3xl' | 'text-4xl' | 'text-5xl'
  | string;

/**
 * Responsive direction that adapts based on container size
 */
export type ResponsiveDirection = 'row' | 'column' | 'responsive';

/**
 * Container query size context
 */
export type ContainerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Flex alignment options
 */
export type Alignment = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
export type JustifyContent = 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';

/**
 * Common props shared across layout components
 */
export interface BaseLayoutProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Spacing props for Box component
 */
export interface SpacingProps {
  padding?: SpacingScale | FluidScale;
  paddingX?: SpacingScale | FluidScale;
  paddingY?: SpacingScale | FluidScale;
  paddingTop?: SpacingScale | FluidScale;
  paddingBottom?: SpacingScale | FluidScale;
  paddingLeft?: SpacingScale | FluidScale;
  paddingRight?: SpacingScale | FluidScale;

  margin?: SpacingScale | FluidScale;
  marginX?: SpacingScale | FluidScale;
  marginY?: SpacingScale | FluidScale;
  marginTop?: SpacingScale | FluidScale;
  marginBottom?: SpacingScale | FluidScale;
  marginLeft?: SpacingScale | FluidScale;
  marginRight?: SpacingScale | FluidScale;
}

/**
 * Flex layout props
 */
export interface FlexProps {
  flex?: number | string;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string | number;
  alignSelf?: Alignment;
}

/**
 * Layout configuration
 */
export interface LayoutProps extends FlexProps {
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
}
