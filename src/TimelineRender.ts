import {TimelineEntity} from './timeline';

export class TimelineRender {
  renderTimelines(timelines: TimelineEntity[]): string {
    const results = timelines.map(timeline => {
      // language=HTML
      return `
        <div class="content work-${timeline.private ? 'private' : 'job'}">
          <div class="content-image"><img src="${timeline.imageUrl}"/></div>
          <div class="content-body">
            <div><span class="content-title">${timeline.date} ${timeline.title}</span></div>
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

