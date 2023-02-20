import solid from "solid-start/vite";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import vercel from "solid-start-vercel";
import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";
import presetAttributify from "@unocss/preset-attributify";

export default defineConfig(() => {
	return {
		plugins: [
			solid({ ssr: false, adapter: vercel({ edge: false }) }),
			UnoCSS({
				shortcuts: [
					{
						logo: "i-logos-solidjs-icon w-6em h-6em transform transition-800 hover:rotate-360",
					},
				],
				presets: [
					presetUno(),
					presetAttributify(),
					presetIcons({
						extraProperties: {
							display: "inline-block",
							"vertical-align": "middle",
						},
					}),
				],
			}),
		],
		ssr: { external: ["@prisma/client"] },
	};
});
