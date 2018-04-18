#!/bin/bash

mkdir -p json

while true; do
    dt="$(date '+%F_%T')"
    ./app.js | tee json/${dt}.json
    sleep 60
done
