import "dotenv/config"; // To read CLERK_SECRET_KEY and CLERK_PUBLISHABLE_KEY
import {
  ClerkExpressWithAuth,
  LooseAuthProp,
  WithAuthProp,
} from "@clerk/clerk-sdk-node";
import express, { Application, Request, Response } from "express";

const port = process.env.PORT || 8080;

const app: Application = express();

declare global {
  namespace Express {
    interface Request extends LooseAuthProp {}
  }
}

// Use the lax middleware that returns an empty auth object when unauthenticated
app.get(
  "/protected-route",
  ClerkExpressWithAuth({
    // Add options here
    // See the Middleware options section for more details
  }),
  (req: WithAuthProp<Request>, res: Response) => {
    res.json(req.auth);
  }
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(401).send("Unauthenticated!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
