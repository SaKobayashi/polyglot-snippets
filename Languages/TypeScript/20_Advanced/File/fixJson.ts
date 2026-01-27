type Config = {
  port: number;
};

const raw = await readFile("config.json", "utf-8");
const config: Config = JSON.parse(raw);
