# 四、HTML入门

> [!tip]
>
> 在学习每一门编程语言时，虽然 HTML 并不是编程语言，但为了也更好地理解它，我们都会从基础开始，入门阶段使用记事本进行开发，这样可以专注于语言的基本语法和结构，避免编辑器带来的干扰。例如，在后续学习 Java 语言的入门课程时，也会使用记事本进行基础练习。在本篇的 1-4 小节中，将使用记事本，后续则会转向使用 VS Code 编辑器进行更复杂的工作。

## 1.HTML初体验

### 1.1 新建hello.html文件

​	鼠标右键桌面->新建文本文档->输入文件名称：hello，回车保存

<img src="/Users/yanghuaqiang/Library/Application Support/typora-user-images/image-20250103上午115012184.png" alt="image-20250103上午115012184"/>

​	双击打开hello.txt文件->输入以下内容，ctrl+s并保存，关闭记事本窗口

```html
<marquee>hello,world!</marquee>
```

​	鼠标右键hello.txt->重命名：hello.html，回车保存

<img src="/Users/yanghuaqiang/Library/Application Support/typora-user-images/image-20250103上午114834144.png" alt="image-20250103上午114834144"/>

### 1.2  浏览器运行hello.html

- 运行

  双击文件hello.html文件

  <img src="/Users/yanghuaqiang/Library/Application Support/typora-user-images/image-20250103下午53617576.png" alt="image-20250103下午53617576" style="zoom:50%;" />

  > [!tip]
  >
  > 提示：记事本里调字体大小并不会影响页面内的字体大小

- 浏览器查看网页源代码

  网页空白部分鼠标右键->查看网页源代码

  <img src="/Users/yanghuaqiang/Library/Application Support/typora-user-images/image-20250103下午54005547.png" alt="image-20250103下午54005547" style="zoom:35%;" /> <img src="/Users/yanghuaqiang/Library/Application Support/typora-user-images/image-20250103下午54025681.png" alt="image-20250103下午54025681" style="zoom:35%;" />

- 浏览器检查

  <img src="/Users/yanghuaqiang/Library/Application Support/typora-user-images/image-20250103下午54153670.png" alt="image-20250103下午54153670" style="zoom:35%;" /> <img src="/Users/yanghuaqiang/Library/Application Support/typora-user-images/image-20250103下午54257767.png" alt="image-20250103下午54257767" style="zoom:35%;" />

  

> [!tip]
>
> **查看网页源代码**是快速查看页面的基本结构和初始 HTML 内容，但无法看到动态内容或进行交互操作。**浏览器检查**是更强大和灵活的调试工具，又称“开发者工具”，程序员常用它来查看和调试网页的动态内容、样式、脚本、网络请求等，支持实时修改和调试。因此，**浏览器的检查**是程序员最常用的功能，能够提供深入的页面分析和调试能力。

## 2.HTML标签

​	HTML标签是构建网页内容的**基本单位**，HTML 使用各种标签（也叫元素）来定义页面的结构和内容。每个 HTML 标签通常都有**起始标签**和**结束标签**，其称之为双标签。当然，并不是很绝对，一些没有结束标签的称之为单标签。此外呢，标签通常还包括**内容**和**属性**。

### 2.1 双标签

​	例如：

```
<marquee>hello,world!</marquee>
```

> [!tip]
>
> `<marquee>` 标签称为 滚动文本标签（跑马灯标签），用于让文本或元素在网页上水平或垂直滚动。常见的效果是水平从右到左或从左到右滚动文本。此标签不符合标准，已将废弃，仅用于笔记展示，无需记忆。

- `<marquee>`：起始标签（又称为开标签），是 HTML 元素的开始部分，用来标识一个 HTML 元素的开始。它通常由一个左尖括号 <、元素名称和右尖括号 > 组成。
- `hello,world!`：标签体（也叫做元素体）是指 HTML 元素中的**内容部分**，位于起始标签（开标签）和结束标签（闭标签）之间。
- `</marquee>`：结束标签（又称为闭标签）用于标识一个元素的结束。结束标签与起始标签（开标签）配对使用，用于明确指定 HTML 元素的范围。

<img src="/Users/yanghuaqiang/Library/Application Support/typora-user-images/image-20250103下午61039176.png" alt="image-20250103下午61039176" style="zoom:50%;" />

​	此外，标签不区分大小写，例如以下写法均正确，但是建议小写

```html
<marquee>hello,world!</marquee>
<MARQUEE>hello,world!</marquee>
<MARQuee>hello,world!</marquee>
```

### 2.2 单标签

​	例如：

```html
<input>
<input/>
```

> [!tip]
>
> `<input> ` 标签，用于在表单中创建各种类型的输入字段，让用户能够输入数据。<input> 元素是自闭合的，即不需要结束标签。仅用于展示单标签，后续笔记中会提到相关知识点。

​	可见，单标签无标签体，单标签两种表示方法，第二种中`/`表示标签的自结束。因为程序员在进行代码浏览时，看到开始标签，自然会去寻找结束标签，显然第二种的自结束表明其是单标签，更人性化，但是单标签屈指可数，就算是初级程序员也会铭记在心，也就不存在人不人性化的问题了。

### 2.3 标签嵌套

​	例如：

```html
<marquee>
	hello,world!
	<input>
</marquee>

<input>
```

​	`<marquee>`标签与第三行的`<input>`标签属于嵌套关系，与第六行的`<input>`标签属于并列关系。运行截图如下：

<img src="/Users/yanghuaqiang/Library/Application Support/typora-user-images/image-20250103下午82706264.png" alt="image-20250103下午82706264" style="zoom:50%;" />

## 3.HTML标签属性

​	HTML 标签属性是附加在 HTML 元素上的信息，用于控制元素的行为、样式或其他特性。属性通常在标签的开始部分定义，紧随元素名称之后，并以键值对的形式呈现。每个属性由属性名和属性值组成。

### 3.1 常规属性

​	例如：

```html
<marquee loop="1" bgcolor="orange">hello,world!</marquee>
<input type="password">
```

- `loop`、`bgcolor`、`type`为属性名
- `1`、`orange`、`passwprd`为属性值

<img src="/Users/yanghuaqiang/Library/Application Support/typora-user-images/image-20250103下午81832576.png" alt="image-20250103下午81832576" style="zoom:50%;" />

### 3.2 特殊属性

​	有些特殊的属性，没有属性名，只有属性值

​	例如：

```html
<input disabled>
```

### 3.3 属性注意点

1. 不同的标签，有不同的属性；也有一些通用属性（在任何标签内都能写，后面会详细

   总结）。

2. 属性名、属性值不能乱写，都是W3C规定好的。

3. 属性名同属性值一样，都不区分大小写，但推荐小写。

4. 双引号，也可以写成单引号，甚至不写都行，但还是推荐写双引号。

5. 标签中不要出现同名属性，否则后写的会失效，例如以下代码，`type="password"`将失效

   ```html
   <input type="text" type="password">
   ```

## 4.HTML基本结构

### 4.1 HTML基本结构

```html
<marquee>hello,world!</marquee>
```

​	对于以上代码，运行到浏览器，鼠标右键网页空白区域->点击“检查”->点击elements，即可查看网页源代码

<img src="/Users/yanghuaqiang/Library/Application Support/typora-user-images/image-20250103下午83802912.png" alt="image-20250103下午83802912" style="zoom:50%;" />

```html
<html>
	<head>
	</head>
	<body>
		<marquee>hello,world!</marquee>
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
  	<marquee>hello,world!</marquee>
  </body>
  ```

### 4.2 浏览器网页检查

​	在1.2章节我们已将提到过：**浏览器检查**是更强大和灵活的调试工具，又称“开发者工具”，程序员常用它来查看和调试网页的动态内容、样式、脚本、网络请求等，支持实时修改和调试。在这里又进行重复记录，可见其重要性。

​	快捷键：`F12`

<img src="/Users/yanghuaqiang/Library/Application Support/typora-user-images/image-20250103下午83802912.png" alt="image-20250103下午83802912" style="zoom:50%;" />

​	其中：elements（元素）就可以很好的帮助我们查看网页源码，这里请注意，此网页源码是浏览器经过处理后的正确源码，与网页右键查看网页源代码展现的代码不同。例如：

```html
<head>
	<marquee>hello,world!</marquee>
</head>
<body>
  <marquee>hello,world!</marquee>
</body>
```

​	本段代码进行浏览器运行时，你会看到两个`hello,world!`在水平进行滚动。显然，与我们的代码不符，因为其中的一个`hello,world!`在`head`标签内，他并不会在页面进行渲染，只有在`<body>`标签内的才能够渲染，综上，页面上只会出现一个`hello,world!`在水平滚动。

​	这时，请打开检查，我们会发现：`head`标签内`hello,world!`被更改到`<body>`标签内，为啥？这是因为`head`标签内出现了错误：不支持`<marquee>`标签，浏览器认为这个标签属于`<body>`标签内，所以进行了更改。

```html
<html>
	<head>
	</head>
	<body>
		<marquee>hello,world!</marquee>
  	<marquee>hello,world!</marquee>
	</body>
</html>
```

​	另外的，无论您标签是大写还是小写，属性值时双引号还是单引号，这都会被浏览器处理成正确的源代码，您不妨可以试一试。

​	conse控制台后续的JavaScript学习将会用到，其他的自行了解即可。

​	废了大半周折只为了强调一个问题，浏览器的检查很重要，非常重要，请好好利用它。

## 5. HTML注释

> [!tip]
>
> 从本小节开始，将使用VSCode进行练习，VSCode下载与使用见“三、准备工作-3.安装 VSCode”

​	新建hello.html文件->输入以下代码->ctrl+s保存->右键open with live server运行

```html
<!-- 下面的文字只能滚动一次 -->
<marquee loop="1">hello,world!</marquee>
<!-- 下面的文字可以无限滚动 -->
<marquee>hello,world!</marquee>
```

<img src="/Users/yanghuaqiang/Library/Application Support/typora-user-images/image-20250104下午121214364.png" alt="image-20250104下午121214364" style="zoom:50%;" />

​	运行截图如下：

<img src="/Users/yanghuaqiang/Library/Application Support/typora-user-images/image-20250104下午90911057.png" alt="image-20250104下午90911057" style="zoom:80%;" />

​	我们发现，`<!-- 下面的文字只能滚动一次 -->`、`<!-- 下面的文字可以无限滚动 -->`并不会渲染在浏览器页面，所以我们称其为注释。

- 作用1：注释，取自“备注”、“解释”两词的某字组合而成，顾名思义，它的作用是对代码进行解释和说明。

- 作用2：是让某一行或者某一段代码临时不参与运行，快捷键：`ctrl` +` /`

- 特点：注释的内容会被浏览器所忽略，不会呈现到页面中，但源代码中依然可见。

- 写法：以`<!--`开头，以`-->`结尾，有头有尾，有始有终。

- 注意：注释不能嵌套，例如以下代码：

  ```html
  <!-- 下面的文字只能滚动一次 
  	<!-- loop="1"为循环一次 -->
  -->
  <marquee loop="1">hello,world!</marquee>
  ```

  浏览器渲染代码，检索第一行的`<!--`为注释开头，第二行`-->`为注释结尾，所以第三行的`-->`会被当作内容进行渲染，截图如下：

  <img src="/Users/yanghuaqiang/Library/Application Support/typora-user-images/image-20250104下午123310672.png" alt="image-20250104下午123310672" style="zoom: 75%;" /><img src="/Users/yanghuaqiang/Library/Application Support/typora-user-images/image-20250104下午122822183.png" alt="image-20250104下午122822183" style="zoom:75%;" />

- 多行注释：只需换行即可

  ```html
  <!--
  	我是一段注释
  	我是一段注释
  -->
  ```

## 6. HTML文档声明

​	HTML 文档声明指的是在 HTML 文档开头的 `<!DOCTYPE>` 声明，用于告诉浏览器这个文档的 HTML 版本。它是 HTML 文档的第一行内容，位于`<html>` 标签之前。

- 作用：告诉浏览器当前网页的版本

- 写法：

  HTML5 的文档声明非常简单，只需要写：

  ```html
  <!DOCTYPE html>
  ```

  其他版本文档声明见：https://www.w3.org/QA/2002/04/valid-dtd-list.html

- 为什么需要文档声明：

  如果不写文档声明，大部分浏览器还是可以按照HTML/CSS**标准模式**进行渲染，但是少部分浏览器因为找不到文档声明，从而不知道当前网页的版本，渲染模式将进入**怪异模式**，导致网页内容差异，例如：盒模型计算方式不同、现代CSS属性无法正常工作。

  所以，为了避免网页渲染出现**怪异模式**，要是用文档声明，来提高页面的表现和兼容性。

> [!WARNING]
>
> 注意：`<!DOCTYPE html>`不是标签，是文档声明。还有前面提到的html不是编程语言，而是标记语言。

## 7.HTML字符编码

### 7.1 编码与解码

​	计算机对数据操作时，用到编码和解码

- 编码：在进行存储，例如保存txt文件、html文件时，计算机对数据进行编码
- 解码：在进行读取，例如查看txt文件、运行html文件时，计算机对数据进行解码

### 7.2 字符集

​	编码和解码会用遵循一种规范，这个规范就是字符集。通俗来说就是存储时要用到一种规范，读取时也要用到一种规范，读取和存储规范相同，则编码解码成功，否则会出现乱码，而这种规范就是字符集。

​	常见的字符集：

- ASCII ：大写字母、小写字母、数字、一些符号，共计128个，美国标准协会（ANSI）制定
- ISO 8859-1 ：在 ASCII 基础上，扩充了一些希腊字符等，共计是256个，国际标准化组织（ISO）制定
- GB2312 ：继续扩充，收录了 6763 个常用汉字、682个字符。中国国家标准化管理委员会制定
- GBK ：收录了的汉字和符号达到 20000+ ，支持繁体中文，由中国国家标准化管理委员会主导，微软参与
- **UTF-8 ：包含世界上所有语言的：所有文字与符号。—— 很常用。**由肯·汤普逊和罗布·派克在贝尔实验室发明，后来被 Unicode 联盟采纳。

### 7.3 使用原则

- 原则1：

  存储时，务必采用合适的字符编码 ，否则无法存储，数据会丢失！

- 原则2:

  存储时采用哪种方式编码 ，读取时就采用哪种方式解码，否则数据错乱（乱码）！

​	例如：	

```html
我爱你
I love you!
ฉนรกเธอนะ
က နမက ချစတယ။
```

​	若使用 ISO8859-1 编码存储，在存入的那一刻，就出问题了，因为 ISO8859-1 仅支持英文！为保证所有的输入，都能正常存储和读取，现在几乎全都采用： UFT-8 编码。所以我们编写 html 文件时，也都统一用 UFT-8 编码。

​	有图有真相：点击VSCode底栏UTF-8，即可更改解码和编码的字符集

<img src="/Users/yanghuaqiang/Library/Application Support/typora-user-images/image-20250104下午102006345.png" alt="image-20250104下午102006345" style="zoom:80%;" />

​	首先使用ISO8859-1进行解码，会发现出现乱码，这是因为此字符集仅支持英文，但是，解码错误还可以补救，改回原来的UTF-8字符集进行解码即可。

<img src="/Users/yanghuaqiang/Library/Application Support/typora-user-images/image-20250104下午102801886.png" alt="image-20250104下午102801886" style="zoom:70%;" /><img src="/Users/yanghuaqiang/Library/Application Support/typora-user-images/image-20250104下午102859744.png" alt="image-20250104下午102859744" style="zoom:70%;" />

​	然后试一试使用ISO8859-1进行编码，在改回UTF-8是否可以恢复？

<img src="/Users/yanghuaqiang/Library/Application Support/typora-user-images/image-20250104下午103143634.png" alt="image-20250104下午103143634" style="zoom:80%;" />

​	如果您还不理解到底啥玩意是编码和解码，啥玩意又是字符集，请看这里：计算机在理解数据时，他只会以二进制的方式理解，比如，我爱你，它会根据字符集来转换成二进制，那什么又是字符集呢，就是某些大佬制定的字典，这个字典里一个数字相当于一个符号，我爱你这三个符号，在某些字符集对应为100101010111（我瞎猜的）。

​	但是，字典很多，所以每个符号对应的数字在每个字典里也会不同。为了保存和读取时不出现意外，我们就需要在保存和读取时使用同一本字典，也就是编码与解码要遵循同一种字符集。

​	最先出来的字典是由美国制定的ASCII，他只支持数字、英文字母和部分符号，“我爱你”这三个字如果用这个字典来进行保存和读取时，由于在字典中找不到对应的编码，只能用“？？？”来代替。所以，程序猿们，如果给小美写一封电子情书，务必要遵循同一种编码规则，否则“我爱你”将会变成“？？？”，要是小美还是个“社会人”的话，“？？？”很可能会解读成“C*M”

### 7.4 html字符集

​	为了让浏览器在渲染 html 文件时，不犯错误，可以通过 meta 标签配合 charset 属性指定字符编码。

```html
<head>
	<meta charset="UTF-8"/>
</head
```

## 8.HTML设置语言

```html
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>我是标题</title>
</head>
<body>
    <marquee>hello,world!</marquee>
</body>
</html>
```

<img src="/Users/yanghuaqiang/Library/Application Support/typora-user-images/image-20250104下午111009150.png" alt="image-20250104下午111009150" style="zoom:80%;" />

​	当写一个英文网页时，运行到浏览器会弹出翻译提示，这是因为浏览器是中文配置，检索到英文网页时推荐您翻译，为了更好的让浏览器提示对应的翻译，就有了设置语言的功能。

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

  ​	语言代码参考手册：https://www.w3school.com.cn/tags/html_ref_language_codes.asp#google_vignette

  ​	国家/地区代码参考手册：https://www.w3school.com.cn/tags/html_ref_country_codes.asp

## 9.HTML标准结构

​	结合 4.HTML基本结构 和 文档声明、字符编码、设置语言等 就有了HTML的标准结构，如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>我是标题</title>
</head>
<body>

</body>
</html>
```

​	在VSCode中，借助代码提示功能，加上鼠标操作或者键盘操作即可，例如：在键盘上打出`<`符号，VSCode将提示出`<!DOCTYPE html>`代码，你只需要鼠标单击即可，或者键盘按`enter`回车即可，或者键盘按`tab`即可。

​	但是，更推荐这种做法，您只需要打上英文`!`，然后直接`tab`或者`enter`回车就可以自动生成HTML标准结构：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

​	在生成的结构中，第5行的`meta`标签可忽略，后续知识会提及到。

​	此外呢，您还可以配置 VScode 的内置插件 emmet ，可以对生成结构的属性进行定制。

## 10.计算机英语积累

| 单词    | 读法               | 原意     | html释义 | 备注                  |
| :------ | ------------------ | -------- | -------- | --------------------- |
| DOCTYPE | ˈdɒktaɪp 刀Q太破   | 文档类型 | 文档类型 | document type结合缩写 |
| lang    | læŋ 浪             | 语言     | 语言     | Language缩写          |
| meta    | ˈmetə 蜜特         | 元       | 元信息   |                       |
| charset | tʃɑː(r) set 差赛特 | 字符集   | 字符集   |                       |

<br />


<p style="text-align:right">更新于2025年01月02日</p>