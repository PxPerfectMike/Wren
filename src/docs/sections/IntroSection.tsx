import { Box, Stack, Text } from '@lib/index';

export function IntroSection() {
  return (
    <Stack direction="column" spacing="fluid-4">
      <Text as="h2" size="text-3xl" weight="bold">
        Why Another Layout System?
      </Text>

      <Text size="text-lg" color="var(--color-text-secondary)">
        Traditional responsive design is painful. You write the same breakpoint logic over and over,
        manage multiple screen sizes, and still end up with layouts that don't adapt smoothly.
      </Text>

      <Box className="demo-card">
        <Stack direction="column" spacing="fluid-3">
          <Text size="text-xl" weight="semibold">
            The Problems
          </Text>
          <Stack as="ul" direction="column" spacing="fluid-2" style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <Text as="li">Too many breakpoints to manage</Text>
            <Text as="li">Components respond to viewport, not their container</Text>
            <Text as="li">Repetitive spacing and sizing logic everywhere</Text>
            <Text as="li">Hard to maintain consistency across the app</Text>
          </Stack>
        </Stack>
      </Box>

      <Box className="demo-card" background="linear-gradient(135deg, #667eea15 0%, #764ba215 100%)">
        <Stack direction="column" spacing="fluid-3">
          <Text size="text-xl" weight="semibold" color="var(--color-primary)">
            The Solution
          </Text>
          <Stack as="ul" direction="column" spacing="fluid-2" style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <Text as="li">
              <strong>Container Queries:</strong> Components adapt to their container, not viewport
            </Text>
            <Text as="li">
              <strong>Fluid Scales:</strong> Spacing and typography scale smoothly using CSS clamp()
            </Text>
            <Text as="li">
              <strong>Declarative API:</strong> React Native-style props that are intuitive and type-safe
            </Text>
            <Text as="li">
              <strong>Zero Breakpoints:</strong> Most layouts work perfectly without a single media query
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
