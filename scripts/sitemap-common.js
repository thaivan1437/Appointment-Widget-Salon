const fs = require("fs");
const globby = require("globby");
const prettier = require("prettier");
const path = require('path');
const argv = require('yargs').argv;

const getDate = new Date().toISOString();
const env = argv.buildEnv || 'development';
const configPath = path.resolve(
    'src',
    'environments',
    env + '.js'
);

const CONFIGS = require(configPath);
const YOUR_AWESOME_DOMAIN = `https://belmontbeautysalon.${CONFIGS.domainExtension}`;
const formatted = sitemap => prettier.format(sitemap, { parser: "html" });

(async () => {
  const pages = await globby([
    // include
    "pages/**/*.js",
    "pages/*.js",
    // exclude
    "!pages/_*.js"
  ]);

  const pagesSitemap = `
    ${pages
      .map(page => {
        const path = page
          .replace("pages/", "")
          .replace(".js", "")
          .replace(/\/index/g, "");
        const routePath = path === "index" ? "" : path+".html";
        const priority = path === "index" ? "1.00" : "0.80";
        return `
          <url>
            <loc>${YOUR_AWESOME_DOMAIN}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
            <priority>${priority}</priority>
          </url>
        `;
      })
      .join("")}
  `;

  const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${pagesSitemap}
    </urlset>
  `;

  const formattedSitemap = [formatted(generatedSitemap)];

  fs.writeFileSync("public/sitemap.xml", formattedSitemap, "utf8");
})();