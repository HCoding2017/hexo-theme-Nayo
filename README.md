# hexo-theme-Nayo

#### a clean theme for [Hexo](https://hexo.io).
#### This post will help you to install Nayo themes and configure.

<!--more-->
# Preview 预览

## live preview  : [在线预览 synch](http://synch.site)

***
# Installation 安装主题

### 1. Get Nayo from github
```
$ git clone https://github.com/Lemonreds/nayo.git themes/nayo
```

or dowanload zip and rename Nayo into **yourblog/themes/**


### 2. Modify theme setting in yourblog/_config.yml to Nayo.

```
theme: Nayo
```

***

# Theme Setting 主题设置

### nayo/_config.yml
```
#header nav
menu:
  home: /
  archives: archives
  categories: categories  
  tags: tags
  about: about
  
# left or right 
# i like right...
sidebar: right

# sidebar widgets
widgets:
- profile
- recent
- category
- tagcloud
- link

# site
title: Synch
#you info

profile: 
# put avatar in theme/source/img
  logo: Nayo
  avatar: /img/header.jpg
  author: SYNCH
  city: GuangZhou
  country: China
  descrption:  I just wanna be part of your symphony

# put icon in theme/source/img
favicon: /img/favicon.png

#recent_posts number
recent_posts:
  count: 8

#social link
social:  
  github: //github.com/
  zhihu:
  weibo:
  segmentfault: 
  facebook:
  twitter:
  instagram:
  linkedin:
  others:

#your friend link
link:
  linka: //www.baidu.com
  linkb: //www.google.com
  linkc: //synch.site
# linkd
# toc of post  [ true or false]  
toc:
    true

# is fullscreen [ 100%width show the page or less]
fullscreen:
    false

# only normal | todo
# code style
highlight_theme: 
    normal

# website analytics [your analytics id]
baidu_analytics:
google_analytics: 
```
***
# Content 内容显示

## about page
```
cd yourblog
hexo new page about

Modify layout in yourblog/source/about/index.md
such:
---
title: about
date: 2017-10-15 23:32:49
layout: about
---
//your content here
```
***
# Other 其他
Contact me :) 
### Email 
lemonreds@163.com
### QQ 
792277840
