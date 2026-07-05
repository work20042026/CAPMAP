import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as GEO_LABEL } from "./caps-CDgpBIl-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BgpJ4Sec.js
var import_jsx_runtime = require_jsx_runtime();
var TYPES = [
	"state",
	"city",
	"town",
	"ward",
	"village"
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-6 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-bold tracking-tight md:text-4xl",
				children: "About CAPMAP India"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-foreground/80",
				children: "CAPMAP India is an open, interactive directory of Climate Action Plans (CAPs) published by Indian states, cities, towns, wards and villages. The platform brings together publicly available CAP documents into a single map-based dashboard so researchers, practitioners and citizens can quickly compare vision, emissions baselines, climate risks and sectoral strategies across geographies."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 text-xl font-semibold",
				children: "How to use this site"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-foreground/80",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Open the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Home" }),
						" tab to see all CAPs plotted on the India map."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Use the filter chips to show only certain geographic units (State, City, Town, Ward, Village) or search by name." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Click a pin to load its CAP dashboard on the right — with tabs for Overview, Emissions, Risks and Strategies." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Follow the \"View full CAP document\" link to open the original published PDF or webpage." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"The ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "CAP Resources" }),
						" tab lists frameworks, methodologies and reference documents."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 text-xl font-semibold",
				children: "Geographic units"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-foreground/75",
				children: "Each pin on the map uses a color that reflects its geographic scale:"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium text-white",
					style: { backgroundColor: `var(--geo-${t})` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-white/95" }), GEO_LABEL[t]]
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 text-xl font-semibold",
				children: "Contribute or correct information"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm leading-relaxed text-foreground/80",
				children: [
					"CAPMAP India is maintained collaboratively. If a CAP is missing, has been updated, or contains an error on this platform, please write to",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:work20042026@gmail.com",
						className: "font-medium text-primary underline",
						children: "work20042026@gmail.com"
					}),
					" ",
					"with the correction or a link to the source document. New entries can be added for any of the five geographic units above as more CAPs are published."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 rounded-lg border-l-4 border-[var(--geo-ward)] bg-muted/50 p-5 text-sm leading-relaxed text-foreground/80",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-1 font-semibold text-foreground",
						children: "Disclaimer"
					}),
					"The information present is entirely based on review of publicly available Climate Action Plan documents, information provided by municipalities or organizations developing the CAP documents, and thus does not necessarily reflect the most recent status of progress. If you detect any incorrect information on this page, please contact us at",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:work20042026@gmail.com",
						className: "underline text-primary",
						children: "work20042026@gmail.com"
					}),
					" ",
					"to amend it."
				]
			})
		]
	});
}
//#endregion
export { About as component };
