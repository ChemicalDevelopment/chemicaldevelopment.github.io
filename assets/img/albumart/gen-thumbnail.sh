#!/bin/bash

# script to generate thumbnail

for fl in "$@"; do
  convert -resize 400x400 $fl thumbs/$fl

  echo Generated thumbs/$fl
done
