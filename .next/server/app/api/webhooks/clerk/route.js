/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/webhooks/clerk/route";
exports.ids = ["app/api/webhooks/clerk/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fwebhooks%2Fclerk%2Froute&page=%2Fapi%2Fwebhooks%2Fclerk%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwebhooks%2Fclerk%2Froute.ts&appDir=%2Fworkspaces%2Fcodespaces-blank%2Fcomplete-clerk%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fcodespaces-blank%2Fcomplete-clerk&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fwebhooks%2Fclerk%2Froute&page=%2Fapi%2Fwebhooks%2Fclerk%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwebhooks%2Fclerk%2Froute.ts&appDir=%2Fworkspaces%2Fcodespaces-blank%2Fcomplete-clerk%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fcodespaces-blank%2Fcomplete-clerk&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _workspaces_codespaces_blank_complete_clerk_app_api_webhooks_clerk_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/webhooks/clerk/route.ts */ \"(rsc)/./app/api/webhooks/clerk/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/webhooks/clerk/route\",\n        pathname: \"/api/webhooks/clerk\",\n        filename: \"route\",\n        bundlePath: \"app/api/webhooks/clerk/route\"\n    },\n    resolvedPagePath: \"/workspaces/codespaces-blank/complete-clerk/app/api/webhooks/clerk/route.ts\",\n    nextConfigOutput,\n    userland: _workspaces_codespaces_blank_complete_clerk_app_api_webhooks_clerk_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ3ZWJob29rcyUyRmNsZXJrJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ3ZWJob29rcyUyRmNsZXJrJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGd2ViaG9va3MlMkZjbGVyayUyRnJvdXRlLnRzJmFwcERpcj0lMkZ3b3Jrc3BhY2VzJTJGY29kZXNwYWNlcy1ibGFuayUyRmNvbXBsZXRlLWNsZXJrJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZ3b3Jrc3BhY2VzJTJGY29kZXNwYWNlcy1ibGFuayUyRmNvbXBsZXRlLWNsZXJrJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMyQjtBQUN4RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vP2YzMWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi93b3Jrc3BhY2VzL2NvZGVzcGFjZXMtYmxhbmsvY29tcGxldGUtY2xlcmsvYXBwL2FwaS93ZWJob29rcy9jbGVyay9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvd2ViaG9va3MvY2xlcmsvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS93ZWJob29rcy9jbGVya1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvd2ViaG9va3MvY2xlcmsvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvd29ya3NwYWNlcy9jb2Rlc3BhY2VzLWJsYW5rL2NvbXBsZXRlLWNsZXJrL2FwcC9hcGkvd2ViaG9va3MvY2xlcmsvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fwebhooks%2Fclerk%2Froute&page=%2Fapi%2Fwebhooks%2Fclerk%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwebhooks%2Fclerk%2Froute.ts&appDir=%2Fworkspaces%2Fcodespaces-blank%2Fcomplete-clerk%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fcodespaces-blank%2Fcomplete-clerk&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/webhooks/clerk/route.ts":
/*!*****************************************!*\
  !*** ./app/api/webhooks/clerk/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var svix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svix */ \"(rsc)/./node_modules/svix/dist/index.js\");\n/* harmony import */ var svix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svix__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n//code copied from official documentation of clerk \"https://clerk.com/docs/integrations/webhooks/sync-data#sync-clerk-data-to-your-application-with-webhooks\"\n//I could have created thsi wekhook in cloudflare workers to deploy it in serverless environment and attach a queue to handel db queries adn retry if it fails\n\n\n\nasync function POST(req) {\n    // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint\n    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;\n    if (!WEBHOOK_SECRET) {\n        throw new Error(\"Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local\");\n    }\n    // Get the headers\n    const headerPayload = await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.headers)();\n    const svix_id = headerPayload.get(\"svix-id\");\n    const svix_timestamp = headerPayload.get(\"svix-timestamp\");\n    const svix_signature = headerPayload.get(\"svix-signature\");\n    // If there are no headers, error out\n    if (!svix_id || !svix_timestamp || !svix_signature) {\n        return new Response(\"Error occured -- no svix headers\", {\n            status: 400\n        });\n    }\n    // Get the body\n    const payload = await req.json();\n    const body = JSON.stringify(payload);\n    // Create a new Svix instance with your secret.\n    const wh = new svix__WEBPACK_IMPORTED_MODULE_0__.Webhook(WEBHOOK_SECRET);\n    let evt;\n    // Verify the payload with the headers\n    try {\n        evt = wh.verify(body, {\n            \"svix-id\": svix_id,\n            \"svix-timestamp\": svix_timestamp,\n            \"svix-signature\": svix_signature\n        });\n    } catch (err) {\n        console.error(\"Error verifying webhook:\", err);\n        return new Response(\"Error occured\", {\n            status: 400\n        });\n    }\n    // Do something with the payload\n    const { id } = evt.data;\n    const eventType = evt.type;\n    console.log(`Webhook with and ID of ${id} and type of ${eventType}`);\n    switch(eventType){\n        case \"user.created\":\n            await _lib_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].$transaction([\n                _lib_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].user.create({\n                    data: {\n                        id: id || \"\",\n                        imageUrl: payload.data.profile_image_url || \"\"\n                    }\n                }),\n                _lib_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].email.create({\n                    data: {\n                        userId: id || \"\",\n                        email: payload.data.email_addresses[0].email_address,\n                        verification: payload.data.email_addresses[0].verification.status\n                    }\n                })\n            ]);\n            break;\n        case \"user.updated\":\n            console.log(\"User details have been updated.\");\n            break;\n        case \"user.deleted\":\n            console.log(\"A user has been deleted.\");\n            break;\n        default:\n            console.log(\"Unknown event type.\");\n            break;\n    }\n    console.log(\"Webhook body:\", body);\n    return new Response(\"\", {\n        status: 200\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3dlYmhvb2tzL2NsZXJrL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsNkpBQTZKO0FBQzdKLDhKQUE4SjtBQUMvSDtBQUNRO0FBRVQ7QUFFdkIsZUFBZUcsS0FBS0MsR0FBWTtJQUNyQyw4RUFBOEU7SUFDOUUsTUFBTUMsaUJBQWlCQyxRQUFRQyxHQUFHLENBQUNGLGNBQWM7SUFFakQsSUFBSSxDQUFDQSxnQkFBZ0I7UUFDbkIsTUFBTSxJQUFJRyxNQUNSO0lBRUo7SUFFQSxrQkFBa0I7SUFDbEIsTUFBTUMsZ0JBQWdCLE1BQU1SLHFEQUFPQTtJQUNuQyxNQUFNUyxVQUFVRCxjQUFjRSxHQUFHLENBQUM7SUFDbEMsTUFBTUMsaUJBQWlCSCxjQUFjRSxHQUFHLENBQUM7SUFDekMsTUFBTUUsaUJBQWlCSixjQUFjRSxHQUFHLENBQUM7SUFFekMscUNBQXFDO0lBQ3JDLElBQUksQ0FBQ0QsV0FBVyxDQUFDRSxrQkFBa0IsQ0FBQ0MsZ0JBQWdCO1FBQ2xELE9BQU8sSUFBSUMsU0FBUyxvQ0FBb0M7WUFDdERDLFFBQVE7UUFDVjtJQUNGO0lBRUEsZUFBZTtJQUNmLE1BQU1DLFVBQVUsTUFBTVosSUFBSWEsSUFBSTtJQUM5QixNQUFNQyxPQUFPQyxLQUFLQyxTQUFTLENBQUNKO0lBRTVCLCtDQUErQztJQUMvQyxNQUFNSyxLQUFLLElBQUlyQix5Q0FBT0EsQ0FBQ0s7SUFFdkIsSUFBSWlCO0lBRUosc0NBQXNDO0lBQ3RDLElBQUk7UUFDRkEsTUFBTUQsR0FBR0UsTUFBTSxDQUFDTCxNQUFNO1lBQ3BCLFdBQVdSO1lBQ1gsa0JBQWtCRTtZQUNsQixrQkFBa0JDO1FBQ3BCO0lBQ0YsRUFBRSxPQUFPVyxLQUFLO1FBQ1pDLFFBQVFDLEtBQUssQ0FBQyw0QkFBNEJGO1FBQzFDLE9BQU8sSUFBSVYsU0FBUyxpQkFBaUI7WUFDbkNDLFFBQVE7UUFDVjtJQUNGO0lBRUEsZ0NBQWdDO0lBQ2hDLE1BQU0sRUFBRVksRUFBRSxFQUFFLEdBQUdMLElBQUlNLElBQUk7SUFDdkIsTUFBTUMsWUFBWVAsSUFBSVEsSUFBSTtJQUMxQkwsUUFBUU0sR0FBRyxDQUFDLENBQUMsdUJBQXVCLEVBQUVKLEdBQUcsYUFBYSxFQUFFRSxXQUFXO0lBQ25FLE9BQVFBO1FBQ04sS0FBSztZQUNILE1BQU0zQiwrQ0FBTUEsQ0FBQzhCLFlBQVksQ0FBQztnQkFDeEI5QiwrQ0FBTUEsQ0FBQytCLElBQUksQ0FBQ0MsTUFBTSxDQUFDO29CQUNqQk4sTUFBTTt3QkFDSkQsSUFBSUEsTUFBTTt3QkFDVlEsVUFBVW5CLFFBQVFZLElBQUksQ0FBQ1EsaUJBQWlCLElBQUk7b0JBQzlDO2dCQUNGO2dCQUNBbEMsK0NBQU1BLENBQUNtQyxLQUFLLENBQUNILE1BQU0sQ0FBQztvQkFDbEJOLE1BQU07d0JBQ0pVLFFBQVFYLE1BQU07d0JBQ2RVLE9BQU9yQixRQUFRWSxJQUFJLENBQUNXLGVBQWUsQ0FBQyxFQUFFLENBQUNDLGFBQWE7d0JBQ3BEQyxjQUFjekIsUUFBUVksSUFBSSxDQUFDVyxlQUFlLENBQUMsRUFBRSxDQUFDRSxZQUFZLENBQUMxQixNQUFNO29CQUNuRTtnQkFDRjthQUNEO1lBQ0Q7UUFFRixLQUFLO1lBQ0hVLFFBQVFNLEdBQUcsQ0FBQztZQUNaO1FBRUYsS0FBSztZQUNITixRQUFRTSxHQUFHLENBQUM7WUFDWjtRQUVGO1lBQ0VOLFFBQVFNLEdBQUcsQ0FBQztZQUNaO0lBQ0o7SUFFQU4sUUFBUU0sR0FBRyxDQUFDLGlCQUFpQmI7SUFDN0IsT0FBTyxJQUFJSixTQUFTLElBQUk7UUFBRUMsUUFBUTtJQUFJO0FBQ3hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2FwaS93ZWJob29rcy9jbGVyay9yb3V0ZS50cz9kZTNlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vY29kZSBjb3BpZWQgZnJvbSBvZmZpY2lhbCBkb2N1bWVudGF0aW9uIG9mIGNsZXJrIFwiaHR0cHM6Ly9jbGVyay5jb20vZG9jcy9pbnRlZ3JhdGlvbnMvd2ViaG9va3Mvc3luYy1kYXRhI3N5bmMtY2xlcmstZGF0YS10by15b3VyLWFwcGxpY2F0aW9uLXdpdGgtd2ViaG9va3NcIlxuLy9JIGNvdWxkIGhhdmUgY3JlYXRlZCB0aHNpIHdla2hvb2sgaW4gY2xvdWRmbGFyZSB3b3JrZXJzIHRvIGRlcGxveSBpdCBpbiBzZXJ2ZXJsZXNzIGVudmlyb25tZW50IGFuZCBhdHRhY2ggYSBxdWV1ZSB0byBoYW5kZWwgZGIgcXVlcmllcyBhZG4gcmV0cnkgaWYgaXQgZmFpbHNcbmltcG9ydCB7IFdlYmhvb2sgfSBmcm9tIFwic3ZpeFwiO1xuaW1wb3J0IHsgaGVhZGVycyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcbmltcG9ydCB7IFdlYmhvb2tFdmVudCB9IGZyb20gXCJAY2xlcmsvbmV4dGpzL3NlcnZlclwiO1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvZGJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIC8vIFlvdSBjYW4gZmluZCB0aGlzIGluIHRoZSBDbGVyayBEYXNoYm9hcmQgLT4gV2ViaG9va3MgLT4gY2hvb3NlIHRoZSBlbmRwb2ludFxuICBjb25zdCBXRUJIT09LX1NFQ1JFVCA9IHByb2Nlc3MuZW52LldFQkhPT0tfU0VDUkVUO1xuXG4gIGlmICghV0VCSE9PS19TRUNSRVQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIlBsZWFzZSBhZGQgV0VCSE9PS19TRUNSRVQgZnJvbSBDbGVyayBEYXNoYm9hcmQgdG8gLmVudiBvciAuZW52LmxvY2FsXCJcbiAgICApO1xuICB9XG5cbiAgLy8gR2V0IHRoZSBoZWFkZXJzXG4gIGNvbnN0IGhlYWRlclBheWxvYWQgPSBhd2FpdCBoZWFkZXJzKCk7XG4gIGNvbnN0IHN2aXhfaWQgPSBoZWFkZXJQYXlsb2FkLmdldChcInN2aXgtaWRcIik7XG4gIGNvbnN0IHN2aXhfdGltZXN0YW1wID0gaGVhZGVyUGF5bG9hZC5nZXQoXCJzdml4LXRpbWVzdGFtcFwiKTtcbiAgY29uc3Qgc3ZpeF9zaWduYXR1cmUgPSBoZWFkZXJQYXlsb2FkLmdldChcInN2aXgtc2lnbmF0dXJlXCIpO1xuXG4gIC8vIElmIHRoZXJlIGFyZSBubyBoZWFkZXJzLCBlcnJvciBvdXRcbiAgaWYgKCFzdml4X2lkIHx8ICFzdml4X3RpbWVzdGFtcCB8fCAhc3ZpeF9zaWduYXR1cmUpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiRXJyb3Igb2NjdXJlZCAtLSBubyBzdml4IGhlYWRlcnNcIiwge1xuICAgICAgc3RhdHVzOiA0MDAsXG4gICAgfSk7XG4gIH1cblxuICAvLyBHZXQgdGhlIGJvZHlcbiAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHJlcS5qc29uKCk7XG4gIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShwYXlsb2FkKTtcblxuICAvLyBDcmVhdGUgYSBuZXcgU3ZpeCBpbnN0YW5jZSB3aXRoIHlvdXIgc2VjcmV0LlxuICBjb25zdCB3aCA9IG5ldyBXZWJob29rKFdFQkhPT0tfU0VDUkVUKTtcblxuICBsZXQgZXZ0OiBXZWJob29rRXZlbnQ7XG5cbiAgLy8gVmVyaWZ5IHRoZSBwYXlsb2FkIHdpdGggdGhlIGhlYWRlcnNcbiAgdHJ5IHtcbiAgICBldnQgPSB3aC52ZXJpZnkoYm9keSwge1xuICAgICAgXCJzdml4LWlkXCI6IHN2aXhfaWQsXG4gICAgICBcInN2aXgtdGltZXN0YW1wXCI6IHN2aXhfdGltZXN0YW1wLFxuICAgICAgXCJzdml4LXNpZ25hdHVyZVwiOiBzdml4X3NpZ25hdHVyZSxcbiAgICB9KSBhcyBXZWJob29rRXZlbnQ7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB2ZXJpZnlpbmcgd2ViaG9vazpcIiwgZXJyKTtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiRXJyb3Igb2NjdXJlZFwiLCB7XG4gICAgICBzdGF0dXM6IDQwMCxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIERvIHNvbWV0aGluZyB3aXRoIHRoZSBwYXlsb2FkXG4gIGNvbnN0IHsgaWQgfSA9IGV2dC5kYXRhO1xuICBjb25zdCBldmVudFR5cGUgPSBldnQudHlwZTtcbiAgY29uc29sZS5sb2coYFdlYmhvb2sgd2l0aCBhbmQgSUQgb2YgJHtpZH0gYW5kIHR5cGUgb2YgJHtldmVudFR5cGV9YCk7XG4gIHN3aXRjaCAoZXZlbnRUeXBlKSB7XG4gICAgY2FzZSBcInVzZXIuY3JlYXRlZFwiOlxuICAgICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihbXG4gICAgICAgIHByaXNtYS51c2VyLmNyZWF0ZSh7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgaWQ6IGlkIHx8IFwiXCIsXG4gICAgICAgICAgICBpbWFnZVVybDogcGF5bG9hZC5kYXRhLnByb2ZpbGVfaW1hZ2VfdXJsIHx8IFwiXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHByaXNtYS5lbWFpbC5jcmVhdGUoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHVzZXJJZDogaWQgfHwgXCJcIixcbiAgICAgICAgICAgIGVtYWlsOiBwYXlsb2FkLmRhdGEuZW1haWxfYWRkcmVzc2VzWzBdLmVtYWlsX2FkZHJlc3MsXG4gICAgICAgICAgICB2ZXJpZmljYXRpb246IHBheWxvYWQuZGF0YS5lbWFpbF9hZGRyZXNzZXNbMF0udmVyaWZpY2F0aW9uLnN0YXR1cyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIF0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwidXNlci51cGRhdGVkXCI6XG4gICAgICBjb25zb2xlLmxvZyhcIlVzZXIgZGV0YWlscyBoYXZlIGJlZW4gdXBkYXRlZC5cIik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJ1c2VyLmRlbGV0ZWRcIjpcbiAgICAgIGNvbnNvbGUubG9nKFwiQSB1c2VyIGhhcyBiZWVuIGRlbGV0ZWQuXCIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5sb2coXCJVbmtub3duIGV2ZW50IHR5cGUuXCIpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBjb25zb2xlLmxvZyhcIldlYmhvb2sgYm9keTpcIiwgYm9keSk7XG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCJcIiwgeyBzdGF0dXM6IDIwMCB9KTtcbn1cbiJdLCJuYW1lcyI6WyJXZWJob29rIiwiaGVhZGVycyIsInByaXNtYSIsIlBPU1QiLCJyZXEiLCJXRUJIT09LX1NFQ1JFVCIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImhlYWRlclBheWxvYWQiLCJzdml4X2lkIiwiZ2V0Iiwic3ZpeF90aW1lc3RhbXAiLCJzdml4X3NpZ25hdHVyZSIsIlJlc3BvbnNlIiwic3RhdHVzIiwicGF5bG9hZCIsImpzb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIndoIiwiZXZ0IiwidmVyaWZ5IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiaWQiLCJkYXRhIiwiZXZlbnRUeXBlIiwidHlwZSIsImxvZyIsIiR0cmFuc2FjdGlvbiIsInVzZXIiLCJjcmVhdGUiLCJpbWFnZVVybCIsInByb2ZpbGVfaW1hZ2VfdXJsIiwiZW1haWwiLCJ1c2VySWQiLCJlbWFpbF9hZGRyZXNzZXMiLCJlbWFpbF9hZGRyZXNzIiwidmVyaWZpY2F0aW9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/webhooks/clerk/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst prisma = globalThis.prismaGlobal ?? prismaClientSingleton();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\nif (true) globalThis.prismaGlobal = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBRTdDLE1BQU1DLHdCQUF3QjtJQUM1QixPQUFPLElBQUlELHdEQUFZQTtBQUN6QjtBQU1BLE1BQU1FLFNBQVNDLFdBQVdDLFlBQVksSUFBSUg7QUFFMUMsaUVBQWVDLE1BQU1BLEVBQUE7QUFFckIsSUFBSUcsSUFBcUMsRUFBRUYsV0FBV0MsWUFBWSxHQUFHRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9kYi50cz8xZGYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5jb25zdCBwcmlzbWFDbGllbnRTaW5nbGV0b24gPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJpc21hQ2xpZW50KClcbn1cblxuZGVjbGFyZSBjb25zdCBnbG9iYWxUaGlzOiB7XG4gIHByaXNtYUdsb2JhbDogUmV0dXJuVHlwZTx0eXBlb2YgcHJpc21hQ2xpZW50U2luZ2xldG9uPjtcbn0gJiB0eXBlb2YgZ2xvYmFsO1xuXG5jb25zdCBwcmlzbWEgPSBnbG9iYWxUaGlzLnByaXNtYUdsb2JhbCA/PyBwcmlzbWFDbGllbnRTaW5nbGV0b24oKVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWFcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbFRoaXMucHJpc21hR2xvYmFsID0gcHJpc21hIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYUNsaWVudFNpbmdsZXRvbiIsInByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWFHbG9iYWwiLCJwcm9jZXNzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/svix","vendor-chunks/whatwg-url","vendor-chunks/tr46","vendor-chunks/node-fetch","vendor-chunks/webidl-conversions","vendor-chunks/url-parse","vendor-chunks/svix-fetch","vendor-chunks/requires-port","vendor-chunks/querystringify","vendor-chunks/fast-sha256","vendor-chunks/@stablelib"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fwebhooks%2Fclerk%2Froute&page=%2Fapi%2Fwebhooks%2Fclerk%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwebhooks%2Fclerk%2Froute.ts&appDir=%2Fworkspaces%2Fcodespaces-blank%2Fcomplete-clerk%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fcodespaces-blank%2Fcomplete-clerk&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();