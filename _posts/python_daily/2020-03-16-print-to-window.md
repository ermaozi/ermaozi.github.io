---
layout: post 
title: Python的日常应用05
categories: python的日常应用
description: 在屏幕上滚动打印一句话
keywords: print
typora-root-url: ../..
---

> 我们在前四节中已经了解了什么是字符串、什么是切片、什么是循环
> 在这一节中，我们就将他们组合到一起来写一个比较有意思的小程序！

## **在屏幕上滚动打印一句话**

在这之前我们先做一个准备工作，那就是把我们的代码写进脚本。

之前的所有代码都是在python console中执行的。这种方式验证功能或是做代码调测的时候比较好用。真正的想要保存自己的代码，还是要将它们写进脚本中。
### **python脚本**

然而什么是脚本呢？

我们可以把它理解为许多条命令的一个汇总，在一个文件中按照一定的执行顺序去执行你所规划好的命令，这样的文件我们就可以把它看作是一个脚本。

现在我们就来创建我们的第一个脚本。

首先在我们电脑中任意一个你觉得顺眼的地方新建一个文本文档。

![img](/images/posts/python_daily/05/01)

名字取啥都行，像我一样懒的同学可以连名字不给它改。

然后直接打开它！

在里面输入我们前面学的随便几条命令。

![img](/images/posts/python_daily/05/02)

输入完成后记得按`Ctrl+S`进行保存。

然后在这个目录下按住shift右键，点击“在此处打开命令窗口”。（因为现在用的是Linux系统，截图后面再补）

在弹出的命令窗口中输入`python 你的文件名`，例如我的就是`python 新建文件`

![img](/images/posts/python_daily/05/03)

这样它就会顺序执行你在脚本中写的python语句了！

有了这个基础，我们再进行下一步。

### **编写我们的小程序**

直接上代码！

```python
import time

s = "我最爱我的宝贝越越了！"
while True:
    s = s[1:] + s[0]
    print(s, end='\r')
    time.sleep(0.2)
```

这是一个可以用来表白的一个小程序。越越是我的女朋友，我每次写完教程后都会给她看。如果她能看懂，我相信大部分人都能看懂。在这里特别感谢一下！

这部分代码呢，也是要写到我们的脚本中去。不建议直接复制粘贴，最好是手动敲一边，可以练练手感！其中的字符串部分可以替换成你想要输出的文字！

搞到脚本中后就可以按照之前说的方法运行它了！

下面是运行效果：

![img](/images/posts/python_daily/05/04)

这是一个滚动打印的极具精神污染的表白小程序。

下面我们简单的解读一下代码。

我相信这段代码中的绝大部分语法，在学习了前面的章节之后都能看懂。

只是其中有这样一段我们没有接触过：

```python
print(s, end='\r')
```

print括号中的end='\r'有同学肯定很陌生。end=×××是我们传递参数的一种语法，后面在函数章节会详细说明。

这一条语句在这里的意思是指，我们使用print方法进行打印时结束符号为'\r'，如果不传参数默认为'\n'。
python中带有'\'的字符都属于特殊字符，'\n'是换行符，'\r'代表输出完这句话时光标回到本行开头位置重新进行打印。

我们可以理解为在这同一行不停的刷新我们想要打印的信息。

python中的特殊字符还有很多。感兴趣的同学可以在网上查阅。有机会我也会单出一节来统一解读一下特殊字符的用途。

------

看到这里应该会有同学发出灵魂质问——我的程序现在一直在跑，停不下来了怎么办？

这个很简单！按一下`Ctrl+C`即可！

它一直在跑的原因是因为我们在代码中写了`while True`，我们复习一下。

while循环，只要它后面的条件成立，就会进入循环！这里的True就是“真”的意思，因为一直判断为真，所以它会一直循环打印！

其他的地方需要自己去解读咯。

------

最后再补充一句，虽然我们在执行脚本的时候只关心内容不关心脚本名。但还是建议大家python将脚本的扩展名改为“×××.py”。这样会方便我们的系统或是工具来识别。下一节IDE的讲解中也会提到该特性！

### **本节的练习题**

- 将本节的代码根据自己的理解，逐行注释一遍写在评论区。
