#!/bin/bash

curl https://api.gumroad.com/v2/licenses/verify \
  -d "product_permalink=ZDoZx" \
  -d "license_key=$1" \
  -X POST
