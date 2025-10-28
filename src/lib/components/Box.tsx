import { forwardRef } from 'react';
import { BaseLayoutProps, SpacingProps, LayoutProps } from '../core/types';
import { classNames, generateSpacingStyles, generateLayoutStyles } from '../core/utils';
import '../styles/foundation.css';

export interface BoxProps extends BaseLayoutProps, SpacingProps, LayoutProps {
  /**
   * Background color
   */
  background?: string;

  /**
   * Border radius (can use scale values)
   */
  borderRadius?: string;

  /**
   * Border
   */
  border?: string;
}

/**
 * Box is the fundamental layout primitive
 *
 * It provides spacing (padding/margin), flex layout, and sizing props.
 * Use it as the building block for all layouts.
 *
 * @example
 * ```tsx
 * // Sidebar with fluid padding and 1/4 flex ratio
 * <Box flex={1} padding="fluid-4" background="#f5f5f5">
 *   Sidebar
 * </Box>
 *
 * // Card with mixed spacing
 * <Box
 *   padding="fluid-5"
 *   marginBottom="scale-4"
 *   borderRadius="8px"
 *   background="white"
 * >
 *   Card content
 * </Box>
 * ```
 */
export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({
    children,
    className,
    style,
    as: Component = 'div',
    background,
    borderRadius,
    border,
    // Extract spacing and layout props
    padding, paddingX, paddingY, paddingTop, paddingBottom, paddingLeft, paddingRight,
    margin, marginX, marginY, marginTop, marginBottom, marginLeft, marginRight,
    flex, flexGrow, flexShrink, flexBasis, alignSelf,
    width, height, minWidth, maxWidth, minHeight, maxHeight,
    position, top, right, bottom, left, zIndex,
  }, ref) => {
    const spacingStyles = generateSpacingStyles({
      padding, paddingX, paddingY, paddingTop, paddingBottom, paddingLeft, paddingRight,
      margin, marginX, marginY, marginTop, marginBottom, marginLeft, marginRight,
    });

    const layoutStyles = generateLayoutStyles({
      flex, flexGrow, flexShrink, flexBasis, alignSelf,
      width, height, minWidth, maxWidth, minHeight, maxHeight,
      position, top, right, bottom, left, zIndex,
    });

    const combinedStyles = {
      ...spacingStyles,
      ...layoutStyles,
      background,
      borderRadius,
      border,
      ...style,
    };

    return (
      <Component
        ref={ref}
        className={classNames('fl-box', className)}
        style={combinedStyles}
      >
        {children}
      </Component>
    );
  }
);

Box.displayName = 'Box';
