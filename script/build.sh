#!/bin/bash

export http_proxy='http://sys-proxy-rd-relay.byted.org:8118'
npm i --registry=http://bnpm.byted.org/

if [[ $CUSTOM_BUILD == "test" ]]; then
    npm run test
elif [[ $CUSTOM_BUILD == "ppe" ]]; then
    npm run ppe
else 
    npm run build
fi

mkdir output
cp -r dist script output/