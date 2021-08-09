#!/bin/bash


echo "start nginx..."
cp /opt/tiger/www/script/nginx/www.conf /etc/nginx/conf.d/www.conf
/usr/sbin/nginx -g "daemon off;"

