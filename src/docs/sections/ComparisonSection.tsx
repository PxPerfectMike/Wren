import { Box, Stack, Text, Grid } from '@lib/index';

export function ComparisonSection() {
  return (
    <Stack direction="column" spacing="fluid-5">
      <Text as="h2" size="text-3xl" weight="bold">
        Before & After (The Difference is Wild)
      </Text>

      <Text size="text-lg" color="var(--color-text-secondary)">
        Same layout. Traditional CSS vs Wren. You decide which one you'd rather write. 🤷
      </Text>

      <Stack direction="responsive" spacing="fluid-5" align="stretch">
        {/* Traditional Approach */}
        <Box flex={1} className="demo-card" background="#fee2e2">
          <Stack direction="column" spacing="fluid-3">
            <Text size="text-xl" weight="semibold" color="#991b1b">
              Traditional CSS
            </Text>
            <Box className="code-block" style={{ background: 'white' }}>
              <pre><code>{`.sidebar {
  padding: 16px;
}

.content {
  padding: 16px;
}

@media (min-width: 640px) {
  .sidebar {
    padding: 20px;
  }
  .content {
    padding: 20px;
  }
}

@media (min-width: 768px) {
  .sidebar {
    padding: 24px;
    width: 25%;
  }
  .content {
    padding: 24px;
    width: 75%;
  }
}

@media (min-width: 1024px) {
  .sidebar {
    padding: 32px;
  }
  .content {
    padding: 32px;
  }
}`}</code></pre>
            </Box>
            <Text size="text-sm" color="#991b1b" weight="medium">
              Problems: Multiple breakpoints, repetitive code, viewport-based only
            </Text>
          </Stack>
        </Box>

        {/* Wren */}
        <Box flex={1} className="demo-card" background="#d1fae5">
          <Stack direction="column" spacing="fluid-3">
            <Text size="text-xl" weight="semibold" color="#047857">
              Wren
            </Text>
            <Box className="code-block" style={{ background: 'white' }}>
              <pre><code>{`<Stack
  direction="responsive"
  spacing="fluid-4"
>
  <Box
    flex={1}
    padding="fluid-5"
  >
    Sidebar
  </Box>
  <Box
    flex={3}
    padding="fluid-5"
  >
    Content
  </Box>
</Stack>



// That's it! ✨`}</code></pre>
            </Box>
            <Text size="text-sm" color="#047857" weight="medium">
              Benefits: Minimal breakpoints, fluid scaling, container-based, declarative API
            </Text>
          </Stack>
        </Box>
      </Stack>

      {/* Key Advantages */}
      <Box className="demo-card" background="linear-gradient(135deg, #667eea15 0%, #764ba215 100%)">
        <Stack direction="column" spacing="fluid-4">
          <Text size="text-2xl" weight="bold">
            Key Advantages
          </Text>
          <Grid columns="auto-fit" minSize="250px" gap="fluid-4">
            <Stack direction="column" spacing="fluid-2">
              <Text size="text-lg" weight="semibold">
                🎯 Container-Based
              </Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Components respond to their container size, not just viewport. Compose layouts anywhere.
              </Text>
            </Stack>
            <Stack direction="column" spacing="fluid-2">
              <Text size="text-lg" weight="semibold">
                📏 Fluid Scales
              </Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Spacing and typography scale smoothly using CSS clamp(). No jumpy transitions.
              </Text>
            </Stack>
            <Stack direction="column" spacing="fluid-2">
              <Text size="text-lg" weight="semibold">
                ⚡ Less Code
              </Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Dramatically less responsive code. Minimal media queries for most use cases.
              </Text>
            </Stack>
            <Stack direction="column" spacing="fluid-2">
              <Text size="text-lg" weight="semibold">
                🎨 Type-Safe
              </Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Full TypeScript support with autocomplete for all props and scales.
              </Text>
            </Stack>
            <Stack direction="column" spacing="fluid-2">
              <Text size="text-lg" weight="semibold">
                🔧 Maintainable
              </Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Centralized scale system ensures consistency across your entire app.
              </Text>
            </Stack>
            <Stack direction="column" spacing="fluid-2">
              <Text size="text-lg" weight="semibold">
                🚀 Modern
              </Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Built on latest CSS features: Container Queries, Custom Properties, Grid.
              </Text>
            </Stack>
          </Grid>
        </Stack>
      </Box>
    </Stack>
  );
}
