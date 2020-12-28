import { ZipPackage } from "./package.model";
import http from "http";

class CommHandler {

    /**
     * sendPackage
zipPackage: ZipPackage     */
    public sendPackage(zipPackage: ZipPackage, data: Buffer) {
        const client = http;

        const options: http.RequestOptions = {

        }
        // client.request()
    }
}