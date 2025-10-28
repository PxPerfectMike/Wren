import { forwardRef, ReactNode } from 'react';
import '../styles/visibility.css';

export interface HiddenProps {
  /**
   * Hide content when container is smaller than this width (in pixels)
   * @example above={768} // Hide when container is below 768px
   */
  below?: number;

  /**
   * Hide content when container is larger than this width (in pixels)
   * @example below={768} // Hide when container is above 768px
   */
  above?: number;

  /**
   * Children to conditionally hide
   */
  children: ReactNode;

  /**
   * Additional class name
   */
  className?: string;

  /**
   * Additional styles
   */
  style?: React.CSSProperties;
}

/**
 * Hidden component for responsive visibility control
 *
 * Uses container queries to show/hide content based on container size.
 * Content is hidden using CSS (display: none), so it won't take up space
 * but will still be in the DOM.
 *
 * @example
 * ```tsx
 * // Hide on small containers
 * <Hidden below={768}>
 *   <div>Only visible on large containers</div>
 * </Hidden>
 *
 * // Hide on large containers
 * <Hidden above={768}>
 *   <div>Only visible on small containers</div>
 * </Hidden>
 *
 * // Hide in a specific range
 * <Hidden below={480} above={1024}>
 *   <div>Only visible between 480px and 1024px</div>
 * </Hidden>
 * ```
 */
export const Hidden = forwardRef<HTMLDivElement, HiddenProps>(
  ({ children, below, above, className, style }, ref) => {
    const customStyle: React.CSSProperties = {
      ...style,
      ...(below && { '--hidden-below': `${below}px` }),
      ...(above && { '--hidden-above': `${above}px` }),
    } as React.CSSProperties;

    let classNames = 'wren-hidden';
    if (below) classNames += ' wren-hidden-below';
    if (above) classNames += ' wren-hidden-above';
    if (className) classNames += ` ${className}`;

    return (
      <div ref={ref} className={classNames} style={customStyle}>
        {children}
      </div>
    );
  }
);

Hidden.displayName = 'Hidden';

export interface ShowProps extends HiddenProps {}

/**
 * Show component for responsive visibility control
 *
 * Opposite of Hidden - shows content only in specified size ranges.
 *
 * @example
 * ```tsx
 * // Show only on large containers
 * <Show above={768}>
 *   <div>Desktop navigation</div>
 * </Show>
 *
 * // Show only on small containers
 * <Show below={768}>
 *   <div>Mobile menu button</div>
 * </Show>
 * ```
 */
export const Show = forwardRef<HTMLDivElement, ShowProps>(
  ({ children, below, above, className, style }, ref) => {
    // Show is the inverse of Hidden
    // Show below={X} = show only below X = hide above X
    // Show above={X} = show only above X = hide below X
    return (
      <Hidden
        ref={ref}
        below={above}  // Show above={X} → Hidden below={X}
        above={below}  // Show below={X} → Hidden above={X}
        className={className}
        style={style}
      >
        {children}
      </Hidden>
    );
  }
);

Show.displayName = 'Show';
