import pino from "pino";
import env from "../../configs/env";

export default function loggerFactory() {
    return pino({
        level: env.LOGGER_LEVEL,
    });
}
