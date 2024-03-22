import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	clean: true,
	outDir: "./dist",
	treeshake: true,
	sourcemap: true,
	dts: true,
	metafile: true,
});
