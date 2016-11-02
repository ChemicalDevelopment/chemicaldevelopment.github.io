---
layout: docs
title: OpenCL
---


### What is OpenCL?

[Official Page](https://www.khronos.org/opencl/)

Essentially, OpenCL allows programmers (me) to use a GPU to run some tasks, which runs at extremely fast speeds (up to 100x in FractalRender).

If you are using integrated graphics, do not use this. Integrated GPUs are not meant to be pushed this far, and may crash your system.

This will work fine with any dedicated card, and will give extreme speedups.

Again, **do not use opencl with integrated graphics**.

### Installing

OpenCL installation per platform (AMD, Nvidia, etc), but you should be able to run releases from the github by default.

Please use a precompiled binary in github releases found on the [Github](http://github.chemicaldevelopment.us/fractalrender/releases) if you don't want to install OpenCL (you probably don't need to install it)


Otherwise, here are links for SDKs per platform (you may have to google yours if not listed):

  * [AMD](http://developer.amd.com/tools-and-sdks/opencl-zone/amd-accelerated-parallel-processing-app-sdk/)

  * Nvidia (Should work by default)

The compiler is a C compiler which looks for the library `-lOpenCL`, so your `-I` flags to gcc and `-L` flags must include directories with `libOpenCL.so`

Once you have these, look up how to compile for your platform. Where do you need to include in your library path?

Once you've found this, please copy `compileopencl.sh.example` to `compileopencl.sh` and change it appropriately.

If you don't know what I'm talking about, please just use the release with your default driver. It should support this. 

If not, please open a [Issue](http://github.chemicaldevelopment.us/fractalrender/issues/new)

