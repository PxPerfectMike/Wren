import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib';

  return {
    plugins: [
      react(),
      isLib && dts({
        include: ['src/lib/**/*'],
        outDir: 'dist',
        rollupTypes: true,
      }),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@lib': resolve(__dirname, './src/lib'),
        '@docs': resolve(__dirname, './src/docs'),
      },
    },
    build: isLib ? {
      // Library build configuration
      lib: {
        entry: resolve(__dirname, 'src/lib/index.ts'),
        name: 'FluidLayoutSystem',
        formats: ['es', 'umd'],
        fileName: (format) => `fluid-layout-system.${format}.js`,
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
      cssCodeSplit: false,
      outDir: 'dist',
    } : {
      // Documentation site build configuration
      outDir: 'dist-docs',
    },
  };
});
