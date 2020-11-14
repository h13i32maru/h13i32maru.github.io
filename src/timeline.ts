export type TimelineYearEntity = {
  year: number;
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
        month: 10,
        title: 'Jasper v1.0.0リリース',
        desc: '2016年から開発しているGitHub用のIssue Reader「Jasper v1.0.0」をリリース',
        work: '個人活動',
        labels: ['TypeScript', 'Electron', 'React', 'Design', 'GraphQL', 'Styled-Components', 'GitBook'],
        urls: []
      },
    ]
  }
]
