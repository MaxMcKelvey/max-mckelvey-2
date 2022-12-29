---
title: Desk Display
subtitle: Summer 2022
description: "A static console app for an old phone to sit on my desk, showing weather and current tasks"
back: projects
pubDate: "Sep 1 2022"
layout: "../../layouts/MDLayout.astro"
draft: false
---

## Intro

The objective of the desk display project was to develop a single page application for android to run on a old android phone. This phone was to act only as a display for critical information that I might need, without need for any user input.

This display ended up taking two forms, one for desk use, and one developed for a custom smart mirror.

## Implementation 1

![](https://i.imgur.com/HBW6emF.png)

This implementation was designed to display the current weather on the left half, and the overdue, current, and upcoming tasks on the right. As I am located in Seattle, the next time it is projected to rain is displayed along with the current weather.

The weather information was collected using the OpenWeather API using their 5 Day/3 Hour forcast.

The task information was collected using the ClickUp API. The implementation of this API was done in such a way to gather tasks based on their due dates in rounds, as to display tasks based on when I should have completed them.

## Implementation 2

// Image 2.1 ...

This implementation was designed to display the current weather on the left half, and the current time and a custom message on the right.

The custom message is a constantly updating field that is grabbed from deta.sh, a free database, using their REST API.

## Learning Highlights

### React Native has no native file system

I learned this when I was trying to get the deta node.js library to work inside my application. I kept getting this bug from lines like `require('fs')`, which wouldn't let the app compile.

The error thrown:

> Unable to resolve module fs from ...

I was able to fix this bug within the development environment by installing the react-native-fs module, and change the existing erroring modules to instead say `require('react-native-fs')`.

While this worked in the development environment, it didn't work when I attempted to publish the app, with the build failing every time. This was because the service I was using to do so (eas) uploads code to the cloud to build it into a .aab file for Android, meaning that their server handled the node modules, so my edited modules weren't edited for the build process.

I solved this by instead implementing the API using REST requests, which did without the node.js deta module.

### The `await` keyword

Initially I wrote code that looked something like this:

```jsx=
function myfunction() {
    let things = [];
    
    fetch(url, data)
    .then((res) => this.push(...res.things))
    .catch(...);
    
    return things;
}
```

While I assumed that `things` would wait for the fetch request to resolve, that wasn't the case. The fetch promise isn't resolved until after `things` is returned, so it is always empty. Therefore, a different way of collecting data from a fetch request must be used.

```jsx=
async function myfunction() {
    
    let things = await fetch(url, data)
    .catch(...);
    
    return things;
}
```

The above code utilizes the `await` keyword in order to force the function to wait for the fetch promise to resolve. Similar code was written to retrieve data from ClickUp.