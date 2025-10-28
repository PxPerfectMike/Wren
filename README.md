# Wren

> React components with container queries and fluid scales. Dramatically fewer breakpoints.

## Why?

Traditional responsive design is painful:
- Too many viewport breakpoints to manage
- Components respond to viewport, not their container
- Repetitive spacing and sizing logic
- Hard to maintain consistency

**Wren** solves these problems with:
- 📦 **Container-based layouts** - components adapt to their container size, not just viewport
- 📏 **Fluid scales** - spacing and typography scale smoothly using CSS clamp()
- 🎯 **Minimal breakpoints** - most layouts need zero custom breakpoints, a few need one
- ⚛️ **React Native-style API** - intuitive, declarative, type-safe
- 🌐 **Progressive enhancement** - uses container query units (cqi) in modern browsers, viewport units (vw) as fallback

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
# Run documentation site
npm run dev

# Build library
npm run build:lib

# Build everything
npm run build
```

## Basic Usage

```tsx
import { Container, Box, Stack, Grid, Text, Spacer, AspectRatio, Hidden, Show } from '@wren/ui';

function App() {
  return (
    <Container maxWidth="xl" center>
      {/* Responsive layout - switches from column to row automatically */}
      <Stack direction="responsive" spacing="fluid-4">
        {/* Sidebar takes 1/4 width with fluid padding */}
        <Box flex={1} padding="fluid-5" background="#f5f5f5">
          Sidebar
        </Box>

        {/* Main content takes 3/4 width */}
        <Box flex={3} padding="fluid-5">
          {/* Auto-fitting card grid - no breakpoints needed! */}
          <Grid columns="auto-fit" minSize="250px" gap="fluid-4">
            <Card />
            <Card />
            <Card />
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}
```

## Components

### Container

Establishes a container query context. All child components can respond to this container's size.

```tsx
<Container maxWidth="lg" center>
  {/* Your content */}
</Container>
```

**Props:**
- `maxWidth`: `'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | string`
- `center`: boolean - center horizontally

### Box

The fundamental layout primitive. Provides spacing, flex layout, and sizing.

```tsx
<Box
  flex={1}
  padding="fluid-5"
  margin="fluid-3"
  background="#fff"
  borderRadius="8px"
>
  Content
</Box>
```

**Props:**
- Spacing: `padding`, `margin` (with X/Y/Top/Bottom/Left/Right variants)
- Flex: `flex`, `flexGrow`, `flexShrink`, `flexBasis`, `alignSelf`
- Size: `width`, `height`, `minWidth`, `maxWidth`, `minHeight`, `maxHeight`
- Positioning: `position`, `top`, `right`, `bottom`, `left`, `zIndex`
- Style: `background`, `borderRadius`, `border`

### Stack

Auto-layout stacking with consistent spacing.

```tsx
<Stack direction="responsive" spacing="fluid-4" align="center">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Stack>
```

**Props:**
- `direction`: `'row' | 'column' | 'responsive'`
  - `'responsive'` switches from column to row based on container width
- `responsiveBreakpoint`: number (default: 768) - container width breakpoint in pixels for responsive direction
- `spacing`: Fluid or fixed scale value
- `align`: `'start' | 'center' | 'end' | 'stretch' | 'baseline'`
- `justify`: `'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'`
- `wrap`: boolean

### Grid

Responsive grids without breakpoints. Items automatically wrap based on available space.

```tsx
{/* Auto-fitting grid */}
<Grid columns="auto-fit" minSize="250px" gap="fluid-4">
  <Card />
  <Card />
  <Card />
</Grid>

{/* Fixed columns with responsive fallback */}
<Grid columns={3} gap="fluid-3">
  <Box>1</Box>
  <Box>2</Box>
  <Box>3</Box>
</Grid>
```

**Props:**
- `columns`: `'auto-fit' | 'auto-fill' | number | string`
- `minSize`: string - minimum size for auto-fit/auto-fill
- `gap`: Fluid or fixed scale value
- `rowGap`, `columnGap`: Override gap for specific axis

### Text

Fluid typography that scales smoothly.

```tsx
<Text as="h1" size="text-4xl" weight="bold" color="#333">
  Heading
</Text>

<Text size="text-base" lineHeight={1.6}>
  Body text that scales fluidly.
</Text>
```

**Props:**
- `size`: Typography scale (`'text-xs'` through `'text-5xl'`)
- `weight`: `'normal' | 'medium' | 'semibold' | 'bold' | number`
- `color`, `align`, `lineHeight`, `fontFamily`

### Spacer

Creates flexible or fixed space between elements. Grows to fill available space by default.

```tsx
{/* Push items apart */}
<Stack direction="row">
  <Button>Left</Button>
  <Spacer />
  <Button>Right</Button>
</Stack>

{/* Fixed spacing */}
<Stack direction="column">
  <Header />
  <Spacer size="fluid-6" />
  <Content />
</Stack>
```

**Props:**
- `size`: `'auto'` (default) for flexible spacing, or any CSS value / scale value for fixed spacing

### AspectRatio

Maintains consistent aspect ratios for images, videos, or any content.

```tsx
{/* 16:9 video container */}
<AspectRatio ratio="16/9">
  <iframe src="video-url" />
</AspectRatio>

{/* Square container */}
<AspectRatio ratio={1} maxWidth="400px">
  <img src="image.jpg" alt="Square image" />
</AspectRatio>
```

**Props:**
- `ratio`: number or string like `"16/9"` or `"4:3"` (default: `"16/9"`)
- `maxWidth`: string or number - constrain maximum width

### Hidden / Show

Container-based responsive visibility control using container queries.

```tsx
{/* Hide on small containers */}
<Hidden below={768}>
  <DesktopNavigation />
</Hidden>

{/* Show only on small containers */}
<Show below={768}>
  <MobileMenu />
</Show>

{/* Hide in a specific range */}
<Hidden below={480} above={1024}>
  <TabletOnlyContent />
</Hidden>
```

**Props:**
- `below`: number - hide when container is narrower than this width
- `above`: number - hide when container is wider than this width

## Scale System

### Fluid Spacing Scale

Scales smoothly between min and max values using CSS clamp():

- `fluid-1`: 4px → 8px
- `fluid-2`: 8px → 12px
- `fluid-3`: 12px → 16px
- `fluid-4`: 16px → 24px
- `fluid-5`: 24px → 32px
- `fluid-6`: 32px → 48px
- `fluid-7`: 48px → 64px
- `fluid-8`: 64px → 96px
- `fluid-9`: 96px → 128px
- `fluid-10`: 128px → 192px

### Fixed Spacing Scale

Fixed values based on 4px (0.25rem) unit:

- `scale-1` through `scale-10`: 4px → 128px

### Typography Scale

Fluid text sizes:

- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`
- `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`

## Key Features

### 1. Container-Based Responsiveness

Components respond to their container, not just the viewport:

```tsx
{/* This sidebar + content layout works ANYWHERE */}
<Stack direction="responsive">
  <Box flex={1}>Sidebar</Box>
  <Box flex={3}>Content</Box>
</Stack>

{/* Same component in a narrow sidebar */}
<Sidebar>
  <Stack direction="responsive">
    <Box flex={1}>Will stack vertically here</Box>
    <Box flex={3}>Because container is narrow</Box>
  </Stack>
</Sidebar>
```

### 2. Zero Breakpoint Grids

Auto-fitting grids that wrap intelligently:

```tsx
<Grid columns="auto-fit" minSize="250px" gap="fluid-4">
  {/* Items automatically wrap when they hit 250px minimum */}
  {/* No media queries needed! */}
  <Card />
  <Card />
  <Card />
</Grid>
```

### 3. Smooth Fluid Scaling

Spacing and typography scale smoothly, not in jumps:

```tsx
{/* Padding grows smoothly from 24px to 32px as viewport grows */}
<Box padding="fluid-5">
  {/* Text size grows smoothly from 32px to 40px */}
  <Text size="text-3xl">Smooth scaling</Text>
</Box>
```

### 4. Proportional Layouts

React Native-style flex ratios:

```tsx
<Stack direction="row">
  <Box flex={1}>25% width</Box>
  <Box flex={2}>50% width</Box>
  <Box flex={1}>25% width</Box>
</Stack>
```

## Browser Support

### Container Queries
Wren requires CSS Container Queries for layout features:
- **Chrome/Edge**: 105+ (September 2022)
- **Safari**: 16+ (September 2022)
- **Firefox**: 110+ (February 2023)

### Progressive Enhancement: Container Query Units

Wren uses **progressive enhancement** for fluid scales:

**Modern browsers** (Chromium 105+, Safari 16+, Firefox 110+):
- Scales use `cqi` (container inline size) units
- Components scale based on their **container size**
- True container-aware responsive sizing

**Older browsers** (with Container Queries but older):
- Scales fall back to `vw` (viewport width) units
- Components scale based on **viewport size**
- Still functional, just not container-aware for fluid scaling

### Feature Support Table

| Feature | Chrome | Safari | Firefox | Notes |
|---------|--------|--------|---------|-------|
| Container Queries (@container) | 105+ | 16+ | 110+ | Required |
| Container Query Units (cqi) | 105+ | 16+ | 110+ | Progressive enhancement |
| CSS clamp() | 79+ | 13.1+ | 75+ | Required |
| CSS Custom Properties | 49+ | 9.1+ | 31+ | Required |

**No polyfills available** - Container Queries cannot be polyfilled effectively. If you need to support older browsers, consider a viewport-based solution instead.

## Philosophy

Wren is built on these principles:

1. **Intrinsic Design**: Let content and context determine layout, not arbitrary breakpoints
2. **Container Awareness**: Components should respond to their container, not just viewport
3. **Fluid Scales**: Size and spacing should transition smoothly, not in steps
4. **Developer Experience**: Simple, declarative API that's intuitive and type-safe
5. **Less Code**: Eliminate repetitive responsive code

## Comparison

### Traditional CSS

```css
.layout {
  padding: 16px;
}

@media (min-width: 640px) {
  .layout { padding: 20px; }
}

@media (min-width: 768px) {
  .layout { padding: 24px; }
  .sidebar { width: 25%; }
  .content { width: 75%; }
}

@media (min-width: 1024px) {
  .layout { padding: 32px; }
}
```

### Wren

```tsx
<Stack direction="responsive" spacing="fluid-4">
  <Box flex={1} padding="fluid-5">Sidebar</Box>
  <Box flex={3} padding="fluid-5">Content</Box>
</Stack>
```

**Result**: 80% less code, minimal breakpoints, fluid scaling, container-based.

## Performance Considerations

### Container Query Performance

**Good news**: Container queries are performant in modern browsers. They don't cause layout thrashing like ResizeObserver-based solutions.

**Guidelines**:
- ✅ Nesting containers is fine - browsers optimize this well
- ✅ Many container queries on a page? No problem
- ⚠️ Avoid deeply nested container queries (10+ levels) - can impact paint performance
- ⚠️ Container queries trigger layout recalculation when container size changes

### CSS clamp() Performance

**Excellent**: `clamp()` is highly optimized and has minimal performance impact.
- Calculations happen at paint time
- No JavaScript required
- Browser-native implementation

### When to Use Fixed vs Fluid Scales

```tsx
// ✅ Good: Fluid scales for spacing that should adapt
<Box padding="fluid-5">Content</Box>

// ✅ Good: Fixed scales for precise spacing
<Box marginBottom="scale-4">Exact 16px spacing</Box>

// ❌ Avoid: Mixing too many fluid scales can make debugging harder
```

### Optimization Tips

1. **Use Container sparingly at top levels** - wrap entire sections, not individual components
2. **Prefer Grid over nested Stacks** when possible - single container query context
3. **Fixed scales for small components** - buttons, icons, etc. don't need fluid scaling
4. **Test on lower-end devices** - container queries are relatively new, test mobile performance

## Accessibility

### WCAG Compliance

Wren is designed with accessibility in mind:

**✅ Text Scaling (WCAG 1.4.4)**:
- Fluid typography uses `rem` units with `clamp()`
- Text respects browser zoom (200%+ zoom works correctly)
- Container query units (`cqi`) continue to scale during text zoom

**✅ Responsive Layouts (WCAG 1.4.10)**:
- Content reflows without horizontal scrolling
- Container queries enable content-aware layouts
- No fixed widths that break on zoom

**⚠️ Hidden/Show Components**:
- Uses `display: none` (removed from accessibility tree)
- Screen readers won't announce hidden content
- Use for responsive UI, not critical content

### Best Practices

```tsx
// ✅ Good: Maintain semantic HTML
<Text as="h1" size="text-4xl">Heading</Text>

// ❌ Bad: Visual hierarchy without semantic meaning
<Text size="text-4xl">Heading</Text>

// ✅ Good: Provide alt text
<AspectRatio ratio="16/9">
  <img src="hero.jpg" alt="Description" />
</AspectRatio>

// ✅ Good: Hide decorative content from screen readers
<Spacer aria-hidden="true" />
```

### Color Contrast

Wren doesn't enforce colors. Ensure your chosen colors meet WCAG AA or AAA:
- **AA**: 4.5:1 for normal text, 3:1 for large text
- **AAA**: 7:1 for normal text, 4.5:1 for large text

Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify.

### Focus Management

```tsx
// Ensure interactive elements are keyboard accessible
<Box as="button" padding="fluid-3">
  Clickable Box
</Box>

// Don't hide focus indicators
// Wren doesn't override :focus styles
```

## Comparison with Other Solutions

### vs. Traditional Media Queries

**Traditional CSS**:
- ❌ Viewport-only responsiveness
- ❌ Many breakpoints needed
- ❌ Repetitive code
- ✅ Maximum browser support
- ✅ Simple mental model

**Wren**:
- ✅ Container-aware responsiveness
- ✅ Minimal breakpoints (often zero custom ones)
- ✅ Declarative, reusable patterns
- ⚠️ Modern browser requirement
- ⚠️ New mental model (container vs viewport)

### vs. Tailwind CSS

**Tailwind**:
- ✅ Utility-first, highly composable
- ✅ Great DX with autocomplete
- ❌ Still viewport-based (sm:, md:, lg:)
- ❌ No container queries (yet)
- ✅ Mature ecosystem

**Wren**:
- ✅ Component-based, React-specific
- ✅ Container queries built-in
- ✅ Fluid scales out of the box
- ⚠️ Smaller community
- ⚠️ Early stage

### vs. Every Layout / Utopia

**Every Layout / Utopia**:
- ✅ Intrinsic design principles
- ✅ Fluid typography and spacing
- ✅ Framework-agnostic (CSS primitives)
- ❌ No React component abstraction
- ❌ Manual CSS implementation

**Wren**:
- ✅ Same principles, React components
- ✅ Pre-built component library
- ✅ TypeScript-first
- ⚠️ React-only
- ✅ Less setup required

### vs. Chakra UI / MUI

**Chakra UI / MUI**:
- ✅ Full component libraries
- ✅ Theme systems
- ✅ Large ecosystems
- ❌ Viewport-based responsive props
- ❌ Heavier bundles
- ✅ Production-ready

**Wren**:
- ✅ Layout primitives only (not a full UI library)
- ✅ Container-based responsive
- ✅ Smaller bundle size
- ⚠️ No theme system (yet)
- ⚠️ Early stage, v0.1.0

**When to use Wren**: Building custom designs with container-aware layouts, want fluid scaling without breakpoints, comfortable with modern browser requirements.

**When NOT to use Wren**: Need IE11 support, want a full component library (buttons, modals, etc.), building for maximum browser compatibility.

## Development

### Project Structure

```
respo/
├── src/
│   ├── lib/              # Core library
│   │   ├── components/   # React components
│   │   ├── core/         # Scale system, types, utils
│   │   └── styles/       # CSS foundation
│   └── docs/             # Documentation site
│       ├── sections/     # Doc sections
│       └── styles/       # Doc styles
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### Scripts

- `npm run dev` - Start documentation site
- `npm run build` - Build documentation site
- `npm run build:lib` - Build library for distribution
- `npm run preview` - Preview production build

## License

MIT

## Credits

Built with React, TypeScript, CSS Container Queries, and CSS Custom Properties.
