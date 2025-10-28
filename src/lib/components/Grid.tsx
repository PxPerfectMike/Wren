import { forwardRef } from 'react';
import { BaseLayoutProps, SpacingProps, FluidScale, SpacingScale } from '../core/types';
import { classNames, generateSpacingStyles } from '../core/utils';
import { resolveSpacing } from '../core/scales';
import '../styles/foundation.css';

export interface GridProps extends BaseLayoutProps, SpacingProps {
  /**
   * Number of columns or auto-fit/auto-fill behavior
   * - 'auto-fit': Grid items wrap and expand to fill space
   * - 'auto-fill': Grid items wrap but maintain minimum size
   * - number: Fixed number of columns (responsive fallbacks apply)
   * @default 'auto-fit'
   */
  columns?: 'auto-fit' | 'auto-fill' | 1 | 2 | 3 | 4 | number | string;

  /**
   * Minimum size for auto-fit/auto-fill columns
   * @default '250px'
   */
  minSize?: string;

  /**
   * Gap between grid items
   * @default 'fluid-4'
   */
  gap?: FluidScale | SpacingScale;

  /**
   * Row gap (overrides gap for rows)
   */
  rowGap?: FluidScale | SpacingScale;

  /**
   * Column gap (overrides gap for columns)
   */
  columnGap?: FluidScale | SpacingScale;
}

/**
 * Grid component for responsive grid layouts
 *
 * Provides powerful grid layouts without breakpoints using auto-fit/auto-fill.
 * Items automatically wrap based on available space and minimum size constraints.
 *
 * @example
 * ```tsx
 * // Auto-fitting card grid
 * <Grid columns="auto-fit" minSize="300px" gap="fluid-4">
 *   <Card />
 *   <Card />
 *   <Card />
 * </Grid>
 *
 * // Fixed 3-column grid (with responsive fallback)
 * <Grid columns={3} gap="fluid-3">
 *   <Box>Item 1</Box>
 *   <Box>Item 2</Box>
 *   <Box>Item 3</Box>
 * </Grid>
 * ```
 */
export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({
    children,
    className,
    style,
    as: Component = 'div',
    columns = 'auto-fit',
    minSize = '250px',
    gap = 'fluid-4',
    rowGap,
    columnGap,
    // Spacing props
    padding, paddingX, paddingY, paddingTop, paddingBottom, paddingLeft, paddingRight,
    margin, marginX, marginY, marginTop, marginBottom, marginLeft, marginRight,
  }, ref) => {
    const spacingStyles = generateSpacingStyles({
      padding, paddingX, paddingY, paddingTop, paddingBottom, paddingLeft, paddingRight,
      margin, marginX, marginY, marginTop, marginBottom, marginLeft, marginRight,
    });

    const resolvedGap = resolveSpacing(gap);
    const resolvedRowGap = rowGap ? resolveSpacing(rowGap) : undefined;
    const resolvedColumnGap = columnGap ? resolveSpacing(columnGap) : undefined;

    // Determine data-columns attribute for CSS
    let dataColumns: string;
    if (columns === 'auto-fit' || columns === 'auto-fill') {
      dataColumns = columns;
    } else if (typeof columns === 'number') {
      dataColumns = columns.toString();
    } else {
      dataColumns = 'custom';
    }

    const combinedStyles = {
      ...spacingStyles,
      '--grid-gap': resolvedGap,
      '--grid-min-size': minSize,
      rowGap: resolvedRowGap,
      columnGap: resolvedColumnGap,
      // If custom columns string provided, use it directly
      ...(dataColumns === 'custom' && { gridTemplateColumns: columns }),
      ...style,
    } as React.CSSProperties;

    return (
      <Component
        ref={ref}
        className={classNames('fl-grid', className)}
        style={combinedStyles}
        data-columns={dataColumns}
      >
        {children}
      </Component>
    );
  }
);

Grid.displayName = 'Grid';
