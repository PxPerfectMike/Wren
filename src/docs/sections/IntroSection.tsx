import { Box, Stack, Text } from '@lib/index';

export function IntroSection() {
  return (
    <Stack direction="column" spacing="fluid-4">
      <Stack direction="row" justify="space-between" align="center">
        <Text as="h2" size="text-3xl" weight="bold">
          The Problem We Got Tired Of
        </Text>
        <Text size="text-sm" color="var(--color-primary)" style={{ opacity: 0.8 }}>
          👀 This section: built with Wren
        </Text>
      </Stack>

      <Text size="text-lg" color="var(--color-text-secondary)">
        Let's be honest: breakpoints suck. 😤 You write the same media query logic over and over,
        manage multiple screen sizes, and <em>still</em> end up with layouts that jump around awkwardly.
      </Text>

      <Box className="demo-card">
        <Stack direction="column" spacing="fluid-3">
          <Text size="text-xl" weight="semibold">
            What drives us crazy
          </Text>
          <Stack as="ul" direction="column" spacing="fluid-2" style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <Text as="li">Too many breakpoints (seriously, how many do we need?)</Text>
            <Text as="li">Components that only care about viewport size (what about context?)</Text>
            <Text as="li">Copy-pasting the same spacing logic everywhere</Text>
            <Text as="li">Trying to keep everything consistent (spoiler: you can't)</Text>
          </Stack>
        </Stack>
      </Box>

      <Box className="demo-card" background="linear-gradient(135deg, #667eea15 0%, #764ba215 100%)">
        <Stack direction="column" spacing="fluid-3">
          <Text size="text-xl" weight="semibold" color="var(--color-primary)">
            How Wren fixes it
          </Text>
          <Stack as="ul" direction="column" spacing="fluid-2" style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <Text as="li">
              <strong>Container Queries:</strong> Your components finally know where they are
            </Text>
            <Text as="li">
              <strong>Fluid Scales:</strong> Everything scales smoothly (no more jumpy transitions!)
            </Text>
            <Text as="li">
              <strong>Declarative API:</strong> If you've used React Native, you already know this
            </Text>
            <Text as="li">
              <strong>Zero Breakpoints:</strong> We're not kidding. Most layouts need exactly zero.
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
