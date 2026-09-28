module.exports = {
  apps: [
    {
      name: "open-higgsfield-dev",
      script: "pnpm",
      args: "dev",
      cwd: __dirname,
      autorestart: true,
    },
  ],
};
