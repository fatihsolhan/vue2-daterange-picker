#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run lib

git add -A
git commit -m 'deploy'

git push
