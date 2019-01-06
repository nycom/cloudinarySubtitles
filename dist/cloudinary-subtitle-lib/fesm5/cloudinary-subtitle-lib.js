import { Injectable, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ CloudinarySubtitleLibService.ngInjectableDef = defineInjectable({ factory: function CloudinarySubtitleLibService_Factory() { return new CloudinarySubtitleLibService(); }, token: CloudinarySubtitleLibService, providedIn: "root" });
    return CloudinarySubtitleLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { CloudinarySubtitleLibService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS1zdWJ0aXRsZS1saWIuanMubWFwIiwic291cmNlcyI6WyJuZzovL2Nsb3VkaW5hcnktc3VidGl0bGUtbGliL2xpYi9jbG91ZGluYXJ5LXN1YnRpdGxlLWxpYi5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRpbmFyeVN1YnRpdGxlTGliU2VydmljZSB7XG5cbiAgQkFTRV9VUkwgPSAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vJztcbiAgQ0xPVURJTkFSWV9VUkxfVklERU9fVFlQRV9FWFRFTlNJT04gPSAnL3ZpZGVvL3VwbG9hZC8nO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgYWRkU3VidGl0bGVzVG9WaWRlbyhjbG91ZE5hbWU6IHN0cmluZywgdmlkZW9QdWJsaWNJZDogc3RyaW5nLCBzdWJ0aXRsZXM6IGFueSkge1xuXG4gICAgaWYoIWNsb3VkTmFtZSB8fCBjbG91ZE5hbWUubGVuZ3RoID09PSAwKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE1pc3Npbmcgb3IgZW1wdHkgYXBwcm9wcmlhdGUgY2xvdWROYW1lLi4uXG4gICAgICAgICAgICAgICAgICAgICBjbG91ZE5hbWUgc2hvdWxkIGJlIGEgc3RyaW5nIHdoaWNoIHJlcHJlc2VudHMgeW91ciBjbG91ZCBuYW1lIHByb3ZpZGVkIGJ5IGNsb3VkaW5hcnksXFxuXG4gICAgICAgICAgICAgICAgICAgICBwbGVhc2UgZm9sbG93IHRoZSBpbnN0cnVjdGlvbnMgYW5kIHRyeSBhZ2FpbmApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCF2aWRlb1B1YmxpY0lkIHx8IHZpZGVvUHVibGljSWQubGVuZ3RoID09PSAwKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE1pc3NpbmcgYXBwcm9wcmlhdGUgdmlkZW9QdWJsaWNJZC4uLlxcblxuICAgICAgICAgICAgICAgICAgICAgdmlkZW9QdWJsaWNJZCBzaG91bGQgYmUgYSBzdHJpbmcgd2hpY2ggcmVwcmVzZW50cyB0aGUgdmlkZW8gaWQgcHJvdmlkZWQgYnkgY2xvdWRpbmFyeSxcXG4gXG4gICAgICAgICAgICAgICAgICAgICBwbGVhc2UgZm9sbG93IHRoZSBpbnN0cnVjdGlvbnMgYW5kIHRyeSBhZ2FpbmApO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoIXN1YnRpdGxlcyB8fCAhc3VidGl0bGVzLnN1YnRpdGxlcyB8fCBzdWJ0aXRsZXMuc3VidGl0bGVzLmxlbmd0aCA9PT0gMCl7XG4gICAgICBjb25zb2xlLmVycm9yKGBNaXNzaW5nIG9yIGJhZCBhcHByb3ByaWF0ZSBzdWJ0aXRsZXMgSlNPTi4uLlxcblxuICAgICAgICAgICAgICAgICAgICAgdGhlIGFwcHJvcHJpYXRlIHN1YnRpdGxlcyBKU09OIHNob3VsZCBiZSBvZiB0eXBlOlxcblxuICAgICAgICAgICAgICAgICAgICAgeyBzdWJ0aXRsZXM6IHsgJ3N0YXJ0LXRpbWluZyc6IHN0cmluZywgJ2VuZC10aW1pbmcnOiBzdHJpbmcsIHRleHQ6IHN0cmluZyB9W10gfVxcblxuICAgICAgICAgICAgICAgICAgICAgcGxlYXNlIGZvbGxvdyB0aGUgaW5zdHJ1Y3Rpb25zIGFuZCB0cnkgYWdhaW5gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgdXJsID0gdGhpcy5CQVNFX1VSTCArIGNsb3VkTmFtZSArIHRoaXMuQ0xPVURJTkFSWV9VUkxfVklERU9fVFlQRV9FWFRFTlNJT047XG4gICAgY29uc3Qgc3VidGl0bGVzQXJyYXkgPSBzdWJ0aXRsZXMuc3VidGl0bGVzO1xuXG4gICAgc3VidGl0bGVzQXJyYXkubWFwKGVudHJ5ID0+IHtcbiAgICAgIHVybCArPSB0aGlzLmVudHJ5VG9DbG91ZGluYXJ5UGFyYW1zKGVudHJ5KTtcbiAgICB9KTtcblxuICAgIHVybCArPSB2aWRlb1B1YmxpY0lkO1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICBwcml2YXRlIGVudHJ5VG9DbG91ZGluYXJ5UGFyYW1zKGVudHJ5KTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHRoaXMuYWRkVGV4dEFuZFBvc2l0aW9uKGVudHJ5LnRleHQpICtcbiAgICAgIHRoaXMucGFyc2VUaW1lVG9QYXJhbSgnc29fJywgZW50cnlbJ3N0YXJ0LXRpbWluZyddKSArICcsJyArXG4gICAgICB0aGlzLnBhcnNlVGltZVRvUGFyYW0oJ2VvXycsIGVudHJ5WydlbmQtdGltaW5nJ10pICsgJy8nKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkVGV4dEFuZFBvc2l0aW9uKHRleHQpOiBzdHJpbmcge1xuICAgIHJldHVybiAnbF90ZXh0OkFyaWFsXzQwcHg6JyArIGVuY29kZVVSSUNvbXBvbmVudChlbmNvZGVVUklDb21wb25lbnQodGV4dCkpICsgJyx5XzYwLGdfc291dGgsYl9ibGFjayxjb193aGl0ZSwnO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZVRpbWVUb1BhcmFtKHByZWZpeCwgdGltZSk6IHN0cmluZyB7XG4gICAgbGV0IHRpbWVBcnJheSA9IHRpbWUuc3BsaXQoJzonKSxcbiAgICAgIHNlYyA9IDAsIG1pbiA9IDE7XG5cbiAgICB3aGlsZSAodGltZUFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgIHNlYyArPSBtaW4gKiBwYXJzZUZsb2F0KHRpbWVBcnJheS5wb3AoKSk7XG4gICAgICBtaW4gKj0gNjA7XG4gICAgfVxuICAgIHJldHVybiBwcmVmaXggKyBzZWM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtJQVdFO3dCQUhXLDZCQUE2QjttREFDRixnQkFBZ0I7S0FFdEM7Ozs7Ozs7SUFFVCwwREFBbUI7Ozs7OztjQUFDLFNBQWlCLEVBQUUsYUFBcUIsRUFBRSxTQUFjOztRQUVqRixJQUFHLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDO1lBQ3RDLE9BQU8sQ0FBQyxLQUFLLENBQUMsNE5BRThDLENBQUMsQ0FBQztZQUM5RCxPQUFPO1NBQ1I7UUFFRCxJQUFHLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDO1lBQzlDLE9BQU8sQ0FBQyxLQUFLLENBQUMsMk5BRThDLENBQUMsQ0FBQztZQUU5RCxPQUFPO1NBQ1I7UUFFRCxJQUFHLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUM7WUFDeEUsT0FBTyxDQUFDLEtBQUssQ0FBQyxxU0FHOEMsQ0FBQyxDQUFDO1lBQzlELE9BQU87U0FDUjs7UUFFRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsbUNBQW1DLENBQUM7O1FBQy9FLElBQU0sY0FBYyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7UUFFM0MsY0FBYyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUs7WUFDdEIsR0FBRyxJQUFJLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QyxDQUFDLENBQUM7UUFFSCxHQUFHLElBQUksYUFBYSxDQUFDO1FBQ3JCLE9BQU8sR0FBRyxDQUFDOzs7Ozs7SUFHTCw4REFBdUI7Ozs7Y0FBQyxLQUFLO1FBQ25DLFFBQVEsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxHQUFHO1lBQ3pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFOzs7Ozs7SUFHckQseURBQWtCOzs7O2NBQUMsSUFBSTtRQUM3QixPQUFPLG9CQUFvQixHQUFHLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsaUNBQWlDLENBQUM7Ozs7Ozs7SUFHekcsdURBQWdCOzs7OztjQUFDLE1BQU0sRUFBRSxJQUFJOztRQUNuQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUNaOztRQURuQixJQUNFLEdBQUcsR0FBRyxDQUFDLENBQVU7O1FBRG5CLElBQ1csR0FBRyxHQUFHLENBQUMsQ0FBQztRQUVuQixPQUFPLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLEdBQUcsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLEdBQUcsSUFBSSxFQUFFLENBQUM7U0FDWDtRQUNELE9BQU8sTUFBTSxHQUFHLEdBQUcsQ0FBQzs7O2dCQWpFdkIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7dUNBSkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==