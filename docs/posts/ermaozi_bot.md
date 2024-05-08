---
date: 2024-05-08
category:
  - 机器人
tag:
  - 机器人

excerpt: 搭建二猫子剑网三QQ群机器人，保姆级教程。
---

# 自己一只搭建二猫子 QQ 机器人

## 针对高手的一句话搭建

随便搞一个支持 OneBot v11 的客户端，然后把反向 ws 地址改为：

`wss://ermaozi.cn/onebot/v11/ws`

## 购买服务器并登录

### 购买

腾讯云 [https://curl.qcloud.com/rf4aBb9m](https://curl.qcloud.com/rf4aBb9m)

云服务器优点是稳定，且有公网IP，缺点就是贵。如果是富婆富哥可以无视此缺点。多翻翻，买个最便宜的。

![alt text](/image/ermaozi_bot/image..png)

购买时地域选择 **上海**，镜像选择 **Docker**

![alt text](/image/ermaozi_bot/image.-1.png)

上海离我的服务器近，连接能快一点，镜像选择 Docker 可以不用再装docker，省事。

### 找到你的IP与密码

先进控制台，它的位置是不确定的（位置与样貌随时间改变而改变），但是可以肯定名字不会变，我只能帮你到这了

![alt text](/image/ermaozi_bot/image.-2.png)

进入轻量应用服务器

![alt text](/image/ermaozi_bot/image.-3.png)

因为我们买的是轻量服务器，所以选这个

![alt text](/image/ermaozi_bot/image.-4.png)

（公）后面的ip就是你的公网ip，记下来，存在记事本里，或是抄下来

![alt text](/image/ermaozi_bot/image.-5.png)

然后点击更多，选择重置密码，重置完成后，**请运用你的所有智慧，不择手段地记住它，狠狠地记住这个密码**

如果你的系统装错了也可以点击更多里面的重装系统进行重装。

### 登录服务器

按 `win + R` 打开运行窗口，输入 `cmd` 回车

![alt text](/image/ermaozi_bot/image.-6.png)

输入 `ssh ubuntu@你的服务器ip` 回车

![alt text](/image/ermaozi_bot/image.-7.png)

如果是第一次登录服务器，会提示你是否确认连接，输入 `yes` 回车

完成后会提示输入密码，把上面重置过的密码手动输入或是复制进去都可以，**注意**：这个时候输入的密码并不会显示出来，输入完成后直接按回车就好了。

![alt text](/image/ermaozi_bot/image.-8.png)

事已至此，你已经成功登录到服务器了。

## 安装 Docker

如果你选择了 Docker 镜像，那么恭喜你，你已经省去了一大部分麻烦，因为 Docker 镜像已经帮你装好了 Docker。

如果你选择了 Ubuntu 镜像，那么你需要自己安装 Docker。

顺序执行以下命令即可：

```bash
sudo apt-get update
sudo wget -qO- https://get.docker.com/ | bash
```

安装成功后，输入 `docker -v` 查看版本号，如果有版本号输出，说明安装成功。

![alt text](/image/ermaozi_bot/image.-9.png)

## 安装 lagrange

lagrange 是一个支持 OneBot v11 的客户端，我们可以使用它来对接到我们服务器。

首先创建一个配置文件目录（逐条执行以下命令）：

```bash
cd ~
mkdir lagrange
mkdir 你的QQ号
```

下载镜像，并初始化

```bash
docker run -it --name 你的QQ号 --restart always -v ~/lagrange/你的QQ号:/app/data ghcr.io/konatadev/lagrange.onebot:edge
```
