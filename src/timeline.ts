export type TimelineYearEntity = {
  year: number | string;
  timelines: TimelineEntity[];
}

export type TimelineEntity = {
  imageUrl?: string;
  month: number;
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
          {url: 'https://twitter.com/h13i32maru/status/740339713949605888'}
        ]
      },
    ]
  },
  {
    year: 2015,
    timelines: []
  },
  {
    year: 2014,
    timelines: []
  },
  {
    year: '2011 ~ 2013',
    timelines: []
  },
  {
    year: '2006 ~ 2010',
    timelines: []
  },
]
