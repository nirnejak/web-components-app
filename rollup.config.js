import scss from 'rollup-plugin-scss'
import replace from "rollup-plugin-replace"
import resolve from "rollup-plugin-node-resolve"
import rimraf from "rimraf"

rimraf.sync("dist");

const pkg = require("./package.json");
const version = pkg.version;

export default {
  input: "src/scripts/main.js",
  output: {
    file: "dist/scripts/main.js",
    format: "iife"
  },
  plugins: [
    resolve(),
    scss({
      output: "dist/static/css/style.css",
    }),
    replace({
      delimiters: ['{{', '}}'],
      version
    })
  ]
}