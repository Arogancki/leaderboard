import { Schema } from "mongoose";
import { Document } from "mongoose";

export interface IPlayer {
    rank: string;
    nick: string;
}

export class Player extends Document implements IPlayer {
    rank!: string;
    nick!: string;
}

export const PlayerSchema = new Schema(
    {
        nick: {
            type: String,
            required: true,
            unique: true,
        },
        rank: {
            type: String,
            required: true,
        },
    },
    {
        versionKey: false,
    },
);

export const playerCollectionName = "Player";
