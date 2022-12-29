---
title: max-mckelvey.com
subtitle: 2021 - The Present
description: "This website"
back: projects
pubDate: "Dec 27 2022"
layout: "../../layouts/MDLayout.astro"
draft: false
---

# How did this start?

There were a few reasons I started to build my personal website

1. I needed to learn web design for the algorithm visualizer project, and I learn best when working with technology hands-on without any consequences. This was a risk-free environment for me to play around with web design and develop my skills for later use.
2. I was in the process of applying to software and engineering internships, and the idea of having a personal website kept popping up
3. I was looking for a way for me to store information about my projects so that
    - I could look back to remember how projects worked in the case that something broke or I was preforming maintenance
    - I could share my project and everything I have been learning with other aspiring engineers and developers

This ultimately led me to purchase my own domain one night, and force myself to develop the website.

# The Initial Design

## Initial Tools/Frameworks

> This may have come from humble beginnings, but I am proud of where it is today.

To start the project, I created a new react application with `create-react-app`. I then added `bootstrap` for my components and used standard css on a per-page basis for custom styling. Then came the problem of how to store my content. I knew that I wanted to write markdown and have it parsed by the website and routed into different web pages.

### Displaying Content

Because I knew that I wanted to use markdown to parsed into web pages, there were a few basic approaches, but the simplest was to write my markdown in an online markdown editor (`HackMD`) and use their interactive output in an html iframe. While this approach was very simple, the loading time for the website was measured in *seconds* and the links to and information about the content had to be stored locally on in the app repository in a json format.

## Parsing my own Markdown

While my previous solution was fully functional with project pages more beautiful than I could style in css myself, I couldn't live with the extremely slow loading time of the iframes. I wanted a customizable way to put my own markdown into html. This lead me to `react-markdown`, a node package for converting markdown text into html within the react framework.

With this new tool, I started writing markdown on my own machine and imported each file as text and parsed it at runtime in react into usable html. While this was an improvement, for each new file I wrote I had to import it into my main app file and I still had have all of the page information in a seperate json object.

## Hosting the Markdown on a KV Server

While working on this project (and before I learned about the idea of a headless CMS) I decided that I didn't want to republish the website after every edit, big or small. The solution to this problem is to host the content on a seperate server, and having the website client fetch the content and use it to write the layout and customized html of each page.

I implemented my solution using `deta`, an easy to use KV store server. I created a new database, where every entry would obey the following structure:

```js
type example_stored_value = {
    key: string;
    info: {
        title: string;
        subtitle: string;
        path: string;
        order: number;
    };
    md: string;
}
```

This marked progress for me as I was finally working towards the idea of a modern website where I could edit my projects in one place, but it still had its problems.

### Problems with this Design

There were many problems with this initial design, but one was an outlier with its severity.

#### **I didn't have a backend.**

Why is this a problem you may ask? I was exposing my API key to the client for all to see. If you opened the website in the second half of 2022, opened *Inspect Element*, and opened the network tab, the API key was right there. If the API key was just enabled for reads and not writes, this might be close to acceptable, but anyone could have full control over the content on my website if they knew where to look.

![DONT expose your api keys](https://imgur.com/U3ZlViX.png)

> Please don't do this. I allowed myself to commit this version because I didn't expect anyone to ever find my website on their own, and assessed the risk of being hacked to be negligable.

Additionally there were a couple other problems.
1. I had to write a seperate application for content management and uploading the markdown files I wrote locally
2. I would commonly use the `style` prop on components instead of clicking over to the css file I was writing for each page

## Pictures of the Initial Design

![/home](https://imgur.com/wWGTQwo.png)
![/about](https://imgur.com/qKY3UeZ.png)
![/projects](https://imgur.com/vwbedAq.png)
![/uw](https://imgur.com/VlGIp2Y.png)

# A Briefly Lived Second Edition

In writing the second edition of this app, I completely switched the frameworks and styling methods I used. The new version of the app was built from the `t3` stack. The `t3` stack is based on `NextJS`, and I decided to use `typescript` for components and `tailwind` for css styling.

This is an incredible stack to work with, and I quickly finished the website. However, right when I was wrapping up this project and ready to start using it for displaying my projects, I found myself spending more time messing with getting the database to work how I wanted it to than actually writing up the projects that I wanted to.

There's nothing inherently wrong with this version, but I decided that I needed to find something that simplified the process for me to write content or change the website's behaior. And then I heard about `Astro`.

# The Third and Final Edition

> This iteration of the website uses `Astro` and `tailwind`

This is the edition that I am most proud of. This is not because it is the most feature-rich (it certainly isn't), but because if its simplicity and how it makes me want to make content. With the past few iterations, the complexity of the writing workflow made me dread the day I was going to write up my projects. Now, to publish a page all I have to do is create a new markdown file and start writing.

This is probably the most important thing I have learned so far. A tool is only useful when it is convienient enough to be used. The idea of customer satisfaction is something I have considered in the idea of making things for other people to use, but not something I have considered yet when making things that I use myself.