import { Box, Stack, Text } from '@lib/index';

export function IntroSection() {
  return (
    <Stack direction="column" spacing="fluid-4">
      <Text as="h2" size="text-3xl" weight="bold">
        The Problem I Got Tired Of
      </Text>

      <Text size="text-lg" color="var(--color-text-secondary)">
        Let's be honest: breakpoints suck. 😤 You write the same media query logic over and over,
        manage multiple screen sizes, and <em>still</em> end up with layouts that jump around awkwardly.
        I wanted layouts that just... work.
      </Text>

      <Box className="demo-card" background="linear-gradient(135deg, #667eea15 0%, #764ba215 100%)">
        <Stack direction="column" spacing="fluid-3">
          <Text size="text-xl" weight="semibold" color="var(--color-primary)">
            How Wren fixes it
          </Text>
          <Stack as="ul" direction="column" spacing="fluid-2" style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <Text as="li">
              <strong>Container Queries:</strong> Components respond to their container, not just the viewport
            </Text>
            <Text as="li">
              <strong>Fluid Scales:</strong> Spacing and typography that scales smoothly between min and max values
            </Text>
            <Text as="li">
              <strong>Declarative API:</strong> If you've used React Native, you already know this pattern
            </Text>
            <Text as="li">
              <strong>Zero Breakpoints:</strong> Most layouts need exactly zero media queries
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
