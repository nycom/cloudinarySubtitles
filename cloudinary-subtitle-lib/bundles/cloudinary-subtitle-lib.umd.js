(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('cloudinary-subtitle-lib', ['exports', '@angular/core'], factory) :
    (factory((global['cloudinary-subtitle-lib'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CloudinarySubtitleLibService = (function () {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        CloudinarySubtitleLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ CloudinarySubtitleLibService.ngInjectableDef = i0.defineInjectable({ factory: function CloudinarySubtitleLibService_Factory() { return new CloudinarySubtitleLibService(); }, token: CloudinarySubtitleLibService, providedIn: "root" });
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

    exports.CloudinarySubtitleLibService = CloudinarySubtitleLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS1zdWJ0aXRsZS1saWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9jbG91ZGluYXJ5LXN1YnRpdGxlLWxpYi9saWIvY2xvdWRpbmFyeS1zdWJ0aXRsZS1saWIuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIENsb3VkaW5hcnlTdWJ0aXRsZUxpYlNlcnZpY2Uge1xuXG4gIEJBU0VfVVJMID0gJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tLyc7XG4gIENMT1VESU5BUllfVVJMX1ZJREVPX1RZUEVfRVhURU5TSU9OID0gJy92aWRlby91cGxvYWQvJztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGFkZFN1YnRpdGxlc1RvVmlkZW8oY2xvdWROYW1lOiBzdHJpbmcsIHZpZGVvUHVibGljSWQ6IHN0cmluZywgc3VidGl0bGVzOiBhbnkpIHtcblxuICAgIGlmKCFjbG91ZE5hbWUgfHwgY2xvdWROYW1lLmxlbmd0aCA9PT0gMCl7XG4gICAgICBjb25zb2xlLmVycm9yKGBNaXNzaW5nIG9yIGVtcHR5IGFwcHJvcHJpYXRlIGNsb3VkTmFtZS4uLlxuICAgICAgICAgICAgICAgICAgICAgY2xvdWROYW1lIHNob3VsZCBiZSBhIHN0cmluZyB3aGljaCByZXByZXNlbnRzIHlvdXIgY2xvdWQgbmFtZSBwcm92aWRlZCBieSBjbG91ZGluYXJ5LFxcblxuICAgICAgICAgICAgICAgICAgICAgcGxlYXNlIGZvbGxvdyB0aGUgaW5zdHJ1Y3Rpb25zIGFuZCB0cnkgYWdhaW5gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZighdmlkZW9QdWJsaWNJZCB8fCB2aWRlb1B1YmxpY0lkLmxlbmd0aCA9PT0gMCl7XG4gICAgICBjb25zb2xlLmVycm9yKGBNaXNzaW5nIGFwcHJvcHJpYXRlIHZpZGVvUHVibGljSWQuLi5cXG5cbiAgICAgICAgICAgICAgICAgICAgIHZpZGVvUHVibGljSWQgc2hvdWxkIGJlIGEgc3RyaW5nIHdoaWNoIHJlcHJlc2VudHMgdGhlIHZpZGVvIGlkIHByb3ZpZGVkIGJ5IGNsb3VkaW5hcnksXFxuIFxuICAgICAgICAgICAgICAgICAgICAgcGxlYXNlIGZvbGxvdyB0aGUgaW5zdHJ1Y3Rpb25zIGFuZCB0cnkgYWdhaW5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCFzdWJ0aXRsZXMgfHwgIXN1YnRpdGxlcy5zdWJ0aXRsZXMgfHwgc3VidGl0bGVzLnN1YnRpdGxlcy5sZW5ndGggPT09IDApe1xuICAgICAgY29uc29sZS5lcnJvcihgTWlzc2luZyBvciBiYWQgYXBwcm9wcmlhdGUgc3VidGl0bGVzIEpTT04uLi5cXG5cbiAgICAgICAgICAgICAgICAgICAgIHRoZSBhcHByb3ByaWF0ZSBzdWJ0aXRsZXMgSlNPTiBzaG91bGQgYmUgb2YgdHlwZTpcXG5cbiAgICAgICAgICAgICAgICAgICAgIHsgc3VidGl0bGVzOiB7ICdzdGFydC10aW1pbmcnOiBzdHJpbmcsICdlbmQtdGltaW5nJzogc3RyaW5nLCB0ZXh0OiBzdHJpbmcgfVtdIH1cXG5cbiAgICAgICAgICAgICAgICAgICAgIHBsZWFzZSBmb2xsb3cgdGhlIGluc3RydWN0aW9ucyBhbmQgdHJ5IGFnYWluYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHVybCA9IHRoaXMuQkFTRV9VUkwgKyBjbG91ZE5hbWUgKyB0aGlzLkNMT1VESU5BUllfVVJMX1ZJREVPX1RZUEVfRVhURU5TSU9OO1xuICAgIGNvbnN0IHN1YnRpdGxlc0FycmF5ID0gc3VidGl0bGVzLnN1YnRpdGxlcztcblxuICAgIHN1YnRpdGxlc0FycmF5Lm1hcChlbnRyeSA9PiB7XG4gICAgICB1cmwgKz0gdGhpcy5lbnRyeVRvQ2xvdWRpbmFyeVBhcmFtcyhlbnRyeSk7XG4gICAgfSk7XG5cbiAgICB1cmwgKz0gdmlkZW9QdWJsaWNJZDtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgcHJpdmF0ZSBlbnRyeVRvQ2xvdWRpbmFyeVBhcmFtcyhlbnRyeSk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLmFkZFRleHRBbmRQb3NpdGlvbihlbnRyeS50ZXh0KSArXG4gICAgICB0aGlzLnBhcnNlVGltZVRvUGFyYW0oJ3NvXycsIGVudHJ5WydzdGFydC10aW1pbmcnXSkgKyAnLCcgK1xuICAgICAgdGhpcy5wYXJzZVRpbWVUb1BhcmFtKCdlb18nLCBlbnRyeVsnZW5kLXRpbWluZyddKSArICcvJyk7XG4gIH1cblxuICBwcml2YXRlIGFkZFRleHRBbmRQb3NpdGlvbih0ZXh0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2xfdGV4dDpBcmlhbF80MHB4OicgKyBlbmNvZGVVUklDb21wb25lbnQoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKSArICcseV82MCxnX3NvdXRoLGJfYmxhY2ssY29fd2hpdGUsJztcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VUaW1lVG9QYXJhbShwcmVmaXgsIHRpbWUpOiBzdHJpbmcge1xuICAgIGxldCB0aW1lQXJyYXkgPSB0aW1lLnNwbGl0KCc6JyksXG4gICAgICBzZWMgPSAwLCBtaW4gPSAxO1xuXG4gICAgd2hpbGUgKHRpbWVBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICBzZWMgKz0gbWluICogcGFyc2VGbG9hdCh0aW1lQXJyYXkucG9wKCkpO1xuICAgICAgbWluICo9IDYwO1xuICAgIH1cbiAgICByZXR1cm4gcHJlZml4ICsgc2VjO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBV0U7NEJBSFcsNkJBQTZCO3VEQUNGLGdCQUFnQjtTQUV0Qzs7Ozs7OztRQUVULDBEQUFtQjs7Ozs7O3NCQUFDLFNBQWlCLEVBQUUsYUFBcUIsRUFBRSxTQUFjOztnQkFFakYsSUFBRyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBQztvQkFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBQyw0TkFFOEMsQ0FBQyxDQUFDO29CQUM5RCxPQUFPO2lCQUNSO2dCQUVELElBQUcsQ0FBQyxhQUFhLElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUM7b0JBQzlDLE9BQU8sQ0FBQyxLQUFLLENBQUMsMk5BRThDLENBQUMsQ0FBQztvQkFFOUQsT0FBTztpQkFDUjtnQkFFRCxJQUFHLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUM7b0JBQ3hFLE9BQU8sQ0FBQyxLQUFLLENBQUMscVNBRzhDLENBQUMsQ0FBQztvQkFDOUQsT0FBTztpQkFDUjs7Z0JBRUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLG1DQUFtQyxDQUFDOztnQkFDL0UsSUFBTSxjQUFjLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQztnQkFFM0MsY0FBYyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUs7b0JBQ3RCLEdBQUcsSUFBSSxLQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzVDLENBQUMsQ0FBQztnQkFFSCxHQUFHLElBQUksYUFBYSxDQUFDO2dCQUNyQixPQUFPLEdBQUcsQ0FBQzs7Ozs7O1FBR0wsOERBQXVCOzs7O3NCQUFDLEtBQUs7Z0JBQ25DLFFBQVEsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsR0FBRztvQkFDekQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7Ozs7OztRQUdyRCx5REFBa0I7Ozs7c0JBQUMsSUFBSTtnQkFDN0IsT0FBTyxvQkFBb0IsR0FBRyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDOzs7Ozs7O1FBR3pHLHVEQUFnQjs7Ozs7c0JBQUMsTUFBTSxFQUFFLElBQUk7O2dCQUNuQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUNaOztnQkFEbkIsSUFDRSxHQUFHLEdBQUcsQ0FBQyxDQUFVOztnQkFEbkIsSUFDVyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUVuQixPQUFPLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUMzQixHQUFHLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztvQkFDekMsR0FBRyxJQUFJLEVBQUUsQ0FBQztpQkFDWDtnQkFDRCxPQUFPLE1BQU0sR0FBRyxHQUFHLENBQUM7OztvQkFqRXZCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OzsyQ0FKRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=