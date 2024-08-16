---
order: 9
---
<!-- :::warning :construction: Under construction...

Эта статья ещё не готова.

Вы можете помочь, [отправив свою статью](https://t.me/luckyloo_dev) и сняв эту пометку.
::: -->

# Настройка TCPShield для защиты сервера

> TCPShield - это прокси-сервис для защиты серверов от DDoS-атак.

Бесплатный план отлично подходит для серверов с количеством игроков онлайн менее 30. В этой статье рассмотрены возможности и настройка данного сервиса.

## Возможности бесплатного плана

- 1 ТБ трафика в месяц
- 1 сеть
- 3 домена

:::warning :warning: Важно
**Необходим зарегистрированный домен!**
**Приобрести его можно [здесь](https://pay4fish.cloud/domains/)**
:::

## Шаг 1

Зарегистрируйтесь на [tcpshield.com](https://tcpshield.com).

![Image1](https://wiki.play2go.cloud/minecraft/protection/tcpshield/img1.png)

## Шаг 2

После регистрации войдите на [panel.tcpshield.com](https://panel.tcpshield.com), нажмите "Add network" и задайте имя вашей сети. Затем перейдите к настройкам.

## Шаг 3

Добавьте CNAME-запись в DNS. Целевой адрес можно скопировать из вкладки Domains в настройках сети.

![Image2](https://wiki.play2go.cloud/minecraft/protection/tcpshield/img2.png)

## Шаг 4

Установите плагин на сервер, чтобы замещать IP-адреса TCPShield на IP-адреса игроков.

![Image3](https://wiki.play2go.cloud/minecraft/protection/tcpshield/img3.png)

## Шаг 5

Перейдите во вкладку Backends и нажмите "Add set".

![Image4](https://wiki.play2go.cloud/minecraft/protection/tcpshield/img4.png)

В поле **Name** введите произвольное имя.

В поле **Backend** укажите IP и порт вашего сервера.

## Шаг 6

Перейдите во вкладку Domains и нажмите "Add Domain" в самом низу. Укажите домен, который будут использовать игроки, например: play.example.com.

![Image5](https://wiki.play2go.cloud/minecraft/protection/tcpshield/img5.png)

:::details Если домен не проходит верификацию
Нажмите "Begin Verification" под полем Domain. Создайте TXT-запись.
![Image6](https://wiki.play2go.cloud/minecraft/protection/tcpshield/img6.png)
**Backend set**: Выберите ваш сервер, добавленный ранее.
:::

---

# Настройка NeoProtect для защиты сервера

> NeoProtect - аналогичный TCPShield прокси-сервис для защиты от DDoS-атак.

Бесплатный план подходит для серверов с менее чем 30 игроками онлайн. Рассмотрим его возможности и настройку.

## Возможности бесплатного плана

- 1 ТБ трафика в месяц
- 3 домена
- 2 локации (Германия и США)

:::warning :warning: Важно
**Необходим зарегистрированный домен!**
**Приобрести его можно [здесь](https://pay4fish.cloud/domains/)**
:::

## Шаг 1

Зарегистрируйтесь на [neoprotect.net](https://neoprotect.net).

![Image1](https://wiki.play2go.cloud/minecraft/protection/neoprotect/img1.png)

## Шаг 2

После регистрации войдите на [panel.neoprotect.net](https://panel.neoprotect.net), нажмите "+", выберите тарифный план, введите IP вашего сервера, выберите локацию и добавьте домен.

## Шаг 3

Добавьте CNAME-запись в DNS. Данные можно скопировать из вкладки Domains в настройках сети.

![Image2](https://wiki.play2go.cloud/minecraft/protection/neoprotect/img2.png)
