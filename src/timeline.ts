export type TimelineYearEntity = {
  year: number | string;
  timelines: TimelineEntity[];
}

export type TimelineEntity = {
  imageUrl?: string;
  month: number | string;
  title: string;
  desc: string;
  work: '個人活動' | '仕事';
  labels: string[];
  urls: {url: string; label?: string}[];
}

export const timelineYears: TimelineYearEntity[] = [
  {
    year: 2020,
    timelines: [
      {
        imageUrl: '../image/profile/2020-codelunchfm.png',
        month: 10,
        title: 'CodeLunch.fm再開',
        desc: 'ソフトウェアの技術トークを行っているポッドキャストを再開',
        work: '個人活動',
        labels: ['TypeScript', 'Design'],
        urls: [
          {url: 'https://codelunch.fm/'},
          {url: 'https://twitter.com/h13i32maru/status/1317311580372004865'},
        ],
      },
      {
        imageUrl: '../image/profile/2020-jasper.png',
        month: 10,
        title: 'Jasper v1.0.0リリース',
        desc: '2016年から開発しているGitHub用のIssue Reader「Jasper v1.0.0」をリリース',
        work: '個人活動',
        labels: ['TypeScript', 'Electron', 'React', 'Design', 'GraphQL', 'styled-components', 'GitBook'],
        urls: [
          {url: 'https://blog.h13i32maru.jp/entry/2020/10/05/172043'},
          {url: 'https://twitter.com/h13i32maru/status/1313033353516380160'},
        ]
      },
      {
        imageUrl: '../image/github.png',
        month: 10,
        title: 'クックパッドアプリ(Android版)のリニューアル',
        desc: 'リニューアルプロジェクトのAndroidエンジニアを担当',
        work: '仕事',
        labels: ['Android', 'VIPER Architecture', 'Kotlin', 'Dagger'],
        urls: []
      },
      {
        imageUrl: '../image/profile/2020-dininglab.png',
        month: 6,
        title: '食卓ラボリリース',
        desc: '食卓を楽しくするサービス「食卓ラボ」をiOS/Androidでリリース',
        work: '個人活動',
        labels: ['TypeScript', 'React Native', 'Design', 'styled-components', 'Node.js', 'Express', 'Google App Engine', 'Google Cloud Storage', 'Google Cloud SQL'],
        urls: [
          {url: 'https://blog.h13i32maru.jp/entry/2020/06/23/090000'},
          {url: 'https://twitter.com/h13i32maru/status/1275219696984326144'},
        ]
      },
      {
        imageUrl: '../image/github.png',
        month: 1,
        title: 'クックパッドのレシピ投稿領域の部長職を辞退',
        desc: '2018年から担ってきた部長職を今期は辞退して、エンジニア職に戻った',
        work: '仕事',
        labels: [],
        urls: [
          {url: 'https://blog.h13i32maru.jp/entry/2020/06/30/155452'}
        ]
      },
    ]
  },
  {
    year: 2019,
    timelines: [
      {
        imageUrl: '../image/github.png',
        month: 10,
        title: 'Trickleデスクトップ版リリース',
        desc: '2018年から開発している自分のアクティビティを保存する「Trickle」のデスクトップ版をリリース',
        work: '個人活動',
        labels: ['TypeScript', 'Electron', 'React', 'styled-components', 'Design'],
        urls: [
          {url: 'https://blog.h13i32maru.jp/entry/2019/10/05/181449'},
          {url: 'https://twitter.com/h13i32maru/status/1181000469717471233'}
        ]
      },
    ]
  },
  {
    year: 2018,
    timelines: [
      {
        imageUrl: '../image/github.png',
        month: 11,
        title: 'Trickleリリース',
        desc: '自分のアクティビティを気兼ねなく書き溜める「Trickle」をiOS/Androidでリリース。同日にAbemaTVに出演',
        work: '個人活動',
        labels: ['JavaScript', 'TypeScript', 'Node.js', 'React Native', 'styled-components', 'Express', 'Google App Engine', 'Google Cloud Storage', 'Google Cloud SQL'],
        urls: [
          {url: 'https://blog.h13i32maru.jp/entry/2018/11/12/092904'},
          {url: 'https://twitter.com/h13i32maru/status/1061779831543652353'},
          {url: 'https://times.abema.tv/news-article/5207398'}
        ]
      },
      {
        imageUrl: '../image/github.png',
        month: 7,
        title: 'Jasperを無料化',
        desc: '2016年から開発しているGitHub用のIssue Reader「Jasper」を無料化',
        work: '個人活動',
        labels: [],
        urls: [
          {url: 'https://blog.h13i32maru.jp/entry/2018/07/17/083215'}
        ]
      },
      {
        imageUrl: '../image/github.png',
        month: 4,
        title: 'クックパッド MYキッチンアプリをリリース',
        desc: 'レシピ作者向けのアプリとしてゼロから作った「MYキッチン」アプリをiOS/Androidでリリース',
        work: '仕事',
        labels: ['JavaScript', 'TypeScript', 'React Native', 'styled-components', 'Design'],
        urls: [
          {url: 'https://techlife.cookpad.com/entry/2018/04/16/100000'}
        ]
      },
      {
        imageUrl: '../image/github.png',
        month: 4,
        title: 'Forkwellのエンジニアインタビュー掲載',
        desc: 'Forkwellからリレー形式のエンジニアインタビューを受けて掲載されました',
        work: '個人活動',
        labels: [],
        urls: [
          {url: 'https://pr.forkwell.com/2018-04-13-095525/'}
        ]
      },
      {
        imageUrl: '../image/github.png',
        month: 1,
        title: 'クックパッド 投稿開発部 部長に就任',
        desc: 'クックパッド株式会社のレシピ事業のユーザ投稿に責任を持つ部署「投稿開発部」の部長に就任',
        work: '仕事',
        labels: ['PdM', 'デザインスプリント', 'ユーザインタビュー', '仮説検証', 'プロトタイプ'],
        urls: []
      }
    ]
  },
  {
    year: 2017,
    timelines: [
      {
        imageUrl: '../image/github.png',
        month: 8,
        title: 'iOS版クックパッドアプリの「レシピまとめ」をリリース',
        desc: '自分が投稿したレシピを自由にまとめることができる「レシピまとめ」をiOS版クックパッドアプリでリリース',
        work: '仕事',
        labels: ['PdM', 'PjM'],
        urls: [],
      },
      {
        imageUrl: '../image/github.png',
        month: 7,
        title: 'クックパッド サービス開発部 副部長に就任',
        desc: 'クックパッド株式会社のレシピ事業全体に責任を持つ部署「サービス開発部」の副部長に就任',
        work: '仕事',
        labels: ['PdM', 'PjM', '仮説検証', 'プロトタイプ', 'report.md'],
        urls: [],
      },
      {
        imageUrl: '../image/github.png',
        month: 1,
        title: 'Cookpad Tech Conf2017で登壇',
        desc: '「チームでプロダクト開発をするための取り組み」という内容でCookpad Tech Conf2017に登壇',
        work: '仕事',
        labels: [],
        urls: [
          {url: 'https://techconf.cookpad.com/2017/h13i32maru.html'}
        ]
      },
    ]
  },
  {
    year: 2016,
    timelines: [
      {
        imageUrl: '../image/github.png',
        month: 11,
        title: 'Node学園祭2016で登壇',
        desc: 'Jasperの作成で得た設計や開発の話をしました',
        work: '個人活動',
        labels: [],
        urls: [
          {url: 'https://nodefest.jp/2016/schedule.html#conference'},
          {url: 'https://liginc.co.jp/332939'}
        ]
      },
      {
        imageUrl: '../image/github.png',
        month: 9,
        title: 'Android版クックパッドアプリに「料理きろく」をリリース',
        desc: '自動で料理の写真を判定し、カレンダー形式で記録していく「料理きろく」をリリースしました',
        work: '仕事',
        labels: ['PdM', 'PjM'],
        urls: [
          {url: 'https://info.cookpad.com/pr/news/press_2017_0928'},
        ]
      },
      {
        imageUrl: '../image/github.png',
        month: 6,
        title: 'GitHub用のIssue Reader「Jasper」をリリース',
        desc: 'GitHubのIssueを効率的に閲覧することができる「Jasper」をMac/Window/Linuxでリリース',
        work: '個人活動',
        labels: ['JavaScript', 'TypeScript', 'Electron', 'styled-components', 'Design'],
        urls: [
          {url: 'https://blog.h13i32maru.jp/entry/2016/06/08/090000'},
          {url: 'https://twitter.com/h13i32maru/status/740339713949605888'},
          {url: 'https://jasperapp.io/'},
          {url: 'https://github.com/jasperapp/jasper'},
        ]
      },
    ]
  },
  {
    year: 2015,
    timelines: [
      {
        imageUrl: '../image/github.png',
        month: 12,
        title: '「The Web Explorer」頒布',
        desc: 'コミックマーケットC89で「The Web Explorer」に自作OSS「ESDoc」について執筆',
        labels: ['ESDoc', 'JavaScript'],
        work: '個人活動',
        urls: [
          {url: 'https://techbooster.booth.pm/items/178228'}
        ]
      },
      {
        imageUrl: '../image/github.png',
        month: 11,
        title: 'Node学園祭2015に登壇',
        desc: '自作したJavaScript向けのドキュメンテーションツール「ESDoc」についてNode学園祭2015で登壇',
        labels: ['ESDoc',' JavaScript'],
        work: '個人活動',
        urls: [
          {url: 'https://blog.h13i32maru.jp/entry/2015/11/08/140212'},
          {url: 'https://nodejs.connpass.com/event/20741/presentation/'},
        ]
      },
      {
        imageUrl: '../image/github.png',
        month: 11,
        title: 'Android版クックパッドアプリで「おまかせ整理」をリリース',
        desc: 'ブックマークしたレシピを自動的に分類する機能「おまかせ整理」をAndroid版クックパッドアプリでリリース',
        work: '仕事',
        labels: ['PdM', 'PjM', 'Android', 'Ruby on Rails', 'Solr'],
        urls: [
          {url: 'https://techlife.cookpad.com/entry/2015/09/30/170015'},
        ]
      },
      {
        imageUrl: '../image/github.png',
        month: 5,
        title: 'ESDocリリース',
        desc: 'ES2015以降のJavaScript向けのドキュメンテーションツール「ESDoc」をリリース',
        work: '個人活動',
        labels: ['JavaScript', 'ECMAScript2015', 'Node.js', 'Mocha', 'AST', 'Design', 'Elasticsearch'],
        urls: [
          {url: 'https://esdoc.org/'},
          {url: 'https://github.com/esdoc/esdoc'},
          {url: 'https://blog.h13i32maru.jp/entry/2015/05/06/221041'},
          {url: 'https://twitter.com/h13i32maru/status/595943068274008064'},
        ]
      }
    ]
  },
  {
    year: 2014,
    timelines: [
      {
        imageUrl: '../image/github.png',
        month: 12,
        title: '「丸山食堂」を実施',
        desc: '2日間限定で「丸山食堂」という食堂を知人のカフェを借りてオープン',
        work: '個人活動',
        labels: [],
        urls: [
          {url: 'https://blog.h13i32maru.jp/entry/2014/12/22/213239'}
        ]
      },
      {
        imageUrl: '../image/github.png',
        month: 10,
        title: 'SPWeb版クックパッドで「撮るレシピ」リリース',
        desc: '本や雑誌などのレシピを写真で撮って保存する機能「撮るレシピ」をSPWeb版クックパッドでSPAとしてリリース',
        work: '仕事',
        labels: ['JavaScript', 'SPA', 'jQuery'],
        urls: [
          {url: 'https://techlife.cookpad.com/entry/2014/10/23/095814', label: 'スマートフォンWebのフロントエンドを高速化する取り組み'},
        ]
      },
      {
        imageUrl: '../image/github.png',
        month: 3,
        title: 'クックパッド株式会社に入社',
        desc: 'レシピ事業を行っているクックパッド株式会社にWebフロントエンドエンジニアとして入社',
        work: '仕事',
        labels: [],
        urls: [],
      },
      {
        imageUrl: '../image/github.png',
        month: 3,
        title: 'KLab株式会社を退職',
        desc: '2013年から努めていたKLab株式会社を退職',
        work: '仕事',
        labels: [],
        urls: [
          {url: 'https://blog.h13i32maru.jp/entry/2014/03/01/211423'}
        ]
      },
      {
        imageUrl: '../image/github.png',
        month: 2,
        title: 'NavyJS, NavyCreatorをリリース',
        desc: 'Webフロントエンド向けのアプリケーションフレームワーク「NavyJS」と専用IDE「NavyCreator」をリリース',
        work: '個人活動',
        labels: ['C++', 'Qt', 'JavaScript', 'Canvas'],
        urls: [
          {url: 'https://blog.h13i32maru.jp/entry/2014/02/26/080953'},
          {url: 'http://navyjs.org/'},
          {url: 'https://github.com/h13i32maru/navyjs'},
          {url: 'https://github.com/h13i32maru/navyjs-legacy2'},
          {url: 'https://github.com/h13i32maru/navyjs-framework-legacy2'},
          {url: 'https://github.com/h13i32maru/navyjs-legacy1'},
        ]
      },
    ]
  },
  {
    year: '2011 ~ 2013',
    timelines: [
      {
        imageUrl: '../image/github.png',
        month: '2013.12',
        title: 'CodeLunch.fm開始',
        desc: 'ソフトウェア技術系のトークをするポッドキャスト「CodeLunch.fm」を開始',
        work: '個人活動',
        labels: [],
        urls: [
          {url: 'https://blog.h13i32maru.jp/entry/2013/12/15/225745', label: 'rebuild.fmに憧れてCode Lunchという技術系ポッドキャストを録ってみました'}
        ]
      },
      {
        imageUrl: '../image/github.png',
        month: '2013.11',
        title: 'Webフロントエンドパフォーマンスチューニングについて発信',
        desc: '業務で得たWebフロントエンドパフォーマンスチューニングについて内容を整理して発信',
        work: '仕事',
        labels: [],
        urls: [
          {url: 'https://speakerdeck.com/h13i32maru/webhurontoendopahuomansutiyuningu', label: 'Webフロントエンドパフォーマンスチューニング'},
        ]
      },
      {
        imageUrl: '../image/github.png',
        month: '2013.8',
        title: '「プロ野球グランドスラム」の開発',
        desc: 'KLab株式会社で「プロ野球グランドスラム」のWebフロントエンドを開発',
        work: '仕事',
        labels: ['JavaScript', 'Knockout.js', 'パフォーマンスチューニング', 'jQuery', 'Android WebView'],
        urls: [
          {url: 'https://www.4gamer.net/games/229/G022958/20130820038/', label: '「プロ野球グランドスラム」，日本国内での配信が本日スタート'},
        ]
      },
      {
        imageUrl: '../image/github.png',
        month: '2013.5',
        title: '「ロードオプザ・ドラゴン」の開発',
        desc: 'KLab株式会社で「ロードオプザ・ドラゴン」のサーバサイドを開発',
        work: '仕事',
        labels: ['PHP'],
        urls: [
          {url: 'https://octoba.net/archives/20130427-android-app-lods-191656.html'}
        ]
      },
      {
        imageUrl: '../image/github.png',
        month: '2013.4',
        title: '「GIGABOT WARS」の開発',
        desc: 'KLab株式会社で「GIGABOT WARS」のGUIアプリケーションフレームワークの開発',
        work: '仕事',
        labels: ['JavaScript', 'ngCore'],
        urls: [
          {url: 'https://gamebiz.jp/?p=101865'}
        ]
      },
      {
        imageUrl: '../image/github.png',
        month: '2012.7',
        title: 'RDBMSのBTree Indexについて発信',
        desc: 'RDBMSのIndexにはなぜBTreeが使われているかということについて調査・考察した内容を発信',
        work: '個人活動',
        labels: [],
        urls: [
          {url: 'https://blog.h13i32maru.jp/entry/2012/07/01/000000', label: 'なぜBTreeがIndexに使われているのか'}
        ]
      },
      {
        imageUrl: '../image/github.png',
        month: '2012.8',
        title: '他社協業のSNSの開発',
        desc: 'KLab株式会社で他社協業のSNSのAndroidを開発',
        work: '仕事',
        labels: ['Android', 'WebView', 'JavaScript'],
        urls: []
      },
      {
        imageUrl: '../image/github.png',
        month: '2011.8',
        title: '32Calorieをリリース',
        desc: '摂取したカロリーを簡単に記録できるAndroidアプリをリリース',
        work: '個人活動',
        labels: ['Android'],
        urls: [
          {url: 'https://play.google.com/store/apps/details?id=jp.h13i32maru.calorie'},
          {url: 'https://blog.h13i32maru.jp/entry/20110821/1313925301'}
        ],
      },
      {
        imageUrl: '../image/github.png',
        month: '2010.8',
        title: 'KLab株式会社に入社',
        desc: '受託開発・ソーシャルゲーム開発を行っている「KLab株式会社」にソフトウェアエンジニアとして入社',
        work: '仕事',
        labels: [],
        urls: []
      }
    ]
  },
  {
    year: '2006 ~ 2010',
    timelines: []
  },
]
