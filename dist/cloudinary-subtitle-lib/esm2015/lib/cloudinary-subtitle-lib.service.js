/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CloudinarySubtitleLibService {
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
        subtitlesArray.map(entry => {
            url += this.entryToCloudinaryParams(entry);
        });
        url += videoPublicId;
        return url;
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    entryToCloudinaryParams(entry) {
        return (this.addTextAndPosition(entry.text) +
            this.parseTimeToParam('so_', entry['start-timing']) + ',' +
            this.parseTimeToParam('eo_', entry['end-timing']) + '/');
    }
    /**
     * @param {?} text
     * @return {?}
     */
    addTextAndPosition(text) {
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
/** @nocollapse */ CloudinarySubtitleLibService.ngInjectableDef = i0.defineInjectable({ factory: function CloudinarySubtitleLibService_Factory() { return new CloudinarySubtitleLibService(); }, token: CloudinarySubtitleLibService, providedIn: "root" });
if (false) {
    /** @type {?} */
    CloudinarySubtitleLibService.prototype.BASE_URL;
    /** @type {?} */
    CloudinarySubtitleLibService.prototype.CLOUDINARY_URL_VIDEO_TYPE_EXTENSION;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS1zdWJ0aXRsZS1saWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Nsb3VkaW5hcnktc3VidGl0bGUtbGliLyIsInNvdXJjZXMiOlsibGliL2Nsb3VkaW5hcnktc3VidGl0bGUtbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBTXpDLE1BQU07SUFLSjt3QkFIVyw2QkFBNkI7bURBQ0YsZ0JBQWdCO0tBRXRDOzs7Ozs7O0lBRVQsbUJBQW1CLENBQUMsU0FBaUIsRUFBRSxhQUFxQixFQUFFLFNBQWM7UUFFakYsRUFBRSxDQUFBLENBQUMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUM7O2tFQUU4QyxDQUFDLENBQUM7WUFDOUQsTUFBTSxDQUFDO1NBQ1I7UUFFRCxFQUFFLENBQUEsQ0FBQyxDQUFDLGFBQWEsSUFBSSxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDL0MsT0FBTyxDQUFDLEtBQUssQ0FBQzs7a0VBRThDLENBQUMsQ0FBQztZQUU5RCxNQUFNLENBQUM7U0FDUjtRQUVELEVBQUUsQ0FBQSxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ3pFLE9BQU8sQ0FBQyxLQUFLLENBQUM7OztrRUFHOEMsQ0FBQyxDQUFDO1lBQzlELE1BQU0sQ0FBQztTQUNSOztRQUVELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQzs7UUFDL0UsTUFBTSxjQUFjLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQztRQUUzQyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLEdBQUcsSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUMsQ0FBQyxDQUFDO1FBRUgsR0FBRyxJQUFJLGFBQWEsQ0FBQztRQUNyQixNQUFNLENBQUMsR0FBRyxDQUFDOzs7Ozs7SUFHTCx1QkFBdUIsQ0FBQyxLQUFLO1FBQ25DLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsR0FBRztZQUN6RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7SUFHckQsa0JBQWtCLENBQUMsSUFBSTtRQUM3QixNQUFNLENBQUMsb0JBQW9CLEdBQUcsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxpQ0FBaUMsQ0FBQzs7Ozs7OztJQUd6RyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsSUFBSTs7UUFDbkMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FDWjs7UUFEbkIsSUFDRSxHQUFHLEdBQUcsQ0FBQyxDQUFVOztRQURuQixJQUNXLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFFbkIsT0FBTyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQzVCLEdBQUcsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLEdBQUcsSUFBSSxFQUFFLENBQUM7U0FDWDtRQUNELE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDOzs7O1lBakV2QixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIENsb3VkaW5hcnlTdWJ0aXRsZUxpYlNlcnZpY2Uge1xuXG4gIEJBU0VfVVJMID0gJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tLyc7XG4gIENMT1VESU5BUllfVVJMX1ZJREVPX1RZUEVfRVhURU5TSU9OID0gJy92aWRlby91cGxvYWQvJztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGFkZFN1YnRpdGxlc1RvVmlkZW8oY2xvdWROYW1lOiBzdHJpbmcsIHZpZGVvUHVibGljSWQ6IHN0cmluZywgc3VidGl0bGVzOiBhbnkpIHtcblxuICAgIGlmKCFjbG91ZE5hbWUgfHwgY2xvdWROYW1lLmxlbmd0aCA9PT0gMCl7XG4gICAgICBjb25zb2xlLmVycm9yKGBNaXNzaW5nIG9yIGVtcHR5IGFwcHJvcHJpYXRlIGNsb3VkTmFtZS4uLlxuICAgICAgICAgICAgICAgICAgICAgY2xvdWROYW1lIHNob3VsZCBiZSBhIHN0cmluZyB3aGljaCByZXByZXNlbnRzIHlvdXIgY2xvdWQgbmFtZSBwcm92aWRlZCBieSBjbG91ZGluYXJ5LFxcblxuICAgICAgICAgICAgICAgICAgICAgcGxlYXNlIGZvbGxvdyB0aGUgaW5zdHJ1Y3Rpb25zIGFuZCB0cnkgYWdhaW5gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZighdmlkZW9QdWJsaWNJZCB8fCB2aWRlb1B1YmxpY0lkLmxlbmd0aCA9PT0gMCl7XG4gICAgICBjb25zb2xlLmVycm9yKGBNaXNzaW5nIGFwcHJvcHJpYXRlIHZpZGVvUHVibGljSWQuLi5cXG5cbiAgICAgICAgICAgICAgICAgICAgIHZpZGVvUHVibGljSWQgc2hvdWxkIGJlIGEgc3RyaW5nIHdoaWNoIHJlcHJlc2VudHMgdGhlIHZpZGVvIGlkIHByb3ZpZGVkIGJ5IGNsb3VkaW5hcnksXFxuIFxuICAgICAgICAgICAgICAgICAgICAgcGxlYXNlIGZvbGxvdyB0aGUgaW5zdHJ1Y3Rpb25zIGFuZCB0cnkgYWdhaW5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCFzdWJ0aXRsZXMgfHwgIXN1YnRpdGxlcy5zdWJ0aXRsZXMgfHwgc3VidGl0bGVzLnN1YnRpdGxlcy5sZW5ndGggPT09IDApe1xuICAgICAgY29uc29sZS5lcnJvcihgTWlzc2luZyBvciBiYWQgYXBwcm9wcmlhdGUgc3VidGl0bGVzIEpTT04uLi5cXG5cbiAgICAgICAgICAgICAgICAgICAgIHRoZSBhcHByb3ByaWF0ZSBzdWJ0aXRsZXMgSlNPTiBzaG91bGQgYmUgb2YgdHlwZTpcXG5cbiAgICAgICAgICAgICAgICAgICAgIHsgc3VidGl0bGVzOiB7ICdzdGFydC10aW1pbmcnOiBzdHJpbmcsICdlbmQtdGltaW5nJzogc3RyaW5nLCB0ZXh0OiBzdHJpbmcgfVtdIH1cXG5cbiAgICAgICAgICAgICAgICAgICAgIHBsZWFzZSBmb2xsb3cgdGhlIGluc3RydWN0aW9ucyBhbmQgdHJ5IGFnYWluYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHVybCA9IHRoaXMuQkFTRV9VUkwgKyBjbG91ZE5hbWUgKyB0aGlzLkNMT1VESU5BUllfVVJMX1ZJREVPX1RZUEVfRVhURU5TSU9OO1xuICAgIGNvbnN0IHN1YnRpdGxlc0FycmF5ID0gc3VidGl0bGVzLnN1YnRpdGxlcztcblxuICAgIHN1YnRpdGxlc0FycmF5Lm1hcChlbnRyeSA9PiB7XG4gICAgICB1cmwgKz0gdGhpcy5lbnRyeVRvQ2xvdWRpbmFyeVBhcmFtcyhlbnRyeSk7XG4gICAgfSk7XG5cbiAgICB1cmwgKz0gdmlkZW9QdWJsaWNJZDtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgcHJpdmF0ZSBlbnRyeVRvQ2xvdWRpbmFyeVBhcmFtcyhlbnRyeSk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLmFkZFRleHRBbmRQb3NpdGlvbihlbnRyeS50ZXh0KSArXG4gICAgICB0aGlzLnBhcnNlVGltZVRvUGFyYW0oJ3NvXycsIGVudHJ5WydzdGFydC10aW1pbmcnXSkgKyAnLCcgK1xuICAgICAgdGhpcy5wYXJzZVRpbWVUb1BhcmFtKCdlb18nLCBlbnRyeVsnZW5kLXRpbWluZyddKSArICcvJyk7XG4gIH1cblxuICBwcml2YXRlIGFkZFRleHRBbmRQb3NpdGlvbih0ZXh0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2xfdGV4dDpBcmlhbF80MHB4OicgKyBlbmNvZGVVUklDb21wb25lbnQoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKSArICcseV82MCxnX3NvdXRoLGJfYmxhY2ssY29fd2hpdGUsJztcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VUaW1lVG9QYXJhbShwcmVmaXgsIHRpbWUpOiBzdHJpbmcge1xuICAgIGxldCB0aW1lQXJyYXkgPSB0aW1lLnNwbGl0KCc6JyksXG4gICAgICBzZWMgPSAwLCBtaW4gPSAxO1xuXG4gICAgd2hpbGUgKHRpbWVBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICBzZWMgKz0gbWluICogcGFyc2VGbG9hdCh0aW1lQXJyYXkucG9wKCkpO1xuICAgICAgbWluICo9IDYwO1xuICAgIH1cbiAgICByZXR1cm4gcHJlZml4ICsgc2VjO1xuICB9XG59XG4iXX0=