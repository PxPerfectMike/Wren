import { Container, Box, Stack, Grid, Text, Hidden } from '@lib/index';

// A single Card component that adapts to its container
// NO viewport media queries, NO props for size variants, NO class variations
function AdaptiveCard() {
  return (
    <Box
      className="demo-section"
      padding="fluid-4"
      borderRadius="8px"
      style={{ background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
    >
      <Stack direction="responsive" spacing="fluid-3" align="center">
        {/* Image side */}
        <Box
          flex={1}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '8px',
            minHeight: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '2rem'
          }}
        >
          📦
        </Box>

        {/* Content side */}
        <Box flex={2}>
          <Stack direction="column" spacing="fluid-2">
            <Text size="text-xl" weight="bold">Product Card</Text>

            {/* This detail only shows when container is wide enough */}
            <Hidden below={300}>
              <Text size="text-sm" color="var(--color-text-secondary)">
                This description appears when the card has room for it.
                No viewport queries needed - it responds to the container.
              </Text>
            </Hidden>

            {/* Price and button adapt their layout */}
            <Stack direction="responsive" spacing="fluid-3" align="center">
              <Text size="text-lg" weight="semibold" style={{ color: '#667eea' }}>
                $49.99
              </Text>
              <Box
                padding="scale-2"
                paddingX="scale-4"
                background="#667eea"
                borderRadius="4px"
                style={{ color: 'white', cursor: 'pointer', fontSize: '0.875rem' }}
              >
                Add to Cart
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export function KillerDemoSection() {
  return (
    <Stack direction="column" spacing="fluid-5">
      <Box style={{ background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)', padding: 'var(--fluid-6)', borderRadius: '8px' }}>
        <Stack direction="column" spacing="fluid-4">
          <Text as="h2" size="text-3xl" weight="bold">
            🎯 The Killer Demo
          </Text>
          <Text size="text-xl" color="var(--color-text-secondary)">
            One component. Multiple contexts. Zero viewport queries. This is impossible with traditional CSS.
          </Text>
        </Stack>
      </Box>

      {/* The Challenge */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-2xl" weight="bold">
          The Challenge: Traditional CSS Can't Do This
        </Text>
        <Text size="text-lg" color="var(--color-text-secondary)">
          Below is the <strong>exact same component</strong> rendered in different contexts.
          With traditional viewport-based CSS, you'd need:
        </Text>
        <Stack as="ul" direction="column" spacing="fluid-2" style={{ marginLeft: '1.5rem', listStyle: 'disc' }}>
          <Text as="li">Different class names for each variant</Text>
          <Text as="li">Props to control size behavior</Text>
          <Text as="li">Complicated viewport media queries that break when nested</Text>
          <Text as="li">Multiple component variants (CardSmall, CardLarge, etc.)</Text>
        </Stack>
        <Text size="text-lg" weight="semibold" style={{ color: '#667eea' }}>
          With Wren: Write it once. Works everywhere. ✨
        </Text>
      </Stack>

      {/* Demo 1: Full Width */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          Context 1: Full Width Container
        </Text>
        <Container maxWidth="xl">
          <AdaptiveCard />
        </Container>
        <Box className="code-block">
          <pre style={{ fontSize: '0.8rem' }}><code>{`<Container maxWidth="xl">
  <AdaptiveCard />
</Container>

// Card is WIDE: horizontal layout, full description visible`}</code></pre>
        </Box>
      </Stack>

      {/* Demo 2: Sidebar */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          Context 2: Narrow Sidebar
        </Text>
        <Box style={{ maxWidth: '300px' }}>
          <AdaptiveCard />
        </Box>
        <Box className="code-block">
          <pre style={{ fontSize: '0.8rem' }}><code>{`<Box style={{ maxWidth: '300px' }}>
  <AdaptiveCard />
</Box>

// Card is NARROW: stacks vertically, hides description`}</code></pre>
        </Box>
      </Stack>

      {/* Demo 3: Grid Layout */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          Context 3: Auto-Fit Grid
        </Text>
        <Text color="var(--color-text-secondary)">
          Resize your browser. Each card adapts to its grid column width independently.
        </Text>
        <Container>
          <Grid columns="auto-fit" minSize="250px" gap="fluid-4">
            <AdaptiveCard />
            <AdaptiveCard />
            <AdaptiveCard />
          </Grid>
        </Container>
        <Box className="code-block">
          <pre style={{ fontSize: '0.8rem' }}><code>{`<Grid columns="auto-fit" minSize="250px" gap="fluid-4">
  <AdaptiveCard />
  <AdaptiveCard />
  <AdaptiveCard />
</Grid>

// Each card adapts to its column width
// Try resizing - they respond independently!`}</code></pre>
        </Box>
      </Stack>

      {/* Demo 4: Mixed Layout */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          Context 4: Complex Layout (Wide + Narrow)
        </Text>
        <Text color="var(--color-text-secondary)">
          Same component in different sized containers <strong>on the same page</strong>.
          Left cards are in a narrow sidebar (1/4 width), right cards are in wide main content (3/4 width).
          Traditional CSS would require viewport queries that apply globally - impossible to have different layouts at the same viewport size.
        </Text>
        <Container>
          <Stack direction="row" spacing="fluid-4" align="stretch">
            {/* Narrow sidebar */}
            <Box flex={1} style={{ minWidth: '200px' }}>
              <Stack direction="column" spacing="fluid-3">
                <Text weight="semibold" size="text-sm" style={{ textTransform: 'uppercase', color: 'var(--color-text-secondary)' }}>
                  Sidebar (1/4 width)
                </Text>
                <AdaptiveCard />
                <AdaptiveCard />
              </Stack>
            </Box>

            {/* Wide main area */}
            <Box flex={3}>
              <Stack direction="column" spacing="fluid-3">
                <Text weight="semibold" size="text-sm" style={{ textTransform: 'uppercase', color: 'var(--color-text-secondary)' }}>
                  Main Content (3/4 width)
                </Text>
                <AdaptiveCard />
                <AdaptiveCard />
              </Stack>
            </Box>
          </Stack>
        </Container>
        <Box className="code-block">
          <pre style={{ fontSize: '0.8rem' }}><code>{`<Stack direction="responsive" spacing="fluid-4">
  <Box flex={1}>
    <AdaptiveCard /> {/* Narrow context */}
  </Box>
  <Box flex={3}>
    <AdaptiveCard /> {/* Wide context */}
  </Box>
</Stack>

// Same component, different layouts, SAME PAGE
// This is why container queries are the future`}</code></pre>
        </Box>
      </Stack>

      {/* The Reveal */}
      <Box style={{ background: '#fef3c7', padding: 'var(--fluid-5)', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
        <Stack direction="column" spacing="fluid-3">
          <Text size="text-xl" weight="bold" style={{ color: '#92400e' }}>
            🎭 The Secret: Container Queries
          </Text>
          <Text size="text-base" style={{ color: '#78350f' }}>
            Every card you see above is <strong>the exact same component code</strong>.
            No props. No variants. No viewport queries. Just one component that adapts to its container.
          </Text>
          <Text size="text-base" style={{ color: '#78350f' }}>
            <strong>Traditional CSS:</strong> "Is the viewport 768px? Change the card layout globally."
          </Text>
          <Text size="text-base" style={{ color: '#78350f' }}>
            <strong>Wren with Container Queries:</strong> "Is this card's container 300px? Change this card."
          </Text>
          <Text size="text-base" weight="semibold" style={{ color: '#78350f' }}>
            This is why Wren's approach is fundamentally different. Your components become truly reusable.
          </Text>
        </Stack>
      </Box>

      {/* Call to Action */}
      <Box style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: 'var(--fluid-6)', borderRadius: '8px', color: 'white' }}>
        <Stack direction="column" spacing="fluid-4" align="center">
          <Text size="text-2xl" weight="bold" align="center">
            Try Building This With Viewport Media Queries
          </Text>
          <Text size="text-lg" align="center" style={{ opacity: 0.9 }}>
            You'll quickly realize why container-based layouts are the future of responsive design.
          </Text>
          <Text size="text-base" align="center" style={{ opacity: 0.8 }}>
            One component. Infinite contexts. Zero compromises.
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
}
