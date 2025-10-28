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
   * Whether to remove from accessibility tree (use with caution)
   * When true, uses display: none (completely removes from DOM/a11y tree)
   * When false, uses visibility: hidden (preserves layout space, hidden from a11y)
   * @default true
   */
  removeFromDOM?: boolean;

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
 *
 * **Accessibility Considerations:**
 * - Use `removeFromDOM={true}` (default) for decorative/duplicate content
 * - Use `removeFromDOM={false}` when content should remain in layout but hidden
 * - For interactive content, consider if it should be accessible when "hidden"
 *
 * **Hiding Methods:**
 * - `removeFromDOM={true}`: Uses display: none (removes from layout and a11y tree)
 * - `removeFromDOM={false}`: Uses visibility: hidden (preserves layout space)
 *
 * @example
 * ```tsx
 * // Hide decorative content on small containers
 * <Hidden below={768}>
 *   <div>Desktop-only decoration</div>
 * </Hidden>
 *
 * // Hide but preserve layout space
 * <Hidden below={768} removeFromDOM={false}>
 *   <div>Hidden but takes up space</div>
 * </Hidden>
 *
 * // Hide in a specific range
 * <Hidden below={480} above={1024}>
 *   <div>Only visible between 480px and 1024px</div>
 * </Hidden>
 * ```
 */
export const Hidden = forwardRef<HTMLDivElement, HiddenProps>(
  ({ children, below, above, removeFromDOM = true, className, style }, ref) => {
    const customStyle: React.CSSProperties = {
      ...style,
      ...(below && { '--wren-hide-below': `${below}px` } as any),
      ...(above && { '--wren-hide-above': `${above}px` } as any),
    };

    const hideMethod = removeFromDOM ? 'display' : 'visibility';
    const classes = `wren-hidden wren-hidden-${hideMethod}${below ? ' wren-hide-below' : ''}${above ? ' wren-hide-above' : ''}${className ? ` ${className}` : ''}`;

    return (
      <div ref={ref} className={classes} style={customStyle} aria-hidden={removeFromDOM ? 'true' : undefined}>
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
    // Show below={X} = show when < X = hide when >= X
    // Show above={X} = show when > X = hide when <= X
    //
    // Boundary adjustment needed:
    // - Show below={600} = hide when >= 600 = Hidden above={599}
    // - Show above={600} = hide when <= 600 = Hidden below={601}
    return (
      <Hidden
        ref={ref}
        below={above !== undefined ? above + 1 : undefined}  // Show above={X} → Hidden below={X+1}
        above={below !== undefined ? below - 1 : undefined}  // Show below={X} → Hidden above={X-1}
        className={className}
        style={style}
      >
        {children}
      </Hidden>
    );
  }
);

Show.displayName = 'Show';
