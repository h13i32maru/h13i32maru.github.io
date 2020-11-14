import fs from 'fs';
import path from 'path';
import {TimelineRender} from './TimelineRender';
import {timelineYears} from './timeline';

const timelineRender = new TimelineRender();

// load template
const templateIndexPath = path.resolve(__dirname, `./template-profile.html`);
const templateIndexHTML = fs.readFileSync(templateIndexPath).toString();

const indexHTML = templateIndexHTML
  .replace(/__TIMELINE__/, timelineRender.renderTimelineYears(timelineYears));

const indexPath = path.resolve(__dirname, `../docs/profile/index.html`);
fs.writeFileSync(indexPath, indexHTML);
console.log(indexPath)
