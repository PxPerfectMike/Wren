import { CSSProperties } from 'react';
import { SpacingProps, FlexProps, LayoutProps } from './types';
import { resolveSpacing } from './scales';

/**
 * Generates style object from spacing props
 */
export function generateSpacingStyles(props: SpacingProps): CSSProperties {
  const styles: CSSProperties = {};

  // Padding
  if (props.padding) {
    styles.padding = resolveSpacing(props.padding);
  }
  if (props.paddingX) {
    const value = resolveSpacing(props.paddingX);
    styles.paddingLeft = value;
    styles.paddingRight = value;
  }
  if (props.paddingY) {
    const value = resolveSpacing(props.paddingY);
    styles.paddingTop = value;
    styles.paddingBottom = value;
  }
  if (props.paddingTop) styles.paddingTop = resolveSpacing(props.paddingTop);
  if (props.paddingBottom) styles.paddingBottom = resolveSpacing(props.paddingBottom);
  if (props.paddingLeft) styles.paddingLeft = resolveSpacing(props.paddingLeft);
  if (props.paddingRight) styles.paddingRight = resolveSpacing(props.paddingRight);

  // Margin
  if (props.margin) {
    styles.margin = resolveSpacing(props.margin);
  }
  if (props.marginX) {
    const value = resolveSpacing(props.marginX);
    styles.marginLeft = value;
    styles.marginRight = value;
  }
  if (props.marginY) {
    const value = resolveSpacing(props.marginY);
    styles.marginTop = value;
    styles.marginBottom = value;
  }
  if (props.marginTop) styles.marginTop = resolveSpacing(props.marginTop);
  if (props.marginBottom) styles.marginBottom = resolveSpacing(props.marginBottom);
  if (props.marginLeft) styles.marginLeft = resolveSpacing(props.marginLeft);
  if (props.marginRight) styles.marginRight = resolveSpacing(props.marginRight);

  return styles;
}

/**
 * Generates style object from flex props
 */
export function generateFlexStyles(props: FlexProps): CSSProperties {
  const styles: CSSProperties = {};

  if (props.flex !== undefined) {
    styles.flex = props.flex;
  }
  if (props.flexGrow !== undefined) {
    styles.flexGrow = props.flexGrow;
  }
  if (props.flexShrink !== undefined) {
    styles.flexShrink = props.flexShrink;
  }
  if (props.flexBasis !== undefined) {
    styles.flexBasis = typeof props.flexBasis === 'number'
      ? `${props.flexBasis}px`
      : props.flexBasis;
  }
  if (props.alignSelf) {
    styles.alignSelf = props.alignSelf === 'start' ? 'flex-start' :
                       props.alignSelf === 'end' ? 'flex-end' :
                       props.alignSelf;
  }

  return styles;
}

/**
 * Generates style object from layout props
 */
export function generateLayoutStyles(props: LayoutProps): CSSProperties {
  const styles: CSSProperties = {};

  // Size properties
  if (props.width !== undefined) {
    styles.width = typeof props.width === 'number' ? `${props.width}px` : props.width;
  }
  if (props.height !== undefined) {
    styles.height = typeof props.height === 'number' ? `${props.height}px` : props.height;
  }
  if (props.minWidth !== undefined) {
    styles.minWidth = typeof props.minWidth === 'number' ? `${props.minWidth}px` : props.minWidth;
  }
  if (props.maxWidth !== undefined) {
    styles.maxWidth = typeof props.maxWidth === 'number' ? `${props.maxWidth}px` : props.maxWidth;
  }
  if (props.minHeight !== undefined) {
    styles.minHeight = typeof props.minHeight === 'number' ? `${props.minHeight}px` : props.minHeight;
  }
  if (props.maxHeight !== undefined) {
    styles.maxHeight = typeof props.maxHeight === 'number' ? `${props.maxHeight}px` : props.maxHeight;
  }

  // Include flex props
  Object.assign(styles, generateFlexStyles(props));

  return styles;
}

/**
 * Merges multiple class names, filtering out falsy values
 */
export function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Normalizes CSS value (adds px unit to numbers)
 */
export function normalizeCSSValue(value: string | number | undefined): string | undefined {
  if (value === undefined) return undefined;
  if (typeof value === 'number') return `${value}px`;
  return value;
}
