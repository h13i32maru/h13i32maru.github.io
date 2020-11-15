export type TimelineEntity = {
  imageUrl: string;
  date: string;
  title: string;
  desc: string;
  private: boolean;
  labels: string[];
  urls: {url: string; label?: string}[];
}

export const timelines: TimelineEntity[] = [
  {
    imageUrl: '../image/profile/2020-codelunchfm.png',
    date: '2020.10',
    title: 'CodeLunch.fm再開',
    desc: 'ソフトウェアの技術トークを行っているポッドキャストを再開',
    private: true,
    labels: [],
    urls: [
      {url: 'https://codelunch.fm/'},
      {url: 'https://twitter.com/h13i32maru/status/1317311580372004865'},
    ],
  },
  {
    imageUrl: '../image/profile/2020-jasper.png',
    date: '2020.10',
    title: 'Jasper v1.0.0リリース',
    desc: '2016年から開発しているGitHub用のIssue Reader「Jasper v1.0.0」をリリース',
    private: true,
    labels: ['TypeScript', 'Electron', 'React', 'Design', 'GraphQL', 'styled-components', 'GitBook'],
    urls: [
      {url: 'https://jasperapp.io/'},
      {url: 'https://blog.h13i32maru.jp/entry/2020/10/05/172043'},
      {url: 'https://twitter.com/h13i32maru/status/1313033353516380160'},
    ]
  },
  {
    imageUrl: '../image/profile/2020-renewal-cookpad-android.png',
    date: '2020.10',
    title: 'クックパッドアプリ(Android版)のリニューアル',
    desc: 'リニューアルプロジェクトのAndroidエンジニアを担当',
    private: false,
    labels: ['Android', 'VIPER Architecture', 'Kotlin', 'Dagger'],
    urls: [
      {url: 'https://static.cookpad.com/android-renewal-2020/', label: 'Androidアプリが新しくなりました'}
    ]
  },
  {
    imageUrl: '../image/profile/2020-dininglab.png',
    date: '2020.06',
    title: '食卓ラボリリース',
    desc: '食卓を楽しくするサービス「食卓ラボ」をiOS/Androidでリリース',
    private: true,
    labels: ['TypeScript', 'React Native', 'Design', 'styled-components', 'Node.js', 'Express', 'Google App Engine', 'Google Cloud Storage', 'Google Cloud SQL'],
    urls: [
      {url: 'https://dininglab.app/'},
      {url: 'https://blog.h13i32maru.jp/entry/2020/06/23/090000'},
      {url: 'https://twitter.com/h13i32maru/status/1275219696984326144'},
    ]
  },
  {
    imageUrl: '../image/profile/no-image.png',
    date: '2020.01',
    title: 'クックパッドのレシピ投稿領域の部長職を辞退',
    desc: '2018年から担ってきた部長職を今期は辞退して、エンジニア職に戻った',
    private: false,
    labels: [],
    urls: [
      {url: 'https://blog.h13i32maru.jp/entry/2020/06/30/155452'}
    ]
  },
  {
    imageUrl: '../image/profile/2019-trickle-desktop.png',
    date: '2019.10',
    title: 'Trickleデスクトップ版リリース',
    desc: '2018年から開発している自分のアクティビティを保存する「Trickle」のデスクトップ版をリリース',
    private: true,
    labels: ['TypeScript', 'Electron', 'React', 'styled-components', 'Design'],
    urls: [
      {url: 'https://trickleapp.me/'},
      {url: 'https://blog.h13i32maru.jp/entry/2019/10/05/181449'},
      {url: 'https://twitter.com/h13i32maru/status/1181000469717471233'}
    ]
  },
  {
    imageUrl: '../image/profile/2018-trickle.png',
    date: '2018.11',
    title: 'Trickleリリース',
    desc: '自分のアクティビティを気兼ねなく書き溜める「Trickle」をiOS/Androidでリリース。同日にAbemaTVに出演',
    private: true,
    labels: ['JavaScript', 'TypeScript', 'Node.js', 'React Native', 'styled-components', 'Express', 'Google App Engine', 'Google Cloud Storage', 'Google Cloud SQL'],
    urls: [
      {url: 'https://trickleapp.me/'},
      {url: 'https://blog.h13i32maru.jp/entry/2018/11/12/092904'},
      {url: 'https://twitter.com/h13i32maru/status/1061779831543652353'},
      {url: 'https://times.abema.tv/news-article/5207398'}
    ]
  },
  {
    imageUrl: '../image/profile/2018-jasper-free.png',
    date: '2018.07',
    title: 'Jasperを無料化',
    desc: '2016年から開発しているGitHub用のIssue Reader「Jasper」を無料化',
    private: true,
    labels: [],
    urls: [
      {url: 'https://jasperapp.io/'},
      {url: 'https://blog.h13i32maru.jp/entry/2018/07/17/083215'}
    ]
  },
  {
    imageUrl: '../image/profile/2018-mykitchen.png',
    date: '2018.04',
    title: 'クックパッド MYキッチンアプリをリリース',
    desc: 'レシピ作者向けのアプリとしてゼロから作った「MYキッチン」アプリをiOS/Androidでリリース。現在は公開終了。',
    private: false,
    labels: ['JavaScript', 'TypeScript', 'React Native', 'styled-components', 'Design'],
    urls: [
      {url: 'https://techlife.cookpad.com/entry/2018/04/16/100000'}
    ]
  },
  {
    imageUrl: '../image/profile/2018-forkwell.jpg',
    date: '2018.04',
    title: 'Forkwellのエンジニアインタビュー掲載',
    desc: 'Forkwellからリレー形式のエンジニアインタビューを受けて掲載されました',
    private: true,
    labels: [],
    urls: [
      {url: 'https://pr.forkwell.com/2018-04-13-095525/'}
    ]
  },
  {
    imageUrl: '../image/profile/no-image.png',
    date: '2018.01',
    title: 'クックパッド 投稿開発部 部長に任命',
    desc: 'クックパッド株式会社のレシピ事業のユーザ投稿に責任を持つ部署「投稿開発部」の部長に任命',
    private: false,
    labels: ['PdM', 'デザインスプリント', 'ユーザインタビュー', '仮説検証', 'プロトタイプ'],
    urls: []
  },
  {
    imageUrl: '../image/profile/2017-cookpad-recipe-matome.png',
    date: '2017.08',
    title: 'iOS版クックパッドアプリの「レシピまとめ」をリリース',
    desc: '自分が投稿したレシピを自由にまとめることができる「レシピまとめ」をiOS版クックパッドアプリでリリース',
    private: false,
    labels: ['PdM', 'PjM'],
    urls: [],
  },
  {
    imageUrl: '../image/profile/no-image.png',
    date: '2017.07',
    title: 'クックパッド サービス開発部 副部長に任命',
    desc: 'クックパッド株式会社のレシピ事業全体に責任を持つ部署「サービス開発部」の副部長に任命',
    private: false,
    labels: ['PdM', 'PjM', '仮説検証', 'プロトタイプ', 'report.md'],
    urls: [],
  },
  {
    imageUrl: '../image/profile/2017-techconf.png',
    date: '2017.01',
    title: 'Cookpad Tech Conf2017で登壇',
    desc: '「チームでプロダクト開発をするための取り組み」という内容でCookpad Tech Conf2017に登壇',
    private: false,
    labels: [],
    urls: [
      {url: 'https://techconf.cookpad.com/2017/h13i32maru.html'}
    ]
  },
  {
    imageUrl: '../image/profile/2016-nodefest.jpg',
    date: '2016.11',
    title: 'Node学園祭2016で登壇',
    desc: 'Jasperの作成で得た設計や開発の話をしました',
    private: true,
    labels: [],
    urls: [
      {url: 'https://nodefest.jp/2016/schedule.html#conference'},
      {url: 'https://liginc.co.jp/332939'}
    ]
  },
  {
    imageUrl: '../image/profile/2016-cookinglog.jpg',
    date: '2016.09',
    title: 'Android版クックパッドアプリに「料理きろく」をリリース',
    desc: '自動で料理の写真を判定し、カレンダー形式で記録していく「料理きろく」をリリースしました',
    private: false,
    labels: ['PdM', 'PjM'],
    urls: [
      {url: 'https://info.cookpad.com/pr/news/press_2017_0928'},
    ]
  },
  {
    imageUrl: '../image/profile/2016-jasper.png',
    date: '2016.06',
    title: 'GitHub用のIssue Reader「Jasper」をリリース',
    desc: 'GitHubのIssueを効率的に閲覧することができる「Jasper」をMac/Window/Linuxでリリース',
    private: true,
    labels: ['JavaScript', 'TypeScript', 'Electron', 'styled-components', 'Design'],
    urls: [
      {url: 'https://jasperapp.io/'},
      {url: 'https://github.com/jasperapp/jasper'},
      {url: 'https://blog.h13i32maru.jp/entry/2016/06/08/090000'},
      {url: 'https://twitter.com/h13i32maru/status/740339713949605888'},
    ]
  },
  {
    imageUrl: '../image/profile/2015-web-explorer.jpg',
    date: '2015.12',
    title: '「The Web Explorer」頒布',
    desc: 'コミックマーケットC89で「The Web Explorer」に自作OSS「ESDoc」について執筆',
    labels: ['ESDoc', 'JavaScript'],
    private: true,
    urls: [
      {url: 'https://techbooster.booth.pm/items/178228'}
    ]
  },
  {
    imageUrl: '../image/profile/2015-nodefest.jpg',
    date: '2015.11',
    title: 'Node学園祭2015に登壇',
    desc: '自作したJavaScript向けのドキュメンテーションツール「ESDoc」についてNode学園祭2015で登壇',
    labels: ['ESDoc',' JavaScript'],
    private: true,
    urls: [
      {url: 'https://blog.h13i32maru.jp/entry/2015/11/08/140212'},
      {url: 'https://nodejs.connpass.com/event/20741/presentation/'},
    ]
  },
  {
    imageUrl: '../image/profile/2015-bookmark-category.png',
    date: '2015.11',
    title: 'Android版クックパッドアプリで「おまかせ整理」をリリース',
    desc: 'ブックマークしたレシピを自動的に分類する機能「おまかせ整理」をAndroid版クックパッドアプリでリリース',
    private: false,
    labels: ['PdM', 'PjM', 'Android', 'Ruby on Rails', 'Solr'],
    urls: [
      {url: 'https://techlife.cookpad.com/entry/2015/09/30/170015'},
    ]
  },
  {
    imageUrl: '../image/profile/2015-esdoc.png',
    date: '2015.05',
    title: 'ESDocリリース',
    desc: 'ES2015以降のJavaScript向けのドキュメンテーションツール「ESDoc」をリリース',
    private: true,
    labels: ['JavaScript', 'ECMAScript2015', 'Node.js', 'Mocha', 'AST', 'Design', 'Elasticsearch'],
    urls: [
      {url: 'https://esdoc.org/'},
      {url: 'https://github.com/esdoc/esdoc'},
      {url: 'https://blog.h13i32maru.jp/entry/2015/05/06/221041'},
      {url: 'https://twitter.com/h13i32maru/status/595943068274008064'},
    ]
  },
  {
    imageUrl: '../image/profile/2014-maruyama-syokudo.jpg',
    date: '2014.12',
    title: '「丸山食堂」を実施',
    desc: '2日間限定で「丸山食堂」という食堂を知人のカフェを借りてオープン',
    private: true,
    labels: [],
    urls: [
      {url: 'https://blog.h13i32maru.jp/entry/2014/12/22/213239'}
    ]
  },
  {
    imageUrl: '../image/profile/2014-toru-recipe.png',
    date: '2014.10',
    title: 'SPWeb版クックパッドで「撮るレシピ」リリース',
    desc: '本や雑誌などのレシピを写真で撮って保存する機能「撮るレシピ」をSPWeb版クックパッドでSPAとしてリリース',
    private: false,
    labels: ['JavaScript', 'SPA', 'jQuery'],
    urls: [
      {url: 'https://techlife.cookpad.com/entry/2014/10/23/095814', label: 'スマートフォンWebのフロントエンドを高速化する取り組み'},
    ]
  },
  {
    imageUrl: '../image/profile/2014-cookpad.png',
    date: '2014.03',
    title: 'クックパッド株式会社に入社',
    desc: 'レシピ事業を行っているクックパッド株式会社にWebフロントエンドエンジニアとして入社',
    private: false,
    labels: [],
    urls: [],
  },
  {
    imageUrl: '../image/profile/2014-klab.gif',
    date: '2014.03',
    title: 'KLab株式会社を退職',
    desc: '2010年から努めていたKLab株式会社を退職',
    private: false,
    labels: [],
    urls: [
      {url: 'https://blog.h13i32maru.jp/entry/2014/03/01/211423'}
    ]
  },
  {
    imageUrl: '../image/profile/2014-navyjs.png',
    date: '2014.02',
    title: 'NavyJS, NavyCreatorをリリース',
    desc: 'Webフロントエンド向けのアプリケーションフレームワーク「NavyJS」と専用IDE「NavyCreator」をリリース。現在は開発終了。',
    private: true,
    labels: ['C++', 'Qt', 'JavaScript', 'Canvas'],
    urls: [
      {url: 'http://navyjs.org/'},
      {url: 'https://blog.h13i32maru.jp/entry/2014/02/26/080953'},
      {url: 'https://github.com/h13i32maru/navyjs'},
      {url: 'https://github.com/h13i32maru/navyjs-legacy2'},
      {url: 'https://github.com/h13i32maru/navyjs-framework-legacy2'},
      {url: 'https://github.com/h13i32maru/navyjs-legacy1'},
    ]
  },
  {
    imageUrl: '../image/profile/2013-codelunchfm.png',
    date: '2013.12',
    title: 'CodeLunch.fm開始',
    desc: 'ソフトウェア技術系のトークをするポッドキャスト「CodeLunch.fm」を開始',
    private: true,
    labels: [],
    urls: [
      {url: 'https://blog.h13i32maru.jp/entry/2013/12/15/225745', label: 'rebuild.fmに憧れてCode Lunchという技術系ポッドキャストを録ってみました'}
    ]
  },
  {
    imageUrl: '../image/profile/2013-web-performance.png',
    date: '2013.11',
    title: 'Webフロントエンドパフォーマンスチューニングについて発信',
    desc: '業務で得たWebフロントエンドパフォーマンスチューニングについて内容を整理して発信',
    private: false,
    labels: [],
    urls: [
      {url: 'https://speakerdeck.com/h13i32maru/webhurontoendopahuomansutiyuningu', label: 'Webフロントエンドパフォーマンスチューニング'},
    ]
  },
  {
    imageUrl: '../image/profile/2013-baseball.jpg',
    date: '2013.08',
    title: '「プロ野球グランドスラム」の開発',
    desc: 'KLab株式会社で「プロ野球グランドスラム」のWebフロントエンドを開発',
    private: false,
    labels: ['JavaScript', 'Knockout.js', 'パフォーマンスチューニング', 'jQuery', 'Android WebView'],
    urls: [
      {url: 'https://www.4gamer.net/games/229/G022958/20130820038/', label: '「プロ野球グランドスラム」，日本国内での配信が本日スタート'},
    ]
  },
  {
    imageUrl: '../image/profile/2013-lods.jpg',
    date: '2013.05',
    title: '「ロードオプザ・ドラゴン」の開発',
    desc: 'KLab株式会社で「ロードオプザ・ドラゴン」のサーバサイドを開発',
    private: false,
    labels: ['PHP'],
    urls: [
      {url: 'https://octoba.net/archives/20130427-android-app-lods-191656.html'}
    ]
  },
  {
    imageUrl: '../image/profile/2013-gigabot.png',
    date: '2013.04',
    title: '「GIGABOT WARS」の開発',
    desc: 'KLab株式会社で「GIGABOT WARS」のGUIアプリケーションフレームワークの開発',
    private: false,
    labels: ['JavaScript', 'ngCore'],
    urls: [
      {url: 'https://gamebiz.jp/?p=101865'}
    ]
  },
  {
    imageUrl: '../image/profile/2012-btree.png',
    date: '2012.07',
    title: 'RDBMSのBTree Indexについて発信',
    desc: 'RDBMSのIndexにはなぜBTreeが使われているかということについて調査・考察した内容を発信',
    private: true,
    labels: [],
    urls: [
      {url: 'https://blog.h13i32maru.jp/entry/2012/07/01/000000', label: 'なぜBTreeがIndexに使われているのか'}
    ]
  },
  {
    imageUrl: '../image/profile/no-image.png',
    date: '2012.08',
    title: '他社協業のSNSの開発',
    desc: 'KLab株式会社で他社協業のSNSのAndroidを開発',
    private: false,
    labels: ['Android', 'WebView', 'JavaScript'],
    urls: []
  },
  {
    imageUrl: '../image/profile/2011-calorie.png',
    date: '2011.08',
    title: '32Calorieをリリース',
    desc: '摂取したカロリーを簡単に記録できるAndroidアプリをリリース',
    private: true,
    labels: ['Android'],
    urls: [
      {url: 'https://play.google.com/store/apps/details?id=jp.h13i32maru.calorie'},
      {url: 'https://blog.h13i32maru.jp/entry/20110821/1313925301'}
    ],
  },
  {
    imageUrl: '../image/profile/2010-klab.gif',
    date: '2010.08',
    title: 'KLab株式会社に入社',
    desc: '受託開発・ソーシャルゲーム開発を行っている「KLab株式会社」にソフトウェアエンジニアとして入社',
    private: false,
    labels: [],
    urls: []
  },
  {
    imageUrl: '../image/profile/2010-custom-twitter.png',
    date: '2010.06',
    title: '「Custom Twitter」をリリース',
    desc: 'Web版のTwitterをGoogle風の見た目にカスタマイズして遊べるGreasemonkey製のジョークツール「Custom Twitter」をリリース',
    private: true,
    labels: ['JavaScript','Greasemonkey'],
    urls: [
      {url: 'https://blog.h13i32maru.jp/entry/20100509/1273412605', label: 'TwitterをGoogle風にカスタマイズするグリモン「CustomTwitter」を作りました'},
      {url: 'https://blog.h13i32maru.jp/entry/20100620/1277013917', label: 'CustomTwitterが産経新聞に掲載されました'},
      {url: 'https://blog.h13i32maru.jp/entry/20100605/1275741713', label: 'CustomTwitterがスラドに掲載されてガクブル'},
    ]
  },
  {
    imageUrl: '../image/profile/no-image.png',
    date: '2010.01',
    title: 'Cisco VPN Clientの問題を記載',
    desc: 'Cisco VPN ClientをKNOPPIXなどの1CD Linuxで使う場合の問題について記載',
    private: false,
    labels: ['Cisco', 'strace', 'エントロピー'],
    urls: [
      {url: 'https://blog.h13i32maru.jp/entry/20100115/1263561541', label: 'Cisco vpnclient物語'}
    ]
  },
  {
    imageUrl: '../image/profile/2010-toox.png',
    date: '2010.01',
    title: 'Tooxをリリース',
    desc: 'メモ帳、ブックマーク管理、お金の管理ができるWebサービス「Toox」をリリース。現在はサービス終了。',
    private: true,
    labels: ['Ruby', 'jQuery', 'Design'],
    urls: [
      {url: 'https://blog.h13i32maru.jp/entry/20100101/1262334689', label: '初めてのWebサービス「Toox」をリリースしました'},
      {url: 'https://blog.h13i32maru.jp/entry/20100326/1269635841', label: 'Tooxリニューアルして2度目のリリース！！'},
      {url: 'https://blog.h13i32maru.jp/entry/20100103/1262493641', label: 'Tooxを紹介していただいた方々'},
    ]
  },
  {
    imageUrl: '../image/profile/2006-ize-thin-client.jpg',
    date: '2006.04',
    title: 'iZE株式会社に入社',
    desc: '受託開発やThin Client開発をしているiZE株式会社に入社。指紋認証搭載のUSBメモリ型Linux Thin Clientの開発',
    private: false,
    labels: ['Linux', 'KNOPPIX', 'GRUB', 'C++', 'Qt', 'RDP'],
    urls: [
      {url: 'https://japan.zdnet.com/article/20361559/', label: 'アイズ、USBメモリで指紋認証するシンクライアント「iZE Thin Client」発表'},
      {url: 'https://news.mynavi.jp/article/20071126-a034/', label: '既存PCをシンクライアント端末に! アイズ、iZE Thin Clientの新モデル発売'}
    ]
  }
]
