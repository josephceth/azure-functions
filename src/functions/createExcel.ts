import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

export async function createExcel(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  return {
    status: 200,
    body: {
      message: "Hello from createExcel",
    },
  };
}

app.http("createExcel", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: createExcel,
});
