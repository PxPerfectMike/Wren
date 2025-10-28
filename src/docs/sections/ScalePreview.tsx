import { Box, Stack, Text, Grid } from '@lib/index';

export function ScalePreview() {
  const fluidScales = [
    { name: 'fluid-1', desc: '4px - 8px' },
    { name: 'fluid-2', desc: '8px - 12px' },
    { name: 'fluid-3', desc: '12px - 16px' },
    { name: 'fluid-4', desc: '16px - 24px' },
    { name: 'fluid-5', desc: '24px - 32px' },
    { name: 'fluid-6', desc: '32px - 48px' },
    { name: 'fluid-7', desc: '48px - 64px' },
    { name: 'fluid-8', desc: '64px - 96px' },
  ];

  const typographyScales = [
    { name: 'text-xs', desc: 'Extra Small' },
    { name: 'text-sm', desc: 'Small' },
    { name: 'text-base', desc: 'Base' },
    { name: 'text-lg', desc: 'Large' },
    { name: 'text-xl', desc: 'Extra Large' },
    { name: 'text-2xl', desc: '2X Large' },
    { name: 'text-3xl', desc: '3X Large' },
    { name: 'text-4xl', desc: '4X Large' },
  ];

  return (
    <Stack direction="column" spacing="fluid-5">
      <Text as="h2" size="text-3xl" weight="bold">
        Fluid Scale System
      </Text>

      <Text size="text-lg" color="var(--color-text-secondary)">
        All spacing and typography uses CSS clamp() to scale smoothly between minimum and maximum values.
        Resize your browser to see the scales adapt fluidly.
      </Text>

      {/* Spacing Scale */}
      <Stack direction="column" spacing="fluid-4">
        <Text as="h3" size="text-2xl" weight="semibold">
          Spacing Scale
        </Text>
        <Grid columns="auto-fit" minSize="200px" gap="fluid-3">
          {fluidScales.map((scale) => (
            <Box key={scale.name} className="demo-card">
              <Stack direction="column" spacing="fluid-2" align="start">
                <code>{scale.name}</code>
                <Text size="text-sm" color="var(--color-text-secondary)">
                  {scale.desc}
                </Text>
                <Box
                  background="var(--color-primary)"
                  style={{
                    height: '24px',
                    width: `var(--${scale.name})`,
                    borderRadius: '4px',
                    transition: 'width 0.3s ease',
                  }}
                />
              </Stack>
            </Box>
          ))}
        </Grid>
      </Stack>

      {/* Typography Scale */}
      <Stack direction="column" spacing="fluid-4">
        <Text as="h3" size="text-2xl" weight="semibold">
          Typography Scale
        </Text>
        <Stack direction="column" spacing="fluid-3">
          {typographyScales.map((scale) => (
            <Box key={scale.name} className="demo-card">
              <Stack direction="row" spacing="fluid-4" align="center">
                <Box minWidth="120px">
                  <code>{scale.name}</code>
                </Box>
                <Text size={scale.name as any} weight="medium">
                  {scale.desc}
                </Text>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
