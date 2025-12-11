#!/bin/sh
envsubst '${PORT}' < /etc/nginx/templates/nginx.conf.template > /etc/nginx/conf.d/default.conf
echo "--- Nginx Configuration ---"
cat /etc/nginx/conf.d/default.conf
echo "--------------------------"
nginx -g 'daemon off;'