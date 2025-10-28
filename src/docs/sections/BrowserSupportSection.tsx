import { Box, Stack, Text, Grid } from '@lib/index';

export function BrowserSupportSection() {
  return (
    <Stack direction="column" spacing="fluid-5">
      <Text as="h2" size="text-3xl" weight="bold">
        Browser Support
      </Text>

      <Text size="text-lg" color="var(--color-text-secondary)">
        Wren requires modern browsers with CSS Container Queries support.
        Progressive enhancement ensures the best experience where available.
      </Text>

      {/* Requirements */}
      <Box className="demo-card" background="linear-gradient(135deg, #667eea15 0%, #764ba215 100%)">
        <Stack direction="column" spacing="fluid-4">
          <Text size="text-2xl" weight="bold">
            Minimum Browser Versions
          </Text>
          <Grid columns="auto-fit" minSize="200px" gap="fluid-4">
            <Stack direction="column" spacing="fluid-2">
              <Text size="text-lg" weight="semibold">
                Chrome / Edge
              </Text>
              <Text size="text-3xl" weight="bold" color="#667eea">
                105+
              </Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                September 2022
              </Text>
            </Stack>
            <Stack direction="column" spacing="fluid-2">
              <Text size="text-lg" weight="semibold">
                Safari
              </Text>
              <Text size="text-3xl" weight="bold" color="#667eea">
                16+
              </Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                September 2022
              </Text>
            </Stack>
            <Stack direction="column" spacing="fluid-2">
              <Text size="text-lg" weight="semibold">
                Firefox
              </Text>
              <Text size="text-3xl" weight="bold" color="#667eea">
                110+
              </Text>
              <Text size="text-sm" color="var(--color-text-secondary)">
                February 2023
              </Text>
            </Stack>
          </Grid>
        </Stack>
      </Box>

      {/* Progressive Enhancement */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-2xl" weight="semibold">
          Progressive Enhancement: Container Query Units
        </Text>
        <Text size="text-lg" color="var(--color-text-secondary)">
          Wren uses a two-tier approach for fluid scales:
        </Text>
        <Grid columns="auto-fit" minSize="300px" gap="fluid-4">
          <Box className="demo-card" background="#d1fae5">
            <Stack direction="column" spacing="fluid-3">
              <Text size="text-xl" weight="semibold" color="#047857">
                ✅ Modern Browsers
              </Text>
              <Text color="#065f46">
                Chrome 105+, Safari 16+, Firefox 110+
              </Text>
              <Stack as="ul" direction="column" spacing="fluid-2" style={{ margin: 0, paddingLeft: '1.5rem' }}>
                <Text as="li" color="#065f46">
                  Scales use <code>cqi</code> (container inline size) units
                </Text>
                <Text as="li" color="#065f46">
                  Components scale based on their container size
                </Text>
                <Text as="li" color="#065f46">
                  True container-aware responsive sizing
                </Text>
              </Stack>
            </Stack>
          </Box>
          <Box className="demo-card" background="#fef3c7">
            <Stack direction="column" spacing="fluid-3">
              <Text size="text-xl" weight="semibold" color="#d97706">
                ⚠️ Fallback
              </Text>
              <Text color="#92400e">
                Browsers with @container but older
              </Text>
              <Stack as="ul" direction="column" spacing="fluid-2" style={{ margin: 0, paddingLeft: '1.5rem' }}>
                <Text as="li" color="#92400e">
                  Scales fall back to <code>vw</code> (viewport width) units
                </Text>
                <Text as="li" color="#92400e">
                  Components scale based on viewport size
                </Text>
                <Text as="li" color="#92400e">
                  Still functional, not container-aware for scaling
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Stack>

      {/* Feature Support Table */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-2xl" weight="semibold">
          Feature Support Matrix
        </Text>
        <Box className="demo-card">
          <Box style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                  <th style={{ padding: 'var(--scale-3)', textAlign: 'left' }}>Feature</th>
                  <th style={{ padding: 'var(--scale-3)', textAlign: 'center' }}>Chrome</th>
                  <th style={{ padding: 'var(--scale-3)', textAlign: 'center' }}>Safari</th>
                  <th style={{ padding: 'var(--scale-3)', textAlign: 'center' }}>Firefox</th>
                  <th style={{ padding: 'var(--scale-3)', textAlign: 'left' }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: 'var(--scale-3)' }}>Container Queries (@container)</td>
                  <td style={{ padding: 'var(--scale-3)', textAlign: 'center' }}>105+</td>
                  <td style={{ padding: 'var(--scale-3)', textAlign: 'center' }}>16+</td>
                  <td style={{ padding: 'var(--scale-3)', textAlign: 'center' }}>110+</td>
                  <td style={{ padding: 'var(--scale-3)', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>Required</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: 'var(--scale-3)' }}>Container Query Units (cqi)</td>
                  <td style={{ padding: 'var(--scale-3)', textAlign: 'center' }}>105+</td>
                  <td style={{ padding: 'var(--scale-3)', textAlign: 'center' }}>16+</td>
                  <td style={{ padding: 'var(--scale-3)', textAlign: 'center' }}>110+</td>
                  <td style={{ padding: 'var(--scale-3)', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>Progressive enhancement</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: 'var(--scale-3)' }}>CSS clamp()</td>
                  <td style={{ padding: 'var(--scale-3)', textAlign: 'center' }}>79+</td>
                  <td style={{ padding: 'var(--scale-3)', textAlign: 'center' }}>13.1+</td>
                  <td style={{ padding: 'var(--scale-3)', textAlign: 'center' }}>75+</td>
                  <td style={{ padding: 'var(--scale-3)', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>Required</td>
                </tr>
                <tr>
                  <td style={{ padding: 'var(--scale-3)' }}>CSS Custom Properties</td>
                  <td style={{ padding: 'var(--scale-3)', textAlign: 'center' }}>49+</td>
                  <td style={{ padding: 'var(--scale-3)', textAlign: 'center' }}>9.1+</td>
                  <td style={{ padding: 'var(--scale-3)', textAlign: 'center' }}>31+</td>
                  <td style={{ padding: 'var(--scale-3)', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>Required</td>
                </tr>
              </tbody>
            </table>
          </Box>
        </Box>
      </Stack>

      {/* Important Notes */}
      <Box className="demo-card" background="#fee2e2" style={{ borderLeft: '4px solid #ef4444' }}>
        <Stack direction="column" spacing="fluid-3">
          <Text size="text-xl" weight="semibold" color="#991b1b">
            ⚠️ No Polyfills Available
          </Text>
          <Text size="text-base" color="#7f1d1d">
            Container Queries cannot be polyfilled effectively. They require native browser implementation
            for proper performance. If you need to support older browsers, consider a traditional
            viewport-based responsive solution instead.
          </Text>
          <Text size="text-sm" color="#7f1d1d">
            <strong>Not supported:</strong> Internet Explorer, older versions of Edge, Chrome &lt; 105, Safari &lt; 16, Firefox &lt; 110
          </Text>
        </Stack>
      </Box>

      {/* Check Support */}
      <Box className="demo-card" background="linear-gradient(135deg, #667eea15 0%, #764ba215 100%)">
        <Stack direction="column" spacing="fluid-3">
          <Text size="text-xl" weight="semibold">
            Check Your Browser
          </Text>
          <Text>
            You can verify support by checking if your browser supports <code>@container</code> queries:
          </Text>
          <Box className="code-block">
            <pre><code>{`if (CSS.supports('container-type: inline-size')) {
  console.log('Container queries supported!');
} else {
  console.log('Container queries NOT supported');
}`}</code></pre>
          </Box>
          <Text size="text-sm" color="var(--color-text-secondary)" style={{ fontStyle: 'italic' }}>
            Check <a href="https://caniuse.com/css-container-queries" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>caniuse.com</a> for the latest browser compatibility data.
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
}
