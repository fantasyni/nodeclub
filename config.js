/**
 * config
 */

var path = require('path');

exports.config = {
  debug: false,
  name: 'Yixin Club',
  description: 'Yixin Club 是专业 yixin 开发者官方社区',
  version: '0.2.2',
  hostname: 'dev.yixin.im',
  // site settings
  site_headers: [
      '<meta name="author" content="pomelo@NetEase" />',
  ],
  host: 'dev.yixin.im',
  site_logo: '', // default is `name`
  site_navs: [
    // [ path, title, [target=''] ]
    ['/about', '关于'],
  ],
  site_static_host: '', // 静态文件存储域名
  site_enable_search_preview: false, // 开启google search preview
  site_google_search_domain: 'dev.yixin.im', // google search preview中要搜索的域名

  upload_dir: path.join(__dirname, 'public', 'user_data', 'images'),

  db: 'mongodb://10.120.147.141:17901/yixin_club',
  session_secret: 'yixin_club',
  auth_cookie_name: 'yixin_club',
  port: 8181,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // RSS
  rss: {
    title: 'Yixin：yixin开发者专业中文社区',
    link: 'http://dev.yixin.im',
    language: 'zh-cn',
    description: 'Yixin：yixin开发者专业中文社区',

    //最多获取的RSS Item数量
    max_rss_items: 50
  },

  // site links
  site_links: [{
      'text': '易信官网',
      'url': 'http://yixin.im/'
    }, {
      'text': '易信开放平台',
      'url': 'http://open.yixin.im/'
    }, {
      'text': '易信公众平台',
      'url': 'https://plus.yixin.im/'
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
      user: 'yixin_dev@126.com',
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