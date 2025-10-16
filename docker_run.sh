#!/bin/sh
set -eu

# ------------------------
# docker_run.sh
# - Stops & removes existing containers for this compose project
# - Build Nuxt app and run server on exposed host
# ------------------------

# Choose docker-compose command (support docker-compose or docker compose)
if command -v docker-compose >/dev/null 2>&1; then
  DC="docker-compose"
elif docker compose version >/dev/null 2>&1; then
  DC="docker compose"
else
  echo "ERROR: neither 'docker-compose' nor 'docker compose' found in PATH."
  exit 1
fi

echo "Using: $DC"

# Ensure we run from repo root where docker-compose.yml exists
if [ ! -f docker-compose.yml ] && [ ! -f docker-compose.yaml ]; then
  echo "ERROR: docker-compose.yml not found in current directory. Run this script from the repo root."
  exit 2
fi

echo "Stopping and removing compose services (if any)..."
# Stop and remove containers, networks, volumes created by compose in this folder
$DC down -v --remove-orphans || true

# Start Nuxt app
echo "Starting Nuxt app (detached)..."
$DC up -d middleearth-chat

echo "Done. Nuxt app is up and running. If you want to stop everything, run: ${DC} down -v"