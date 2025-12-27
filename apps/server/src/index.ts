import Fastify from "fastify";
import cors from "@fastify/cors";

const fastify = Fastify({
  logger: true,
});

fastify.register(cors, {
  origin: "*",
});

fastify.get("/", async (request, reply) => {
  return { admin: "Shailesh", server: "Fastify" };
});

const start = async () => {
  try {
    await fastify.listen({ port: 5009, host: "0.0.0.0" });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
