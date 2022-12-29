---
title: Desk Display
subtitle: Summer 2022
description: "A static console app for an old phone to sit on my desk, showing weather and current tasks"
back: projects
pubDate: "Sep 1 2022"
layout: "../../layouts/MDLayout.astro"
draft: true
---

## Learning

### React Native has no native file system

I learned this when I was trying to get the deta node.js library to work inside my application.

I kept getting this bug from lines like `require('fs')`, which wouldn't let the app compile.

The error thrown:

> Unable to resolve module fs from ...
I was able to fix this bug within the development environment by installing the react-native-fs module, and change the existing erroring modules to instead say `require('react-native-fs')`.

While this worked in the development environment, it didn't work when I attempted to publish the app, with the build failing every time. This was because the service I was using to do so (eas) uploads code to the cloud to build it into a .aab file for Android, meaning that their server handled the node modules, so my edited modules weren't edited for the build process.

I solved this by instead implementing the API using REST requests, which did without the node.js deta module.

### Learning the `await` keyword

Initially I wrote code that looked something like this:

```js
function myfunction() {
    fetch(url, data)
    .then(...)
    .catch(...)
}
```