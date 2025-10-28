import { Box, Stack, Text, Container } from '@lib/index';

export function AlternativesSection() {
  return (
    <Stack direction="column" spacing="fluid-5">
      <Text as="h2" size="text-3xl" weight="bold">
        Why Not Just Use...?
      </Text>

      <Text size="text-lg" color="var(--color-text-secondary)">
        Let's address the elephant in the room: why use Wren when other solutions exist?
      </Text>

      {/* CSS Grid minmax() */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          "Why not CSS Grid's minmax()?"
        </Text>

        <Box className="demo-card" background="#f9fafb">
          <Stack direction="column" spacing="fluid-3">
            <Text weight="semibold">What minmax() does well:</Text>
            <Stack as="ul" direction="column" spacing="fluid-2" style={{ marginLeft: '1.5rem', listStyle: 'disc' }}>
              <Text as="li">Creates responsive grids without media queries</Text>
              <Text as="li">Auto-fits columns based on available space</Text>
            </Stack>

            <Text weight="semibold" marginTop="scale-3">What minmax() can't do:</Text>
            <Stack as="ul" direction="column" spacing="fluid-2" style={{ marginLeft: '1.5rem', listStyle: 'disc' }}>
              <Text as="li">Change internal component layout based on column width</Text>
              <Text as="li">Hide/show elements based on container size</Text>
              <Text as="li">Adjust spacing based on available space</Text>
              <Text as="li">Make individual grid items adapt independently</Text>
            </Stack>
          </Stack>
        </Box>

        <Box className="code-block">
          <pre><code>{`// CSS Grid can create responsive columns
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

// But each card still needs to adapt to its column width
// That's where container queries come in!

<Grid columns="auto-fit" minSize="250px">
  <AdaptiveCard /> {/* Adapts to column width */}
</Grid>`}</code></pre>
        </Box>

        <Text size="text-base" style={{ fontStyle: 'italic' }}>
          <strong>The verdict:</strong> Grid is great for layout. Container queries (Wren) are great for making components adapt to their layout context.
          Use both together!
        </Text>
      </Stack>

      {/* Flexbox with flex-wrap */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          "Why not flexbox with flex-wrap?"
        </Text>

        <Box className="demo-card" background="#f9fafb">
          <Stack direction="column" spacing="fluid-3">
            <Text weight="semibold">What flex-wrap does well:</Text>
            <Stack as="ul" direction="column" spacing="fluid-2" style={{ marginLeft: '1.5rem', listStyle: 'disc' }}>
              <Text as="li">Creates flowing layouts that wrap naturally</Text>
              <Text as="li">Simple to understand and implement</Text>
            </Stack>

            <Text weight="semibold" marginTop="scale-3">What flex-wrap can't do:</Text>
            <Stack as="ul" direction="column" spacing="fluid-2" style={{ marginLeft: '1.5rem', listStyle: 'disc' }}>
              <Text as="li">Tell a component "you're currently 300px wide, adjust accordingly"</Text>
              <Text as="li">Make components respond to their allocated space</Text>
              <Text as="li">Apply different styles based on flex item size</Text>
            </Stack>
          </Stack>
        </Box>

        <Box className="code-block">
          <pre><code>{`// Flexbox can wrap items
display: flex;
flex-wrap: wrap;

// But wrapped items don't know their size context
// Your card doesn't know if it's 200px or 800px wide

// With Wren + container queries:
<Stack direction="row" wrap>
  <AdaptiveCard /> {/* Knows its width, adapts accordingly */}
</Stack>`}</code></pre>
        </Box>

        <Text size="text-base" style={{ fontStyle: 'italic' }}>
          <strong>The verdict:</strong> Flexbox controls layout flow. Wren (with container queries) makes components aware of their size.
          Again, use both!
        </Text>
      </Stack>

      {/* Utility CSS (Tailwind) */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          "Why not Tailwind CSS?"
        </Text>

        <Box className="demo-card" background="#f9fafb">
          <Stack direction="column" spacing="fluid-3">
            <Text weight="semibold">What Tailwind does well:</Text>
            <Stack as="ul" direction="column" spacing="fluid-2" style={{ marginLeft: '1.5rem', listStyle: 'disc' }}>
              <Text as="li">Rapid prototyping with utility classes</Text>
              <Text as="li">Responsive variants (sm:, md:, lg:, etc.)</Text>
              <Text as="li">Excellent developer experience</Text>
            </Stack>

            <Text weight="semibold" marginTop="scale-3">What Tailwind can't do:</Text>
            <Stack as="ul" direction="column" spacing="fluid-2" style={{ marginLeft: '1.5rem', listStyle: 'disc' }}>
              <Text as="li">Container-based responsive behavior (only viewport-based)</Text>
              <Text as="li">Fluid scales that adapt smoothly (uses fixed breakpoints)</Text>
              <Text as="li">Component encapsulation (styles in JSX, not separate CSS)</Text>
            </Stack>
          </Stack>
        </Box>

        <Box className="code-block">
          <pre><code>{`// Tailwind: viewport-based responsive
<div className="md:flex md:space-x-4">
  <Card /> {/* Changes at 768px viewport */}
</div>

// Wren: container-based responsive
<Stack direction="responsive">
  <Card /> {/* Changes based on Stack width */}
</Stack>

// Different approaches for different needs!`}</code></pre>
        </Box>

        <Text size="text-base" style={{ fontStyle: 'italic' }}>
          <strong>The verdict:</strong> Tailwind is phenomenal for viewport-based responsive design. Wren excels at container-based responsive design.
          You can even use them together!
        </Text>
      </Stack>

      {/* Component Libraries (Chakra, MUI) */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          "Why not Chakra UI or Material UI?"
        </Text>

        <Box className="demo-card" background="#f9fafb">
          <Stack direction="column" spacing="fluid-3">
            <Text weight="semibold">What full component libraries offer:</Text>
            <Stack as="ul" direction="column" spacing="fluid-2" style={{ marginLeft: '1.5rem', listStyle: 'disc' }}>
              <Text as="li">Complete UI component sets (buttons, forms, modals, etc.)</Text>
              <Text as="li">Theming systems</Text>
              <Text as="li">Accessibility built-in</Text>
              <Text as="li">Battle-tested in production</Text>
            </Stack>

            <Text weight="semibold" marginTop="scale-3">What they don't offer:</Text>
            <Stack as="ul" direction="column" spacing="fluid-2" style={{ marginLeft: '1.5rem', listStyle: 'disc' }}>
              <Text as="li">Container-based responsive behavior (still viewport-based)</Text>
              <Text as="li">Lightweight footprint (often 100kb+ gzipped)</Text>
              <Text as="li">Fluid scales with smooth transitions</Text>
              <Text as="li">Progressive enhancement with modern CSS</Text>
            </Stack>
          </Stack>
        </Box>

        <Stack direction="column" spacing="fluid-2">
          <Text weight="semibold">Bundle Size Comparison:</Text>
          <Box className="demo-section" padding="fluid-3">
            <Stack direction="column" spacing="fluid-2" style={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
              <Text>Wren:        ~8kb gzipped (layout primitives only)</Text>
              <Text>Chakra UI:   ~50-120kb gzipped (full component library)</Text>
              <Text>Material UI: ~80-150kb gzipped (full component library)</Text>
              <Text>Tailwind:    Varies based on usage (can be 10-50kb+)</Text>
            </Stack>
          </Box>
        </Stack>

        <Text size="text-base" style={{ fontStyle: 'italic' }}>
          <strong>The verdict:</strong> Chakra/MUI provide complete component systems. Wren provides layout primitives with container-query superpowers.
          Different tools for different needs. Wren can even work alongside them for layout!
        </Text>
      </Stack>

      {/* The Big Picture */}
      <Box style={{ background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)', padding: 'var(--fluid-6)', borderRadius: '8px', borderTop: '4px solid #667eea' }}>
        <Stack direction="column" spacing="fluid-4">
          <Text size="text-2xl" weight="bold">
            🎯 The Big Picture
          </Text>
          <Text size="text-lg">
            Wren isn't trying to replace these tools. It's solving a specific problem that they don't:
          </Text>
          <Stack direction="column" spacing="fluid-2" style={{ marginLeft: '1.5rem' }}>
            <Text size="text-base">
              <strong>The Problem:</strong> Making components that adapt to their <em>container size</em>, not just the viewport.
            </Text>
            <Text size="text-base">
              <strong>The Solution:</strong> Container queries + fluid scales + intuitive React API.
            </Text>
          </Stack>
          <Text size="text-lg" weight="semibold" style={{ color: '#667eea' }}>
            Use Wren for container-aware layouts. Use other tools for what they do best. Mix and match!
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
}
