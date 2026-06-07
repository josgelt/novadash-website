module.exports = {
  apps: [
    {
      name: "paylogic-monitor",
      script: "./index.js",
      cwd: __dirname,
      autorestart: true,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
