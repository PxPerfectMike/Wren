import { Box, Stack, Text } from '@lib/index';

export function PositioningExamples() {
  return (
    <Stack direction="column" spacing="fluid-5">
      <Text as="h2" size="text-3xl" weight="bold">
        Positioning Utilities
      </Text>

      <Text size="text-lg" color="var(--color-text-secondary)">
        Box component now supports positioning props: position, top, right, bottom, left, and zIndex.
        Create overlays, sticky headers, floating buttons, and more.
      </Text>

      {/* Example 1: Relative + Absolute */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          Absolute Positioning
        </Text>
        <Text color="var(--color-text-secondary)">
          Position elements absolutely within a relative container. Perfect for badges, overlays, and icons.
        </Text>
        <Box className="example-container">
          <Box
            position="relative"
            className="demo-section"
            padding="fluid-6"
            style={{ minHeight: '250px', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}
          >
            {/* Top-right badge */}
            <Box
              position="absolute"
              top={10}
              right={10}
              padding="scale-2"
              background="#ef4444"
              borderRadius="4px"
              style={{ color: 'white', fontSize: '0.75rem', fontWeight: 'bold' }}
            >
              NEW
            </Box>

            {/* Bottom-left */}
            <Box
              position="absolute"
              bottom={10}
              left={10}
              padding="scale-3"
              background="#3b82f6"
              borderRadius="8px"
              style={{ color: 'white' }}
            >
              Bottom Left
            </Box>

            {/* Centered */}
            <Box
              position="absolute"
              top="50%"
              left="50%"
              padding="scale-4"
              background="#10b981"
              borderRadius="8px"
              style={{ transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 'semibold' }}
            >
              Centered
            </Box>
          </Box>
        </Box>
        <Box className="code-block">
          <pre><code>{`<Box position="relative" padding="fluid-6">
  <Text>Relative Container</Text>

  {/* Top-right badge */}
  <Box
    position="absolute"
    top={10}
    right={10}
    background="#ef4444"
  >
    NEW
  </Box>

  {/* Centered */}
  <Box
    position="absolute"
    top="50%"
    left="50%"
    style={{ transform: 'translate(-50%, -50%)' }}
  >
    Centered Content
  </Box>
</Box>`}</code></pre>
        </Box>
      </Stack>

      {/* Example 2: Sticky */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          Sticky Positioning
        </Text>
        <Text color="var(--color-text-secondary)">
          Create sticky headers or sidebars that stick during scroll.
        </Text>
        <Box className="example-container" style={{ maxHeight: '300px', overflowY: 'auto' }}>
          <Box
            position="sticky"
            top={0}
            padding="fluid-4"
            background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            zIndex={10}
            style={{
              color: 'white',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            Sticky Header (scroll to see it stick!)
          </Box>
          <Box padding="fluid-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <Box key={i} padding="scale-3" marginBottom="scale-2" className="demo-section">
                Content item {i + 1}
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="code-block">
          <pre><code>{`<Box style={{ overflowY: 'auto', maxHeight: '400px' }}>
  {/* Sticky header */}
  <Box position="sticky" top={0} zIndex={10}>
    Sticky Header
  </Box>

  {/* Scrollable content */}
  <Box padding="fluid-4">
    {content.map((item) => (
      <Box key={item.id}>{item.content}</Box>
    ))}
  </Box>
</Box>`}</code></pre>
        </Box>
      </Stack>

      {/* Example 3: Fixed */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          Fixed Positioning & Z-Index
        </Text>
        <Text color="var(--color-text-secondary)">
          Fixed elements stay in place relative to the viewport. Use zIndex to control stacking order.
          (Demo uses absolute positioning to simulate fixed behavior within the container)
        </Text>
        <Box className="example-container">
          <Box position="relative" style={{ minHeight: '280px', overflow: 'hidden', background: '#f9fafb' }}>
            {/* Simulated notification banner (top-center) */}
            <Box
              position="absolute"
              top={16}
              left="50%"
              zIndex={9999}
              padding="scale-3"
              background="#fbbf24"
              borderRadius="8px"
              style={{
                transform: 'translateX(-50%)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                fontWeight: 'semibold',
                fontSize: '0.875rem',
                whiteSpace: 'nowrap'
              }}
            >
              🔔 Notification (z-index: 9999)
            </Box>

            {/* Content area with enough top padding */}
            <Box padding="fluid-5" paddingTop="scale-10" style={{ minHeight: '200px' }}>
              <Box className="demo-section" padding="fluid-4">
                <Text weight="semibold" marginBottom="scale-2">Content Area</Text>
                <Text size="text-sm" color="var(--color-text-secondary)">
                  In a real app with position="fixed", elements stay in the same position even when scrolling.
                  Perfect for notifications, FABs, and persistent navigation.
                </Text>
              </Box>
            </Box>

            {/* Simulated floating action button (bottom-right) */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                zIndex: 1000,
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: '#8b5cf6',
                color: 'white',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '2rem',
                display: 'grid',
                placeItems: 'center',
                boxShadow: '0 4px 12px rgba(139, 92, 246, 0.4)',
                lineHeight: 1,
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              <span style={{ marginTop: '-2px' }}>+</span>
            </div>
          </Box>
        </Box>
        <Box className="code-block">
          <pre><code>{`// Floating action button (bottom-right)
<Box
  position="fixed"
  bottom={20}
  right={20}
  zIndex={1000}
  padding="scale-4"
  background="#8b5cf6"
  borderRadius="50%"
  style={{
    width: '56px',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  +
</Box>

// Notification toast (top-center)
<Box
  position="fixed"
  top={20}
  left="50%"
  zIndex={9999}
  style={{ transform: 'translateX(-50%)' }}
>
  Notification
</Box>`}</code></pre>
        </Box>
      </Stack>

      {/* Props Reference */}
      <Box className="demo-card" background="linear-gradient(135deg, #667eea15 0%, #764ba215 100%)">
        <Stack direction="column" spacing="fluid-3">
          <Text size="text-xl" weight="semibold">
            Positioning Props Reference
          </Text>
          <Stack direction="column" spacing="fluid-2" as="ul" style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <Text as="li">
              <code>position</code>: 'relative' | 'absolute' | 'fixed' | 'sticky' | 'static'
            </Text>
            <Text as="li">
              <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>: string | number (px)
            </Text>
            <Text as="li">
              <code>zIndex</code>: number
            </Text>
          </Stack>
          <Text size="text-sm" color="var(--color-text-secondary)" style={{ fontStyle: 'italic' }}>
            Numbers are converted to px automatically. Strings are used as-is for units like rem, %, etc.
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
}
