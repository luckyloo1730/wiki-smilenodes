---
order: 9
---
<!-- :::warning :construction: Under construction...

Эта статья ещё не готова.

Вы можете помочь, [отправив свою статью](https://t.me/luckyloo_dev) и сняв эту пометку.
::: -->

# Подключение TCPShield к серверу
> TCPShield - это прокси-сервис, обеспечивающий защиту сервера от DDoS атак.

Бесплатный тариф отлично подходит для серверов с количеством онлайн игроков менее 30. В этой статье рассмотрим его возможности и настройки.

## **Возможности бесплатного тарифа:**
- 1 ТБ трафика в месяц
- 1 сеть
- 3 домена

:::warning :warning: Важно
**Необходим купленный домен!**
**Приобрести его можно у [нас](https://smilenodes.xyz/domains/)**
:::

## Шаг 1

Для начала зарегистрируйтесь на сайте [tcpshield.com](https://tcpshield.com).

![Image1](https://wiki.play2go.cloud/minecraft/protection/tcpshield/img1.png)

## Шаг 2

После регистрации зайдите на [panel.tcpshield.com](https://panel.tcpshield.com), нажмите на кнопку "Add network" и введите название сети (любое название по вашему выбору). Затем нажмите на иконку настроек.

## Шаг 3

Добавьте CNAME запись в DNS. Target можно скопировать во вкладке Domains в настройках сети.

![Image2](https://wiki.play2go.cloud/minecraft/protection/tcpshield/img2.png)

## Шаг 4

Установите плагин на сервер, который будет заменять IP адреса TCPShield на IP адреса игроков.

![Image3](https://wiki.play2go.cloud/minecraft/protection/tcpshield/img3.png)

## Шаг 5

Перейдите во вкладку Backends и нажмите Add set.

![Image4](https://wiki.play2go.cloud/minecraft/protection/tcpshield/img4.png)

В поле **Name** придумайте любое имя.

В поле **Backend** введите IP и порт вашего сервера.

## Шаг 6

Перейдите во вкладку Domains и в самом низу нажмите на Add Domain. Введите ваш домен, по которому будут заходить игроки, например: play.example.com

![Image5](https://wiki.play2go.cloud/minecraft/protection/tcpshield/img5.png)

:::details Если домен не проходит верификацию
Нажмите на Begin Verification под полем Domain.
Создайте TXT запись.
![Image6](https://wiki.play2go.cloud/minecraft/protection/tcpshield/img6.png)
**Backend set**: Выберите ваш сервер, который вы добавили ранее.
:::

:::warning :exclamation: Аналог TCPShield
:::

# Подключение NeoProtect к серверу 

> NeoProtect - это прокси-сервис, аналогичный TCPShield, защищающий сервер от DDoS атак.
> 
> Бесплатный тариф подходит для серверов с онлайном менее 30 человек. Рассмотрим его возможности и настройки.

## Возможности бесплатного тарифа 
- 1 ТБ трафика в месяц
- 3 домена
- 2 точки присутствия (локации, а именно Германия и США)

:::warning :warning: Важно
**Необходим купленный домен!**
**Приобрести его можно у [нас](https://smilenodes.xyz/domains/)**
:::

## Шаг 1

Для начала зарегистрируйтесь на сайте [neoprotect.net](https://neoprotect.net).

![Image1](https://wiki.play2go.cloud/minecraft/protection/neoprotect/img1.png)

## Шаг 2

После регистрации зайдите на [panel.neoprotect.net](https://panel.neoprotect.net), нажмите на "+" и выберите тарифный план. Введите IP вашего сервера, выберите локацию и добавьте свой домен.

## Шаг 3

Добавьте CNAME запись в DNS. Данные можно скопировать во вкладке Domains в настройках сети.

![Image2](https://wiki.play2go.cloud/minecraft/protection/neoprotect/img2.png)
