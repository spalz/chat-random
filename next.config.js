// @ts-check

const { loadCustomBuildParams } = require("./next-utils.config.js");
const { esmExternals = false, tsconfigPath } = loadCustomBuildParams();

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals, // https://nextjs.org/blog/next-11-1#es-modules-support
    },
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    typescript: {
        tsconfigPath,
    },
};

module.exports = nextConfig;
