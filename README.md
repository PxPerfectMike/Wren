# Fluid Layout System

> Responsive design without breakpoints. Built on container queries and fluid scales.

## Why?

Traditional responsive design is painful:
- Too many breakpoints to manage
- Components respond to viewport, not their container
- Repetitive spacing and sizing logic
- Hard to maintain consistency

**Fluid Layout System** solves these problems with:
- ✨ **Zero breakpoints** for most layouts
- 📦 **Container queries** - components adapt to their container, not viewport
- 📏 **Fluid scales** - spacing and typography scale smoothly using CSS clamp()
- ⚛️ **React Native-style API** - intuitive, declarative, type-safe

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
import { Container, Box, Stack, Grid, Text } from 'fluid-layout-system';

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
  - `'responsive'` switches from column to row at 768px container width
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

- All modern browsers supporting CSS Container Queries
- Chrome 105+, Edge 105+, Safari 16+, Firefox 110+

## Philosophy

The Fluid Layout System is built on these principles:

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

### Fluid Layout System

```tsx
<Stack direction="responsive" spacing="fluid-4">
  <Box flex={1} padding="fluid-5">Sidebar</Box>
  <Box flex={3} padding="fluid-5">Content</Box>
</Stack>
```

**Result**: 80% less code, zero breakpoints, fluid scaling, container-based.

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
