class Html {
  static MakeContent(templateName: string) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${templateName}</title>
    <link rel="stylesheet" href="css/content.css">
    <script src="js/content.js"></script>
</head>
<body>
    <div class="page">
    
    </div>
</body>
</html>`;

    return html;
  }

  static MakeBlock(autoNumbering: boolean, blockName: string) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/${blockName}.css">
    <script src="js/${blockName}.js"></script>
    ${blockName ? `<script src="js/subst.js"></script>` : ""}
</head>
${autoNumbering ? `<body onload="subst()">` : `<body>`}
    <${blockName}>
    
    </${blockName}>
</body>
</html>`;

    return html;
  }
}

export { Html };
