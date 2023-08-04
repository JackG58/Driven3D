import pino from "pino";

export const logger = pino({
    name: "Driven3D",
    level: "info",
})