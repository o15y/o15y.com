import { readFile, writeFile } from "fs-extra";
import { join } from "path";

console.log("Starting build process");

const build = async () => {
  const indexFile = (await readFile(join(__dirname, "..", "index.html"))).toString();
  const content = indexFile.replace("<!-- inject css -->", "CSS");
  await writeFile(join(__dirname, "index.html"), content);
}

build()
  .then(() => console.log("Completed!"))
  .catch(error => console.log("Error", error));
