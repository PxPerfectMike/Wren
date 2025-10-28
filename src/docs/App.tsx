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
          <Stack direction="row" align="center" justify="center" spacing="fluid-4" marginBottom="scale-2">
            <img src="/logo.svg" alt="Wren Logo" style={{ width: '64px', height: '64px' }} />
            <Text as="h1" size="text-5xl" weight="bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Wren
            </Text>
          </Stack>
          <Text size="text-xl" style={{ opacity: 0.9 }} align="center">
            React components with container queries and fluid scales. Dramatically fewer breakpoints.
          </Text>
          <Text size="text-sm" style={{ opacity: 0.7 }} align="center" marginTop="scale-2">
            (Yes, this entire site is built with Wren)
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

          {/* Meta Section - Site built with Wren */}
          <Box className="demo-card" background="linear-gradient(135deg, #667eea15 0%, #764ba215 100%)" style={{ marginTop: 'var(--fluid-8)' }}>
            <Stack direction="column" spacing="fluid-4">
              <Stack direction="row" align="center" spacing="fluid-2">
                <Text size="text-2xl" weight="bold">
                  🎨 This Site is Wren
                </Text>
              </Stack>
              <Text size="text-lg">
                Every layout, every spacing decision, every responsive behavior you see here?
                Built <em>entirely</em> with Wren. No custom CSS breakpoints. No media queries. Just components.
              </Text>
              <Stack direction="column" spacing="fluid-2">
                <Text weight="semibold">This site uses:</Text>
                <Stack as="ul" direction="column" spacing="fluid-2" style={{ margin: 0, paddingLeft: '1.5rem' }}>
                  <Text as="li"><code>Container</code> for responsive contexts</Text>
                  <Text as="li"><code>Stack</code> and <code>Grid</code> for all layouts</Text>
                  <Text as="li"><code>Box</code> for spacing and structure</Text>
                  <Text as="li"><code>fluid-*</code> scales for all spacing</Text>
                  <Text as="li">Minimal custom breakpoints ✨</Text>
                </Stack>
              </Stack>
              <Text size="text-sm" color="var(--color-text-secondary)" style={{ fontStyle: 'italic' }}>
                I'm not just showing you what Wren can do—I'm proving it works.
              </Text>
            </Stack>
          </Box>
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
          <Stack direction="row" align="center" justify="center" spacing="scale-2">
            <Text align="center" color="var(--color-text-secondary)">
              Made with Wren
            </Text>
            <img src="/logo.svg" alt="Wren Logo" style={{ width: '20px', height: '20px' }} />
            <Text align="center" color="var(--color-text-secondary)">
              • No breakpoints were harmed in the making of this site
            </Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
