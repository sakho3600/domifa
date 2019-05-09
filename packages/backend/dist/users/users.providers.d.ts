/// <reference types="mongoose-sequence" />
import { Connection } from 'mongoose';
export declare const UsersProviders: {
    inject: string[];
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<import("mongoose").Document, {}>;
}[];