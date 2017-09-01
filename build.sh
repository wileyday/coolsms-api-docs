#!/bin/sh
cd frontpage && npm run build
cd ../texting-api && npm run build
cd ../cash-api && npm run build
