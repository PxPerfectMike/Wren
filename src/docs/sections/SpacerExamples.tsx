import { Box, Stack, Text, Spacer } from '@lib/index';

export function SpacerExamples() {
  return (
    <Stack direction="column" spacing="fluid-5">
      <Text as="h2" size="text-3xl" weight="bold">
        Spacer Component
      </Text>

      <Text size="text-lg" color="var(--color-text-secondary)">
        Push elements apart without manual margins. The Spacer grows to fill available space,
        or you can give it a fixed size. Perfect for flexible layouts.
      </Text>

      {/* Example 1: Flexible Spacer */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          Flexible Spacer (Auto)
        </Text>
        <Text color="var(--color-text-secondary)">
          Default behavior - grows to fill available space. Great for pushing items to opposite ends.
        </Text>
        <Box className="example-container">
          <Stack direction="row" spacing="fluid-3" align="center">
            <Box className="demo-section" padding="fluid-3">
              Left Item
            </Box>
            <Spacer />
            <Box className="demo-section" padding="fluid-3">
              Right Item
            </Box>
          </Stack>
        </Box>
        <Box className="code-block">
          <pre><code>{`<Stack direction="row" spacing="fluid-3">
  <Box>Left Item</Box>
  <Spacer />
  <Box>Right Item</Box>
</Stack>

// Spacer grows to fill available space`}</code></pre>
        </Box>
      </Stack>

      {/* Example 2: Fixed Spacer */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          Fixed Spacer
        </Text>
        <Text color="var(--color-text-secondary)">
          Give it a size for fixed spacing. Works with scale values or any CSS unit.
        </Text>
        <Box className="example-container">
          <Stack direction="column" align="start">
            <Box className="demo-section" padding="fluid-3">
              Header
            </Box>
            <Spacer size="fluid-6" />
            <Box className="demo-section" padding="fluid-3">
              Content with fixed spacing above
            </Box>
          </Stack>
        </Box>
        <Box className="code-block">
          <pre><code>{`<Stack direction="column">
  <Box>Header</Box>
  <Spacer size="fluid-6" />
  <Box>Content with fixed spacing above</Box>
</Stack>

// Spacer has fixed height of fluid-6 (32px-48px)`}</code></pre>
        </Box>
      </Stack>

      {/* Example 3: Multiple Spacers */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          Multiple Spacers for Proportional Layout
        </Text>
        <Text color="var(--color-text-secondary)">
          Use multiple spacers to create proportional spacing between items.
        </Text>
        <Box className="example-container">
          <Stack direction="row" spacing="fluid-3" align="center" style={{ minHeight: '80px' }}>
            <Box className="demo-section" padding="fluid-3">
              Left
            </Box>
            <Spacer />
            <Box className="demo-section" padding="fluid-3">
              Center
            </Box>
            <Spacer />
            <Box className="demo-section" padding="fluid-3">
              Right
            </Box>
          </Stack>
        </Box>
        <Box className="code-block">
          <pre><code>{`<Stack direction="row">
  <Box>Left</Box>
  <Spacer />
  <Box>Center</Box>
  <Spacer />
  <Box>Right</Box>
</Stack>

// Items evenly distributed with equal spacing`}</code></pre>
        </Box>
      </Stack>
    </Stack>
  );
}
