---
order: 9
---
<!-- :::warning :construction: Under construction...

Эта статья ещё не готова.

Вы можете помочь, [отправив свою статью](https://t.me/luckyloo_dev) и сняв эту пометку.
::: -->

# Подключение TCPShield к серверу
> TCPShield - это прокси-сервис, обеспечивающий защиту сервера от DDoS атак.

Бесплатный тариф идеально подходит для серверов с менее чем 30 онлайн игроками. В этой статье мы обсудим именно этот тариф.

## **Возможности бесплатного тарифа:**
>- 1 ТБ трафика в месяц
>- 1 сеть
>- 3 домена

:::warning :warning: Обратите внимание
**Обязательно нужен купленный домен!**
:::

## Шаг 1

Для начала, нужно зайти на сайт [tcpshield.com](https://tcpshield.com) и зарегистрироваться.

![Image1](https://wiki.play2go.cloud/minecraft/protection/tcpshield/img1.png)

## Шаг 2

После того как вы зарегистрируетесь и окажетесь на [panel.tcpshield.com](https://panel.tcpshield.com), нажмите на кнопку "Add network" и напишите название сети (любое название, какое захотите). После её создания нажмите на иконку настроек.

## Шаг 3

Добавляем CNAME запись в DNS. Target можно скопировать во вкладке Domains в настройках сети.

![Image2](https://wiki.play2go.cloud/minecraft/protection/tcpshield/img2.png)

## Шаг 4

Устанавливаем плагин на сервер, который будет заменять IP адреса TCPShield на IP адреса игроков. 

![Image3](https://wiki.play2go.cloud/minecraft/protection/tcpshield/img3.png)

## Шаг 5

Переходим во вкладку Backends и нажимаем Add set.

![Image4](https://wiki.play2go.cloud/minecraft/protection/tcpshield/img4.png)

В поле **Name** придумываем любое имя.

В поле **Backend** пишем IP и порт вашего сервера.

## Шаг 6 

Обратно переходим во вкладку Domains и в самом низу нажимаем на Add Domain.
Пишите ваш домен по которому будут заходить игроки.
Например: play.example.com

![Image5](https://wiki.play2go.cloud/minecraft/protection/tcpshield/img5.png)

:::details Если домен не проходит верефикацию
Нажмите на Begin Verification под полем Domain.
Создайте TXT запись.
![Image6](https://wiki.play2go.cloud/minecraft/protection/tcpshield/img6.png)
**Backend set**: Выбирайте ваш сервер, который вы добавляли ранее.
:::
