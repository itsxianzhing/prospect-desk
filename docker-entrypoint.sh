#!/bin/sh
set -eu
if [ -z "${ADMIN_USERNAME:-}" ] || [ -z "${ADMIN_PASSWORD:-}" ] || [ -z "${AUTH_SECRET:-}" ]; then
  echo "Missing required authentication environment variables: ADMIN_USERNAME, ADMIN_PASSWORD, AUTH_SECRET." >&2
  exit 1
fi
npx prisma migrate deploy
exec node server.js
