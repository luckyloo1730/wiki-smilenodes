import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SmileNodes Wiki",
  description: "SmileNodes Wiki",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Хостинг', link: '/host' },
      { text: 'VPS', link: '/vps'}
    ],

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
            { text: 'Как изменить версию?', link: '/host/version'},


          ]
        }
      ],
      '/vps/': [
        {
          text: 'VPS',
          items: [
            { text: 'Как подключиться к VPS по SSH', link: '/vps/ssh' }
          ]
        }
      ]
    },
    
    footer: {
      message:
        "© 2023 - " +
        new Date().getFullYear() +
        '. <a href="https://smilenodes.xyz">SmileNodes</a>',
    },


    socialLinks: [
      { icon: "discord", link: "https://discord.gg/smilenodes" },
      { icon: 'github', link: 'https://github.com/luckyloo1730/wiki' }
    ]
  }
})
