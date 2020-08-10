#!/bin/bash

# Create static Github deployable version of teh Flask Server/App/Website
python3.8 convertToStatic.py

git add .
git commit -m "commit"
git push origin master