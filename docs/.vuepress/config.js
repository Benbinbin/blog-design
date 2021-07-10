const { path } = require('@vuepress/utils')

module.exports = {
  open: true,
  lang: 'zh-CN',
  base: "/blog-design/",
  title: "Blog",
  description: 'A blog and knowledge management system about design.',
  head: [
    ['link', { rel: 'icon', href: '/blog-design/images/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.13.5/dist/katex.min.css' }],
  ],
  bundler: '@vuepress/vite',
  bundlerConfig: {
    viteOptions: {
      css: {
        postcss: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer')
          ]
        }
      },
    }
  },
  // bundler: '@vuepress/webpack',
  // bundlerConfig: {
  //   postcss: {
  //     postcssOptions: {
  //       plugins: {
  //         tailwindcss: {},
  //         autoprefixer: {},
  //       },
  //     },
  //   },
  // },
  plugins: [
    require('./plugins/addTime.js'),
    [require('./plugins/createHomePage.js'),
    {
      cards: [
        {
          name: "Color",
          image: "color.svg"
        },
        {
          name: "Bridge",
          image: "bridge.svg"
        },
        {
          name: "Figma",
          image: "figma.svg"
        },
        {
          name: "Illustrator",
          image: "illustrator.svg"
        },
        {
          name: "Photoshop",
          image: "photoshop.svg"
        },
      ]
    }],
    [require('./plugins/generateListPages.js'),
    {
      postClassifications: ['color', 'photoshop', 'illustrator', 'figma', 'bridge']
    }],
    [require('./plugins/generateFolderPages.js'),
    {
      postFolders: ['color', 'photoshop', 'illustrator', 'figma', 'bridge']
    }],
  ],
  theme: path.resolve(__dirname, './theme/index.js'),
  themeConfig: {
    navbar: false,
    sidebar: false,
    contributors: false,
    lastUpdatedText: '更新时间',
    themePlugins: {
      backToTop: false,
      nprogress: false,
    }
  },
  markdown: {
    links: {
      externalIcon: false
    }
  },
  extendsMarkdown: (md) => {
    md.use(require('@neilsustc/markdown-it-katex'), { output: 'html' });
    md.use(require('markdown-it-mark'));
    md.use(require('markdown-it-sub'));
    md.use(require('markdown-it-sup'));
  },
  define: {
    __BASE__: "/blog-design/",
    __HOME_PAGE_TITLE__: "DESIGN",
    __HOME_PAGE_ICON__: "home_icon.png",
    __HOME_DESCRIPTION__: "这是我的<a href='https://benbinbin.github.io/tech-blog/' target='_blank' class='hover:text-yellow-300 underline font-bold transition-colors'>技术部落格</a>之一，主要内容是与设计相关的笔记。",
    __HOME_PAGE_COLOR__: '#A78BFA',
    __AVATAR__: 'avatar.png',
    __CLASSIFICATIONS__: ['All', 'Color', 'Photoshop', 'Illustrator', 'Figma', 'Bridge'],
    __FOLDERS__: ['Color', 'Photoshop', 'Illustrator', 'Figma', 'Bridge'],
    __FOOTER_AVATAR_LINK__: 'https://benbinbin.github.io/',
    __AUTHOR__: 'Benbinbin',
    __FOOTER_LICENSE__: 'CC-BY-SA-4.0',
    __FOOTER_LICENSE_LINK__: 'https://creativecommons.org/licenses/by-sa/4.0/deed.en',
    __SOCIAL_MEDIA__: [
      {
        name: 'email',
        logo: 'email.svg',
        url: 'mailto:benthomsonbin@gmail.com'
      },
      {
        name: 'github',
        logo: 'github.svg',
        url: 'https://github.com/Benbinbin'
      },
      {
        name: 'juejin',
        logo: 'juejin.svg',
        url: 'https://juejin.cn/user/3175045314389278/posts'
      },
      {
        name: 'dribbble',
        logo: 'dribbble.svg',
        url: 'https://dribbble.com/BinBinDesign'
      },
      {
        name: 'twitter',
        logo: 'twitter.svg',
        url: 'https://twitter.com/Benbinbin_fun'
      },
      {
        name: 'weibo',
        logo: 'weibo.svg',
        url: 'https://weibo.com/binbindesign'
      },
    ],
  },
}