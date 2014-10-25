---
layout: post
comments: true
title:  "A Blog Post about Blogging With Jekyll (meta)"
date:   2014-10-25
categories: posts
SocialImage: http://blog.pdsullivan.com/assets/AngularJS-large.png
---

![]({{ site.baseurl }}/assets/jekylllogo.png)

I started out writing this blog to enter a contest with [Xamarin][xamarinweb], which I surprisingly won (ha). A few blog posts later I have realized that its not that hard to write a little post every once in a while about what I am working on or interested in at the moment. That being said I realized fairly quickly that I did not want to keep coding my own html page every time I decided to write another blog post. So I started looking around at blogging tools and the different ways people do it. I really didn't want to pay for something like SquareSpace (as awesome as they are) or Wordpress with my custom domain and I was already hosting my site in GitHub Pages so I was interested in looking into Jekyll.

[Jekyll][jekyllweb] is a blog aware (which sounds interesting) static site generator. It is open source and is written in Ruby by [Tom Preston-Werner][toppreston], who was a co-founder at GitHub. So I decided to jump in and do this thing. One thing that really attracts me to Jekyll is you can write posts in [Markdown][markdown] (a plan text formatting syntax) which makes it much easier to quickly throw together a post using any old method as long as you have text editor.

[jekyllweb]: http://jekyllrb.com/
[toppreston]:http://tom.preston-werner.com/
[markdown]:http://en.wikipedia.org/wiki/Markdown

Fist step was to try out a little test site on my local machine. I just followed the [Jekyll setup steps on GitHub Pages][ghpjekyll]. After a few googles around for help installing a different version of Ruby than I had installed originally I was up and running with a test site. I think I was having issues with my gem because at the time I was running the OS X Yosemite Beta. Then I copied out all of my old blog posts from my repository where my blog has been living (all html pages) and then deleted everything in that repo to start clean. Next I ran the command to put the starter template Jekyll site into that repository, which give you a main page that lists the posts that you have made and then it give you an about page along with one starter example of a post.

[ghpjekyll]: https://help.github.com/articles/using-jekyll-with-pages/

I copied all the plain text from my old blog posts into Markdown files (.markdown) and put them into the `_posts` directory of the new Jekyll site. Also for the `.mardown` files int that directory you name them <date>-<postname>.markdown (ex. 2014-9-10-atom-editor.markdown) and when jekyll builds the site it will put them in directories according to the date that you tell it which is pretty nice and fits with the norm for blog pages. I ended up adding an `assets` folder where I keep my images and things for the posts which you can reference in the markdown files by putting in a image html tag or the markdown picture syntax.

When Jekyll builds the site it will take all of the components you have in the top level directory that are not prefixed by an underscore and put them into the `_site` directory which is where the static site will be built into. Then it takes those special directories with the underscores like `_layouts`, `_posts`, `_includes`, and any others then builds the contained files into the site. The way I think about the build process that produces the static site is similar to the way a backend like asp.net MVC processes the pages and runs code to produce HTML from the syntax in the pages. For Jekyll an example of some syntax is like this snippet (below), which is the main page layout.

<script src="https://gist.github.com/pdsullivan/24c4c47408498870be46.js"></script>

Once I had all that stuff working well and customized the style a little I committed the jekyll site to GitHub in my gh-pages directory and GitHub Pages handled the Jekyll build for the site producing the static pages that make up the site. I now had a new blog with a nice way of adding new pages. You can find the repository where I host this blog [here on my GitHub][ghblog] if you are wanting to see how I set up everything.

After a few months of using Jekyll for my blog I have really enjoyed it. I have recently gone in and changed up some of the style a little to make it a little more custom looking, and I have also used Disqus to add some commenting functionality to the site.

[xamarinweb]: http://xamarin.com/
[ghblog]: https://github.com/pdsullivan/blog