import { forwardRef } from 'react';
import { BaseLayoutProps } from '../core/types';
import { classNames } from '../core/utils';
import '../styles/foundation.css';

export interface ContainerProps extends BaseLayoutProps {
  /**
   * Maximum width constraint for the container
   */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | string;

  /**
   * Center the container horizontally
   * @default false
   */
  center?: boolean;
}

const maxWidthMap = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  full: '100%',
};

/**
 * Container component establishes a container query context
 *
 * This is the foundation for container-based responsive design.
 * All child components can respond to this container's size rather
 * than the viewport size.
 *
 * @example
 * ```tsx
 * <Container maxWidth="lg" center>
 *   <Stack direction="responsive">
 *     <Box flex={1}>Sidebar</Box>
 *     <Box flex={3}>Content</Box>
 *   </Stack>
 * </Container>
 * ```
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({
    children,
    className,
    style,
    as: Component = 'div',
    maxWidth,
    center = false,
  }, ref) => {
    const resolvedMaxWidth = maxWidth && maxWidth in maxWidthMap
      ? maxWidthMap[maxWidth as keyof typeof maxWidthMap]
      : maxWidth;

    const containerStyle = {
      ...style,
      maxWidth: resolvedMaxWidth,
      marginLeft: center ? 'auto' : undefined,
      marginRight: center ? 'auto' : undefined,
    };

    return (
      <Component
        ref={ref}
        className={classNames('fl-container', className)}
        style={containerStyle}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';
