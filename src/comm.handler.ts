import { ZipPackage } from "./package.model";
import http from "http";

class CommHandler {
  public sendPackage(
    packageName: string,
    data: Buffer,
    destination: string,
    port: number
  ) {
    const options = {
      host: destination,
      port: port.toString(),
      path: "/file",
      method: "POST",
      headers: {
        "Content-Type": "application/zip",
        "Content-Length": Buffer.byteLength(data),
        Filename: packageName + ".zip",
      },
    };

    const req = http.request(options);

    // implement multiple streams, req.write(chunk);

    req.write(data);
    if (req.writableFinished) req.end();
  }
}

export { CommHandler };
