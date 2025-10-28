import { Box, Stack, Text, Grid, AspectRatio } from '@lib/index';

export function AspectRatioExamples() {
  return (
    <Stack direction="column" spacing="fluid-5">
      <Text as="h2" size="text-3xl" weight="bold">
        AspectRatio Component
      </Text>

      <Text size="text-lg" color="var(--color-text-secondary)">
        Maintain consistent aspect ratios for images, videos, or any content.
        Prevents layout shift and ensures responsive media displays correctly.
      </Text>

      {/* Example 1: Video Container */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          16:9 Video Container
        </Text>
        <Text color="var(--color-text-secondary)">
          Perfect for embedding videos or creating placeholders for media content.
        </Text>
        <Box className="example-container">
          <AspectRatio ratio="16/9">
            <Box
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}
            >
              16:9 Video Area
            </Box>
          </AspectRatio>
        </Box>
        <Box className="code-block">
          <pre><code>{`<AspectRatio ratio="16/9">
  <iframe
    src="https://www.youtube.com/embed/..."
    style={{ width: '100%', height: '100%' }}
  />
</AspectRatio>

// Maintains 16:9 ratio at any width`}</code></pre>
        </Box>
      </Stack>

      {/* Example 2: Square Images */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          Square Image Grid
        </Text>
        <Text color="var(--color-text-secondary)">
          Use ratio={1} for perfect squares. Great for profile pictures, thumbnails, or gallery items.
        </Text>
        <Box className="example-container">
          <Grid columns="auto-fit" minSize="150px" gap="fluid-3">
            {[1, 2, 3, 4].map((i) => (
              <AspectRatio key={i} ratio={1}>
                <Box
                  style={{
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(${45 + i * 30}deg, #667eea 0%, #764ba2 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'semibold',
                  }}
                >
                  {i}
                </Box>
              </AspectRatio>
            ))}
          </Grid>
        </Box>
        <Box className="code-block">
          <pre><code>{`<Grid columns="auto-fit" minSize="150px" gap="fluid-3">
  {images.map((img) => (
    <AspectRatio ratio={1} key={img.id}>
      <img
        src={img.url}
        alt={img.alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </AspectRatio>
  ))}
</Grid>

// All images maintain 1:1 square ratio`}</code></pre>
        </Box>
      </Stack>

      {/* Example 3: Different Ratios */}
      <Stack direction="column" spacing="fluid-3">
        <Text as="h3" size="text-xl" weight="semibold">
          Common Aspect Ratios
        </Text>
        <Text color="var(--color-text-secondary)">
          Various ratio formats supported: string ("16/9", "4:3") or number (1.777, 1.5).
        </Text>
        <Box className="example-container">
          <Stack direction="column" spacing="fluid-4">
            <Box>
              <Text size="text-sm" marginBottom="scale-2" weight="medium">
                16:9 (Widescreen)
              </Text>
              <AspectRatio ratio="16/9" maxWidth="400px">
                <Box className="demo-section" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  16:9
                </Box>
              </AspectRatio>
            </Box>
            <Box>
              <Text size="text-sm" marginBottom="scale-2" weight="medium">
                4:3 (Classic)
              </Text>
              <AspectRatio ratio="4:3" maxWidth="400px">
                <Box className="demo-section" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  4:3
                </Box>
              </AspectRatio>
            </Box>
            <Box>
              <Text size="text-sm" marginBottom="scale-2" weight="medium">
                1:1 (Square)
              </Text>
              <AspectRatio ratio={1} maxWidth="200px">
                <Box className="demo-section" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  1:1
                </Box>
              </AspectRatio>
            </Box>
          </Stack>
        </Box>
        <Box className="code-block">
          <pre><code>{`// String format
<AspectRatio ratio="16/9">...</AspectRatio>
<AspectRatio ratio="4:3">...</AspectRatio>

// Number format
<AspectRatio ratio={1}>...</AspectRatio>
<AspectRatio ratio={1.777}>...</AspectRatio>

// With max width constraint
<AspectRatio ratio="16/9" maxWidth="600px">
  ...
</AspectRatio>`}</code></pre>
        </Box>
      </Stack>
    </Stack>
  );
}
