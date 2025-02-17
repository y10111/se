# 9.  HTML设置语言

当写一个英文网页时，运行到浏览器会弹出翻译提示，这是因为浏览器是中文配置，检索到英文网页时推荐翻译，为了更好的让浏览器提示对应的翻译，就有了设置语言的功能。

- 主要作用：

  1. 让浏览器显示对应的翻译提示 ，例如`lang="en"`将推荐英文翻译
  2. 有利于搜索引擎优化

- 写法：

  ```html
  <html lang="zh-CN">
  ```

  `lang`为language缩写，`zh-CN`代表中文-中国大陆，常见的语言写法

  1. 第一种：语言-国家/地区，例如：

     zh-CN ：中文-中国大陆（简体中文）

     zh-TW ：中文-中国台湾（繁体中文）

     zh ：中文

     en-US ：英语-美国

     en-GB ：英语-英国

  2. 第二种：语言—具体种类，已不推荐使用，例如：

     zh-Hans ：中文—简体

     zh-Hant ：中文—繁体

了解更多语言见：

语言代码参考手册：https://www.w3school.com.cn/tags/html_ref_language_codes.asp#google_vignette

国家/地区代码参考手册：https://www.w3school.com.cn/tags/html_ref_country_codes.asp