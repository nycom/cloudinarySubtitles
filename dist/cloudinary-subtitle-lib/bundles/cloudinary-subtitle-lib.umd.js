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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS1zdWJ0aXRsZS1saWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9jbG91ZGluYXJ5LXN1YnRpdGxlLWxpYi9saWIvY2xvdWRpbmFyeS1zdWJ0aXRsZS1saWIuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENsb3VkaW5hcnlTdWJ0aXRsZUxpYlNlcnZpY2Uge1xyXG5cclxuICBCQVNFX1VSTCA9ICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS8nO1xyXG4gIENMT1VESU5BUllfVVJMX1ZJREVPX1RZUEVfRVhURU5TSU9OID0gJy92aWRlby91cGxvYWQvJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgYWRkU3VidGl0bGVzVG9WaWRlbyhjbG91ZE5hbWU6IHN0cmluZywgdmlkZW9QdWJsaWNJZDogc3RyaW5nLCBzdWJ0aXRsZXM6IGFueSkge1xyXG5cclxuICAgIGlmICghY2xvdWROYW1lIHx8IGNsb3VkTmFtZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgTWlzc2luZyBvciBlbXB0eSBhcHByb3ByaWF0ZSBjbG91ZE5hbWUuLi5cclxuICAgICAgICAgICAgICAgICAgICAgY2xvdWROYW1lIHNob3VsZCBiZSBhIHN0cmluZyB3aGljaCByZXByZXNlbnRzIHlvdXIgY2xvdWQgbmFtZSBwcm92aWRlZCBieSBjbG91ZGluYXJ5LFxcblxyXG4gICAgICAgICAgICAgICAgICAgICBwbGVhc2UgZm9sbG93IHRoZSBpbnN0cnVjdGlvbnMgYW5kIHRyeSBhZ2FpbmApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF2aWRlb1B1YmxpY0lkIHx8IHZpZGVvUHVibGljSWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE1pc3NpbmcgYXBwcm9wcmlhdGUgdmlkZW9QdWJsaWNJZC4uLlxcblxyXG4gICAgICAgICAgICAgICAgICAgICB2aWRlb1B1YmxpY0lkIHNob3VsZCBiZSBhIHN0cmluZyB3aGljaCByZXByZXNlbnRzIHRoZSB2aWRlbyBpZCBwcm92aWRlZCBieSBjbG91ZGluYXJ5LFxcbiBcclxuICAgICAgICAgICAgICAgICAgICAgcGxlYXNlIGZvbGxvdyB0aGUgaW5zdHJ1Y3Rpb25zIGFuZCB0cnkgYWdhaW5gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghc3VidGl0bGVzIHx8ICFzdWJ0aXRsZXMuc3VidGl0bGVzIHx8IHN1YnRpdGxlcy5zdWJ0aXRsZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE1pc3Npbmcgb3IgYmFkIGFwcHJvcHJpYXRlIHN1YnRpdGxlcyBKU09OLi4uXFxuXHJcbiAgICAgICAgICAgICAgICAgICAgIHRoZSBhcHByb3ByaWF0ZSBzdWJ0aXRsZXMgSlNPTiBzaG91bGQgYmUgb2YgdHlwZTpcXG5cclxuICAgICAgICAgICAgICAgICAgICAgeyBzdWJ0aXRsZXM6IHsgJ3N0YXJ0LXRpbWluZyc6IHN0cmluZywgJ2VuZC10aW1pbmcnOiBzdHJpbmcsIHRleHQ6IHN0cmluZyB9W10gfVxcblxyXG4gICAgICAgICAgICAgICAgICAgICBwbGVhc2UgZm9sbG93IHRoZSBpbnN0cnVjdGlvbnMgYW5kIHRyeSBhZ2FpbmApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHVybCA9IHRoaXMuQkFTRV9VUkwgKyBjbG91ZE5hbWUgKyB0aGlzLkNMT1VESU5BUllfVVJMX1ZJREVPX1RZUEVfRVhURU5TSU9OO1xyXG4gICAgY29uc3Qgc3VidGl0bGVzQXJyYXkgPSBzdWJ0aXRsZXMuc3VidGl0bGVzO1xyXG5cclxuICAgIHN1YnRpdGxlc0FycmF5Lm1hcCgoZW50cnksIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChlbnRyeVsnc3RhcnQtdGltaW5nJ10gJiYgZW50cnlbJ2VuZC10aW1pbmcnXSAmJiBlbnRyeS50ZXh0KSB7XHJcbiAgICAgICAgICB1cmwgKz0gdGhpcy5lbnRyeVRvQ2xvdWRpbmFyeVBhcmFtcyhlbnRyeSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgQmFkIHN1YnRpdGxlIGZvcm1hdCBhdCBpbmRleCAke2luZGV4fSwgcGxlYXNlIG1ha2Ugc3VyZSB0aGF0IGVhY2ggc3VidGl0bGUgaXMgb2YgXHJcbiAgICAgICAgdHlwZTogeyAnc3RhcnQtdGltaW5nJzogc3RyaW5nLCAnZW5kLXRpbWluZyc6IHN0cmluZywgdGV4dDogc3RyaW5nIH1gKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdXJsICs9IHZpZGVvUHVibGljSWQ7XHJcbiAgICByZXR1cm4gdXJsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbnRyeVRvQ2xvdWRpbmFyeVBhcmFtcyhlbnRyeSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gKHRoaXMuYWRkVGV4dFBvc2l0aW9uQW5kU3R5bGVzKGVudHJ5LnRleHQpICtcclxuICAgICAgdGhpcy5wYXJzZVRpbWVUb1BhcmFtKCdzb18nLCBlbnRyeVsnc3RhcnQtdGltaW5nJ10pICsgJywnICtcclxuICAgICAgdGhpcy5wYXJzZVRpbWVUb1BhcmFtKCdlb18nLCBlbnRyeVsnZW5kLXRpbWluZyddKSArICcvJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFRleHRQb3NpdGlvbkFuZFN0eWxlcyh0ZXh0KTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnbF90ZXh0OkFyaWFsXzQwcHg6JyArIGVuY29kZVVSSUNvbXBvbmVudChlbmNvZGVVUklDb21wb25lbnQodGV4dCkpICsgJyx5XzYwLGdfc291dGgsYl9ibGFjayxjb193aGl0ZSwnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwYXJzZVRpbWVUb1BhcmFtKHByZWZpeCwgdGltZSk6IHN0cmluZyB7XHJcbiAgICBsZXQgdGltZUFycmF5ID0gdGltZS5zcGxpdCgnOicpLFxyXG4gICAgICBzZWMgPSAwLCBtaW4gPSAxO1xyXG5cclxuICAgIHdoaWxlICh0aW1lQXJyYXkubGVuZ3RoID4gMCkge1xyXG4gICAgICBzZWMgKz0gbWluICogcGFyc2VGbG9hdCh0aW1lQXJyYXkucG9wKCkpO1xyXG4gICAgICBtaW4gKj0gNjA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJlZml4ICsgc2VjO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBV0U7NEJBSFcsNkJBQTZCO3VEQUNGLGdCQUFnQjtTQUV0Qzs7Ozs7OztRQUVULDBEQUFtQjs7Ozs7O3NCQUFDLFNBQWlCLEVBQUUsYUFBcUIsRUFBRSxTQUFjOztnQkFFakYsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDeEMsT0FBTyxDQUFDLEtBQUssQ0FBQyw0TkFFOEMsQ0FBQyxDQUFDO29CQUM5RCxPQUFPO2lCQUNSO2dCQUVELElBQUksQ0FBQyxhQUFhLElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQ2hELE9BQU8sQ0FBQyxLQUFLLENBQUMsMk5BRThDLENBQUMsQ0FBQztvQkFDOUQsT0FBTztpQkFDUjtnQkFFRCxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQzFFLE9BQU8sQ0FBQyxLQUFLLENBQUMscVNBRzhDLENBQUMsQ0FBQztvQkFDOUQsT0FBTztpQkFDUjs7Z0JBRUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLG1DQUFtQyxDQUFDOztnQkFDL0UsSUFBTSxjQUFjLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQztnQkFFM0MsY0FBYyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUssRUFBRSxLQUFLO29CQUM5QixJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksRUFBRTt3QkFDNUQsR0FBRyxJQUFJLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDOUM7eUJBQU07d0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQ0FBZ0MsS0FBSywrSEFDa0IsQ0FBQyxDQUFDO3FCQUN4RTtpQkFDRixDQUFDLENBQUM7Z0JBRUgsR0FBRyxJQUFJLGFBQWEsQ0FBQztnQkFDckIsT0FBTyxHQUFHLENBQUM7Ozs7OztRQUdMLDhEQUF1Qjs7OztzQkFBQyxLQUFLO2dCQUNuQyxRQUFRLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUMvQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLEdBQUc7b0JBQ3pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFOzs7Ozs7UUFHckQsK0RBQXdCOzs7O3NCQUFDLElBQUk7Z0JBQ25DLE9BQU8sb0JBQW9CLEdBQUcsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxpQ0FBaUMsQ0FBQzs7Ozs7OztRQUd6Ryx1REFBZ0I7Ozs7O3NCQUFDLE1BQU0sRUFBRSxJQUFJOztnQkFDbkMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FDWjs7Z0JBRG5CLElBQ0UsR0FBRyxHQUFHLENBQUMsQ0FBVTs7Z0JBRG5CLElBQ1csR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFFbkIsT0FBTyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDM0IsR0FBRyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQ3pDLEdBQUcsSUFBSSxFQUFFLENBQUM7aUJBQ1g7Z0JBQ0QsT0FBTyxNQUFNLEdBQUcsR0FBRyxDQUFDOzs7b0JBckV2QkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7MkNBSkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9