/**
 * Fluid Scale System
 *
 * Generates fluid spacing and typography scales using CSS clamp()
 * Values scale smoothly between min and max viewport/container sizes
 *
 * Supports both viewport-based (vw) and container-based (cqi) scaling
 */

export interface ScaleConfig {
  min: number;        // Minimum size in rem
  max: number;        // Maximum size in rem
  minSize?: number;   // Container/viewport size where min applies (default: 320px)
  maxSize?: number;   // Container/viewport size where max applies (default: 1920px)
}

export type ScaleUnit = 'vw' | 'cqi';

/**
 * Generates a CSS clamp() expression for fluid scaling
 * Formula: clamp(MIN, MIN + (MAX - MIN) * ((100unit - MINsize) / (MAXsize - MINsize)), MAX)
 *
 * @param config - Scale configuration
 * @param unit - 'vw' for viewport-based or 'cqi' for container-based scaling
 */
export function createFluidScale(config: ScaleConfig, unit: ScaleUnit = 'vw'): string {
  const {
    min,
    max,
    minSize = 320,  // 20rem
    maxSize = 1920, // 120rem
  } = config;

  // Convert sizes to rem (assuming 16px base)
  const minSizeRem = minSize / 16;
  const maxSizeRem = maxSize / 16;

  // Calculate the fluid middle value
  const slope = (max - min) / (maxSizeRem - minSizeRem);
  const intercept = min - slope * minSizeRem;

  // Create the clamp expression with appropriate unit
  // clamp(min, intercept + slope * 100unit, max)
  const fluidValue = `${intercept.toFixed(4)}rem + ${(slope * 100).toFixed(4)}${unit}`;

  return `clamp(${min}rem, ${fluidValue}, ${max}rem)`;
}

// Scale configurations (shared between viewport and container scales)
const spacingConfigs: Record<string, ScaleConfig> = {
  'fluid-1': { min: 0.25, max: 0.5 },   // 4px - 8px
  'fluid-2': { min: 0.5, max: 0.75 },   // 8px - 12px
  'fluid-3': { min: 0.75, max: 1 },     // 12px - 16px
  'fluid-4': { min: 1, max: 1.5 },      // 16px - 24px
  'fluid-5': { min: 1.5, max: 2 },      // 24px - 32px
  'fluid-6': { min: 2, max: 3 },        // 32px - 48px
  'fluid-7': { min: 3, max: 4 },        // 48px - 64px
  'fluid-8': { min: 4, max: 6 },        // 64px - 96px
  'fluid-9': { min: 6, max: 8 },        // 96px - 128px
  'fluid-10': { min: 8, max: 12 },      // 128px - 192px
};

/**
 * Viewport-based fluid spacing scales
 * Scales based on viewport width (vw units)
 */
export const fluidSpacingScales: Record<string, string> = Object.fromEntries(
  Object.entries(spacingConfigs).map(([key, config]) => [key, createFluidScale(config, 'vw')])
);

/**
 * Container-based fluid spacing scales
 * Scales based on container inline size (cqi units)
 * Requires ancestor with container-type: inline-size
 */
export const containerSpacingScales: Record<string, string> = Object.fromEntries(
  Object.entries(spacingConfigs).map(([key, config]) => [key, createFluidScale(config, 'cqi')])
);

/**
 * Fixed spacing scale (1-10)
 * Based on 4px/0.25rem base unit
 */
export const fixedSpacingScales: Record<string, string> = {
  'scale-1': '0.25rem',  // 4px
  'scale-2': '0.5rem',   // 8px
  'scale-3': '0.75rem',  // 12px
  'scale-4': '1rem',     // 16px
  'scale-5': '1.5rem',   // 24px
  'scale-6': '2rem',     // 32px
  'scale-7': '3rem',     // 48px
  'scale-8': '4rem',     // 64px
  'scale-9': '6rem',     // 96px
  'scale-10': '8rem',    // 128px
};

// Typography scale configurations
const typographyConfigs: Record<string, ScaleConfig> = {
  'text-xs': { min: 0.75, max: 0.875 },   // 12px - 14px
  'text-sm': { min: 0.875, max: 1 },      // 14px - 16px
  'text-base': { min: 1, max: 1.125 },    // 16px - 18px
  'text-lg': { min: 1.125, max: 1.25 },   // 18px - 20px
  'text-xl': { min: 1.25, max: 1.5 },     // 20px - 24px
  'text-2xl': { min: 1.5, max: 2 },       // 24px - 32px
  'text-3xl': { min: 2, max: 2.5 },       // 32px - 40px
  'text-4xl': { min: 2.5, max: 3.5 },     // 40px - 56px
  'text-5xl': { min: 3.5, max: 5 },       // 56px - 80px
};

/**
 * Viewport-based fluid typography scale
 * Responsive text sizes using viewport units (vw)
 */
export const typographyScales: Record<string, string> = Object.fromEntries(
  Object.entries(typographyConfigs).map(([key, config]) => [key, createFluidScale(config, 'vw')])
);

/**
 * Container-based fluid typography scale
 * Responsive text sizes using container query units (cqi)
 * Requires ancestor with container-type: inline-size
 */
export const containerTypographyScales: Record<string, string> = Object.fromEntries(
  Object.entries(typographyConfigs).map(([key, config]) => [key, createFluidScale(config, 'cqi')])
);

/**
 * Resolves a spacing value to a CSS value
 * Handles fluid scales, fixed scales, numbers, and raw strings
 */
export function resolveSpacing(value: string | number | undefined): string | undefined {
  if (value === undefined) return undefined;

  // Handle numeric values (convert to rem)
  if (typeof value === 'number') {
    return `${value / 16}rem`;
  }

  // Check if it's a predefined fluid scale
  if (value in fluidSpacingScales) {
    return fluidSpacingScales[value];
  }

  // Check if it's a predefined fixed scale
  if (value in fixedSpacingScales) {
    return fixedSpacingScales[value];
  }

  // Return as-is (could be custom CSS value)
  return value;
}

/**
 * Resolves a typography scale to a CSS value
 */
export function resolveTypography(value: string | undefined): string | undefined {
  if (value === undefined) return undefined;

  // Check if it's a predefined typography scale
  if (value in typographyScales) {
    return typographyScales[value];
  }

  // Return as-is (could be custom CSS value)
  return value;
}
