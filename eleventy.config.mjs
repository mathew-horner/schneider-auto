export default async function (config) {
  config.setInputDirectory("views");
  config.setIncludesDirectory("../includes");
  config.addPassthroughCopy("assets");
}
