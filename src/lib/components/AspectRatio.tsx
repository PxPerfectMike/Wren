import { forwardRef } from 'react';
import { BaseLayoutProps } from '../core/types';

export interface AspectRatioProps extends BaseLayoutProps {
  /**
   * Aspect ratio of the container
   * Can be a number (width/height) or a string like "16/9" or "4:3"
   * @default "16/9"
   */
  ratio?: number | string;

  /**
   * Maximum width of the container
   */
  maxWidth?: string | number;
}

/**
 * AspectRatio component for maintaining consistent aspect ratios
 *
 * Useful for responsive images, videos, or any content that needs
 * to maintain a specific width-to-height ratio.
 *
 * @example
 * ```tsx
 * // 16:9 video container
 * <AspectRatio ratio="16/9">
 *   <iframe src="video-url" />
 * </AspectRatio>
 *
 * // Square image container
 * <AspectRatio ratio={1}>
 *   <img src="image-url" alt="Square image" />
 * </AspectRatio>
 *
 * // 4:3 with max width
 * <AspectRatio ratio="4/3" maxWidth="600px">
 *   <img src="image-url" alt="Constrained image" />
 * </AspectRatio>
 * ```
 */
export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ children, ratio = '16/9', maxWidth, className, style, as: Component = 'div', ...props }, ref) => {
    // Parse ratio string or number
    const parseRatio = (r: number | string): number => {
      if (typeof r === 'number') return r;

      // Handle "16/9" or "16:9" formats
      const parts = r.split(/[/:]/);
      if (parts.length === 2) {
        const width = parseFloat(parts[0]);
        const height = parseFloat(parts[1]);
        return width / height;
      }

      return parseFloat(r);
    };

    const ratioValue = parseRatio(ratio);
    const paddingBottom = `${(1 / ratioValue) * 100}%`;

    const containerStyle: React.CSSProperties = {
      position: 'relative',
      width: '100%',
      maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
      ...style,
    };

    const innerStyle: React.CSSProperties = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    };

    const paddingStyle: React.CSSProperties = {
      paddingBottom,
    };

    return (
      <Component ref={ref} className={className} style={containerStyle} {...props}>
        <div style={paddingStyle} />
        <div style={innerStyle}>
          {children}
        </div>
      </Component>
    );
  }
);

AspectRatio.displayName = 'AspectRatio';
