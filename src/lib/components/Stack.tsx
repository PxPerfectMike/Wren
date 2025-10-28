import { forwardRef } from 'react';
import { BaseLayoutProps, SpacingProps, FluidScale, SpacingScale, ResponsiveDirection, Alignment, JustifyContent } from '../core/types';
import { classNames, generateSpacingStyles } from '../core/utils';
import { resolveSpacing } from '../core/scales';
import '../styles/foundation.css';

export interface StackProps extends BaseLayoutProps, SpacingProps {
  /**
   * Direction of the stack (row, column, or responsive)
   * 'responsive' switches from column to row based on container width
   * @default 'column'
   */
  direction?: ResponsiveDirection;

  /**
   * Container width breakpoint for responsive direction (in pixels)
   * Only applies when direction="responsive"
   * @default 768
   */
  responsiveBreakpoint?: number;

  /**
   * Spacing between items (uses fluid or fixed scale)
   * @default 'fluid-4'
   */
  spacing?: FluidScale | SpacingScale;

  /**
   * Align items along cross axis
   */
  align?: Alignment;

  /**
   * Justify content along main axis
   */
  justify?: JustifyContent;

  /**
   * Allow items to wrap
   * @default false
   */
  wrap?: boolean;
}

/**
 * Stack component for auto-layout stacking
 *
 * Provides easy vertical/horizontal stacking with consistent spacing.
 * The 'responsive' direction automatically switches from column to row
 * based on container size (not viewport).
 *
 * @example
 * ```tsx
 * // Responsive layout that switches orientation
 * <Stack direction="responsive" spacing="fluid-4">
 *   <Box flex={1}>Sidebar</Box>
 *   <Box flex={3}>Content</Box>
 * </Stack>
 *
 * // Vertical stack with custom spacing
 * <Stack direction="column" spacing="fluid-2">
 *   <Card />
 *   <Card />
 *   <Card />
 * </Stack>
 * ```
 */
export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({
    children,
    className,
    style,
    as: Component = 'div',
    direction = 'column',
    responsiveBreakpoint = 768,
    spacing = 'fluid-4',
    align,
    justify,
    wrap = false,
    // Spacing props
    padding, paddingX, paddingY, paddingTop, paddingBottom, paddingLeft, paddingRight,
    margin, marginX, marginY, marginTop, marginBottom, marginLeft, marginRight,
  }, ref) => {
    const spacingStyles = generateSpacingStyles({
      padding, paddingX, paddingY, paddingTop, paddingBottom, paddingLeft, paddingRight,
      margin, marginX, marginY, marginTop, marginBottom, marginLeft, marginRight,
    });

    const resolvedSpacing = resolveSpacing(spacing);

    const alignItems = align === 'start' ? 'flex-start' :
                       align === 'end' ? 'flex-end' :
                       align;

    const justifyContent = justify === 'start' ? 'flex-start' :
                           justify === 'end' ? 'flex-end' :
                           justify?.replace('space-', 'space-') ?? undefined;

    const combinedStyles = {
      ...spacingStyles,
      '--stack-gap': resolvedSpacing,
      '--stack-responsive-breakpoint': `${responsiveBreakpoint}px`,
      alignItems,
      justifyContent,
      flexWrap: wrap ? 'wrap' : undefined,
      ...style,
    } as React.CSSProperties;

    return (
      <Component
        ref={ref}
        className={classNames('fl-stack', className)}
        style={combinedStyles}
        data-direction={direction}
      >
        {children}
      </Component>
    );
  }
);

Stack.displayName = 'Stack';
