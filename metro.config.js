const {makeMetroConfig} = require('@rnx-kit/metro-config');
const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks');
const {MetroSerializer} = require('@rnx-kit/metro-serializer');

const {
  MetroSerializer: ESBuildMetroSerializer,
  esbuildTransformerConfig,
} = require('@rnx-kit/metro-serializer-esbuild');

const {ESBUILD} = process.env;

module.exports = makeMetroConfig({
  resolver: {
    resolveRequest: MetroSymlinksResolver(),
  },
  serializer: {
    customSerializer: ESBUILD
      ? ESBuildMetroSerializer([], {fabric: false, logLevel: 'debug'})
      : MetroSerializer([]),
  },
  transformer: {
    ...(ESBUILD ? esbuildTransformerConfig : {}),
  },
});
