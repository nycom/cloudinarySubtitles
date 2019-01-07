import { Injectable, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CloudinarySubtitleLibService {
    constructor() {
        this.BASE_URL = 'https://res.cloudinary.com/';
        this.CLOUDINARY_URL_VIDEO_TYPE_EXTENSION = '/video/upload/';
    }
    /**
     * @param {?} cloudName
     * @param {?} videoPublicId
     * @param {?} subtitles
     * @return {?}
     */
    addSubtitlesToVideo(cloudName, videoPublicId, subtitles) {
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
        /** @type {?} */
        let url = this.BASE_URL + cloudName + this.CLOUDINARY_URL_VIDEO_TYPE_EXTENSION;
        /** @type {?} */
        const subtitlesArray = subtitles.subtitles;
        subtitlesArray.map((entry, index) => {
            if (entry['start-timing'] && entry['end-timing'] && entry.text) {
                url += this.entryToCloudinaryParams(entry);
            }
            else {
                console.error(`Bad subtitle format at index ${index}, please make sure that each subtitle is of 
        type: { 'start-timing': string, 'end-timing': string, text: string }`);
            }
        });
        url += videoPublicId;
        return url;
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    entryToCloudinaryParams(entry) {
        return (this.addTextPositionAndStyles(entry.text) +
            this.parseTimeToParam('so_', entry['start-timing']) + ',' +
            this.parseTimeToParam('eo_', entry['end-timing']) + '/');
    }
    /**
     * @param {?} text
     * @return {?}
     */
    addTextPositionAndStyles(text) {
        return 'l_text:Arial_40px:' + encodeURIComponent(encodeURIComponent(text)) + ',y_60,g_south,b_black,co_white,';
    }
    /**
     * @param {?} prefix
     * @param {?} time
     * @return {?}
     */
    parseTimeToParam(prefix, time) {
        /** @type {?} */
        let timeArray = time.split(':');
        /** @type {?} */
        let sec = 0;
        /** @type {?} */
        let min = 1;
        while (timeArray.length > 0) {
            sec += min * parseFloat(timeArray.pop());
            min *= 60;
        }
        return prefix + sec;
    }
}
CloudinarySubtitleLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
CloudinarySubtitleLibService.ctorParameters = () => [];
/** @nocollapse */ CloudinarySubtitleLibService.ngInjectableDef = defineInjectable({ factory: function CloudinarySubtitleLibService_Factory() { return new CloudinarySubtitleLibService(); }, token: CloudinarySubtitleLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { CloudinarySubtitleLibService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS1zdWJ0aXRsZS1saWIuanMubWFwIiwic291cmNlcyI6WyJuZzovL2Nsb3VkaW5hcnktc3VidGl0bGUtbGliL2xpYi9jbG91ZGluYXJ5LXN1YnRpdGxlLWxpYi5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvdWRpbmFyeVN1YnRpdGxlTGliU2VydmljZSB7XHJcblxyXG4gIEJBU0VfVVJMID0gJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tLyc7XHJcbiAgQ0xPVURJTkFSWV9VUkxfVklERU9fVFlQRV9FWFRFTlNJT04gPSAnL3ZpZGVvL3VwbG9hZC8nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBhZGRTdWJ0aXRsZXNUb1ZpZGVvKGNsb3VkTmFtZTogc3RyaW5nLCB2aWRlb1B1YmxpY0lkOiBzdHJpbmcsIHN1YnRpdGxlczogYW55KSB7XHJcblxyXG4gICAgaWYgKCFjbG91ZE5hbWUgfHwgY2xvdWROYW1lLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBNaXNzaW5nIG9yIGVtcHR5IGFwcHJvcHJpYXRlIGNsb3VkTmFtZS4uLlxyXG4gICAgICAgICAgICAgICAgICAgICBjbG91ZE5hbWUgc2hvdWxkIGJlIGEgc3RyaW5nIHdoaWNoIHJlcHJlc2VudHMgeW91ciBjbG91ZCBuYW1lIHByb3ZpZGVkIGJ5IGNsb3VkaW5hcnksXFxuXHJcbiAgICAgICAgICAgICAgICAgICAgIHBsZWFzZSBmb2xsb3cgdGhlIGluc3RydWN0aW9ucyBhbmQgdHJ5IGFnYWluYCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXZpZGVvUHVibGljSWQgfHwgdmlkZW9QdWJsaWNJZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgTWlzc2luZyBhcHByb3ByaWF0ZSB2aWRlb1B1YmxpY0lkLi4uXFxuXHJcbiAgICAgICAgICAgICAgICAgICAgIHZpZGVvUHVibGljSWQgc2hvdWxkIGJlIGEgc3RyaW5nIHdoaWNoIHJlcHJlc2VudHMgdGhlIHZpZGVvIGlkIHByb3ZpZGVkIGJ5IGNsb3VkaW5hcnksXFxuIFxyXG4gICAgICAgICAgICAgICAgICAgICBwbGVhc2UgZm9sbG93IHRoZSBpbnN0cnVjdGlvbnMgYW5kIHRyeSBhZ2FpbmApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFzdWJ0aXRsZXMgfHwgIXN1YnRpdGxlcy5zdWJ0aXRsZXMgfHwgc3VidGl0bGVzLnN1YnRpdGxlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgTWlzc2luZyBvciBiYWQgYXBwcm9wcmlhdGUgc3VidGl0bGVzIEpTT04uLi5cXG5cclxuICAgICAgICAgICAgICAgICAgICAgdGhlIGFwcHJvcHJpYXRlIHN1YnRpdGxlcyBKU09OIHNob3VsZCBiZSBvZiB0eXBlOlxcblxyXG4gICAgICAgICAgICAgICAgICAgICB7IHN1YnRpdGxlczogeyAnc3RhcnQtdGltaW5nJzogc3RyaW5nLCAnZW5kLXRpbWluZyc6IHN0cmluZywgdGV4dDogc3RyaW5nIH1bXSB9XFxuXHJcbiAgICAgICAgICAgICAgICAgICAgIHBsZWFzZSBmb2xsb3cgdGhlIGluc3RydWN0aW9ucyBhbmQgdHJ5IGFnYWluYCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdXJsID0gdGhpcy5CQVNFX1VSTCArIGNsb3VkTmFtZSArIHRoaXMuQ0xPVURJTkFSWV9VUkxfVklERU9fVFlQRV9FWFRFTlNJT047XHJcbiAgICBjb25zdCBzdWJ0aXRsZXNBcnJheSA9IHN1YnRpdGxlcy5zdWJ0aXRsZXM7XHJcblxyXG4gICAgc3VidGl0bGVzQXJyYXkubWFwKChlbnRyeSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGVudHJ5WydzdGFydC10aW1pbmcnXSAmJiBlbnRyeVsnZW5kLXRpbWluZyddICYmIGVudHJ5LnRleHQpIHtcclxuICAgICAgICAgIHVybCArPSB0aGlzLmVudHJ5VG9DbG91ZGluYXJ5UGFyYW1zKGVudHJ5KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBCYWQgc3VidGl0bGUgZm9ybWF0IGF0IGluZGV4ICR7aW5kZXh9LCBwbGVhc2UgbWFrZSBzdXJlIHRoYXQgZWFjaCBzdWJ0aXRsZSBpcyBvZiBcclxuICAgICAgICB0eXBlOiB7ICdzdGFydC10aW1pbmcnOiBzdHJpbmcsICdlbmQtdGltaW5nJzogc3RyaW5nLCB0ZXh0OiBzdHJpbmcgfWApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB1cmwgKz0gdmlkZW9QdWJsaWNJZDtcclxuICAgIHJldHVybiB1cmw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVudHJ5VG9DbG91ZGluYXJ5UGFyYW1zKGVudHJ5KTogc3RyaW5nIHtcclxuICAgIHJldHVybiAodGhpcy5hZGRUZXh0UG9zaXRpb25BbmRTdHlsZXMoZW50cnkudGV4dCkgK1xyXG4gICAgICB0aGlzLnBhcnNlVGltZVRvUGFyYW0oJ3NvXycsIGVudHJ5WydzdGFydC10aW1pbmcnXSkgKyAnLCcgK1xyXG4gICAgICB0aGlzLnBhcnNlVGltZVRvUGFyYW0oJ2VvXycsIGVudHJ5WydlbmQtdGltaW5nJ10pICsgJy8nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkVGV4dFBvc2l0aW9uQW5kU3R5bGVzKHRleHQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdsX3RleHQ6QXJpYWxfNDBweDonICsgZW5jb2RlVVJJQ29tcG9uZW50KGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSkgKyAnLHlfNjAsZ19zb3V0aCxiX2JsYWNrLGNvX3doaXRlLCc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBhcnNlVGltZVRvUGFyYW0ocHJlZml4LCB0aW1lKTogc3RyaW5nIHtcclxuICAgIGxldCB0aW1lQXJyYXkgPSB0aW1lLnNwbGl0KCc6JyksXHJcbiAgICAgIHNlYyA9IDAsIG1pbiA9IDE7XHJcblxyXG4gICAgd2hpbGUgKHRpbWVBcnJheS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNlYyArPSBtaW4gKiBwYXJzZUZsb2F0KHRpbWVBcnJheS5wb3AoKSk7XHJcbiAgICAgIG1pbiAqPSA2MDtcclxuICAgIH1cclxuICAgIHJldHVybiBwcmVmaXggKyBzZWM7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtJQVdFO3dCQUhXLDZCQUE2QjttREFDRixnQkFBZ0I7S0FFdEM7Ozs7Ozs7SUFFVCxtQkFBbUIsQ0FBQyxTQUFpQixFQUFFLGFBQXFCLEVBQUUsU0FBYztRQUVqRixJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3hDLE9BQU8sQ0FBQyxLQUFLLENBQUM7O2tFQUU4QyxDQUFDLENBQUM7WUFDOUQsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLGFBQWEsSUFBSSxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoRCxPQUFPLENBQUMsS0FBSyxDQUFDOztrRUFFOEMsQ0FBQyxDQUFDO1lBQzlELE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMxRSxPQUFPLENBQUMsS0FBSyxDQUFDOzs7a0VBRzhDLENBQUMsQ0FBQztZQUM5RCxPQUFPO1NBQ1I7O1FBRUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLG1DQUFtQyxDQUFDOztRQUMvRSxNQUFNLGNBQWMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBRTNDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSztZQUM5QixJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDNUQsR0FBRyxJQUFJLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM5QztpQkFBTTtnQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxLQUFLOzZFQUNrQixDQUFDLENBQUM7YUFDeEU7U0FDRixDQUFDLENBQUM7UUFFSCxHQUFHLElBQUksYUFBYSxDQUFDO1FBQ3JCLE9BQU8sR0FBRyxDQUFDOzs7Ozs7SUFHTCx1QkFBdUIsQ0FBQyxLQUFLO1FBQ25DLFFBQVEsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxHQUFHO1lBQ3pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFOzs7Ozs7SUFHckQsd0JBQXdCLENBQUMsSUFBSTtRQUNuQyxPQUFPLG9CQUFvQixHQUFHLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsaUNBQWlDLENBQUM7Ozs7Ozs7SUFHekcsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLElBQUk7O1FBQ25DLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQ1o7O1FBRG5CLElBQ0UsR0FBRyxHQUFHLENBQUMsQ0FBVTs7UUFEbkIsSUFDVyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLE9BQU8sU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDM0IsR0FBRyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDekMsR0FBRyxJQUFJLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxNQUFNLEdBQUcsR0FBRyxDQUFDOzs7O1lBckV2QixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==