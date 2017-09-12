#!/bin/sh
cd frontpage; npm run build
cd ../rest-api; npm install; npm run build
