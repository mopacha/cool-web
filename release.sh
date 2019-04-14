#!/bin/sh
node -v $i >/dev/null || { echo "$i node not found. please install node first"; exit 1; }
alias cnpm="npm --registry https://registry.npm.taobao.org"
gulp -v $i >/dev/null || { echo "$i gulp not found. need install ,please wait... " && cnpm i gulp-cli@2.1.0 -g ; }

rm -rf node_modules
cnpm i
gulp clean
cnpm run build
gulp pkStatic
gulp babelNode
rm -rf node_modules
cnpm i --production
gulp pkNode


