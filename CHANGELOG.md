# Changelog

All notable changes to Wren will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Container query unit (cqi) support with viewport unit (vw) fallback for progressive enhancement
- **Spacer** component for flexible/fixed spacing between elements
- **AspectRatio** component for maintaining consistent aspect ratios
- **Hidden** and **Show** components for container-based responsive visibility
- Positioning props to Box component: `position`, `top`, `right`, `bottom`, `left`, `zIndex`
- `responsiveBreakpoint` prop to Stack component (configurable, default: 768px)
- Comprehensive browser support documentation
- Performance considerations guide
- Accessibility documentation (WCAG compliance)
- Comparison with other solutions (Tailwind, Every Layout, Chakra UI, etc.)

### Changed
- **BREAKING**: Fluid scales now use `cqi` units in modern browsers (Chromium 105+, Safari 16+, Firefox 110+)
  - Falls back gracefully to `vw` units in older browsers
  - This makes scales truly container-aware in supported browsers
- Stack component responsive breakpoint is now configurable (was hardcoded to 768px)
- Updated marketing claims to be more accurate ("dramatically fewer breakpoints" vs "zero breakpoints")
- README completely rewritten with honest capabilities and limitations

### Fixed
- Container query units disconnect - scales now actually use container units where supported
- Hardcoded breakpoint removed in favor of configurable approach

## [0.1.0] - 2024-01-XX

### Added
- Initial release
- Core components: Container, Box, Stack, Grid, Text
- Fluid spacing scale system (fluid-1 through fluid-10)
- Fixed spacing scale system (scale-1 through scale-10)
- Typography scale system (text-xs through text-5xl)
- Container query support for layouts
- TypeScript definitions for all components
- Documentation site built with Wren

### Known Limitations
- Requires modern browsers with Container Query support (Chrome 105+, Safari 16+, Firefox 110+)
- No polyfills available for Container Queries
- Early stage (v0.1.0) - APIs may change
- Layout primitives only (not a full UI component library)

---

## Development Notes

### Versioning Strategy

- **Major (1.0.0)**: Breaking changes to component APIs
- **Minor (0.x.0)**: New features, new components (pre-1.0)
- **Patch (0.0.x)**: Bug fixes, documentation updates

### Browser Support Policy

Wren targets browsers with native Container Query support. We will not add polyfills as they cannot replicate the performance characteristics of native implementations.

### Feedback

Found a bug? Have a feature request? [Open an issue on GitHub](https://github.com/PxPerfectMike/Wren/issues).
