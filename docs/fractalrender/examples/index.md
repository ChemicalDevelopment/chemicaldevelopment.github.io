---
layout: docs
title: Examples
---

[Tutorial](./tutorial)

Zoomed Out

`./run.py -d 800 800 -i 32 -z .6 -c -.75 0`

Desktop Background

`./run.py -d 1920 1080 -i 800 -z 1000 -c .2821 .01`

4K Desktop Background edition

`./run.py -d 3840 2160 -i 800 -z 1000 -c .2821 .01`

Basic gif

`./run.py -a -d 400 400 -i 60 -z .4 -zps 2.3 -c .2821 .01 -o out.gif`

Full video (without opencl) (takes about 3 days on my comp)

`./run.py -a -d 1280 720 -i 200 -z .4 -fps 16 -s 30 -zps 1.95 -c .2821 .01 -o out.mp4`

Full Video (with opencl) (takes less than 30 seconds)

`./run.py -a -cl -d 1280 720 -i 200 -z .4 -fps 16 -s 30 -zps 1.95 -c .2821 .01 -o out.mp4`

4K "Beautiful" (with opencl) (takes less than 10 minutes on my comp)

`./run.py -a -cl -d 3840 2160 -i 500 -z .4 -fps 24 -s 60 -zps 1.65 -c .2821 .01 -o out.mp4`


Some of the higher resolution and length videos essentially require OpenCL to be used..

The last one takes less than 10 minutes on my desktop computer's GPU, but it would take weeks using only Python
