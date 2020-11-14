import {TimelineEntity, TimelineYearEntity} from './timeline';

export class TimelineRender {
  renderTimelineYears(timelineYears: TimelineYearEntity[]): string {
    const results = timelineYears.map(timelineYear => {
      // language=HTML
      return `
        <div class="year-container">
          <div class="year-label">${timelineYear.year}年</div>
          ${this.renderTimelines(timelineYear.year, timelineYear.timelines)}
        </div>
    `;
    });

    return results.join('\n');
  }

  private renderTimelines(year: number, timelines: TimelineEntity[]): string {
    const results = timelines.map(timeline => {
      // language=HTML
      return `
        <div class="content">
          <div class="content-image"><img src="${timeline.imageUrl}"/></div>
          <div class="content-body">
            <div><span class="content-title">${year}.${timeline.month} ${timeline.title}</span></div>
            <div class="content-desc">${timeline.desc}</div>
            <div class="content-labels"><div class="work">${timeline.work}</div>${this.renderLabels(timeline.labels)}</div>
            <div class="content-urls">
              ${this.renderUrls(timeline.urls)}
            </div>
          </div>
        </div>
      `;
    });

    return results.join('\n');
  }

  private renderLabels(labels: string[]): string {
    return labels.map(label => `<div>${label}</div>`).join('\n');
  }

  private renderUrls(urls: TimelineEntity['urls']): string {
    return urls.map(url => `<a href="${url.url}">${url.url}</a>`).join('\n');
  }
}

