const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = {
  env: {
    test: {
      presets: [
        ['@babel/preset-env', { modules: isTest ? 'commonjs' : false }],
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
    },
  },
};
