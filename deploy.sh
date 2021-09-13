#!/usr/bin/env sh

set -e

npm run build

cd docs/.vuepress/dist

git add -A
git commit -m 'deploy'

git push -f https://github.com/kzz45/oma.git master:docs

cd -
