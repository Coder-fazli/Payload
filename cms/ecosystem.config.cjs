module.exports = {
  apps: [{
    name: 'payload',
    cwd: '/var/www/payload',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3001 -H 0.0.0.0',
    env: { NODE_ENV: 'production', NODE_OPTIONS: '--no-deprecation' }
  }]
}

