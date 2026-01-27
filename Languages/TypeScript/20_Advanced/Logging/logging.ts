// ロギングの基本
import pino from "pino";

const logger = pino({
  level: "info",
});

logger.info("Application started");
logger.warn("Low disk space");
logger.error({ err }, "Unexpected error");
logger.debug("Debugging info");

// カスタムフォーマットの例
const customLogger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "SYS:standard",
      ignore: "pid,hostname",
    },
  },
});
customLogger.info("This is a custom formatted log message");

// ログレベルの変更
logger.level = "debug";
logger.debug("This is a debug message after changing log level");

// ログの出力先をファイルに変更
const fileLogger = pino(pino.destination("app.log"));
fileLogger.info("This log is written to a file");
fileLogger.error("Error log written to file");
