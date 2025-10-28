import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { createFluidScale, ScaleConfig } from '../core/scales';

export interface CustomScales {
  [key: string]: ScaleConfig;
}

export interface WrenConfig {
  /**
   * Custom scale definitions that override or extend the default scales
   * @example
   * {
   *   'fluid-4.5': { min: 1.75, max: 2.25 },
   *   'brand-hero': { min: 3, max: 8 }
   * }
   */
  scales?: CustomScales;

  /**
   * Global scale configuration
   */
  scaleConfig?: {
    /** Minimum viewport size for fluid scaling (default: 320px) */
    minViewport?: number;
    /** Maximum viewport size for fluid scaling (default: 1920px) */
    maxViewport?: number;
    /** Unit to use for scaling (default: 'cqi' with 'vw' fallback) */
    unit?: 'cqi' | 'vw';
  };
}

interface WrenContextValue {
  config: WrenConfig;
}

const WrenContext = createContext<WrenContextValue | undefined>(undefined);

export interface WrenProviderProps {
  children: React.ReactNode;
  config?: WrenConfig;
}

/**
 * WrenProvider enables customization of Wren's scale system
 *
 * Wrap your app with WrenProvider to:
 * - Override default scales
 * - Add custom scales for your brand
 * - Configure viewport ranges
 * - Enable runtime theming
 *
 * @example
 * ```tsx
 * <WrenProvider
 *   config={{
 *     scales: {
 *       'fluid-4.5': { min: 1.75, max: 2.25 },
 *       'brand-hero': { min: 3, max: 8 },
 *       'brand-compact': { min: 0.5, max: 0.625 }
 *     },
 *     scaleConfig: {
 *       minViewport: 375,
 *       maxViewport: 1440
 *     }
 *   }}
 * >
 *   <App />
 * </WrenProvider>
 * ```
 */
export function WrenProvider({ children, config = {} }: WrenProviderProps) {
  const contextValue = useMemo<WrenContextValue>(
    () => ({ config }),
    [config]
  );

  const { scales, scaleConfig } = config;

  useEffect(() => {
    if (!scales) return;

    const root = document.documentElement;
    const unit = scaleConfig?.unit || 'cqi';
    const minSize = scaleConfig?.minViewport || 320;
    const maxSize = scaleConfig?.maxViewport || 1920;

    // Apply custom scales as CSS custom properties
    Object.entries(scales).forEach(([name, scaleDefinition]) => {
      const value = createFluidScale(
        { ...scaleDefinition, minSize, maxSize },
        unit
      );
      root.style.setProperty(`--${name}`, value);
    });

    // Cleanup function to remove custom properties
    return () => {
      Object.keys(scales).forEach((name) => {
        root.style.removeProperty(`--${name}`);
      });
    };
  }, [scales, scaleConfig]);

  return (
    <WrenContext.Provider value={contextValue}>
      {children}
    </WrenContext.Provider>
  );
}

/**
 * Hook to access Wren configuration
 * Useful for components that need to read custom scale definitions
 */
export function useWren(): WrenContextValue {
  const context = useContext(WrenContext);
  if (!context) {
    // Return default config if not wrapped in WrenProvider
    return { config: {} };
  }
  return context;
}
