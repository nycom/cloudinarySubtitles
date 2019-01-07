import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CloudinarySubtitleLibService {

  BASE_URL = 'https://res.cloudinary.com/';
  CLOUDINARY_URL_VIDEO_TYPE_EXTENSION = '/video/upload/';

  constructor() {}

  public addSubtitlesToVideo(cloudName: string, videoPublicId: string, subtitles: any) {

    if (!cloudName || cloudName.length === 0) {
      console.error(`Missing or empty appropriate cloudName...
                     cloudName should be a string which represents your cloud name provided by cloudinary,\n
                     please follow the instructions and try again`);
      return;
    }

    if (!videoPublicId || videoPublicId.length === 0) {
      console.error(`Missing appropriate videoPublicId...\n
                     videoPublicId should be a string which represents the video id provided by cloudinary,\n 
                     please follow the instructions and try again`);
      return;
    }

    if (!subtitles || !subtitles.subtitles || subtitles.subtitles.length === 0) {
      console.error(`Missing or bad appropriate subtitles JSON...\n
                     the appropriate subtitles JSON should be of type:\n
                     { subtitles: { 'start-timing': string, 'end-timing': string, text: string }[] }\n
                     please follow the instructions and try again`);
      return;
    }

    let url = this.BASE_URL + cloudName + this.CLOUDINARY_URL_VIDEO_TYPE_EXTENSION;
    const subtitlesArray = subtitles.subtitles;

    subtitlesArray.map((entry, index) => {
      if (entry['start-timing'] && entry['end-timing'] && entry.text) {
          url += this.entryToCloudinaryParams(entry);
      } else {
        console.error(`Bad subtitle format at index ${index}, please make sure that each subtitle is of 
        type: { 'start-timing': string, 'end-timing': string, text: string }`);
      }
    });

    url += videoPublicId;
    return url;
  }

  private entryToCloudinaryParams(entry): string {
    return (this.addTextPositionAndStyles(entry.text) +
      this.parseTimeToParam('so_', entry['start-timing']) + ',' +
      this.parseTimeToParam('eo_', entry['end-timing']) + '/');
  }

  private addTextPositionAndStyles(text): string {
    return 'l_text:Arial_40px:' + encodeURIComponent(encodeURIComponent(text)) + ',y_60,g_south,b_black,co_white,';
  }

  private parseTimeToParam(prefix, time): string {
    let timeArray = time.split(':'),
      sec = 0, min = 1;

    while (timeArray.length > 0) {
      sec += min * parseFloat(timeArray.pop());
      min *= 60;
    }
    return prefix + sec;
  }
}
