import { Schema } from "mongoose";
import { Types, Document } from "mongoose";
import { IPlayer, playerCollectionName } from "./player";

export interface IScore {
    points: number;
    player: Types.ObjectId | IPlayer;
}

export class Score extends Document implements IScore {
    points!: number;
    player!: Types.ObjectId | IPlayer;
}

export const ScoreSchema = new Schema(
    {
        player: {
            type: Types.ObjectId,
            ref: playerCollectionName,
            required: true,
            unique: true,
        },
        points: {
            type: Number,
        },
    },
    {
        versionKey: false,
    },
).index({ score: 1 }); // optimisation for the get queries

export const scoreCollectionName = "Score";
