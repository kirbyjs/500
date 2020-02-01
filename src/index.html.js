function addScriptTag(sourceFile) {
    return `<script src="${sourceFile}"></script>`;
}

function addLinkCSSTag(sourceFile) {
    return `<link rel="stylesheet" type="text/css" href="${sourceFile}">`;
}

export default ({ body }) => {
    // eslint-disable-next-line global-require, import/no-unresolved
    const assetsObject = require('../assets/json/assets.json');

    const assets = Object.values(assetsObject);
    const scriptFiles = assets.filter((asset) => asset.js);
    const cssFiles = assets.filter((asset) => asset.css);

    const htmlScriptTags = scriptFiles.map((asset) => addScriptTag(asset.js));
    const htmlCSSLinkTag = cssFiles.map((asset) => addLinkCSSTag(asset.css));

    return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <title>500</title>
            <meta name="description" content="500 card game.">
            <link rel="canonical" href="https://500.kirbyjs.com/">
            <meta property="og:locale" content="en_US">
            <meta property="og:type" content="website">
            <meta property="og:title" content="500">
            <meta property="og:description" content="500 card game.">
            <meta property="og:url" content="https://500.kirbyjs.com/">
            <meta property="og:site_name" content="500">
            <meta name="viewport" content="width=device-width">
            <link rel="manifest" href="/manifest.json">
            ${htmlCSSLinkTag.join('\n')}
          </head>
          <body>
            <div id="root">${body}</div>
            ${htmlScriptTags.join('\n')}
          </body>
        </html>
  `;
};
