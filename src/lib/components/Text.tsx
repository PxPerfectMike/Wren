import { forwardRef } from 'react';
import { BaseLayoutProps, SpacingProps, TypographyScale } from '../core/types';
import { classNames, generateSpacingStyles } from '../core/utils';
import { resolveTypography } from '../core/scales';
import '../styles/foundation.css';

export interface TextProps extends BaseLayoutProps, SpacingProps {
  /**
   * Typography size scale
   * @default 'text-base'
   */
  size?: TypographyScale;

  /**
   * Font weight
   */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | number;

  /**
   * Text color
   */
  color?: string;

  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right' | 'justify';

  /**
   * Line height
   */
  lineHeight?: number | string;

  /**
   * Font family
   */
  fontFamily?: string;
}

const weightMap = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

/**
 * Text component for fluid typography
 *
 * Provides responsive text sizing that scales smoothly based on viewport/container.
 * No need to define different sizes for different breakpoints.
 *
 * @example
 * ```tsx
 * // Heading that scales fluidly
 * <Text as="h1" size="text-4xl" weight="bold">
 *   Welcome
 * </Text>
 *
 * // Body text with custom styling
 * <Text size="text-base" color="#333" lineHeight={1.6}>
 *   This text scales smoothly without breakpoints.
 * </Text>
 * ```
 */
export const Text = forwardRef<HTMLElement, TextProps>(
  ({
    children,
    className,
    style,
    as: Component = 'p',
    size = 'text-base',
    weight,
    color,
    align,
    lineHeight,
    fontFamily,
    // Spacing props
    padding, paddingX, paddingY, paddingTop, paddingBottom, paddingLeft, paddingRight,
    margin, marginX, marginY, marginTop, marginBottom, marginLeft, marginRight,
  }, ref) => {
    const spacingStyles = generateSpacingStyles({
      padding, paddingX, paddingY, paddingTop, paddingBottom, paddingLeft, paddingRight,
      margin, marginX, marginY, marginTop, marginBottom, marginLeft, marginRight,
    });

    const fontSize = resolveTypography(size);

    const fontWeight = weight !== undefined
      ? (typeof weight === 'string' ? weightMap[weight] : weight)
      : undefined;

    const combinedStyles = {
      ...spacingStyles,
      fontSize,
      fontWeight,
      color,
      textAlign: align,
      lineHeight,
      fontFamily,
      ...style,
    };

    return (
      <Component
        ref={ref}
        className={classNames('fl-text', className)}
        style={combinedStyles}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';
