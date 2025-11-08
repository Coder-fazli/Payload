#!/usr/bin/env bash
set -e
cd /var/www/payload
pnpm install --frozen-lockfile
pnpm build
pm2 startOrReload ecosystem.config.cjs
