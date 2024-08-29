import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [["link", { rel: "icon", href: "" }]],
  title: "Pay4Fish Wiki",
  description: "Вики с большим количеством полезной информации для пользователей pay4fish.cloud",
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Хостинг', link: '/host' },
      { text: 'Minecraft', link: '/minecraft' },
      { text: 'VPS', link: '/vps'}
    ],

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Поиск",
            buttonAriaLabel: "Поиск страницы",
          },
          modal: {
            noResultsText: "Результатов не найдено по запросу",
            resetButtonTitle: "Очистить",
            footer: {
              selectText: "- выбрать",
              navigateText: "- переключение между результатами",
              closeText: "- закрыть",
            },
          },
        },
      },
    },

    sidebarMenuLabel: "Меню",
    darkModeSwitchLabel: "Режим",
    returnToTopLabel: "Наверх",
    docFooter: {
      prev: "Предыдущая страница",
      next: "Следующая страница",
    },
    outline: {
      label: "Содержание",
      level: [2, 3],
    },

    notFound: {
      code: "Ошибка 404",
      title: "Страница не найдена",
      quote: "Возможно, она была удалена, либо же переименована без перенаправления. Может быть, вы отправите исправление на GitHub? (а кто это сделает, если не вы? ;) )",
      linkText: "Вернуться на главную",
    },

    sidebar: {
      '/host/': [
        {
          text: 'Хостинг',
          items: [
            { text: 'Айпи Адресса Нод', link: '/host/ip' },
            { text: 'Блокировка Акаунта', link: '/host/suspend' },
            { text: 'ID Сервера', link: '/host/id' },
            { text: 'Как выдать доступ пользователю?', link: '/host/userAccess'},
            { text: 'Как изменить дискорд?', link: '/host/discord'},
            { text: 'Как изменить тариф?', link: '/host/tariffChange'},
          ],
        }
      ],
      '/vps/': [
        {
          text: 'VPS',
          items: [
            { text: 'Как подключиться к VPS по SSH', link: '/vps/ssh' },
            { text: 'Как устоновить htop', link: '/vps/htop'},
            { text: 'Как устоновить neofetch', link: '/vps/neofetch'}
          ]
        }
      ],
      '/minecraft/': [
        {
          text: 'Minecraft',
          items: [
            { text: 'Майнкрафт Ядра', link: '/minecraft/cores' },
            { text: 'Полезные Плагины', link: '/minecraft/plugins'},
            { text: 'Не удалось проверить имя пользователя', link: '/minecraft/online-mode'},
            { text: 'Как изменить версию?', link: '/minecraft/version'},
            { text: 'Ошибка | Unsupported Java detected (65.0). Only up to Java 16 is supported.', link: '/minecraft/java'},
            { text: 'Устоновка плагинов', link: '/minecraft/plugin-install'},
            { text: 'Приязать домен к серверу', link: '/minecraft/domain'},
            { text: 'Защита от DDoS', link: '/minecraft/ddos'},




          ]
        }
      ],
    },
    
    footer: {
      message:
        "© 2023 - " +
        new Date().getFullYear() +
        '. <a href="https://pay4fish.cloud">Pay4Fish Cloud</a>',
    },


    socialLinks: [
      { icon: "discord", link: "https://discord.gg/smilenodes-c-khosting-igrovykh-serverov-i-saitov-1163201292395618355" },
      { icon: 'github', link: 'https://github.com/luckyloo1730/wiki' }
    ]
  }
})
