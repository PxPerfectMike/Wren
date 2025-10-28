import { forwardRef, ReactNode, useId, useEffect, useRef } from 'react';
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
    const id = useId();
    const styleRef = useRef<HTMLStyleElement | null>(null);
    const safeId = id.replace(/:/g, '-');

    useEffect(() => {
      // Create dynamic style tag for this specific Hidden instance
      if (!below && !above) return;

      const styleEl = document.createElement('style');
      let css = '';

      if (below && !above) {
        // Hide when container is narrower than 'below' value
        css = `@container (max-width: ${below - 1}px) { .wren-hidden-${safeId} { display: none !important; } }`;
      } else if (above && !below) {
        // Hide when container is wider than 'above' value
        css = `@container (min-width: ${above + 1}px) { .wren-hidden-${safeId} { display: none !important; } }`;
      } else if (below && above) {
        // Hide when outside the range [below, above]
        css = `
          @container (max-width: ${below - 1}px) { .wren-hidden-${safeId} { display: none !important; } }
          @container (min-width: ${above + 1}px) { .wren-hidden-${safeId} { display: none !important; } }
        `;
      }

      styleEl.textContent = css;
      document.head.appendChild(styleEl);
      styleRef.current = styleEl;

      return () => {
        if (styleRef.current) {
          document.head.removeChild(styleRef.current);
        }
      };
    }, [below, above, safeId]);

    const classes = `wren-hidden-${safeId}${className ? ` ${className}` : ''}`;

    return (
      <div ref={ref} className={classes} style={style} aria-hidden="true">
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
