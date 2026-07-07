import { n as __toESM } from "../_runtime.mjs";
import { f as require_react } from "../_libs/@react-leaflet/core+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_leaflet_src } from "../_libs/leaflet.mjs";
import { a as useMap, i as MapContainer, n as Popup, r as Marker, t as TileLayer } from "../_libs/react-leaflet.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CapMap-Bnibwpsz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_leaflet_src = /* @__PURE__ */ __toESM(require_leaflet_src());
var iconCache = {};
function pinIcon(type) {
	if (!iconCache[type]) iconCache[type] = import_leaflet_src.default.divIcon({
		className: "",
		html: `<div class="cap-pin cap-pin-${type}"></div>`,
		iconSize: [22, 22],
		iconAnchor: [11, 11]
	});
	return iconCache[type];
}
function FlyTo({ entry }) {
	const map = useMap();
	(0, import_react.useEffect)(() => {
		if (entry) map.flyTo([entry.lat, entry.lng], 6, { duration: .8 });
	}, [entry, map]);
	return null;
}
function CapMap({ entries, selected, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MapContainer, {
		center: (0, import_react.useMemo)(() => [22.5, 80], []),
		zoom: 5,
		minZoom: 4,
		scrollWheelZoom: true,
		className: "h-full w-full",
		style: {
			height: "100%",
			width: "100%"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TileLayer, {
				attribution: "© <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors © <a href=\"https://carto.com/\">CARTO</a>",
				url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
			}),
			entries.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marker, {
				position: [e.lat, e.lng],
				icon: pinIcon(e.type),
				eventHandlers: { click: () => onSelect(e) },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popup, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold",
							children: e.city
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "capitalize text-xs opacity-70",
							children: e.type
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onSelect(e),
							className: "mt-2 text-xs font-medium text-primary underline",
							children: "View CAP details"
						})
					]
				}) })
			}, e.city)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlyTo, { entry: selected })
		]
	});
}
//#endregion
export { CapMap };
