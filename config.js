/**
 * config
 */

var path = require('path');

exports.config = {
  debug: false,
  name: 'Pomelo Club',
  description: 'Pomelo Club 是专业讨论 pomelo 的官方社区',
  version: '0.2.2',
  hostname: 'nodejs.netease.com',
  // site settings
  site_headers: [
      '<meta name="author" content="pomelo@NetEase" />',
  ],
  host: 'pomelo.netease.com',
  site_logo: '', // default is `name`
  site_navs: [
    // [ path, title, [target=''] ]
    ['/about', '关于'],
  ],
  site_static_host: '', // 静态文件存储域名
  site_enable_search_preview: false, // 开启google search preview
  site_google_search_domain: 'pomelo.netease.com', // google search preview中要搜索的域名

  upload_dir: path.join(__dirname, 'public', 'user_data', 'images'),

  db: 'mongodb://127.0.0.1/pomelo_club_dev',
  session_secret: 'pomelo_club',
  auth_cookie_name: 'pomelo_club',
  port: 3000,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // RSS
  rss: {
    title: 'Pomelo：pomelo专业中文社区',
    link: 'http://nodejs.netease.com',
    language: 'zh-cn',
    description: 'Pomelo：pomelo专业中文社区',

    //最多获取的RSS Item数量
    max_rss_items: 50
  },

  // site links
  site_links: [{
      'text': 'Node 官方网站',
      'url': 'http://nodejs.org/'
    }, {
      'text': 'Pomelo 官方网站',
      'url': 'http://pomelo.netease.com/'
    }, {
      'text': 'Pomelo github 地址',
      'url': 'https://github.com/NetEase/pomelo'
    }, {
      'text': 'Pomelo 中文开发文档',
      'url': 'https://github.com/NetEase/pomelo/wiki/Home-in-Chinese'
    }
  ],

  // sidebar ads
  side_ads: [{
      'url': 'http://pomelo.netease.com/',
      'image': 'http://pomelo.netease.com/image/logo.png',
      'text': ''
    }, {
      'url': 'http://cnodejs.org/',
      'image': 'http://cnodejs.org/public/images/logo.png',
      'text': ''
    }
  ],

  // mail SMTP
  mail_opts: {
    host: 'smtp.126.com',
    port: 25,
    auth: {
      user: 'pomelonode@126.com',
      pass: 'pomelo20120305'
    }
  },

  //weibo app key
  weibo_key: 10000000,

  // admin 可删除话题，编辑标签，设某人为达人
  admins: {
    admin: true,
    fantasyni: true,
    xiecc: true,
    demon: true,
    numbcoder: true,
    py8765: true,
    changchang: true
  },

  // [ { name: 'plugin_name', options: { ... }, ... ]
  plugins: [
    // { name: 'onehost', options: { host: 'localhost.cnodejs.org' } },
    // { name: 'wordpress_redirect', options: {} }
  ]
};