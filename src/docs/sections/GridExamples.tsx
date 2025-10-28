import { Box, Stack, Text, Grid } from '@lib/index';

export function GridExamples() {
  return (
    <Stack direction="column" spacing="fluid-5">
      <Stack direction="row" justify="space-between" align="center">
        <Text as="h2" size="text-3xl" weight="bold">
          Grid Component
        </Text>
        <Text size="text-sm" color="var(--color-primary)" style={{ opacity: 0.8 }}>
          👀 Examples: built with Wren
        </Text>
      </Stack>

      <Text size="text-lg" color="var(--color-text-secondary)">
        Grids that actually work. No breakpoints. Items wrap when they need to. It's kind of magical. ✨
      </Text>

      {/* Example 1: Auto-Fit Grid */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          Auto-Fit Grid
        </Text>
        <Text color="var(--color-text-secondary)">
          Cards automatically fit and wrap based on minimum size. No media queries required!
        </Text>
        <Box className="example-container">
          <Grid columns="auto-fit" minSize="200px" gap="fluid-4">
            <Box className="demo-card">
              <Text weight="semibold">Card 1</Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Automatically wraps
              </Text>
            </Box>
            <Box className="demo-card">
              <Text weight="semibold">Card 2</Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Based on space
              </Text>
            </Box>
            <Box className="demo-card">
              <Text weight="semibold">Card 3</Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Min 200px wide
              </Text>
            </Box>
            <Box className="demo-card">
              <Text weight="semibold">Card 4</Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Fluid spacing
              </Text>
            </Box>
            <Box className="demo-card">
              <Text weight="semibold">Card 5</Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Resize to see
              </Text>
            </Box>
            <Box className="demo-card">
              <Text weight="semibold">Card 6</Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Magic happen!
              </Text>
            </Box>
          </Grid>
        </Box>
        <Box className="code-block">
          <pre><code>{`<Grid columns="auto-fit" minSize="200px" gap="fluid-4">
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
</Grid>

// Uses CSS Grid auto-fit
// Automatically wraps when items hit minimum size
// No breakpoints needed!`}</code></pre>
        </Box>
      </Stack>

      {/* Example 2: Fixed Columns */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          Fixed Column Grid
        </Text>
        <Text color="var(--color-text-secondary)">
          Use fixed column counts with responsive fallbacks built-in.
        </Text>
        <Box className="example-container">
          <Grid columns={3} gap="fluid-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Box
                key={i}
                className="demo-section"
                style={{ minHeight: '80px' }}
              >
                Item {i + 1}
              </Box>
            ))}
          </Grid>
        </Box>
        <Box className="code-block">
          <pre><code>{`<Grid columns={3} gap="fluid-3">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
  <Box>Item 4</Box>
  <Box>Item 5</Box>
  <Box>Item 6</Box>
</Grid>

// 3 columns on large screens
// Automatically reduces columns on smaller screens`}</code></pre>
        </Box>
      </Stack>

      {/* Example 3: Custom Gap */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          Variable Gap Sizing
        </Text>
        <Box className="example-container">
          <Stack direction="column" spacing="fluid-4">
            <Box>
              <Text size="text-sm" marginBottom="scale-2" weight="medium">
                gap="fluid-2" (small gap)
              </Text>
              <Grid columns="auto-fit" minSize="120px" gap="fluid-2">
                <Box className="demo-section" style={{ minHeight: '60px' }}>1</Box>
                <Box className="demo-section" style={{ minHeight: '60px' }}>2</Box>
                <Box className="demo-section" style={{ minHeight: '60px' }}>3</Box>
                <Box className="demo-section" style={{ minHeight: '60px' }}>4</Box>
              </Grid>
            </Box>
            <Box>
              <Text size="text-sm" marginBottom="scale-2" weight="medium">
                gap="fluid-6" (large gap)
              </Text>
              <Grid columns="auto-fit" minSize="120px" gap="fluid-6">
                <Box className="demo-section" style={{ minHeight: '60px' }}>1</Box>
                <Box className="demo-section" style={{ minHeight: '60px' }}>2</Box>
                <Box className="demo-section" style={{ minHeight: '60px' }}>3</Box>
                <Box className="demo-section" style={{ minHeight: '60px' }}>4</Box>
              </Grid>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
