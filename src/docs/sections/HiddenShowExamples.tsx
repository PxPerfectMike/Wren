import { Box, Stack, Text, Container, Hidden, Show } from '@lib/index';

export function HiddenShowExamples() {
  return (
    <Stack direction="column" spacing="fluid-5">
      <Text as="h2" size="text-3xl" weight="bold">
        Hidden & Show Components
      </Text>

      <Text size="text-lg" color="var(--color-text-secondary)">
        Container-based responsive visibility. Unlike media queries that respond to viewport,
        these respond to their container size. Perfect for reusable components.
      </Text>

      {/* Example 1: Basic Hidden */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          Hide on Small Containers
        </Text>
        <Text color="var(--color-text-secondary)">
          Use <code>below</code> prop to hide content when the container is narrower than specified width.
          Try resizing your browser to see it disappear!
        </Text>
        <Box className="example-container">
          <Container>
            <Stack direction="row" spacing="fluid-4" align="stretch" wrap={true}>
              <Box flex={1} className="demo-section" padding="fluid-4" style={{ minWidth: '200px' }}>
                Always visible
              </Box>
              <Hidden below={768}>
                <Box flex={1} className="demo-section" padding="fluid-4" background="#d1fae5" style={{ border: '2px dashed #047857', minWidth: '200px' }}>
                  Hidden below 768px container width
                </Box>
              </Hidden>
            </Stack>
          </Container>
        </Box>
        <Box className="code-block">
          <pre><code>{`<Stack direction="responsive" spacing="fluid-4">
  <Box>Always visible</Box>
  <Hidden below={768}>
    <Box>Hidden on small containers</Box>
  </Hidden>
</Stack>

// Hides when container is narrower than 768px`}</code></pre>
        </Box>
      </Stack>

      {/* Example 2: Show (Inverse) */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          Show Only on Small Containers
        </Text>
        <Text color="var(--color-text-secondary)">
          <code>Show</code> is the inverse - shows content only when conditions are met.
        </Text>
        <Box className="example-container">
          <Container>
            <Stack direction="column" spacing="fluid-3">
              <Show below={768}>
                <Box className="demo-section" padding="fluid-4" background="#fef3c7" style={{ border: '2px dashed #d97706' }}>
                  📱 Mobile menu - visible only below 768px
                </Box>
              </Show>
              <Hidden below={768}>
                <Box className="demo-section" padding="fluid-4" background="#dbeafe" style={{ border: '2px dashed #3b82f6' }}>
                  🖥️ Desktop navigation - visible only above 768px
                </Box>
              </Hidden>
            </Stack>
          </Container>
        </Box>
        <Box className="code-block">
          <pre><code>{`// Mobile menu
<Show below={768}>
  <MobileMenuButton />
</Show>

// Desktop navigation
<Hidden below={768}>
  <DesktopNav />
</Hidden>

// Swap layouts based on container size!`}</code></pre>
        </Box>
      </Stack>

      {/* Example 3: Range Visibility */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          Visibility Range
        </Text>
        <Text color="var(--color-text-secondary)">
          Combine <code>below</code> and <code>above</code> to show content only within a specific size range.
        </Text>
        <Box className="example-container">
          <Container>
            <Stack direction="column" spacing="fluid-3">
              <Show below={600}>
                <Box className="demo-section" padding="fluid-3" background="#fecaca">
                  Small: Below 600px
                </Box>
              </Show>
              <Hidden below={600} above={900}>
                <Box className="demo-section" padding="fluid-3" background="#fef3c7">
                  Medium: 600px - 900px
                </Box>
              </Hidden>
              <Show above={900}>
                <Box className="demo-section" padding="fluid-3" background="#d1fae5">
                  Large: Above 900px
                </Box>
              </Show>
            </Stack>
          </Container>
        </Box>
        <Box className="code-block">
          <pre><code>{`// Small only
<Show below={600}>
  <CompactLayout />
</Show>

// Medium range (600-900px)
<Hidden below={600} above={900}>
  <TabletLayout />
</Hidden>

// Large only
<Show above={900}>
  <DesktopLayout />
</Show>`}</code></pre>
        </Box>
      </Stack>

      {/* Important Note */}
      <Box className="demo-card" background="#fef3c7" style={{ borderLeft: '4px solid #d97706' }}>
        <Stack direction="column" spacing="fluid-3">
          <Text size="text-lg" weight="semibold" color="#92400e">
            ⚠️ Accessibility Note
          </Text>
          <Text size="text-base" color="#78350f">
            Hidden/Show use <code>display: none</code>, which removes content from the accessibility tree.
            Screen readers won't announce hidden content.
          </Text>
          <Text size="text-sm" color="#78350f">
            <strong>Use for:</strong> Responsive UI (mobile menu vs desktop nav)<br/>
            <strong>Don't use for:</strong> Critical content that should always be accessible
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
}
