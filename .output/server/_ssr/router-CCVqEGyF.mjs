import { n as __toESM } from "../_runtime.mjs";
import { f as require_react } from "../_libs/@react-leaflet/core+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { n as caps } from "./caps-CDgpBIl-.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CCVqEGyF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-oc6arpIR.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Try refreshing."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$3 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "CAPMAP India — Climate Action Plans of Indian Cities" },
			{
				name: "description",
				content: "Interactive map and dashboard of Climate Action Plans (CAPs) published by Indian cities, states, towns, wards and villages."
			},
			{
				property: "og:title",
				content: "CAPMAP India — Climate Action Plans of Indian Cities"
			},
			{
				property: "og:description",
				content: "Interactive map and dashboard of Climate Action Plans published across India."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.ico",
			type: "image/x-icon"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function SiteHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "bg-header text-header-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex items-center gap-3 group",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-header font-bold text-sm shadow",
					children: "CAP"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "leading-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] uppercase tracking-[0.18em] text-white/60",
						children: "CAPMAP"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-lg font-semibold",
						children: "India · Climate Action Plans"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex items-center gap-1 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
						to: "/",
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
						to: "/resources",
						children: "CAP Resources"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
						to: "/about",
						children: "About"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-full bg-gradient-to-r from-[var(--geo-state)] via-[var(--geo-city)] to-[var(--geo-village)]" })]
	});
}
function NavLink({ to, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: "rounded px-3 py-2 text-white/85 hover:text-white hover:bg-white/10 transition",
		activeProps: { className: "rounded px-3 py-2 bg-[var(--header-accent)] text-header font-semibold" },
		activeOptions: { exact: true },
		children
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-12 border-t bg-muted/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 font-semibold text-foreground",
					children: "Disclaimer"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"The information present is entirely based on review of publicly available Climate Action Plan documents, information provided by municipalities or organizations developing the CAP documents, and thus does not necessarily reflect the most recent status of progress. If you detect any incorrect information on this page, please contact us at",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:work20042026@gmail.com",
						className: "underline text-primary",
						children: "work20042026@gmail.com"
					}),
					" ",
					"to amend it."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" CAPMAP India"
					]
				})
			]
		})
	});
}
function RootComponent() {
	const { queryClient } = Route$3.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		})
	});
}
var Route$2 = createFileRoute("/resources")({
	head: () => ({ meta: [
		{ title: "CAP Resources — CAPMAP India" },
		{
			name: "description",
			content: "Full CAP documents, methodologies and useful references for climate action plan research."
		},
		{
			property: "og:title",
			content: "CAP Resources — CAPMAP India"
		},
		{
			property: "og:description",
			content: "Full CAP documents, methodologies and useful references."
		}
	] }),
	component: Resources
});
var EXTRA_RESOURCES = [
	{
		title: "ICLEI South Asia — Net-Zero Framework",
		url: "https://southasia.iclei.org/",
		source: "ICLEI",
		tags: ["framework", "methodology"],
		description: "Guidance and framework adopted by several Indian cities for CAP development and net-zero pathways."
	},
	{
		title: "C40 Cities Climate Action Planning Framework",
		url: "https://www.c40.org/what-we-do/scaling-up-climate-action/climate-action-planning/",
		source: "C40",
		tags: ["framework", "methodology"],
		description: "Global framework for developing 1.5°C-aligned Climate Action Plans."
	},
	{
		title: "GHG Protocol for Cities (GPC)",
		url: "https://ghgprotocol.org/ghg-protocol-cities",
		source: "GHG Protocol",
		tags: ["inventory", "methodology"],
		description: "Standard methodology for city-level greenhouse gas emissions inventories."
	},
	{
		title: "India Cooling Action Plan (ICAP)",
		url: "https://ozonecell.nic.in/wp-content/uploads/2019/03/INDIA-COOLING-ACTION-PLAN-e-circulation-version080319.pdf",
		source: "MoEFCC, Government of India",
		tags: ["national", "policy"],
		description: "National plan addressing cooling requirements across sectors and reducing associated emissions."
	},
	{
		title: "National Action Plan on Climate Change (NAPCC)",
		url: "https://moef.gov.in/en/division/environment-divisions/climate-changecc-2/national-action-plan-on-climate-change/",
		source: "MoEFCC",
		tags: ["national", "policy"],
		description: "India's overarching climate strategy with eight national missions."
	},
	{
		title: "Climate Centre for Cities (C-Cube), NIUA",
		url: "https://niua.in/c-cube/",
		source: "NIUA",
		tags: ["research", "cities"],
		description: "National knowledge hub supporting Indian cities on climate action."
	}
];
function Resources() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourcesInner, {});
}
function ResourcesInner() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [tag, setTag] = (0, import_react.useState)("all");
	const all = [...(0, import_react.useMemo)(() => caps.filter((c) => c.documentLink).map((c) => ({
		title: `${c.city} Climate Action Plan (${c.year})`,
		url: c.documentLink,
		source: c.organizations.split(/[;,\n]/)[0] || c.city,
		tags: ["city cap", c.city.toLowerCase()],
		description: c.vision?.replace(/;\s*$/, "") || `Official CAP document published by/for ${c.city}.`
	})), []), ...EXTRA_RESOURCES];
	const tags = [
		"all",
		"city cap",
		"framework",
		"methodology",
		"national",
		"policy",
		"research"
	];
	const filtered = all.filter((r) => (tag === "all" || r.tags.includes(tag)) && (query.trim() === "" || r.title.toLowerCase().includes(query.toLowerCase()) || r.source.toLowerCase().includes(query.toLowerCase()) || r.description.toLowerCase().includes(query.toLowerCase())));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-6 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-bold tracking-tight md:text-4xl",
				children: "CAP Resources"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-3xl text-muted-foreground",
				children: "A curated list of published CAP documents, methodologies, national policies and research references."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "search",
					value: query,
					onChange: (e) => setQuery(e.target.value),
					placeholder: "Search resources…",
					className: "w-64 rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setTag(t),
						className: `rounded-full border px-3 py-1 text-xs font-medium capitalize ${tag === t ? "bg-primary text-primary-foreground border-primary" : "bg-background text-muted-foreground hover:text-foreground"}`,
						children: t
					}, t))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: r.url,
					target: "_blank",
					rel: "noreferrer",
					className: "group rounded-lg border bg-card p-5 shadow-sm transition hover:border-primary hover:shadow-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-2 flex flex-wrap gap-1.5",
							children: r.tags.slice(0, 3).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground",
								children: t
							}, t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold group-hover:text-primary",
							children: r.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs text-muted-foreground",
							children: r.source
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 line-clamp-3 text-sm text-foreground/75",
							children: r.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-xs font-medium text-primary",
							children: "Open resource →"
						})
					]
				}, i))
			}),
			filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 rounded-lg border bg-muted/40 p-8 text-center text-sm text-muted-foreground",
				children: "No resources match your search."
			})
		]
	});
}
var $$splitComponentImporter$1 = () => import("./about-BgpJ4Sec.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — CAPMAP India" },
		{
			name: "description",
			content: "About CAPMAP India: what the platform does, how to use it, and how to contribute."
		},
		{
			property: "og:title",
			content: "About — CAPMAP India"
		},
		{
			property: "og:description",
			content: "What CAPMAP India is and how to use the map and dashboard."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-DEmIjS_q.mjs");
var Route = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var ResourcesRoute = Route$2.update({
	id: "/resources",
	path: "/resources",
	getParentRoute: () => Route$3
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$3
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	AboutRoute,
	ResourcesRoute
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient({ defaultOptions: { queries: { staleTime: 3e4 } } }) },
		defaultPreload: "intent",
		scrollRestoration: true
	});
}
//#endregion
export { getRouter };
