import { Box, Stack, Text, Grid, Spacer } from '@lib/index';

export function AccessibilitySection() {
  return (
    <Stack direction="column" spacing="fluid-5">
      <Text as="h2" size="text-3xl" weight="bold">
        Accessibility
      </Text>

      <Text size="text-lg" color="var(--color-text-secondary)">
        Wren is designed with accessibility in mind. Here's how it complies with WCAG guidelines
        and best practices for building accessible interfaces.
      </Text>

      {/* WCAG Compliance */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-2xl" weight="semibold">
          WCAG Compliance
        </Text>
        <Grid columns="auto-fit" minSize="300px" gap="fluid-4">
          <Box className="demo-card" background="#d1fae5">
            <Stack direction="column" spacing="fluid-3">
              <Text size="text-xl" weight="semibold" color="#047857">
                ✅ Text Scaling (WCAG 1.4.4)
              </Text>
              <Stack as="ul" direction="column" spacing="fluid-2" style={{ margin: 0, paddingLeft: '1.5rem' }}>
                <Text as="li" size="text-sm" color="#065f46">
                  Fluid typography uses <code>rem</code> units with <code>clamp()</code>
                </Text>
                <Text as="li" size="text-sm" color="#065f46">
                  Text respects browser zoom (200%+ works correctly)
                </Text>
                <Text as="li" size="text-sm" color="#065f46">
                  Container query units (cqi) continue to scale during text zoom
                </Text>
              </Stack>
            </Stack>
          </Box>
          <Box className="demo-card" background="#d1fae5">
            <Stack direction="column" spacing="fluid-3">
              <Text size="text-xl" weight="semibold" color="#047857">
                ✅ Reflow (WCAG 1.4.10)
              </Text>
              <Stack as="ul" direction="column" spacing="fluid-2" style={{ margin: 0, paddingLeft: '1.5rem' }}>
                <Text as="li" size="text-sm" color="#065f46">
                  Content reflows without horizontal scrolling
                </Text>
                <Text as="li" size="text-sm" color="#065f46">
                  Container queries enable content-aware layouts
                </Text>
                <Text as="li" size="text-sm" color="#065f46">
                  No fixed widths that break on zoom
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Stack>

      {/* Semantic HTML */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-2xl" weight="semibold">
          Semantic HTML Best Practices
        </Text>
        <Text color="var(--color-text-secondary)">
          Always maintain proper HTML semantics. Wren components support the <code>as</code> prop
          to render the correct semantic element.
        </Text>
        <Grid columns="auto-fit" minSize="300px" gap="fluid-4">
          <Box className="demo-card" background="#d1fae5">
            <Stack direction="column" spacing="fluid-3">
              <Text size="text-lg" weight="semibold" color="#047857">
                ✅ Good: Semantic
              </Text>
              <Box className="code-block">
                <pre style={{ fontSize: '0.75rem' }}><code>{`<Text as="h1" size="text-4xl">
  Page Title
</Text>

<Stack as="nav">
  <Link>Home</Link>
  <Link>About</Link>
</Stack>

<Box as="article">
  <Text as="h2">Article</Text>
  <Text as="p">Content...</Text>
</Box>`}</code></pre>
              </Box>
            </Stack>
          </Box>
          <Box className="demo-card" background="#fee2e2">
            <Stack direction="column" spacing="fluid-3">
              <Text size="text-lg" weight="semibold" color="#991b1b">
                ❌ Bad: No Semantics
              </Text>
              <Box className="code-block">
                <pre style={{ fontSize: '0.75rem' }}><code>{`<Text size="text-4xl">
  Page Title
</Text>

<Stack>
  <Box>Home</Box>
  <Box>About</Box>
</Stack>

<Box>
  <Text>Article</Text>
  <Text>Content...</Text>
</Box>`}</code></pre>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Stack>

      {/* Hidden/Show Considerations */}
      <Box className="demo-card" background="#fef3c7" style={{ borderLeft: '4px solid #d97706' }}>
        <Stack direction="column" spacing="fluid-3">
          <Text size="text-xl" weight="semibold" color="#d97706">
            ⚠️ Hidden/Show Components
          </Text>
          <Text color="#92400e">
            The Hidden and Show components use <code>display: none</code>, which removes content
            from the accessibility tree. Screen readers won't announce hidden content.
          </Text>
          <Grid columns="auto-fit" minSize="250px" gap="fluid-3" style={{ marginTop: 'var(--fluid-2)' }}>
            <Box>
              <Text weight="semibold" color="#92400e">✅ Use for:</Text>
              <Stack as="ul" direction="column" spacing="fluid-1" style={{ margin: 0, paddingLeft: '1.5rem', marginTop: 'var(--scale-2)' }}>
                <Text as="li" size="text-sm" color="#78350f">
                  Responsive UI changes
                </Text>
                <Text as="li" size="text-sm" color="#78350f">
                  Mobile vs desktop navigation
                </Text>
                <Text as="li" size="text-sm" color="#78350f">
                  Layout variations
                </Text>
              </Stack>
            </Box>
            <Box>
              <Text weight="semibold" color="#92400e">❌ Don't use for:</Text>
              <Stack as="ul" direction="column" spacing="fluid-1" style={{ margin: 0, paddingLeft: '1.5rem', marginTop: 'var(--scale-2)' }}>
                <Text as="li" size="text-sm" color="#78350f">
                  Critical content
                </Text>
                <Text as="li" size="text-sm" color="#78350f">
                  Important announcements
                </Text>
                <Text as="li" size="text-sm" color="#78350f">
                  Accessibility-required text
                </Text>
              </Stack>
            </Box>
          </Grid>
        </Stack>
      </Box>

      {/* Color Contrast */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-2xl" weight="semibold">
          Color Contrast
        </Text>
        <Text color="var(--color-text-secondary)">
          Wren doesn't enforce colors, but you should ensure your chosen colors meet WCAG standards.
        </Text>
        <Grid columns="auto-fit" minSize="250px" gap="fluid-4">
          <Box className="demo-card">
            <Stack direction="column" spacing="fluid-2">
              <Text weight="semibold" color="var(--color-primary)">
                WCAG AA (Minimum)
              </Text>
              <Stack as="ul" direction="column" spacing="fluid-1" style={{ margin: 0, paddingLeft: '1.5rem' }}>
                <Text as="li" size="text-sm" color="var(--color-text-secondary)">
                  Normal text: 4.5:1 contrast
                </Text>
                <Text as="li" size="text-sm" color="var(--color-text-secondary)">
                  Large text: 3:1 contrast
                </Text>
              </Stack>
            </Stack>
          </Box>
          <Box className="demo-card">
            <Stack direction="column" spacing="fluid-2">
              <Text weight="semibold" color="var(--color-primary)">
                WCAG AAA (Enhanced)
              </Text>
              <Stack as="ul" direction="column" spacing="fluid-1" style={{ margin: 0, paddingLeft: '1.5rem' }}>
                <Text as="li" size="text-sm" color="var(--color-text-secondary)">
                  Normal text: 7:1 contrast
                </Text>
                <Text as="li" size="text-sm" color="var(--color-text-secondary)">
                  Large text: 4.5:1 contrast
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Grid>
        <Box className="demo-card" background="linear-gradient(135deg, #667eea15 0%, #764ba215 100%)">
          <Stack direction="row" align="center" spacing="fluid-3">
            <Text size="text-3xl">🔧</Text>
            <Box>
              <Text weight="semibold">Contrast Checker Tool</Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Use <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>WebAIM Contrast Checker</a> to verify your color combinations.
              </Text>
            </Box>
          </Stack>
        </Box>
      </Stack>

      {/* Focus Management */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-2xl" weight="semibold">
          Focus Management & Keyboard Navigation
        </Text>
        <Text color="var(--color-text-secondary)">
          Wren doesn't override native focus styles. Ensure interactive elements are keyboard accessible.
        </Text>
        <Grid columns="auto-fit" minSize="300px" gap="fluid-4">
          <Box className="demo-card" background="#d1fae5">
            <Stack direction="column" spacing="fluid-3">
              <Text size="text-lg" weight="semibold" color="#047857">
                ✅ Good Practice
              </Text>
              <Box className="code-block">
                <pre style={{ fontSize: '0.75rem' }}><code>{`// Ensure interactive Box is focusable
<Box
  as="button"
  padding="fluid-3"
  style={{
    cursor: 'pointer',
    // Don't remove focus styles
  }}
>
  Clickable
</Box>

// Proper link semantics
<Box
  as="a"
  href="/page"
  padding="fluid-2"
>
  Navigate
</Box>`}</code></pre>
              </Box>
            </Stack>
          </Box>
          <Box className="demo-card" background="#fee2e2">
            <Stack direction="column" spacing="fluid-3">
              <Text size="text-lg" weight="semibold" color="#991b1b">
                ❌ Avoid
              </Text>
              <Box className="code-block">
                <pre style={{ fontSize: '0.75rem' }}><code>{`// Don't remove focus outlines
<Box
  onClick={handleClick}
  style={{
    outline: 'none', // ❌ Bad
  }}
>
  Click me
</Box>

// Don't make divs clickable
<Box
  onClick={handleClick} // ❌ Bad
>
  Not keyboard accessible
</Box>`}</code></pre>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Stack>

      {/* ARIA Attributes */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-2xl" weight="semibold">
          ARIA Attributes
        </Text>
        <Text color="var(--color-text-secondary)">
          Use ARIA attributes when semantic HTML isn't enough. Wren components pass through all ARIA props.
        </Text>
        <Box className="demo-card">
          <Box className="code-block">
            <pre><code>{`// Hide decorative content from screen readers
<Spacer aria-hidden="true" />

// Label interactive elements
<Box
  as="button"
  aria-label="Close dialog"
  onClick={handleClose}
>
  ✕
</Box>

// Announce dynamic content
<Box role="alert" aria-live="polite">
  Form submitted successfully!
</Box>

// Describe relationships
<Box as="label" htmlFor="email">
  Email
</Box>
<Box as="input" id="email" aria-describedby="email-hint" />
<Text id="email-hint" size="text-sm">
  We'll never share your email
</Text>`}</code></pre>
          </Box>
        </Box>
      </Stack>

      {/* Testing Checklist */}
      <Box className="demo-card" background="linear-gradient(135deg, #667eea15 0%, #764ba215 100%)">
        <Stack direction="column" spacing="fluid-3">
          <Text size="text-2xl" weight="bold">
            Accessibility Testing Checklist
          </Text>
          <Grid columns="auto-fit" minSize="250px" gap="fluid-3">
            <Stack direction="column" spacing="fluid-2">
              <Text weight="semibold">✅ Keyboard Navigation</Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Tab through all interactive elements. Everything reachable?
              </Text>
            </Stack>
            <Stack direction="column" spacing="fluid-2">
              <Text weight="semibold">✅ Screen Reader Test</Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Use VoiceOver (Mac) or NVDA (Windows) to verify content announcement.
              </Text>
            </Stack>
            <Stack direction="column" spacing="fluid-2">
              <Text weight="semibold">✅ Zoom to 200%</Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Text and layout should remain usable at 200% browser zoom.
              </Text>
            </Stack>
            <Stack direction="column" spacing="fluid-2">
              <Text weight="semibold">✅ Color Contrast</Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Verify all text meets WCAG AA minimum (4.5:1 for normal text).
              </Text>
            </Stack>
            <Stack direction="column" spacing="fluid-2">
              <Text weight="semibold">✅ Focus Indicators</Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Visible focus rings on all interactive elements.
              </Text>
            </Stack>
            <Stack direction="column" spacing="fluid-2">
              <Text weight="semibold">✅ Semantic HTML</Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                Proper heading hierarchy, landmarks, and element choices.
              </Text>
            </Stack>
          </Grid>
        </Stack>
      </Box>
    </Stack>
  );
}
