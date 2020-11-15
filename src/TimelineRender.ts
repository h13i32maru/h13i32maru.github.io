import {TimelineEntity} from './timeline';

export class TimelineRender {
  renderTimelines(timelines: TimelineEntity[]): string {
    let latestYear = '';
    const results = timelines.map(timeline => {
      const thisYear = timeline.date.split('.')[0];
      let yearView = '';
      if (latestYear !== thisYear) {
        yearView = `<div class="year-mark">${thisYear}</div>`;
      }
      latestYear = thisYear;

      // language=HTML
      return `
        ${yearView}
        <div class="content work-${timeline.private ? 'private' : 'job'}">
          <div class="content-image"><img src="${timeline.imageUrl}"/></div>
          <div class="content-body">
            <div>
              <span class="work-mark">${timeline.private ? '個人活動' : '仕事'}</span>
              <span class="content-title">${timeline.date} ${timeline.title}</span>
              </div>
            <div class="content-desc">${timeline.desc}</div>
            <div class="content-labels">${this.renderLabels(timeline.labels)}</div>
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
    return urls.map(url => `<a href="${url.url}">${url.label ?? url.url}</a>`).join('\n');
  }
}

