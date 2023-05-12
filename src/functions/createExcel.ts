import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext
} from "@azure/functions";

import * as ExcelJS from "exceljs";
export async function createExcel(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {

  const chunks = [];
  for await (const chunk of request.body) {
    chunks.push(chunk);
  }
  const requestBody = Buffer.concat(chunks).toString();
  const data = JSON.parse(requestBody).data;
  const columns = JSON.parse(requestBody).columns;
  console.log(`Data: ${JSON.stringify(data)}`);
  console.log(`Columns: ${JSON.stringify(columns)}`);

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Sheet1");
  const buffer = await workbook.xlsx.writeBuffer();
  
  return {
    status: 200,
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": "attachment; filename=Countries_List.xlsx",
    },
    body: buffer,
  };
}

app.http("createExcel", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: createExcel,
});
