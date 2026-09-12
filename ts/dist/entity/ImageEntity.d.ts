import { WaifuPicsEntityBase } from '../WaifuPicsEntityBase';
import type { WaifuPicsSDK } from '../WaifuPicsSDK';
import type { Control } from '../types';
import type { Image, ImageLoadMatch } from '../WaifuPicsTypes';
declare class ImageEntity extends WaifuPicsEntityBase<Image> {
    constructor(client: WaifuPicsSDK, entopts: any);
    make(this: ImageEntity): ImageEntity;
    load(this: any, reqmatch?: ImageLoadMatch, ctrl?: Control): Promise<ImageEntity>;
}
export { ImageEntity };
