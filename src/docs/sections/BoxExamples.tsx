import { Box, Stack, Text } from '@lib/index';

export function BoxExamples() {
  return (
    <Stack direction="column" spacing="fluid-5">
      <Text as="h2" size="text-3xl" weight="bold">
        Box Component
      </Text>

      <Text size="text-lg" color="var(--color-text-secondary)">
        The fundamental layout primitive. Provides spacing, flex layout, and sizing props.
      </Text>

      {/* Example 1: Flex Layout */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          Flex-based Proportional Layout
        </Text>
        <Text color="var(--color-text-secondary)">
          Use <code>flex</code> props to create layouts with proportional sizing (like React Native).
        </Text>
        <Box className="example-container">
          <Stack direction="responsive" spacing="fluid-4">
            <Box
              flex={1}
              padding="fluid-5"
              background="var(--color-primary)"
              borderRadius="8px"
              style={{ color: 'white', textAlign: 'center' }}
            >
              <Text weight="semibold">flex={'{1}'}</Text>
              <Text size="text-sm">Sidebar (25%)</Text>
            </Box>
            <Box
              flex={3}
              padding="fluid-5"
              background="var(--color-secondary)"
              borderRadius="8px"
              style={{ color: 'white', textAlign: 'center' }}
            >
              <Text weight="semibold">flex={'{3}'}</Text>
              <Text size="text-sm">Main Content (75%)</Text>
            </Box>
          </Stack>
        </Box>
        <Box className="code-block">
          <pre><code>{`<Stack direction="responsive" spacing="fluid-4">
  <Box flex={1} padding="fluid-5">
    Sidebar
  </Box>
  <Box flex={3} padding="fluid-5">
    Main Content
  </Box>
</Stack>`}</code></pre>
        </Box>
      </Stack>

      {/* Example 2: Fluid Spacing */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          Fluid Spacing
        </Text>
        <Text color="var(--color-text-secondary)">
          Padding and margins scale automatically with viewport size using fluid scales.
        </Text>
        <Box className="example-container">
          <Stack direction="column" spacing="fluid-3">
            <Box
              padding="fluid-3"
              background="#fef3c7"
              border="2px solid #fbbf24"
              borderRadius="8px"
            >
              <Text>padding="fluid-3" (scales from 12px to 16px)</Text>
            </Box>
            <Box
              padding="fluid-5"
              background="#dbeafe"
              border="2px solid #3b82f6"
              borderRadius="8px"
            >
              <Text>padding="fluid-5" (scales from 24px to 32px)</Text>
            </Box>
            <Box
              padding="fluid-7"
              background="#fce7f3"
              border="2px solid #ec4899"
              borderRadius="8px"
            >
              <Text>padding="fluid-7" (scales from 48px to 64px)</Text>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
