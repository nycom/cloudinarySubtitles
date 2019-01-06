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
        subtitlesArray.map(function (entry) {
            url += _this.entryToCloudinaryParams(entry);
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
        return (this.addTextAndPosition(entry.text) +
            this.parseTimeToParam('so_', entry['start-timing']) + ',' +
            this.parseTimeToParam('eo_', entry['end-timing']) + '/');
    };
    /**
     * @param {?} text
     * @return {?}
     */
    CloudinarySubtitleLibService.prototype.addTextAndPosition = /**
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS1zdWJ0aXRsZS1saWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Nsb3VkaW5hcnktc3VidGl0bGUtbGliLyIsInNvdXJjZXMiOlsibGliL2Nsb3VkaW5hcnktc3VidGl0bGUtbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7OztJQVd2Qzt3QkFIVyw2QkFBNkI7bURBQ0YsZ0JBQWdCO0tBRXRDOzs7Ozs7O0lBRVQsMERBQW1COzs7Ozs7Y0FBQyxTQUFpQixFQUFFLGFBQXFCLEVBQUUsU0FBYzs7UUFFakYsRUFBRSxDQUFBLENBQUMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsNE5BRThDLENBQUMsQ0FBQztZQUM5RCxNQUFNLENBQUM7U0FDUjtRQUVELEVBQUUsQ0FBQSxDQUFDLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUMvQyxPQUFPLENBQUMsS0FBSyxDQUFDLDJOQUU4QyxDQUFDLENBQUM7WUFFOUQsTUFBTSxDQUFDO1NBQ1I7UUFFRCxFQUFFLENBQUEsQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN6RSxPQUFPLENBQUMsS0FBSyxDQUFDLHFTQUc4QyxDQUFDLENBQUM7WUFDOUQsTUFBTSxDQUFDO1NBQ1I7O1FBRUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLG1DQUFtQyxDQUFDOztRQUMvRSxJQUFNLGNBQWMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBRTNDLGNBQWMsQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLO1lBQ3RCLEdBQUcsSUFBSSxLQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUMsQ0FBQyxDQUFDO1FBRUgsR0FBRyxJQUFJLGFBQWEsQ0FBQztRQUNyQixNQUFNLENBQUMsR0FBRyxDQUFDOzs7Ozs7SUFHTCw4REFBdUI7Ozs7Y0FBQyxLQUFLO1FBQ25DLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsR0FBRztZQUN6RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7SUFHckQseURBQWtCOzs7O2NBQUMsSUFBSTtRQUM3QixNQUFNLENBQUMsb0JBQW9CLEdBQUcsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxpQ0FBaUMsQ0FBQzs7Ozs7OztJQUd6Ryx1REFBZ0I7Ozs7O2NBQUMsTUFBTSxFQUFFLElBQUk7O1FBQ25DLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQ1o7O1FBRG5CLElBQ0UsR0FBRyxHQUFHLENBQUMsQ0FBVTs7UUFEbkIsSUFDVyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLE9BQU8sU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUM1QixHQUFHLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUN6QyxHQUFHLElBQUksRUFBRSxDQUFDO1NBQ1g7UUFDRCxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQzs7O2dCQWpFdkIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7dUNBSkQ7O1NBTWEsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBDbG91ZGluYXJ5U3VidGl0bGVMaWJTZXJ2aWNlIHtcblxuICBCQVNFX1VSTCA9ICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS8nO1xuICBDTE9VRElOQVJZX1VSTF9WSURFT19UWVBFX0VYVEVOU0lPTiA9ICcvdmlkZW8vdXBsb2FkLyc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBhZGRTdWJ0aXRsZXNUb1ZpZGVvKGNsb3VkTmFtZTogc3RyaW5nLCB2aWRlb1B1YmxpY0lkOiBzdHJpbmcsIHN1YnRpdGxlczogYW55KSB7XG5cbiAgICBpZighY2xvdWROYW1lIHx8IGNsb3VkTmFtZS5sZW5ndGggPT09IDApe1xuICAgICAgY29uc29sZS5lcnJvcihgTWlzc2luZyBvciBlbXB0eSBhcHByb3ByaWF0ZSBjbG91ZE5hbWUuLi5cbiAgICAgICAgICAgICAgICAgICAgIGNsb3VkTmFtZSBzaG91bGQgYmUgYSBzdHJpbmcgd2hpY2ggcmVwcmVzZW50cyB5b3VyIGNsb3VkIG5hbWUgcHJvdmlkZWQgYnkgY2xvdWRpbmFyeSxcXG5cbiAgICAgICAgICAgICAgICAgICAgIHBsZWFzZSBmb2xsb3cgdGhlIGluc3RydWN0aW9ucyBhbmQgdHJ5IGFnYWluYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoIXZpZGVvUHVibGljSWQgfHwgdmlkZW9QdWJsaWNJZC5sZW5ndGggPT09IDApe1xuICAgICAgY29uc29sZS5lcnJvcihgTWlzc2luZyBhcHByb3ByaWF0ZSB2aWRlb1B1YmxpY0lkLi4uXFxuXG4gICAgICAgICAgICAgICAgICAgICB2aWRlb1B1YmxpY0lkIHNob3VsZCBiZSBhIHN0cmluZyB3aGljaCByZXByZXNlbnRzIHRoZSB2aWRlbyBpZCBwcm92aWRlZCBieSBjbG91ZGluYXJ5LFxcbiBcbiAgICAgICAgICAgICAgICAgICAgIHBsZWFzZSBmb2xsb3cgdGhlIGluc3RydWN0aW9ucyBhbmQgdHJ5IGFnYWluYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZighc3VidGl0bGVzIHx8ICFzdWJ0aXRsZXMuc3VidGl0bGVzIHx8IHN1YnRpdGxlcy5zdWJ0aXRsZXMubGVuZ3RoID09PSAwKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE1pc3Npbmcgb3IgYmFkIGFwcHJvcHJpYXRlIHN1YnRpdGxlcyBKU09OLi4uXFxuXG4gICAgICAgICAgICAgICAgICAgICB0aGUgYXBwcm9wcmlhdGUgc3VidGl0bGVzIEpTT04gc2hvdWxkIGJlIG9mIHR5cGU6XFxuXG4gICAgICAgICAgICAgICAgICAgICB7IHN1YnRpdGxlczogeyAnc3RhcnQtdGltaW5nJzogc3RyaW5nLCAnZW5kLXRpbWluZyc6IHN0cmluZywgdGV4dDogc3RyaW5nIH1bXSB9XFxuXG4gICAgICAgICAgICAgICAgICAgICBwbGVhc2UgZm9sbG93IHRoZSBpbnN0cnVjdGlvbnMgYW5kIHRyeSBhZ2FpbmApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB1cmwgPSB0aGlzLkJBU0VfVVJMICsgY2xvdWROYW1lICsgdGhpcy5DTE9VRElOQVJZX1VSTF9WSURFT19UWVBFX0VYVEVOU0lPTjtcbiAgICBjb25zdCBzdWJ0aXRsZXNBcnJheSA9IHN1YnRpdGxlcy5zdWJ0aXRsZXM7XG5cbiAgICBzdWJ0aXRsZXNBcnJheS5tYXAoZW50cnkgPT4ge1xuICAgICAgdXJsICs9IHRoaXMuZW50cnlUb0Nsb3VkaW5hcnlQYXJhbXMoZW50cnkpO1xuICAgIH0pO1xuXG4gICAgdXJsICs9IHZpZGVvUHVibGljSWQ7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHByaXZhdGUgZW50cnlUb0Nsb3VkaW5hcnlQYXJhbXMoZW50cnkpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5hZGRUZXh0QW5kUG9zaXRpb24oZW50cnkudGV4dCkgK1xuICAgICAgdGhpcy5wYXJzZVRpbWVUb1BhcmFtKCdzb18nLCBlbnRyeVsnc3RhcnQtdGltaW5nJ10pICsgJywnICtcbiAgICAgIHRoaXMucGFyc2VUaW1lVG9QYXJhbSgnZW9fJywgZW50cnlbJ2VuZC10aW1pbmcnXSkgKyAnLycpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRUZXh0QW5kUG9zaXRpb24odGV4dCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdsX3RleHQ6QXJpYWxfNDBweDonICsgZW5jb2RlVVJJQ29tcG9uZW50KGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSkgKyAnLHlfNjAsZ19zb3V0aCxiX2JsYWNrLGNvX3doaXRlLCc7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlVGltZVRvUGFyYW0ocHJlZml4LCB0aW1lKTogc3RyaW5nIHtcbiAgICBsZXQgdGltZUFycmF5ID0gdGltZS5zcGxpdCgnOicpLFxuICAgICAgc2VjID0gMCwgbWluID0gMTtcblxuICAgIHdoaWxlICh0aW1lQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgc2VjICs9IG1pbiAqIHBhcnNlRmxvYXQodGltZUFycmF5LnBvcCgpKTtcbiAgICAgIG1pbiAqPSA2MDtcbiAgICB9XG4gICAgcmV0dXJuIHByZWZpeCArIHNlYztcbiAgfVxufVxuIl19