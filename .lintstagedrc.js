module.exports = {
  '*.{js,jsx,ts,tsx}': () => ['bun run lint:fix', 'bun run prettier:fix'],
  '*.{json,md,css,scss,html,yml,yaml}': () => ['bun run prettier:fix'],
};
