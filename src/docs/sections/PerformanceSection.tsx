import { Box, Stack, Text, Grid } from '@lib/index';

export function PerformanceSection() {
  return (
    <Stack direction="column" spacing="fluid-5">
      <Text as="h2" size="text-3xl" weight="bold">
        Performance Considerations
      </Text>

      <Text size="text-lg" color="var(--color-text-secondary)">
        Container queries and CSS clamp() are performant, but understanding their characteristics
        helps you make informed decisions. Here's what you need to know.
      </Text>

      {/* Container Query Performance */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-2xl" weight="semibold">
          Container Query Performance
        </Text>
        <Box className="demo-card" background="#d1fae5">
          <Stack direction="column" spacing="fluid-3">
            <Text size="text-xl" weight="semibold" color="#047857">
              ✅ Good News
            </Text>
            <Text color="#065f46">
              Container queries are performant in modern browsers. They're natively implemented
              and don't cause layout thrashing like ResizeObserver-based solutions.
            </Text>
            <Stack as="ul" direction="column" spacing="fluid-2" style={{ margin: 0, paddingLeft: '1.5rem' }}>
              <Text as="li" color="#065f46">
                <strong>Nesting is fine:</strong> Browsers optimize nested containers well
              </Text>
              <Text as="li" color="#065f46">
                <strong>Many queries OK:</strong> Multiple container queries on a page? No problem
              </Text>
              <Text as="li" color="#065f46">
                <strong>Better than JS:</strong> No JavaScript polling or event listeners needed
              </Text>
            </Stack>
          </Stack>
        </Box>

        <Box className="demo-card" background="#fef3c7" style={{ marginTop: 'var(--fluid-3)' }}>
          <Stack direction="column" spacing="fluid-3">
            <Text size="text-xl" weight="semibold" color="#d97706">
              ⚠️ Things to Watch
            </Text>
            <Stack as="ul" direction="column" spacing="fluid-2" style={{ margin: 0, paddingLeft: '1.5rem' }}>
              <Text as="li" color="#92400e">
                <strong>Deep nesting (10+ levels):</strong> Can impact paint performance
              </Text>
              <Text as="li" color="#92400e">
                <strong>Container size changes:</strong> Trigger layout recalculation (expected behavior)
              </Text>
              <Text as="li" color="#92400e">
                <strong>Test on lower-end devices:</strong> Container queries are relatively new
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      {/* CSS clamp() Performance */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-2xl" weight="semibold">
          CSS clamp() Performance
        </Text>
        <Text size="text-lg" color="var(--color-text-secondary)">
          Excellent news: <code>clamp()</code> is highly optimized with minimal performance impact.
        </Text>
        <Grid columns="auto-fit" minSize="250px" gap="fluid-4">
          <Box className="demo-card">
            <Stack direction="column" spacing="fluid-2">
              <Text size="text-lg" weight="semibold" color="var(--color-primary)">
                ⚡ Paint-Time Calculation
              </Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Calculations happen at paint time, not layout time. Very efficient.
              </Text>
            </Stack>
          </Box>
          <Box className="demo-card">
            <Stack direction="column" spacing="fluid-2">
              <Text size="text-lg" weight="semibold" color="var(--color-primary)">
                🚫 No JavaScript
              </Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Pure CSS solution. No JS overhead or event listeners required.
              </Text>
            </Stack>
          </Box>
          <Box className="demo-card">
            <Stack direction="column" spacing="fluid-2">
              <Text size="text-lg" weight="semibold" color="var(--color-primary)">
                🔧 Browser-Native
              </Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Implemented in the browser's rendering engine. Highly optimized.
              </Text>
            </Stack>
          </Box>
        </Grid>
      </Stack>

      {/* When to Use Fixed vs Fluid */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-2xl" weight="semibold">
          Fixed vs Fluid Scales: When to Use What
        </Text>
        <Grid columns="auto-fit" minSize="300px" gap="fluid-4">
          <Box className="demo-card" background="#dbeafe">
            <Stack direction="column" spacing="fluid-3">
              <Text size="text-xl" weight="semibold" color="#1e40af">
                Use Fluid Scales When:
              </Text>
              <Stack as="ul" direction="column" spacing="fluid-2" style={{ margin: 0, paddingLeft: '1.5rem' }}>
                <Text as="li" color="#1e3a8a">
                  Spacing should adapt to screen/container size
                </Text>
                <Text as="li" color="#1e3a8a">
                  Building responsive layouts
                </Text>
                <Text as="li" color="#1e3a8a">
                  Typography needs to scale smoothly
                </Text>
                <Text as="li" color="#1e3a8a">
                  Content-heavy sections
                </Text>
              </Stack>
              <Box className="code-block">
                <pre><code>{`✅ Good
<Box padding="fluid-5">
  <Text size="text-2xl">
    Heading
  </Text>
</Box>`}</code></pre>
              </Box>
            </Stack>
          </Box>
          <Box className="demo-card" background="#fae8ff">
            <Stack direction="column" spacing="fluid-3">
              <Text size="text-xl" weight="semibold" color="#7c3aed">
                Use Fixed Scales When:
              </Text>
              <Stack as="ul" direction="column" spacing="fluid-2" style={{ margin: 0, paddingLeft: '1.5rem' }}>
                <Text as="li" color="#6b21a8">
                  Precise spacing required (alignment)
                </Text>
                <Text as="li" color="#6b21a8">
                  Small UI elements (buttons, icons)
                </Text>
                <Text as="li" color="#6b21a8">
                  Consistent spacing regardless of size
                </Text>
                <Text as="li" color="#6b21a8">
                  Component internal spacing
                </Text>
              </Stack>
              <Box className="code-block">
                <pre><code>{`✅ Good
<Button padding="scale-3">
  Click Me
</Button>`}</code></pre>
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Box className="demo-card" background="#fee2e2">
          <Stack direction="column" spacing="fluid-2">
            <Text size="text-lg" weight="semibold" color="#991b1b">
              ❌ Avoid Mixing Too Many
            </Text>
            <Text color="#7f1d1d">
              Using too many different fluid scales in one component can make debugging harder.
              Stick to 2-3 scale values per component for consistency.
            </Text>
          </Stack>
        </Box>
      </Stack>

      {/* Optimization Tips */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-2xl" weight="semibold">
          Optimization Tips
        </Text>
        <Grid columns="auto-fit" minSize="250px" gap="fluid-4">
          <Box className="demo-card">
            <Stack direction="column" spacing="fluid-2">
              <Text weight="semibold">1. Container at Top Levels</Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Wrap entire sections, not individual components. Fewer container query contexts = better performance.
              </Text>
            </Stack>
          </Box>
          <Box className="demo-card">
            <Stack direction="column" spacing="fluid-2">
              <Text weight="semibold">2. Prefer Grid over Nested Stacks</Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Grid creates a single container query context. Nested Stacks create multiple.
              </Text>
            </Stack>
          </Box>
          <Box className="demo-card">
            <Stack direction="column" spacing="fluid-2">
              <Text weight="semibold">3. Fixed Scales for Small Components</Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Buttons, icons, badges don't need fluid scaling. Use fixed scales.
              </Text>
            </Stack>
          </Box>
          <Box className="demo-card">
            <Stack direction="column" spacing="fluid-2">
              <Text weight="semibold">4. Test on Lower-End Devices</Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Container queries are new. Always test mobile performance on real devices.
              </Text>
            </Stack>
          </Box>
        </Grid>
      </Stack>

      {/* Example: Good vs Bad */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-2xl" weight="semibold">
          Example: Optimized Structure
        </Text>
        <Grid columns="auto-fit" minSize="300px" gap="fluid-4">
          <Box className="demo-card" background="#fee2e2">
            <Stack direction="column" spacing="fluid-3">
              <Text size="text-lg" weight="semibold" color="#991b1b">
                ❌ Less Optimal
              </Text>
              <Box className="code-block">
                <pre style={{ fontSize: '0.75rem' }}><code>{`<Container>
  <Container>
    <Container>
      <Stack>
        <Stack>
          <Box>Deep nesting</Box>
        </Stack>
      </Stack>
    </Container>
  </Container>
</Container>

// Too many container contexts`}</code></pre>
              </Box>
            </Stack>
          </Box>
          <Box className="demo-card" background="#d1fae5">
            <Stack direction="column" spacing="fluid-3">
              <Text size="text-lg" weight="semibold" color="#047857">
                ✅ Better
              </Text>
              <Box className="code-block">
                <pre style={{ fontSize: '0.75rem' }}><code>{`<Container maxWidth="xl" center>
  <Grid columns="auto-fit" minSize="300px">
    <Box padding="fluid-5">
      Content
    </Box>
    <Box padding="fluid-5">
      Content
    </Box>
  </Grid>
</Container>

// Single container, efficient grid`}</code></pre>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Stack>
    </Stack>
  );
}
