---
layout: docs
title: Setup
---

First, clone the repository:

`git clone http://github.chemicaldevelopment.us/fractalrender && cd fractalrender`

### All

For all types, you will need to run `./install.sh` (possibly using sudo)

### Default

For the default python build, this should work. Run `./run.py` to assure that it works. 

Now open up your folder, and view `out.png`

### OpenCL

To see an explanation, see our page on [OpenCL](../opencl)

To run using OpenCL, run `./compileopencl.sh.example`

You may have to copy this and change in order to compile for your vendor. Mine is set up for AMD 3.0 SDK

Now, run with `./run.py -a -cl` and view `out.mp4` for a video.