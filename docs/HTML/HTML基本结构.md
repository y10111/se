# 5. HTML基本结构

如下：

```html
<html>
	<head>
	</head>
	<body>
    <div>hello,world!</div>
	</body>
</html>
```

- `<html>`标签是：整个 HTML 文档的根元素，它将所有的 HTML 内容封装在一个容器中，所有的 HTML 元素都应该位于此标签内

- `<head>`标签：包含了网页的元数据（metadata），如字符集、标题、样式、外部文件的链接、脚本等。它并不直接影响页面的可视内容，但它对页面的结构和功能至关重要。例如：

  ```html
  <head>
  	<title>我是标题</title>
  </head>
  ```

- `<body>`标签：包含了网页的主体内容，即用户在浏览器中实际看到的内容。所有可视化的元素，如文字、图片、表单、按钮等，都会位于 <body> 标签内，例如：

  ```html
  <body>
  	<div>hello,world!</div>
  </body>
  ```
