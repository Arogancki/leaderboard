import mongoose from "mongoose";
import env from "../configs/env";

mongoose.Promise = Promise;
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.connect(env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true });

export function ensureConnection(): Promise<mongoose.Connection> {
    return new Promise((res, rej) => {
        const { connection } = mongoose;
        const done = () => res(connection);

        if (connection.db) {
            return done();
        }

        connection.once("open", done);
        connection.on("error", rej);
    });
}
