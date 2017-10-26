---
title: README
date: 2017-10-26 22:16:43
tags: 
- Nayo
categories: 
- 测试
---
#### This post will help you to install Nayo themes and configure. 
#### 这篇文章将帮助你安装nayo和了解更多的信息。

<!--more-->
# hexo-theme-Nayo

### A clean theme for [Hexo](https://hexo.io).

### Demo preview  : [在线预览:synch](http://synch.site)



***
# Installation 主题安装

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

# Configuration 主题配置

### Nayo/_config.yml

## Menu
``` 
#header nav
menu:
  home: /
  archives: archives
  categories: categories  
  tags: tags
  about: about
```
## Site Info
```
#site title
title: Synch

#your profile
profile: 
# put avatar in theme/source/img
  logo: Nayo
  avatar: /img/header.jpg
  author: Synch
  city: GuangZhou
  country: China
  descrption: If I walk would you run.If I stop would you come.

# put icon in theme/source/img
favicon: /img/favicon.png
```

## Sidebar
```
#show/hide sidebar [true or false] 
sidebar: 
    false
  
# sidebar widgets
widgets:
- profile
- recent
- category
- tagcloud
- link

#recent_posts number
recent_posts:
  count: 6

#social link
social:  
  github: https://github.com/Lemonreds  
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
  ColorHexa: //www.colorhexa.com
  Google: //www.google.com
  Synch: //synch.site
# linkd: 
# linke:
```
## Toc
```
# toc of post  [true or false]  
toc:
    true
```
## Fullscreen
```
# is fullscreen [ more width or less]
fullscreen:
    false
```
## Code Theme
```
# only normal | todo
# code style
highlight_theme: 
    normal
```
## Analytics
```
# website analytics [your analytics id]
baidu_analytics:
  636802045446222199ae541e32c8133e
google_analytics: 
```
***
# Content 主题内容

## About
```
# cd yourblog
# hexo new page about

# Modify layout in yourblog/source/about/index.md
```
such:

```
---
title: about
date: 2017-10-26 22:19:49
layout: about
---
//your content here
```
***
# Other 其他

如果有其他的问题或者建议 Contact me 
如果你能点个star的话 就非常的可爱和谢谢啦 :)

## 关于主题名字
在制作主题的时候刚好听到的一首歌里面的歌词.<东京不太热> - 封茗囧菌

## Email 
lemonreds@163.com

## QQ 
792277840

Have a nice day ! Created by SYNCH .