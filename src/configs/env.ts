import dotenv from "dotenv";
dotenv.config();

export default {
    SERVER_PORT: process.env.PORT || 8080,
    MONGODB_URI: String(process.env.MONGODB_URI),
    LOGGER_LEVEL: String(process.env.LOGGER_LEVEL) || "info",
};
