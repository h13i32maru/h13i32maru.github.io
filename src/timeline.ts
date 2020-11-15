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
    timelines: []
  },
  {
    year: 2016,
    timelines: []
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
