/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var CloudinarySubtitleLibService = /** @class */ (function () {
    function CloudinarySubtitleLibService() {
        this.BASE_URL = 'https://res.cloudinary.com/';
        this.CLOUDINARY_URL_VIDEO_TYPE_EXTENSION = '/video/upload/';
    }
    /**
     * @param {?} cloudName
     * @param {?} videoPublicId
     * @param {?} subtitles
     * @return {?}
     */
    CloudinarySubtitleLibService.prototype.addSubtitlesToVideo = /**
     * @param {?} cloudName
     * @param {?} videoPublicId
     * @param {?} subtitles
     * @return {?}
     */
    function (cloudName, videoPublicId, subtitles) {
        var _this = this;
        if (!cloudName || cloudName.length === 0) {
            console.error("Missing or empty appropriate cloudName...\n                     cloudName should be a string which represents your cloud name provided by cloudinary,\n\n                     please follow the instructions and try again");
            return;
        }
        if (!videoPublicId || videoPublicId.length === 0) {
            console.error("Missing appropriate videoPublicId...\n\n                     videoPublicId should be a string which represents the video id provided by cloudinary,\n \n                     please follow the instructions and try again");
            return;
        }
        if (!subtitles || !subtitles.subtitles || subtitles.subtitles.length === 0) {
            console.error("Missing or bad appropriate subtitles JSON...\n\n                     the appropriate subtitles JSON should be of type:\n\n                     { subtitles: { 'start-timing': string, 'end-timing': string, text: string }[] }\n\n                     please follow the instructions and try again");
            return;
        }
        /** @type {?} */
        var url = this.BASE_URL + cloudName + this.CLOUDINARY_URL_VIDEO_TYPE_EXTENSION;
        /** @type {?} */
        var subtitlesArray = subtitles.subtitles;
        subtitlesArray.map(function (entry, index) {
            if (entry['start-timing'] && entry['end-timing'] && entry.text) {
                url += _this.entryToCloudinaryParams(entry);
            }
            else {
                console.error("Bad subtitle format at index " + index + ", please make sure that each subtitle is of \n        type: { 'start-timing': string, 'end-timing': string, text: string }");
            }
        });
        url += videoPublicId;
        return url;
    };
    /**
     * @param {?} entry
     * @return {?}
     */
    CloudinarySubtitleLibService.prototype.entryToCloudinaryParams = /**
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        return (this.addTextPositionAndStyles(entry.text) +
            this.parseTimeToParam('so_', entry['start-timing']) + ',' +
            this.parseTimeToParam('eo_', entry['end-timing']) + '/');
    };
    /**
     * @param {?} text
     * @return {?}
     */
    CloudinarySubtitleLibService.prototype.addTextPositionAndStyles = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        return 'l_text:Arial_40px:' + encodeURIComponent(encodeURIComponent(text)) + ',y_60,g_south,b_black,co_white,';
    };
    /**
     * @param {?} prefix
     * @param {?} time
     * @return {?}
     */
    CloudinarySubtitleLibService.prototype.parseTimeToParam = /**
     * @param {?} prefix
     * @param {?} time
     * @return {?}
     */
    function (prefix, time) {
        /** @type {?} */
        var timeArray = time.split(':');
        /** @type {?} */
        var sec = 0;
        /** @type {?} */
        var min = 1;
        while (timeArray.length > 0) {
            sec += min * parseFloat(timeArray.pop());
            min *= 60;
        }
        return prefix + sec;
    };
    CloudinarySubtitleLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    CloudinarySubtitleLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ CloudinarySubtitleLibService.ngInjectableDef = i0.defineInjectable({ factory: function CloudinarySubtitleLibService_Factory() { return new CloudinarySubtitleLibService(); }, token: CloudinarySubtitleLibService, providedIn: "root" });
    return CloudinarySubtitleLibService;
}());
export { CloudinarySubtitleLibService };
if (false) {
    /** @type {?} */
    CloudinarySubtitleLibService.prototype.BASE_URL;
    /** @type {?} */
    CloudinarySubtitleLibService.prototype.CLOUDINARY_URL_VIDEO_TYPE_EXTENSION;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS1zdWJ0aXRsZS1saWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Nsb3VkaW5hcnktc3VidGl0bGUtbGliLyIsInNvdXJjZXMiOlsibGliL2Nsb3VkaW5hcnktc3VidGl0bGUtbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7OztJQVd2Qzt3QkFIVyw2QkFBNkI7bURBQ0YsZ0JBQWdCO0tBRXRDOzs7Ozs7O0lBRVQsMERBQW1COzs7Ozs7Y0FBQyxTQUFpQixFQUFFLGFBQXFCLEVBQUUsU0FBYzs7UUFFakYsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsNE5BRThDLENBQUMsQ0FBQztZQUM5RCxNQUFNLENBQUM7U0FDUjtRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRCxPQUFPLENBQUMsS0FBSyxDQUFDLDJOQUU4QyxDQUFDLENBQUM7WUFDOUQsTUFBTSxDQUFDO1NBQ1I7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRSxPQUFPLENBQUMsS0FBSyxDQUFDLHFTQUc4QyxDQUFDLENBQUM7WUFDOUQsTUFBTSxDQUFDO1NBQ1I7O1FBRUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLG1DQUFtQyxDQUFDOztRQUMvRSxJQUFNLGNBQWMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBRTNDLGNBQWMsQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFLLEVBQUUsS0FBSztZQUM5QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxHQUFHLElBQUksS0FBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzlDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyxrQ0FBZ0MsS0FBSywrSEFDa0IsQ0FBQyxDQUFDO2FBQ3hFO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsR0FBRyxJQUFJLGFBQWEsQ0FBQztRQUNyQixNQUFNLENBQUMsR0FBRyxDQUFDOzs7Ozs7SUFHTCw4REFBdUI7Ozs7Y0FBQyxLQUFLO1FBQ25DLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQy9DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsR0FBRztZQUN6RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7SUFHckQsK0RBQXdCOzs7O2NBQUMsSUFBSTtRQUNuQyxNQUFNLENBQUMsb0JBQW9CLEdBQUcsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxpQ0FBaUMsQ0FBQzs7Ozs7OztJQUd6Ryx1REFBZ0I7Ozs7O2NBQUMsTUFBTSxFQUFFLElBQUk7O1FBQ25DLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQ1o7O1FBRG5CLElBQ0UsR0FBRyxHQUFHLENBQUMsQ0FBVTs7UUFEbkIsSUFDVyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLE9BQU8sU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUM1QixHQUFHLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUN6QyxHQUFHLElBQUksRUFBRSxDQUFDO1NBQ1g7UUFDRCxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQzs7O2dCQXJFdkIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7dUNBSkQ7O1NBTWEsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDbG91ZGluYXJ5U3VidGl0bGVMaWJTZXJ2aWNlIHtcclxuXHJcbiAgQkFTRV9VUkwgPSAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vJztcclxuICBDTE9VRElOQVJZX1VSTF9WSURFT19UWVBFX0VYVEVOU0lPTiA9ICcvdmlkZW8vdXBsb2FkLyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIGFkZFN1YnRpdGxlc1RvVmlkZW8oY2xvdWROYW1lOiBzdHJpbmcsIHZpZGVvUHVibGljSWQ6IHN0cmluZywgc3VidGl0bGVzOiBhbnkpIHtcclxuXHJcbiAgICBpZiAoIWNsb3VkTmFtZSB8fCBjbG91ZE5hbWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE1pc3Npbmcgb3IgZW1wdHkgYXBwcm9wcmlhdGUgY2xvdWROYW1lLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgIGNsb3VkTmFtZSBzaG91bGQgYmUgYSBzdHJpbmcgd2hpY2ggcmVwcmVzZW50cyB5b3VyIGNsb3VkIG5hbWUgcHJvdmlkZWQgYnkgY2xvdWRpbmFyeSxcXG5cclxuICAgICAgICAgICAgICAgICAgICAgcGxlYXNlIGZvbGxvdyB0aGUgaW5zdHJ1Y3Rpb25zIGFuZCB0cnkgYWdhaW5gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdmlkZW9QdWJsaWNJZCB8fCB2aWRlb1B1YmxpY0lkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBNaXNzaW5nIGFwcHJvcHJpYXRlIHZpZGVvUHVibGljSWQuLi5cXG5cclxuICAgICAgICAgICAgICAgICAgICAgdmlkZW9QdWJsaWNJZCBzaG91bGQgYmUgYSBzdHJpbmcgd2hpY2ggcmVwcmVzZW50cyB0aGUgdmlkZW8gaWQgcHJvdmlkZWQgYnkgY2xvdWRpbmFyeSxcXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgIHBsZWFzZSBmb2xsb3cgdGhlIGluc3RydWN0aW9ucyBhbmQgdHJ5IGFnYWluYCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXN1YnRpdGxlcyB8fCAhc3VidGl0bGVzLnN1YnRpdGxlcyB8fCBzdWJ0aXRsZXMuc3VidGl0bGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBNaXNzaW5nIG9yIGJhZCBhcHByb3ByaWF0ZSBzdWJ0aXRsZXMgSlNPTi4uLlxcblxyXG4gICAgICAgICAgICAgICAgICAgICB0aGUgYXBwcm9wcmlhdGUgc3VidGl0bGVzIEpTT04gc2hvdWxkIGJlIG9mIHR5cGU6XFxuXHJcbiAgICAgICAgICAgICAgICAgICAgIHsgc3VidGl0bGVzOiB7ICdzdGFydC10aW1pbmcnOiBzdHJpbmcsICdlbmQtdGltaW5nJzogc3RyaW5nLCB0ZXh0OiBzdHJpbmcgfVtdIH1cXG5cclxuICAgICAgICAgICAgICAgICAgICAgcGxlYXNlIGZvbGxvdyB0aGUgaW5zdHJ1Y3Rpb25zIGFuZCB0cnkgYWdhaW5gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB1cmwgPSB0aGlzLkJBU0VfVVJMICsgY2xvdWROYW1lICsgdGhpcy5DTE9VRElOQVJZX1VSTF9WSURFT19UWVBFX0VYVEVOU0lPTjtcclxuICAgIGNvbnN0IHN1YnRpdGxlc0FycmF5ID0gc3VidGl0bGVzLnN1YnRpdGxlcztcclxuXHJcbiAgICBzdWJ0aXRsZXNBcnJheS5tYXAoKGVudHJ5LCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoZW50cnlbJ3N0YXJ0LXRpbWluZyddICYmIGVudHJ5WydlbmQtdGltaW5nJ10gJiYgZW50cnkudGV4dCkge1xyXG4gICAgICAgICAgdXJsICs9IHRoaXMuZW50cnlUb0Nsb3VkaW5hcnlQYXJhbXMoZW50cnkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEJhZCBzdWJ0aXRsZSBmb3JtYXQgYXQgaW5kZXggJHtpbmRleH0sIHBsZWFzZSBtYWtlIHN1cmUgdGhhdCBlYWNoIHN1YnRpdGxlIGlzIG9mIFxyXG4gICAgICAgIHR5cGU6IHsgJ3N0YXJ0LXRpbWluZyc6IHN0cmluZywgJ2VuZC10aW1pbmcnOiBzdHJpbmcsIHRleHQ6IHN0cmluZyB9YCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHVybCArPSB2aWRlb1B1YmxpY0lkO1xyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW50cnlUb0Nsb3VkaW5hcnlQYXJhbXMoZW50cnkpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICh0aGlzLmFkZFRleHRQb3NpdGlvbkFuZFN0eWxlcyhlbnRyeS50ZXh0KSArXHJcbiAgICAgIHRoaXMucGFyc2VUaW1lVG9QYXJhbSgnc29fJywgZW50cnlbJ3N0YXJ0LXRpbWluZyddKSArICcsJyArXHJcbiAgICAgIHRoaXMucGFyc2VUaW1lVG9QYXJhbSgnZW9fJywgZW50cnlbJ2VuZC10aW1pbmcnXSkgKyAnLycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRUZXh0UG9zaXRpb25BbmRTdHlsZXModGV4dCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ2xfdGV4dDpBcmlhbF80MHB4OicgKyBlbmNvZGVVUklDb21wb25lbnQoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKSArICcseV82MCxnX3NvdXRoLGJfYmxhY2ssY29fd2hpdGUsJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGFyc2VUaW1lVG9QYXJhbShwcmVmaXgsIHRpbWUpOiBzdHJpbmcge1xyXG4gICAgbGV0IHRpbWVBcnJheSA9IHRpbWUuc3BsaXQoJzonKSxcclxuICAgICAgc2VjID0gMCwgbWluID0gMTtcclxuXHJcbiAgICB3aGlsZSAodGltZUFycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgc2VjICs9IG1pbiAqIHBhcnNlRmxvYXQodGltZUFycmF5LnBvcCgpKTtcclxuICAgICAgbWluICo9IDYwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByZWZpeCArIHNlYztcclxuICB9XHJcbn1cclxuIl19