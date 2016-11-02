---
layout: docs
title: Flags
---

How to use flags:

When running `python run.py`, append flags and args to the end:

Quick Examples:

`python run.py --dimensions 1920 1080 --animate --seconds 20 --framespersecond 12`

Is the same as

`python run.py -d 1920 1080 -a -s 20 -fps 12`

| **Flag** | **Description** | **Default** | **Usage** |
| |
| | **Universal Flags** | These apply to all modes | |
| **o /** output | Sets file to save output | `out.png` or `out.mp4` | `-o example.mp4` | 
| **d /** dimensions | Sets file to save output | `800 800` | `-d 1920 1080` | 
| **c /** center | Sets where the center is located | `0.0 0.0` | `-c .2821 0.01` | 
| **z /** zoom | Sets zoom level | `.5` | `-z 12341.234` | 
| **i /** iterations | Sets number of iterations | `12` | `-i 500` | 
| **p /** pattern | Sets colorization pattern | `MOCHA` | `-p BLACKWHITE` | 
| **com /** combine | Combines precomputed frames | `` | `-com` | 
| **a /** animate | Generates an animated image | `` | `-a` | 
||
| | **Animation Flags** | `-a` must be set to use these | |
| **cl /** opencl | Uses OpenCL to compute for animation | `` | `-cl` | 
| **s /** seconds | Generates a video/gif of s seconds | `3.0` | `-s 30.0` | 
| **fps /** framespersecond | This many frames per second | `4.0` | `-fps 16` | 
| **zps /** zoompersecond | Zooms in by this factor each second | `2.0` | `-zps 1.6` | 
||
| | **Python Only Flags** | `-cl` must **not** be enabled | |
| **t /** threads | Sets how many threads are used | `coreCount()` | `-t 8` |
| **f /** function | Sets what function to iterate | `z**2+c` | `-f "1.617**z+c*z"` |



