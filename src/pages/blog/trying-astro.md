---
title: Trying Astro
subtitle: Dec 2022
description: "Porting this website over to Astro from Next.js"
back: blog
pubDate: "Dec 26 2022"
layout: "../../layouts/MDLayout.astro"
draft: false
---

# I am switching this project over to using astro

## Day 1

### WHY

I know that after trying both react and Next.js (on the t3 stack) I would have felt good actually publishing a webpage, but even with the second version of this website being almost built, I felt that there was still too much of a barrier to using the webpage.

I knew right then that the idea of using a Headless CMS was a major mistake, and that I needed to backtrack. Luckily I had recently heard about the astro framework, which was built to make it easy to make, publish, and maintain content websites. I had also heard about it's numerous integrations, so I was intreagued.

After creating a new astro project, I promptly installed tailwind css. I used this in the past iteration of this project, so it would both save in the development time I had left, as well as the time taked to port over the website. While I had initially thought that I might need to use a framework integration for writing more js (I was considering exploring solid), I realized that my current needs were met with the simple astro framework feature set.

<!-- The easiest aspect was porting over all of the content because next js is also routed based on the file system, but also because I was already writing my content in markdown, and all I had to do was import the markdown styles I had previously created -->

## Day 2

I am currently porting over all of my components from Next js and continuing to write this post, and I have learned two things.

1. Most of the code that I wrote is just plain HTML
2. I don't know how to author a blog

The former is good news because it means that I am coping most of my components as-is, but shows how silly my reliance on a framework has been. The only thing that I used react features for was managing state, which is easily doable within astro.