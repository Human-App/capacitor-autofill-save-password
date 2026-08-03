import { WebPlugin } from '@capacitor/core';
import type { Options, ReadPasswordResult, SavePasswordPlugin } from './definitions';
export declare class SavePasswordWeb extends WebPlugin implements SavePasswordPlugin {
    readPassword(): Promise<ReadPasswordResult>;
    promptDialog(options: Options): Promise<void>;
    getPluginVersion(): Promise<{
        version: string;
    }>;
}
