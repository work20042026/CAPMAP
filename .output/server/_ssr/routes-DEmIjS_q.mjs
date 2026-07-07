import { n as __toESM } from "../_runtime.mjs";
import { f as require_react } from "../_libs/@react-leaflet/core+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as splitBullets, i as parseSectorGroups, n as caps, o as splitList, r as parseRiskFindings, s as splitNumbered, t as GEO_LABEL } from "./caps-CDgpBIl-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DEmIjS_q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SECTOR_COLORS = [
	"var(--geo-city)",
	"var(--geo-ward)",
	"var(--geo-village)",
	"var(--geo-state)",
	"var(--geo-town)",
	"oklch(0.6 0.2 30)",
	"oklch(0.55 0.15 170)",
	"oklch(0.45 0.2 330)",
	"oklch(0.65 0.15 100)"
];
function GeoBadge({ type }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium text-white",
		style: { backgroundColor: `var(--geo-${type})` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-white/90" }), GEO_LABEL[type]]
	});
}
function DonutChart({ segments }) {
	if (segments.length === 0) return null;
	const total = segments.reduce((s, x) => s + x.pct, 0) || 100;
	let offset = 0;
	const R = 60;
	const C = 2 * Math.PI * R;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 160 160",
			className: "h-40 w-40 -rotate-90",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "80",
				cy: "80",
				r: R,
				fill: "none",
				stroke: "var(--muted)",
				strokeWidth: "22"
			}), segments.map((s, i) => {
				const dash = s.pct / total * C;
				const el = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "80",
					cy: "80",
					r: R,
					fill: "none",
					stroke: SECTOR_COLORS[i % SECTOR_COLORS.length],
					strokeWidth: "22",
					strokeDasharray: `${dash} ${C - dash}`,
					strokeDashoffset: -offset
				}, i);
				offset += dash;
				return el;
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex-1 space-y-1.5 text-xs",
			children: segments.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-2.5 w-2.5 rounded-sm",
						style: { backgroundColor: SECTOR_COLORS[i % SECTOR_COLORS.length] }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground/80",
						children: s.label
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-foreground/60",
					children: [s.pct, "%"]
				})]
			}, i))
		})]
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border-t px-6 py-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
			children: title
		}), children]
	});
}
function CapDetailPanel({ entry }) {
	const [tab, setTab] = (0, import_react.useState)("overview");
	if (!entry) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col items-center justify-center p-10 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 text-5xl",
				children: "🗺️"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-semibold",
				children: "Select a location on the map"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-sm text-sm text-muted-foreground",
				children: "Click any pin to view the city's Climate Action Plan: emissions baseline, climate risks, and sectoral strategies."
			})
		]
	});
	const sectorGroups = parseSectorGroups(entry.sectorContribution);
	const risks = splitList(entry.climateRisks);
	const riskSections = parseRiskFindings(entry.riskFindings, risks);
	const orgs = splitList(entry.organizations);
	const goals = splitList(entry.goals);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-6 pt-6 pb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GeoBadge, { type: entry.type }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground",
								children: ["CAP · Published ", entry.year]
							}),
							entry.iterations && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground",
								children: ["· Iteration ", entry.iterations]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold tracking-tight",
						children: entry.city
					}),
					entry.vision && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm italic text-foreground/70",
						children: [
							"\"",
							entry.vision.replace(/;\s*$/, ""),
							"\""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: entry.documentLink && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: entry.documentLink,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90",
							children: "View full CAP document ↗"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b bg-muted/40 px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex gap-1 text-xs font-medium",
					children: [
						"overview",
						"emissions",
						"risks",
						"strategies"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setTab(t),
						className: `relative px-3 py-2.5 capitalize transition ${tab === t ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
						children: [t, tab === t && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-2 -bottom-px h-0.5 bg-primary" })]
					}, t))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 overflow-y-auto",
				children: [
					tab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Publication details",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: "Geographic unit"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold",
										children: GEO_LABEL[entry.type]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: "Year published"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold",
										children: entry.year || "—"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: "Iteration"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold",
										children: entry.iterations || "—"
									})] })
								]
							})
						}),
						entry.vision && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Vision",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "whitespace-pre-line text-sm leading-relaxed text-foreground/80",
								children: entry.vision.replace(/;\s*$/, "")
							})
						}),
						goals.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Goals",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-1.5 text-sm",
								children: goals.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "whitespace-pre-line",
										children: g
									})]
								}, i))
							})
						}),
						orgs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Organizations involved",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: orgs.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md border bg-card px-2.5 py-1 text-xs",
									children: o
								}, i))
							})
						}),
						entry.documentLink && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "CAP document",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: entry.documentLink,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline break-all",
								children: [entry.documentLink, " ↗"]
							})
						})
					] }),
					tab === "emissions" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Baseline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: "Base year"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold",
										children: entry.baseYear || "—"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: "Per capita"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold",
										children: entry.perCapita || "—"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: "Total emissions"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold",
											children: entry.totalEmissions || "—"
										})]
									})
								]
							})
						}),
						sectorGroups.length > 0 && sectorGroups.map((g, gi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: g.title ? `Sector contribution — ${g.title}` : "Sector contribution",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DonutChart, { segments: g.segments })
						}, gi)),
						sectorGroups.length === 0 && entry.sectorContribution && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Sector contribution",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "whitespace-pre-line text-sm text-foreground/80",
								children: entry.sectorContribution
							})
						})
					] }),
					tab === "risks" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [risks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Identified climate risks",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: risks.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-destructive/30 bg-destructive/10 px-3 py-1 text-xs font-medium text-destructive",
								children: ["⚠ ", r]
							}, i))
						})
					}), riskSections.length > 0 && riskSections.some((s) => s.body) ? riskSections.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: s.name ? `Risk assessment — ${s.name}` : "Risk assessment findings",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "whitespace-pre-line text-sm leading-relaxed text-foreground/80",
							children: s.body
						})
					}, i)) : entry.riskFindings ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Risk assessment findings",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "whitespace-pre-line text-sm leading-relaxed text-foreground/80",
							children: entry.riskFindings
						})
					}) : null] }),
					tab === "strategies" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: entry.strategies.map((s, i) => {
						const sectors = splitNumbered(s.sector);
						const strategies = splitNumbered(s.strategy);
						const actions = splitNumbered(s.action);
						const interventions = splitNumbered(s.intervention);
						const maxLen = Math.max(sectors.length, strategies.length, actions.length, interventions.length);
						const rows = Array.from({ length: maxLen }, (_, idx) => ({
							sector: sectors[idx] || "",
							strategy: strategies[idx] || "",
							action: actions[idx] || "",
							intervention: interventions[idx] || ""
						}));
						const hasStructuredRows = maxLen > 1;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t",
							children: [
								entry.strategies.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-muted/40 px-6 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
									children: ["Strategy set ", i + 1]
								}),
								hasStructuredRows ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "divide-y",
									children: rows.map((r, ri) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
										className: "group px-6 py-4",
										open: ri === 0,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
											className: "flex cursor-pointer items-start justify-between gap-3 list-none",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
												children: ["Sector ", ri + 1]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 whitespace-pre-line text-sm font-semibold",
												children: r.sector.replace(/^\d+[).]\s*/, "") || "—"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 text-muted-foreground transition group-open:rotate-180",
												children: "▾"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 space-y-3 text-sm",
											children: [
												r.strategy && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
													children: "Strategy"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "whitespace-pre-line text-foreground/80",
													children: r.strategy.replace(/^\d+[).]\s*/, "")
												})] }),
												r.action && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
													children: "Actions / Targets"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
													className: "space-y-1",
													children: splitBullets(r.action.replace(/^\d+[).]\s*/, "")).map((a, ai) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "flex gap-2 text-foreground/80",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a })]
													}, ai))
												})] }),
												r.intervention && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
													children: "Interventions"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
													className: "space-y-1",
													children: splitBullets(r.intervention.replace(/^\d+[).]\s*/, "")).map((a, ai) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "flex gap-2 text-foreground/80",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-foreground/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a })]
													}, ai))
												})] })
											]
										})]
									}, ri))
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3 px-6 py-4 text-sm",
									children: [
										s.sector && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
											children: "Sector"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "whitespace-pre-line font-semibold",
											children: s.sector
										})] }),
										s.strategy && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
											children: "Strategy"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "whitespace-pre-line text-foreground/80",
											children: s.strategy
										})] }),
										s.action && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
											children: "Actions / Targets"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "space-y-1",
											children: splitBullets(s.action).map((a, ai) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex gap-2 text-foreground/80",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a })]
											}, ai))
										})] }),
										s.intervention && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
											children: "Interventions"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "space-y-1",
											children: splitBullets(s.intervention).map((a, ai) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex gap-2 text-foreground/80",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-foreground/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a })]
											}, ai))
										})] })
									]
								}),
								s.info && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t bg-muted/30 px-6 py-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
										children: "Additional information & co-benefits"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "whitespace-pre-line text-sm text-foreground/70",
										children: s.info
									})]
								})
							]
						}, i);
					}) })
				]
			})
		]
	});
}
var CapMap = (0, import_react.lazy)(() => import("./CapMap-Bnibwpsz.mjs").then((m) => ({ default: m.CapMap })));
var GEO_TYPES = [
	"state",
	"city",
	"town",
	"ward",
	"village"
];
function Home() {
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [query, setQuery] = (0, import_react.useState)("");
	const [activeTypes, setActiveTypes] = (0, import_react.useState)(new Set(GEO_TYPES));
	const filtered = (0, import_react.useMemo)(() => caps.filter((c) => activeTypes.has(c.type) && (query.trim() === "" || c.city.toLowerCase().includes(query.trim().toLowerCase()))), [query, activeTypes]);
	const toggle = (t) => setActiveTypes((prev) => {
		const n = new Set(prev);
		if (n.has(t)) n.delete(t);
		else n.add(t);
		return n;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 pt-8 pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-bold tracking-tight md:text-4xl",
				children: "Published Climate Action Plan Documents"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-3xl text-sm text-muted-foreground md:text-base",
				children: "Explore India's Climate Action Plans across states, cities, towns, wards and villages. Click a pin to view the CAP overview, emissions baseline, climate risk assessment and sectoral strategy — all on one page."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-y bg-muted/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-6 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "search",
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search cities…",
						className: "w-56 rounded-md border bg-background px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-ring"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-center gap-1.5",
						children: GEO_TYPES.map((t) => {
							const on = activeTypes.has(t);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => toggle(t),
								className: `inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition ${on ? "text-white border-transparent" : "bg-background text-muted-foreground hover:text-foreground"}`,
								style: on ? { backgroundColor: `var(--geo-${t})` } : void 0,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-2 w-2 rounded-full",
									style: { backgroundColor: on ? "white" : `var(--geo-${t})` }
								}), GEO_LABEL[t]]
							}, t);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto text-xs text-muted-foreground",
						children: [
							filtered.length,
							" CAP",
							filtered.length === 1 ? "" : "s",
							" on map"
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-1 gap-0 px-6 py-6 lg:grid-cols-[1.15fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative h-[520px] overflow-hidden rounded-lg border shadow-sm lg:h-[720px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-full items-center justify-center text-sm text-muted-foreground",
						children: "Loading map…"
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapMap, {
						entries: filtered,
						selected,
						onSelect: setSelected
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 h-[720px] overflow-hidden rounded-lg border bg-card shadow-sm lg:mt-0 lg:ml-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapDetailPanel, { entry: selected })
			})]
		})
	] });
}
//#endregion
export { Home as component };
