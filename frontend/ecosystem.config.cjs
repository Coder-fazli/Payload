module.exports = {
  apps: [
    {
      name: 'mysite',
      cwd: '/var/www/mysite',
      script: '/var/www/mysite/node_modules/next/dist/bin/next',
      args: 'start -p 3000 -H 0.0.0.0',
      interpreter: '/usr/bin/node',
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--no-deprecation',
        PORT: '3000',
        HOST: '0.0.0.0'
      }
    }
  ]
}

