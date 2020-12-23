class PackageHandler {
    constructor (private readonly folderPath: string) {}

    public async preaparePackage(templatePath: string, templateName: string) {
        
    }
}

interface IPackageHandler {
    preparePackage(templatePath: string, templateName: string);
    zipPackage(path);
    postPackage(data: Buffer, handshake: Handshake);
}

export {PackageHandler as ZipHandler}