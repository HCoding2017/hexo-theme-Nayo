---
title: hexo-theme-Nayo
date: 2017-10-26 22:16:43
tags: 
- Nayo
categories: 
- 测试
---
This post will help you to install Nayo themes and configure. 
这篇文章将帮助你安装nayo和了解更多的信息。

<!--more-->
# hexo-theme-Nayo

### A clean/white theme for Hexo.

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
### yourblog/_config.yml

## Language
```
language: en/zh-CN/zh-TW
```

### Nayo/_config.yml
## Menu
导航栏菜单设置
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
站点信息
```
#site title
title: Synch

#your profile
profile: 
# put avatar in theme/source/img
  logo: Nayo
  avatar: /img/header.png
  author: Synch
  city: GuangZhou
  country: China
  descrption: simple is simple,love is love

# put icon in theme/source/img
favicon: /img/favicon.png
```
## Sidebar
siderbar设置
```
#show/hide sidebar [true or false] 
sidebar: 
    true
  
# sidebar widgets
widgets:
- profile
- recent
- category
- tagcloud
- link

#recent_posts count
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

#your friends link
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
代码风格 目前仅有一种
```
# only normal | todo
# code style
highlight_theme: 
    normal
```

## Analytics
站点统计
填入你的统计id即可
```
#Website analytics [your analytics id]
baidu_analytics: 
google_analytics: 
```
## Busuanzi
网站底部的访客记录
直接在配置文件中启用即可
```
#busuanzi site count
busuanzi:
  true  
```

## LeanCloud 
文章浏览次数记录和文章的评论功能

1. 注册一个 [LeanCloud](https://leancloud.cn/) 账户 创建一个新的应用(名称任意)

2. 创建新的Class名称为'Counter'

3. 在Counter里面新增以下列

```
//    列名   类型
    time   NUMBER
    url    String
    title  String
```

4. 在 '设置' 中获取app_id,app_key填写到配置文件即可

5. 设置enable为ture时则开启文章浏览次数记录，设置comment为ture时则开启文章评论


```
leancloud:
  enable: 
  comment: 
  app_id: 
  app_key: 
```

## Mob Share
在[ Mob ](http://dashboard.mob.com/)注册一个你的账号 新建一个ShareSDK获取WebShare的AppKey 
填入即可开启文章分享功能
```
mob_share:
  enable: true
  app_key: your_appkey
```

## Reward
文章赞赏/捐赠功能
```
#reward
reward:
  enable: true
  pic1: /img/r1.png
  pic2: /img/r2.png
```

# Content 页面创建
## Categories/Tags/About
1.add new page
```
cd yourblog
hexo new page categories/tags/about
```
2.add layout in categories/index.md
such:
```
---
title: categories/tags/about
date: 2017-10-26 22:19:49
layout: category/tag/about
---
```

***
# Other 其他

## [Nayo|Github](https://github.com/Lemonreds/hexo-theme-Nayo) 

如果有其他的问题或者建议  Contact me 
我会第一时间回复你 期待你的反馈

欢迎[ star ](https://github.com/Lemonreds/hexo-theme-Nayo)和[ 提issue ](https://github.com/Lemonreds/hexo-theme-Nayo)! 

## 关于主题名字

在制作主题的时候刚好听到的一首歌里面的歌词.<东京不太热> - 封茗囧菌

## 最后

Have a nice day ! Created by SYNCH.