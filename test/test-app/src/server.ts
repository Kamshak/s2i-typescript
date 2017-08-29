import * as express from "express";
import * as logger from "morgan";

const app = express();
app.set("port", 8080);
app.use(logger(app.get("env") == "development" ? "dev" : "common"));

app.get("/", (req, res) => res.json({ok: 'ok'}));

/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
  console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
  console.log("  Press CTRL-C to stop\n");
});