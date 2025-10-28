import { Box, Stack, Text } from '@lib/index';

export function StackExamples() {
  return (
    <Stack direction="column" spacing="fluid-5">
      <Text as="h2" size="text-3xl" weight="bold">
        Stack Component
      </Text>

      <Text size="text-lg" color="var(--color-text-secondary)">
        Auto-layout magic. Items just line up how you expect them to. No flexbox headaches.
      </Text>

      {/* Example 1: Responsive Direction */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          Responsive Direction
        </Text>
        <Text color="var(--color-text-secondary)">
          The <code>direction="responsive"</code> prop automatically switches from column to row
          based on container width (not viewport). Try resizing!
        </Text>
        <Box className="example-container">
          <Stack direction="responsive" spacing="fluid-4">
            <Box className="demo-section" flex={1}>
              Item 1
            </Box>
            <Box className="demo-section" flex={1}>
              Item 2
            </Box>
            <Box className="demo-section" flex={1}>
              Item 3
            </Box>
          </Stack>
        </Box>
        <Box className="code-block">
          <pre><code>{`<Stack direction="responsive" spacing="fluid-4">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Stack>

// Switches from column to row at 768px container width
// No media queries needed!`}</code></pre>
        </Box>
      </Stack>

      {/* Example 2: Alignment */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          Alignment & Justify
        </Text>
        <Text color="var(--color-text-secondary)">
          Control alignment along cross and main axes.
        </Text>
        <Box className="example-container">
          <Stack direction="column" spacing="fluid-3">
            <Stack direction="row" spacing="fluid-3" align="center" justify="space-between">
              <Box className="demo-section" style={{ height: '60px', width: '100px' }}>
                Small
              </Box>
              <Box className="demo-section" style={{ height: '80px', width: '100px' }}>
                Medium
              </Box>
              <Box className="demo-section" style={{ height: '60px', width: '100px' }}>
                Small
              </Box>
            </Stack>
            <Text size="text-sm" color="var(--color-text-secondary)" align="center">
              align="center" justify="space-between"
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
