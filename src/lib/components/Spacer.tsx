import { forwardRef } from 'react';
import { BaseLayoutProps } from '../core/types';

export interface SpacerProps extends Omit<BaseLayoutProps, 'as'> {
  /**
   * Size of the spacer
   * Can be a CSS value (e.g., '20px', '2rem') or 'auto' for flex-grow behavior
   * @default 'auto'
   */
  size?: string | number;
}

/**
 * Spacer component for creating flexible or fixed space between elements
 *
 * In flex layouts, a Spacer with size="auto" (default) will grow to fill available space,
 * pushing adjacent elements apart. With a specific size, it creates fixed spacing.
 *
 * @example
 * ```tsx
 * // Push items to opposite ends
 * <Stack direction="row">
 *   <Button>Left</Button>
 *   <Spacer />
 *   <Button>Right</Button>
 * </Stack>
 *
 * // Fixed spacing
 * <Stack direction="column">
 *   <Header />
 *   <Spacer size="fluid-6" />
 *   <Content />
 * </Stack>
 * ```
 */
export const Spacer = forwardRef<HTMLDivElement, SpacerProps>(
  ({ size = 'auto', className, style, ...props }, ref) => {
    const spacerStyle: React.CSSProperties = {
      flexShrink: 0,
      ...(size === 'auto'
        ? { flexGrow: 1, flexBasis: 0 }
        : {
            width: typeof size === 'number' ? `${size}px` : `var(--${size}, ${size})`,
            height: typeof size === 'number' ? `${size}px` : `var(--${size}, ${size})`,
          }
      ),
      ...style,
    };

    return (
      <div
        ref={ref}
        className={className}
        style={spacerStyle}
        aria-hidden="true"
        {...props}
      />
    );
  }
);

Spacer.displayName = 'Spacer';
