import { Container, Box, Stack, Text } from '@lib/index';
import { IntroSection } from './sections/IntroSection';
import { ScalePreview } from './sections/ScalePreview';
import { BoxExamples } from './sections/BoxExamples';
import { StackExamples } from './sections/StackExamples';
import { GridExamples } from './sections/GridExamples';
import { ComparisonSection } from './sections/ComparisonSection';

function App() {
  return (
    <Box background="var(--color-bg)">
      {/* Header */}
      <Box
        background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        padding="fluid-6"
        style={{ color: 'white' }}
      >
        <Container maxWidth="xl" center>
          <Text as="h1" size="text-5xl" weight="bold" marginBottom="scale-2">
            Fluid Layout System
          </Text>
          <Text size="text-xl" style={{ opacity: 0.9 }}>
            Responsive design without breakpoints. Built on container queries and fluid scales.
          </Text>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="xl" center>
        <Stack direction="column" spacing="fluid-8" padding="fluid-6">
          <IntroSection />
          <ScalePreview />
          <BoxExamples />
          <StackExamples />
          <GridExamples />
          <ComparisonSection />
        </Stack>
      </Container>

      {/* Footer */}
      <Box
        background="var(--color-bg-secondary)"
        padding="fluid-6"
        marginTop="fluid-8"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <Container maxWidth="xl" center>
          <Text align="center" color="var(--color-text-secondary)">
            Built with React, TypeScript, and CSS Container Queries
          </Text>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
