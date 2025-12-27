module.exports = [
"[project]/ai_tutor_lite/frontend/app/favicon.ico.mjs { IMAGE => \"[project]/ai_tutor_lite/frontend/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/ai_tutor_lite/frontend/app/favicon.ico.mjs { IMAGE => \"[project]/ai_tutor_lite/frontend/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/ai_tutor_lite/frontend/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/ai_tutor_lite/frontend/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/ai_tutor_lite/frontend/app/chat/components/SendReqComponent.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SendReqComponent
]);
const url = 'http://localhost:8000/query';
async function SendReqComponent(message = "hi") {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            message: message
        })
    });
}
}),
"[project]/ai_tutor_lite/frontend/app/chat/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai_tutor_lite$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai_tutor_lite/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai_tutor_lite$2f$frontend$2f$app$2f$chat$2f$components$2f$SendReqComponent$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai_tutor_lite/frontend/app/chat/components/SendReqComponent.tsx [app-rsc] (ecmascript)");
;
;
const url = "http://localhost:8000/query";
function ChatPage() {
    async function submitHandler(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const query = formData.get("query") || "hi";
        console.log(query);
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai_tutor_lite$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai_tutor_lite$2f$frontend$2f$app$2f$chat$2f$components$2f$SendReqComponent$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            query: query
        }, void 0, false, {
            fileName: "[project]/ai_tutor_lite/frontend/app/chat/page.tsx",
            lineNumber: 13,
            columnNumber: 5
        }, this);
    // const response = await fetch (url,{ 
    //     method: "POST", 
    //     headers: {"Content-Type": "application/json"}, 
    //     body: JSON.stringify(query)
    // })
    // console.log (response)
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai_tutor_lite$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            "Chat Interace here.",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai_tutor_lite$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: submitHandler,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai_tutor_lite$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 m-5 bg rounded-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai_tutor_lite$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "query",
                            placeholder: "Text here",
                            className: " border border-blue-400"
                        }, void 0, false, {
                            fileName: "[project]/ai_tutor_lite/frontend/app/chat/page.tsx",
                            lineNumber: 28,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai_tutor_lite$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "text-blue-300",
                            children: " Ask "
                        }, void 0, false, {
                            fileName: "[project]/ai_tutor_lite/frontend/app/chat/page.tsx",
                            lineNumber: 29,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ai_tutor_lite/frontend/app/chat/page.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/ai_tutor_lite/frontend/app/chat/page.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ai_tutor_lite/frontend/app/chat/page.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
}),
"[project]/ai_tutor_lite/frontend/app/chat/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/ai_tutor_lite/frontend/app/chat/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3de33be2._.js.map