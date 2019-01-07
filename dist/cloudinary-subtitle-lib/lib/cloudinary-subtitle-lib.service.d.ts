export declare class CloudinarySubtitleLibService {
    BASE_URL: string;
    CLOUDINARY_URL_VIDEO_TYPE_EXTENSION: string;
    constructor();
    addSubtitlesToVideo(cloudName: string, videoPublicId: string, subtitles: any): string;
    private entryToCloudinaryParams(entry);
    private addTextPositionAndStyles(text);
    private parseTimeToParam(prefix, time);
}
