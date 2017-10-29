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
#Website analytics [your analytics id]
baidu_analytics:
  636802045446222199ae541e32c8133e
google_analytics: 
```
## 不蒜子

直接在配置文件中启用即可
```
#busuanzi site count
busuanzi:
  true  
```

## LeanCloud

1.注册一个 [LeanCloud](https://leancloud.cn/) 账户 创建一个新的应用(名称任意)
2.创建新的Class名称为'Counter'
3.在Counter里面新增以下列
    time NUMBER
    url String
    title String
4.在'设置'中获取app_id,app_key填写到配置文件即可

```
#leancloud post count
leancloud:
  enable: true
  app_id: your_appid
  app_key: your_appkey
```


# Content 主题内容
## Categories
1.add new page
```
cd yourblog
hexo new page categories
```
2.add layout in categories/index.md
such:
```
---
title: categories
date: 2017-10-26 22:19:49
layout: category
---
```
## Tags
1.add new page
```
cd yourblog
hexo new page tags
```
2.add layout in tags/index.md
such:
```
---
title: tags
date: 2017-10-26 22:19:49
layout: tag
---
```
## About
1.add new page
```
cd yourblog
hexo new page about
```
2.add layout in about/index.md
such:
```
---
title: about
date: 2017-10-26 22:19:49
layout: about
---
//your detial content here
```
***
# Other 其他

## [Nayo|Github](https://github.com/Lemonreds/hexo-theme-Nayo) 

如果有其他的问题或者建议 Contact me 

欢迎star和提issue! 

## 关于主题名字

在制作主题的时候刚好听到的一首歌里面的歌词.<东京不太热> - 封茗囧菌

## Email 
lemonreds@163.com

Have a nice day ! Created by SYNCH.