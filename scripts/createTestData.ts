import PlayerRepository from "../src/repositories/playerRepository";
import ScoreRepository from "../src/repositories/scoreRepository";
import { uniqueNamesGenerator, names, animals, adjectives, colors, countries, starWars } from "unique-names-generator";
import { ensureConnection } from "../src/middlewares/mongoose";

const pr = new PlayerRepository();
const sr = new ScoreRepository();

export default async () => {
    process.env.MONGODB_URI = "mongodb://root:IN0KfPvwvTADta1tLNrML5fWmXYosfDk@mongo:27017/db?authSource=admin";
    const connection = await ensureConnection();

    await connection.dropDatabase();

    console.log(`Populating dummy data...`);
    for (let i = 0; i < 100; i++) {
        for (let i = 0; i < 10; i++) {
            const player = await pr.create({
                nick: uniqueNamesGenerator({
                    dictionaries: [names, animals, adjectives, colors, countries, starWars],
                    length: 3,
                }),
                rank: "does-not-matter",
            });
            await sr.create({ player: String(player._id), points: Math.ceil(Math.random() * 100000) });
        }
        console.log(`${i + 1}%`);
    }

    connection.close();
};
