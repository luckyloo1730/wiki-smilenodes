---
order: 8
---
<!-- 
:::warning :construction: Under construction...

Эта статья ещё не готова.

Вы можете помочь, [отправив свою статью](https://t.me/luckyloo_dev) и сняв эту пометку.
::: -->

# Привязка домена к серверу

![SRV Record](/minecraft/domain/srvrecorddomain.png)

Для привязки домена к серверу создайте SRV запись в настройках вашего домена.

В поле Name введите `_minecraft._tcp.(ваш поддомен)`

Priority укажите как 0.

Weight - 0 (если не сработает, попробуйте поставить Weight на 5)

В поле Port введите порт, который используется вашим сервером.

В поле Target укажите буквенный IP адрес ноды.

:::warning Важно!
Учтите, что если на вашей ноде уже существует сервер с портом 25565, он может иногда подставляться вместо вашего.

Это связано с тем, что сначала обрабатывается A/CNAME запись домена, и если SRV запись не загрузилась, используется стандартный порт Майнкрафта. Эта проблема находится **на стороне вашего провайдера или DNS сервера**, и наша поддержка не сможет помочь в этом случае.
:::
