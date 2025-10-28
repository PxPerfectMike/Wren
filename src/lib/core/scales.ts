/**
 * Fluid Scale System
 *
 * Generates fluid spacing and typography scales using CSS clamp()
 * Values scale smoothly between min and max viewport/container sizes
 */

export interface ScaleConfig {
  min: number;        // Minimum size in rem
  max: number;        // Maximum size in rem
  minVw?: number;     // Viewport width where min applies (default: 320px)
  maxVw?: number;     // Viewport width where max applies (default: 1920px)
}

/**
 * Generates a CSS clamp() expression for fluid scaling
 * Formula: clamp(MIN, MIN + (MAX - MIN) * ((100vw - MINvw) / (MAXvw - MINvw)), MAX)
 * Simplified: clamp(MIN, VW_CALCULATION, MAX)
 */
export function createFluidScale(config: ScaleConfig): string {
  const {
    min,
    max,
    minVw = 320,  // 20rem
    maxVw = 1920, // 120rem
  } = config;

  // Convert viewport widths to rem (assuming 16px base)
  const minVwRem = minVw / 16;
  const maxVwRem = maxVw / 16;

  // Calculate the fluid middle value
  const slope = (max - min) / (maxVwRem - minVwRem);
  const intercept = min - slope * minVwRem;

  // Create the clamp expression
  // clamp(min, intercept + slope * 100vw, max)
  const fluidValue = `${intercept.toFixed(4)}rem + ${(slope * 100).toFixed(4)}vw`;

  return `clamp(${min}rem, ${fluidValue}, ${max}rem)`;
}

/**
 * Predefined fluid spacing scale (1-10)
 * Small, subtle scales for tight layouts to large, spacious scales
 */
export const fluidSpacingScales: Record<string, string> = {
  'fluid-1': createFluidScale({ min: 0.25, max: 0.5 }),   // 4px - 8px
  'fluid-2': createFluidScale({ min: 0.5, max: 0.75 }),   // 8px - 12px
  'fluid-3': createFluidScale({ min: 0.75, max: 1 }),     // 12px - 16px
  'fluid-4': createFluidScale({ min: 1, max: 1.5 }),      // 16px - 24px
  'fluid-5': createFluidScale({ min: 1.5, max: 2 }),      // 24px - 32px
  'fluid-6': createFluidScale({ min: 2, max: 3 }),        // 32px - 48px
  'fluid-7': createFluidScale({ min: 3, max: 4 }),        // 48px - 64px
  'fluid-8': createFluidScale({ min: 4, max: 6 }),        // 64px - 96px
  'fluid-9': createFluidScale({ min: 6, max: 8 }),        // 96px - 128px
  'fluid-10': createFluidScale({ min: 8, max: 12 }),      // 128px - 192px
};

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

/**
 * Fluid typography scale
 * Responsive text sizes using clamp()
 */
export const typographyScales: Record<string, string> = {
  'text-xs': createFluidScale({ min: 0.75, max: 0.875 }),   // 12px - 14px
  'text-sm': createFluidScale({ min: 0.875, max: 1 }),      // 14px - 16px
  'text-base': createFluidScale({ min: 1, max: 1.125 }),    // 16px - 18px
  'text-lg': createFluidScale({ min: 1.125, max: 1.25 }),   // 18px - 20px
  'text-xl': createFluidScale({ min: 1.25, max: 1.5 }),     // 20px - 24px
  'text-2xl': createFluidScale({ min: 1.5, max: 2 }),       // 24px - 32px
  'text-3xl': createFluidScale({ min: 2, max: 2.5 }),       // 32px - 40px
  'text-4xl': createFluidScale({ min: 2.5, max: 3.5 }),     // 40px - 56px
  'text-5xl': createFluidScale({ min: 3.5, max: 5 }),       // 56px - 80px
};

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
