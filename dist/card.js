/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $def2de46b9306e8a$var$t = globalThis, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$o = new WeakMap;
class $def2de46b9306e8a$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $def2de46b9306e8a$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $def2de46b9306e8a$export$505d1e8739bad805(o, t, $def2de46b9306e8a$var$s);
}, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($def2de46b9306e8a$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $def2de46b9306e8a$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $19fe8e3abedf4df0$var$i, defineProperty: $19fe8e3abedf4df0$var$e, getOwnPropertyDescriptor: $19fe8e3abedf4df0$var$r, getOwnPropertyNames: $19fe8e3abedf4df0$var$h, getOwnPropertySymbols: $19fe8e3abedf4df0$var$o, getPrototypeOf: $19fe8e3abedf4df0$var$n } = Object, $19fe8e3abedf4df0$var$a = globalThis, $19fe8e3abedf4df0$var$c = $19fe8e3abedf4df0$var$a.trustedTypes, $19fe8e3abedf4df0$var$l = $19fe8e3abedf4df0$var$c ? $19fe8e3abedf4df0$var$c.emptyScript : "", $19fe8e3abedf4df0$var$p = $19fe8e3abedf4df0$var$a.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$var$d = (t, s)=>t, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $19fe8e3abedf4df0$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, s)=>!$19fe8e3abedf4df0$var$i(t, s), $19fe8e3abedf4df0$var$y = {
    attribute: !0,
    type: String,
    converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $19fe8e3abedf4df0$var$a.litPropertyMetadata ??= new WeakMap;
class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $19fe8e3abedf4df0$var$y) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), r = this.getPropertyDescriptor(t, i, s);
            void 0 !== r && $19fe8e3abedf4df0$var$e(this.prototype, t, r);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: h } = $19fe8e3abedf4df0$var$r(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get () {
                return e?.call(this);
            },
            set (s) {
                const r = e?.call(this);
                h.call(this, s), this.requestUpdate(t, r, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $19fe8e3abedf4df0$var$y;
    }
    static _$Ei() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("elementProperties"))) return;
        const t = $19fe8e3abedf4df0$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($19fe8e3abedf4df0$var$d("properties"))) {
            const t = this.properties, s = [
                ...$19fe8e3abedf4df0$var$h(t),
                ...$19fe8e3abedf4df0$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $def2de46b9306e8a$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$EC(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const r = (void 0 !== i.converter?.toAttribute ? i.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == r ? this.removeAttribute(e) : this.setAttribute(e, r), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), r = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
            this._$Em = e, this[e] = r.fromAttribute(s, t.type), this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? $19fe8e3abedf4df0$export$53a6892c50694894)(this[t], s)) return;
            this.P(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t, s, i) {
        this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this._$Em !== t && (this._$Ej ??= new Set).add(t);
    }
    async _$ET() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t)!0 !== i.wrapped || this._$AL.has(s) || void 0 === this[s] || this.P(s, this[s], i);
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EU();
        } catch (s) {
            throw t = !1, this._$EU(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EU() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Ej &&= this._$Ej.forEach((t)=>this._$EC(t, this[t])), this._$EU();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("elementProperties")] = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("finalized")] = new Map, $19fe8e3abedf4df0$var$p?.({
    ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
}), ($19fe8e3abedf4df0$var$a.reactiveElementVersions ??= []).push("2.0.4");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f58f44579a4747ac$var$t = globalThis, $f58f44579a4747ac$var$i = $f58f44579a4747ac$var$t.trustedTypes, $f58f44579a4747ac$var$s = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f58f44579a4747ac$var$e = "$lit$", $f58f44579a4747ac$var$h = `lit$${Math.random().toFixed(9).slice(2)}$`, $f58f44579a4747ac$var$o = "?" + $f58f44579a4747ac$var$h, $f58f44579a4747ac$var$n = `<${$f58f44579a4747ac$var$o}>`, $f58f44579a4747ac$var$r = document, $f58f44579a4747ac$var$l = ()=>$f58f44579a4747ac$var$r.createComment(""), $f58f44579a4747ac$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$a = Array.isArray, $f58f44579a4747ac$var$u = (t)=>$f58f44579a4747ac$var$a(t) || "function" == typeof t?.[Symbol.iterator], $f58f44579a4747ac$var$d = "[ \t\n\f\r]", $f58f44579a4747ac$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$v = /-->/g, $f58f44579a4747ac$var$_ = />/g, $f58f44579a4747ac$var$m = RegExp(`>|${$f58f44579a4747ac$var$d}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$d}*=${$f58f44579a4747ac$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$p = /'/g, $f58f44579a4747ac$var$g = /"/g, $f58f44579a4747ac$var$$ = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$y(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$y(2), $f58f44579a4747ac$export$47d5b44d225be5b4 = $f58f44579a4747ac$var$y(3), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$A = new WeakMap, $f58f44579a4747ac$var$C = $f58f44579a4747ac$var$r.createTreeWalker($f58f44579a4747ac$var$r, 129);
function $f58f44579a4747ac$var$P(t, i) {
    if (!$f58f44579a4747ac$var$a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.createHTML(i) : i;
}
const $f58f44579a4747ac$var$V = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = $f58f44579a4747ac$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $f58f44579a4747ac$var$f ? "!--" === u[1] ? c = $f58f44579a4747ac$var$v : void 0 !== u[1] ? c = $f58f44579a4747ac$var$_ : void 0 !== u[2] ? ($f58f44579a4747ac$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $f58f44579a4747ac$var$m) : void 0 !== u[3] && (c = $f58f44579a4747ac$var$m) : c === $f58f44579a4747ac$var$m ? ">" === u[0] ? (c = r ?? $f58f44579a4747ac$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $f58f44579a4747ac$var$m : '"' === u[3] ? $f58f44579a4747ac$var$g : $f58f44579a4747ac$var$p) : c === $f58f44579a4747ac$var$g || c === $f58f44579a4747ac$var$p ? c = $f58f44579a4747ac$var$m : c === $f58f44579a4747ac$var$v || c === $f58f44579a4747ac$var$_ ? c = $f58f44579a4747ac$var$f : (c = $f58f44579a4747ac$var$m, r = void 0);
        const x = c === $f58f44579a4747ac$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $f58f44579a4747ac$var$f ? s + $f58f44579a4747ac$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $f58f44579a4747ac$var$e + s.slice(d) + $f58f44579a4747ac$var$h + x) : s + $f58f44579a4747ac$var$h + (-2 === d ? i : x);
    }
    return [
        $f58f44579a4747ac$var$P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
class $f58f44579a4747ac$var$N {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $f58f44579a4747ac$var$V(t, s);
        if (this.el = $f58f44579a4747ac$var$N.createElement(f, n), $f58f44579a4747ac$var$C.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $f58f44579a4747ac$var$C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($f58f44579a4747ac$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($f58f44579a4747ac$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $f58f44579a4747ac$var$H : "?" === e[1] ? $f58f44579a4747ac$var$I : "@" === e[1] ? $f58f44579a4747ac$var$L : $f58f44579a4747ac$var$k
                    }), r.removeAttribute(t);
                } else t.startsWith($f58f44579a4747ac$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($f58f44579a4747ac$var$$.test(r.tagName)) {
                    const t = r.textContent.split($f58f44579a4747ac$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $f58f44579a4747ac$var$l()), $f58f44579a4747ac$var$C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $f58f44579a4747ac$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $f58f44579a4747ac$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($f58f44579a4747ac$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $f58f44579a4747ac$var$h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = $f58f44579a4747ac$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f58f44579a4747ac$var$S(t, i, s = t, e) {
    if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $f58f44579a4747ac$var$c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $f58f44579a4747ac$var$S(t, h._$AS(t, i.values), h, e)), i;
}
class $f58f44579a4747ac$var$M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $f58f44579a4747ac$var$r).importNode(i, !0);
        $f58f44579a4747ac$var$C.currentNode = e;
        let h = $f58f44579a4747ac$var$C.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $f58f44579a4747ac$var$R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $f58f44579a4747ac$var$z(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = $f58f44579a4747ac$var$C.nextNode(), o++);
        }
        return $f58f44579a4747ac$var$C.currentNode = $f58f44579a4747ac$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f58f44579a4747ac$var$R {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $f58f44579a4747ac$var$S(this, t, i), $f58f44579a4747ac$var$c(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $f58f44579a4747ac$var$u(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.T($f58f44579a4747ac$var$r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $f58f44579a4747ac$var$N.createElement($f58f44579a4747ac$var$P(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $f58f44579a4747ac$var$M(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f58f44579a4747ac$var$A.get(t.strings);
        return void 0 === i && $f58f44579a4747ac$var$A.set(t.strings, i = new $f58f44579a4747ac$var$N(t)), i;
    }
    k(t) {
        $f58f44579a4747ac$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$R(this.O($f58f44579a4747ac$var$l()), this.O($f58f44579a4747ac$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $f58f44579a4747ac$var$k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $f58f44579a4747ac$var$S(this, t, i, 0), o = !$f58f44579a4747ac$var$c(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $f58f44579a4747ac$var$S(this, e[s + n], i, n), r === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$f58f44579a4747ac$var$c(r) || r !== this._$AH[n], r === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $f58f44579a4747ac$var$H extends $f58f44579a4747ac$var$k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $f58f44579a4747ac$var$I extends $f58f44579a4747ac$var$k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $f58f44579a4747ac$export$45b790e32b2810ee);
    }
}
class $f58f44579a4747ac$var$L extends $f58f44579a4747ac$var$k {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $f58f44579a4747ac$var$S(this, t, i, 0) ?? $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $f58f44579a4747ac$export$45b790e32b2810ee && s !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (s === $f58f44579a4747ac$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f58f44579a4747ac$var$z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f58f44579a4747ac$var$S(this, t);
    }
}
const $f58f44579a4747ac$export$8613d1ca9052b22e = {
    M: $f58f44579a4747ac$var$e,
    P: $f58f44579a4747ac$var$h,
    A: $f58f44579a4747ac$var$o,
    C: 1,
    L: $f58f44579a4747ac$var$V,
    R: $f58f44579a4747ac$var$M,
    D: $f58f44579a4747ac$var$u,
    V: $f58f44579a4747ac$var$S,
    I: $f58f44579a4747ac$var$R,
    H: $f58f44579a4747ac$var$k,
    N: $f58f44579a4747ac$var$I,
    U: $f58f44579a4747ac$var$L,
    B: $f58f44579a4747ac$var$H,
    F: $f58f44579a4747ac$var$z
}, $f58f44579a4747ac$var$j = $f58f44579a4747ac$var$t.litHtmlPolyfillSupport;
$f58f44579a4747ac$var$j?.($f58f44579a4747ac$var$N, $f58f44579a4747ac$var$R), ($f58f44579a4747ac$var$t.litHtmlVersions ??= []).push("3.2.1");
const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $f58f44579a4747ac$var$R(i.insertBefore($f58f44579a4747ac$var$l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $19fe8e3abedf4df0$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const s = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $f58f44579a4747ac$export$b3890eb0ae9dca99)(s, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157["finalized"] = !0, globalThis.litElementHydrateSupport?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$i = globalThis.litElementPolyfillSupport;
$ab210b2da7b39b9d$var$i?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, s)=>{
        t._$AK(e, s);
    },
    _$AL: (t)=>t._$AL
};
(globalThis.litElementVersions ??= []).push("4.1.1");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a00bca1a101a9088$export$6acf61af03e62db = !1;





var $eb8eb2c95a750207$export$2e2bcd8739ae039 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  :host {
    --nspanel-surface-primary: #292f36;
    --nspanel-surface-secondary: #343b43;
    --nspanel-surface-tertiary: #626d7a;
    --nspanel-surface-action: #fe844b;
    --nspanel-surface-actionOverlay: #ffffff;
    --nspanel-surface-special: #2d343c;

    --nspanel-content-primary: #ffffff;
    --nspanel-content-secondary: #dfe3e8;
    --nspanel-content-tertiary: #a3adb8;
    --nspanel-content-action: #ffffff;
    --nspanel-content-actionHover: #ffffff;
    --nspanel-content-positive: #4ccf8a;
    --nspanel-content-negative: #f25f5c;

    --nspanel-font-weight-regular: 400;
    --nspanel-font-weight-medium: 500;
    --nspanel-font-weight-semiBold: 600;

    --nspanel-font-large: 20px;
    --nspanel-font-regular: 14px;
    --nspanel-font-small: 12px;
    --nspanel-font-xsmall: 10px;

    font-family: "Geist", sans-serif;
    font-size: var(--nspanel-font-regular);
    font-weight: var(--nspanel-font-regular);

    line-height: normal;
  }
`;




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $107bb7d062dde330$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $107bb7d062dde330$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class $107bb7d062dde330$export$befdefbdce210f91 {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}


/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $ca7e425cc484d5ff$export$56cc687933817664 = (0, $107bb7d062dde330$export$99b43ad1ed32e735)(class extends (0, $107bb7d062dde330$export$befdefbdce210f91) {
    constructor(t){
        if (super(t), t.type !== (0, $107bb7d062dde330$export$9ba3b3f20a85bfa).ATTRIBUTE || "class" !== t.name || t.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t) {
        return " " + Object.keys(t).filter((s)=>t[s]).join(" ") + " ";
    }
    update(s, [i]) {
        if (void 0 === this.st) {
            this.st = new Set, void 0 !== s.strings && (this.nt = new Set(s.strings.join(" ").split(/\s/).filter((t)=>"" !== t)));
            for(const t in i)i[t] && !this.nt?.has(t) && this.st.add(t);
            return this.render(i);
        }
        const r = s.element.classList;
        for (const t of this.st)t in i || (r.remove(t), this.st.delete(t));
        for(const t in i){
            const s = !!i[t];
            s === this.st.has(t) || this.nt?.has(t) || (s ? (r.add(t), this.st.add(t)) : (r.remove(t), this.st.delete(t)));
        }
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
});




class $17b43d96f7e32772$export$353f5b6fc5456de1 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static properties = {
        active: {},
        text: {},
        icon: {}
    };
    constructor(){
        super();
        this.active = false;
        this.text = 'Button Text';
        this.icon = '';
    }
    render() {
        const classes = {
            active: this.active,
            'nspanel-button': true
        };
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div class=${(0, $ca7e425cc484d5ff$export$56cc687933817664)(classes)}>
        ${this.icon ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<ha-icon icon="mdi:${this.icon}"></ha-icon>` : ''}
        ${this.text}
      </div>
    `;
    }
    static get styles() {
        return (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
      .nspanel-button {
        align-items: center;
        background: var(--nspanel-surface-secondary);
        border-radius: 8px;
        color: var(--nspanel-content-action);
        column-gap: 7px;
        display: flex;
        font-size: var(--nspanel-font-small);
        font-weight: var(--nspanel-font-weight-semiBold);
        height: 36px;
        justify-content: center;
        padding: 0 12px;
        white-space: nowrap;
        --mdc-icon-size: 18px;
        -webkit-tap-highlight-color: transparent;

        &.active {
          background: var(--nspanel-surface-action);
        }

        @media (hover: hover) {
          &:hover {
            background: var(--nspanel-surface-action);
            cursor: pointer;
          }
        }

        &:active {
          background: var(--nspanel-surface-action);
        }
      }
    `;
    }
}
customElements.define('nspanel-button', $17b43d96f7e32772$export$353f5b6fc5456de1);





class $410e5c81539b1a93$export$fb4216da1f591b95 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static properties = {
        active: {}
    };
    render() {
        const classes = {
            active: this.active,
            'nspanel-toggle-switch': true
        };
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div class=${(0, $ca7e425cc484d5ff$export$56cc687933817664)(classes)}></div>
    `;
    }
    static get styles() {
        return (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
      .nspanel-toggle-switch {
        background: var(--nspanel-surface-tertiary);
        border-radius: 999px;
        height: 24px;
        position: relative;
        transition: background-color 250ms linear;
        width: 40px;

        &:before {
          content: '';
          background: var(--nspanel-surface-secondary);
          border-radius: 50%;
          height: 16px;
          left: 4px;
          position: absolute;
          top: 4px;
          transition: background-color 250ms linear;
          transition: left 250ms linear;
          width: 16px;
        }

        &.active {
          background: var(--nspanel-surface-action);

          &:before {
            background: var(--nspanel-surface-actionOverlay);
            left: 20px;
          }
        }
      }
    `;
    }
}
customElements.define('nspanel-toggle-switch', $410e5c81539b1a93$export$fb4216da1f591b95);


class $cb68961554e23e2d$export$1d45ed1062d2fff7 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static properties = {
        hass: {},
        room: {}
    };
    constructor(){
        super();
    }
    render() {
        const { room: room } = this.room;
        this._roomName = room.name;
        this._roomIcon = room.icon;
        this._entity = room.entity ?? room.audioFlowDevice;
        this._state = this.hass.states[this._entity].state;
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div
        class="nspanel-button-card"
        @click=${()=>this.toggleButton()}
        @pointerdown=${()=>this.startHold()}
        @pointerup=${()=>this.endHold()}
        @pointercancel=${()=>this.endHold()}
        @contextmenu=${(e)=>e.preventDefault()}
      >
        <div class="header">
          <div class="icon">
            <ha-icon icon=${this._roomIcon}></ha-icon>
          </div>
          <nspanel-toggle-switch active=${this._state === 'on'}></nspanel-toggle-switch>
        </div>
        <div class="footer ${room.status ? 'footer--stacked' : ''}">
          <span class="room-name">${this._roomName}</span>
          ${room.status ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <span>${room.status}</span>
            <span class="detail">${room.detail}</span>
          ` : (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <span class="state">${this._state}</span>
          `}
        </div>
      </div>
    `;
    }
    toggleButton() {
        if (this._held) return;
        this.hass.callService("homeassistant", "toggle", {
            entity_id: this._entity
        });
    }
    // Hold for 500 ms opens Home Assistant's more-info dialog instead of toggling.
    startHold() {
        this._held = false;
        this._holdTimer = setTimeout(()=>{
            this._held = true;
            this.dispatchEvent(new CustomEvent('hass-more-info', {
                detail: {
                    entityId: this._entity
                },
                bubbles: true,
                composed: true
            }));
        }, 500);
    }
    endHold() {
        clearTimeout(this._holdTimer);
    }
    static get styles() {
        return (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
      .nspanel-button-card {
        background: var(--nspanel-surface-secondary);
        border-radius: 8px;
        box-sizing: border-box;
        color: var(--nspanel-content-primary);
        display: flex;
        flex-direction: column;
        font-size: var(--nspanel-font-regular);
        justify-content: space-between;
        min-height: 102px;
        padding: 12px;
        row-gap: 16px;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;

        &:hover {
          cursor: pointer;
        }
      }

      .header {
        display: flex;
        justify-content: space-between;

        .icon {
          align-items: center;
          background: var(--nspanel-surface-tertiary);
          border-radius: 50%;
          color: var(--nspanel-content-secondary);
          display: flex;
          height: 36px;
          justify-content: center;
          width: 36px;
        }
      }

      .footer {
        display: flex;
        justify-content: space-between;

        &.footer--stacked {
          flex-direction: column;
          row-gap: 2px;
        }

        .room-name {
          font-weight: var(--nspanel-font-weight-semiBold);
        }

        .state {
          text-transform: capitalize;
        }

        .detail {
          color: var(--nspanel-content-tertiary);
          font-size: var(--nspanel-font-small);
        }
      }
    `;
    }
}
customElements.define('nspanel-button-card', $cb68961554e23e2d$export$1d45ed1062d2fff7);



class $93f00a53fd0dbdfd$export$7872447382cf3226 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static properties = {
        hass: {}
    };
    render() {
        const { state: state, attributes: attributes } = this.hass.states['media_player.amplifier'];
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div class="nspanel-track-info">
        ${attributes.entity_picture ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<img src=${attributes.entity_picture} />` : ''}
        <div class="track-info">
          <div class="title">${attributes.media_title}</div>
          <div class="artist">${attributes.media_artist}</div>
        </div>
      </div>
    `;
    }
    static get styles() {
        return (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
      .nspanel-track-info {
        color: var(--nspanel-content-primary);
        column-gap: 16px;
        display: flex;

        img {
          border-radius: 8px;
          height: 108px;
          margin-top: -30px;
          width: 108px;
        }
      }

      .track-info {
        display: flex;
        flex: 1;
        flex-direction: column;

        .title {
          font-weight: var(--nspanel-font-weight-semiBold);
          margin: 16px 0 4px 0;
          max-width: 308px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

      }
    `;
    }
}
customElements.define('nspanel-track-info', $93f00a53fd0dbdfd$export$7872447382cf3226);





/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $19f464fcda7d2482$var$n = "important", $19f464fcda7d2482$var$i = " !" + $19f464fcda7d2482$var$n, $19f464fcda7d2482$export$1e5b4ce2fa884e6a = (0, $107bb7d062dde330$export$99b43ad1ed32e735)(class extends (0, $107bb7d062dde330$export$befdefbdce210f91) {
    constructor(t){
        if (super(t), t.type !== (0, $107bb7d062dde330$export$9ba3b3f20a85bfa).ATTRIBUTE || "style" !== t.name || t.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
    render(t) {
        return Object.keys(t).reduce((e, r)=>{
            const s = t[r];
            return null == s ? e : e + `${r = r.includes("-") ? r : r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s};`;
        }, "");
    }
    update(e, [r]) {
        const { style: s } = e.element;
        if (void 0 === this.ft) return this.ft = new Set(Object.keys(r)), this.render(r);
        for (const t of this.ft)null == r[t] && (this.ft.delete(t), t.includes("-") ? s.removeProperty(t) : s[t] = null);
        for(const t in r){
            const e = r[t];
            if (null != e) {
                this.ft.add(t);
                const r = "string" == typeof e && e.endsWith($19f464fcda7d2482$var$i);
                t.includes("-") || r ? s.setProperty(t, r ? e.slice(0, -11) : e, r ? $19f464fcda7d2482$var$n : "") : s[t] = e;
            }
        }
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
});


class $385cf151fda684fc$export$a344d7123dc68e27 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static properties = {
        hass: {},
        _playingProgress: {
            state: true
        },
        _playerState: {
            state: true
        },
        _mediaPositionUpdatedAt: {
            state: true
        },
        _mediaPosition: {
            state: true
        }
    };
    constructor(){
        super();
        this._playerState;
        this._playingProgress;
        this._mediaDuration;
        this._mediaPositionUpdatedAt;
        this._mediaPosition;
        this._tracker;
    }
    get _progressBar() {
        return this.renderRoot?.querySelector('.track-wrapper') ?? null;
    }
    disconnectedCallback() {
        if (this._tracker) {
            clearInterval(this._tracker);
            this._tracker = undefined;
        }
        super.disconnectedCallback();
    }
    render() {
        const { state: state, attributes: attributes } = this.hass.states['media_player.amplifier'];
        this._mediaDuration = attributes.media_duration;
        this._mediaPositionUpdatedAt = attributes.media_position_updated_at;
        this._mediaPosition = attributes.media_position;
        this._playerState = state;
        this.trackProgress();
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div class="nspanel-track-position-slider">
        <div class="times">
          <div class="start">${this.convertProgress(this._playingProgress)}</div>
          <div class="end">-${this.convertProgress(this._mediaDuration - this._playingProgress)}</div>
        </div>
        <div class="track-wrapper" @click=${this.handleSeek}>
          <div class="track-inner" style=${this.progressBarStyle(this._mediaDuration)}></div>
          <div class="track-handle" style=${this.handleBarStyle(this._mediaDuration)}></div>
        </div>
      </div>
    `;
    }
    progressBarStyle() {
        return (0, $19f464fcda7d2482$export$1e5b4ce2fa884e6a)({
            width: `${this._playingProgress / this._mediaDuration * 100}%`
        });
    }
    handleBarStyle() {
        return (0, $19f464fcda7d2482$export$1e5b4ce2fa884e6a)({
            left: `${this._playingProgress / this._mediaDuration * 100}%`
        });
    }
    trackProgress() {
        const position = this._mediaPosition || 0;
        const playing = this._playerState === 'playing';
        const updatedAt = this._mediaPositionUpdatedAt || 0;
        if (playing) this._playingProgress = position + (Date.now() - new Date(updatedAt).getTime()) / 1000.0;
        else this._playingProgress = position;
        if (!this._tracker) this._tracker = setInterval(()=>this.trackProgress(), 1000);
        if (!playing) {
            clearInterval(this._tracker);
            this._tracker = undefined;
        }
    }
    handleSeek(e) {
        const progressWidth = this._progressBar.offsetWidth;
        const percent = e.offsetX / progressWidth;
        const position = this._mediaDuration * percent;
        this.hass.callService("media_player", "media_seek", {
            entity_id: 'media_player.amplifier',
            seek_position: position
        });
    }
    convertProgress = (duration)=>{
        const date = new Date(duration * 1000).toISOString().substring(11, 19);
        return date.startsWith('00:') ? date.substring(3) : date;
    };
    static get styles() {
        return (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
      .nspanel-track-position-slider {
        margin-top: 12px;
      }

      .times {
        color: var(--nspanel-content-primary);
        display: flex;
        font-size: var(--nspanel-font-xsmall);
        justify-content: space-between;
        margin-bottom: 8px;
      }
      
      .track-wrapper {
        background: var(--nspanel-surface-secondary);
        border-radius: 4px;
        height: 2px;
        position: relative;
        width: 100%;
      }

      .track-inner {
        background: var(--nspanel-surface-action);
        height: 2px;
        left: 0;
        position: absolute;
        top: 0;
      }

      .track-handle {
        background: var(--nspanel-content-action);
        border-radius: 50%;
        height: 12px;
        position: absolute;
        top: -5px;
        width: 12px;
      }
    `;
    }
}
customElements.define('nspanel-track-position-slider', $385cf151fda684fc$export$a344d7123dc68e27);




class $071b65fd94936f77$export$48b39e39df750a7c extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static properties = {
        hass: {},
        _volume: {
            state: true
        }
    };
    constructor(){
        super();
        this._volume = 0;
    }
    get _progressBar() {
        return this.renderRoot?.querySelector('.track-wrapper') ?? null;
    }
    render() {
        this._volume = this.hass.states['media_player.amplifier'].attributes.volume_level;
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div class="nspanel-volume-control">
        <ha-icon class="icon" icon="mdi:volume-low" @click=${(e)=>this.handleChangeVolume(e, 0)}></ha-icon>
        <div class="track-wrapper" @click=${(e)=>this.handleChangeVolume(e)}>
          <div class="track-inner" style=${this.progressBarStyle()}></div>
          <div class="track-handle" style=${this.handleBarStyle()}></div>
        </div>
        <ha-icon class="icon" icon="mdi:volume-high" @click=${(e)=>this.handleChangeVolume(e, 1)}></ha-icon>
      </div>
    `;
    }
    progressBarStyle() {
        return (0, $19f464fcda7d2482$export$1e5b4ce2fa884e6a)({
            width: `${this._volume * 100}%`
        });
    }
    handleBarStyle() {
        if (this._volume === 0 || this._volume === 1) return (0, $19f464fcda7d2482$export$1e5b4ce2fa884e6a)({
            display: 'none'
        });
        return (0, $19f464fcda7d2482$export$1e5b4ce2fa884e6a)({
            left: `calc(${this._volume * 100}% - 3px)`
        });
    }
    handleChangeVolume(e, volume) {
        const progressWidth = this._progressBar.offsetWidth;
        const percent = e.offsetX / progressWidth;
        this.hass.callService("media_player", "volume_set", {
            entity_id: 'media_player.amplifier',
            volume_level: volume !== undefined ? volume : percent
        });
    }
    static get styles() {
        return (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
      .nspanel-volume-control {
        align-items: center;
        column-gap: 24px;
        display: flex;
      }

      .icon {
        color: var(--nspanel-content-primary);
      }

      .track-wrapper {
        background: var(--nspanel-surface-secondary);
        border-radius: 5px;
        height: 16px;
        overflow: hidden;
        position: relative;
        width: 100%;
      }

      .track-inner {
        background: var(--nspanel-surface-action);
        height: 16px;
        left: 0;
        position: absolute;
        top: 0;
      }

      .track-handle {
        background: var(--nspanel-content-action);
        height: 16px;
        position: absolute;
        width: 6px;
      }
    `;
    }
}
customElements.define('nspanel-volume-control', $071b65fd94936f77$export$48b39e39df750a7c);




class $076aa2542c74b4ee$export$40042fb31d8d1dde extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static properties = {
        hass: {},
        _status: {
            state: true
        },
        _repeatStatus: {
            state: true
        },
        _shuffleStatus: {
            state: true
        }
    };
    constructor(){
        super();
        this._status;
        this._repeatStatus;
        this._shuffleStatus;
    }
    render() {
        this._status = this.hass.states['media_player.amplifier'].state;
        this._repeatStatus = this.hass.states['media_player.amplifier'].attributes.repeat;
        this._shuffleStatus = this.hass.states['media_player.amplifier'].attributes.shuffle;
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div class="nspanel-media-control">
      <ha-icon class="icon icon--small" icon="mdi:${this._shuffleStatus ? 'shuffle-disabled' : 'shuffle'}" @click=${this.toggleShuffle}></ha-icon>
        <ha-icon class="icon" icon="mdi:rewind" @click=${this.previousTrack}></ha-icon>
        <div class="play" @click=${this.togglePlaying}>
          <ha-icon class="icon" icon="mdi:${this._status === 'playing' ? 'pause' : 'play'}"></ha-icon>
        </div>
        <ha-icon class="icon" icon="mdi:fast-forward" @click=${this.nextTrack}></ha-icon>
        <ha-icon class="icon icon--small" icon="${this.getRepeatStatus()}" @click=${this.toggleRepeat}></ha-icon>
      </div>
    `;
    }
    getRepeatStatus() {
        if (this._repeatStatus === 'off') return 'mdi:repeat';
        if (this._repeatStatus === 'one') return 'mdi:repeat-once';
        return 'mdi:repeat-off';
    }
    togglePlaying() {
        this.hass.callService("media_player", 'media_play_pause', {
            entity_id: 'media_player.amplifier'
        });
    }
    toggleRepeat() {
        let repeatMode;
        if (this._repeatStatus === 'off') repeatMode = 'one';
        else if (this._repeatStatus === 'one') repeatMode = 'all';
        else if (this._repeatStatus === 'all') repeatMode = 'off';
        this.hass.callService("media_player", 'repeat_set', {
            entity_id: 'media_player.amplifier',
            repeat: repeatMode
        });
    }
    toggleShuffle() {
        this.hass.callService("media_player", 'shuffle_set', {
            entity_id: 'media_player.amplifier',
            shuffle: !this._shuffleStatus
        });
    }
    previousTrack() {
        this.hass.callService("media_player", 'media_previous_track', {
            entity_id: 'media_player.amplifier'
        });
    }
    nextTrack() {
        this.hass.callService("media_player", 'media_next_track', {
            entity_id: 'media_player.amplifier'
        });
    }
    static get styles() {
        return (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
      :host {
        display: flex;
        flex: 1;
      }

      .nspanel-media-control {
        align-items: center;
        column-gap: 24px;
        display: flex;
        flex: 1;
        justify-content: center;
      }

      .icon {
        color: var(--nspanel-content-primary);
        --mdc-icon-size: 36px;
      }

      .icon--small {
         --mdc-icon-size: 24px;
      }

      .play {
        align-items: center;
        border: 2px solid var(--nspanel-surface-action);
        border-radius: 50%;
        display: flex;
        height: 48px;
        justify-content: center;
        width: 48px;

        .icon {
          color: var(--nspanel-surface-action);
        }
      }
    `;
    }
}
customElements.define('nspanel-media-control', $076aa2542c74b4ee$export$40042fb31d8d1dde);



const $67790e33267db729$var$NO_DATA = [
    'unknown',
    'unavailable',
    'none'
];
const $67790e33267db729$var$VALVE_OK = [
    'normal',
    '0',
    'none',
    'off',
    'ok'
];
const $67790e33267db729$var$hasData = (entity)=>entity && !$67790e33267db729$var$NO_DATA.includes(String(entity.state).toLowerCase());
// The attribute is not always populated, so fall back to scraping the state string.
const $67790e33267db729$var$irrigationAmount = (schedule)=>{
    if (!schedule) return undefined;
    return schedule.attributes.actual_irrigation_amount ?? String(schedule.state || '').match(/actual_irrigation_amount['"]?\s*:\s*(\d+(?:\.\d+)?)/)?.[1];
};
const $67790e33267db729$export$1a8eefb3b80e4a61 = (hass, n)=>{
    const on = hass.states[`switch.water_timer_${n}`]?.state === 'on';
    const schedule = hass.states[`sensor.water_timer_irrigation_schedule_status_${n}`];
    const runtime = hass.states[`sensor.water_timer_real_time_irrigation_duration_${n}`];
    const amount = $67790e33267db729$var$irrigationAmount(schedule);
    return {
        amount: `${schedule && on ? 'Current' : 'Last run'}: ${amount === undefined ? '--' : `${amount} L`}`,
        runtime: `Runtime: ${$67790e33267db729$var$hasData(runtime) ? `${runtime.state}${runtime.attributes.unit_of_measurement ?? ''}` : '--'}`
    };
};
class $67790e33267db729$export$7f785ffde32b2b2f extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static properties = {
        hass: {}
    };
    render() {
        const meter = this.hass.states['sensor.water_timer_real_time_irrigation_volume'];
        const battery = Number(this.hass.states['sensor.water_timer_battery']?.state);
        const valve = String(this.hass.states['sensor.water_timer_valve_abnormal_state']?.state);
        const valveOk = $67790e33267db729$var$VALVE_OK.includes(valve.toLowerCase());
        const updateAvailable = this.hass.states['update.water_timer']?.state === 'on';
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div class="nspanel-water-status">
        <div class="meter">
          <div class="icon">
            <ha-icon icon="mdi:water-circle"></ha-icon>
          </div>
          ${$67790e33267db729$var$hasData(meter) ? `${meter.state} ${meter.attributes.unit_of_measurement ?? 'L'} accumulated` : 'No meter data'}
        </div>
        <div class="chips">
          <span class="chip chip--${this.batteryStatus(battery)}">
            <ha-icon icon="mdi:${this.batteryIcon(battery)}"></ha-icon>
            ${Number.isFinite(battery) ? `${battery}%` : '--'}
          </span>
          <span class="chip chip--${valveOk ? 'ok' : 'alert'}">
            <ha-icon icon="mdi:${valveOk ? 'check-circle' : 'alert-circle'}"></ha-icon>
            ${valveOk ? 'Valves OK' : valve}
          </span>
          ${updateAvailable ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <span class="chip chip--warn">
              <ha-icon icon="mdi:update"></ha-icon>
              Update available
            </span>
          ` : ''}
        </div>
      </div>
    `;
    }
    batteryIcon(level) {
        if (level >= 90) return 'battery';
        if (level >= 70) return 'battery-80';
        if (level >= 50) return 'battery-60';
        if (level >= 30) return 'battery-40';
        if (level >= 10) return 'battery-20';
        return 'battery-alert';
    }
    batteryStatus(level) {
        if (level >= 40) return 'ok';
        if (level >= 20) return 'warn';
        return 'alert';
    }
    static get styles() {
        return (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
      :host {
        display: flex;
        flex: 1;
      }

      .nspanel-water-status {
        color: var(--nspanel-content-primary);
        display: flex;
        flex: 1;
        flex-direction: column;
      }

      .meter {
        align-items: center;
        column-gap: 16px;
        display: flex;
        flex: 1;
        font-size: var(--nspanel-font-large);
        font-weight: var(--nspanel-font-weight-medium);

        .icon {
          align-items: center;
          border: 2px solid var(--nspanel-surface-action);
          border-radius: 50%;
          color: var(--nspanel-surface-action);
          display: flex;
          height: 48px;
          justify-content: center;
          width: 48px;
          --mdc-icon-size: 28px;
        }
      }

      .chips {
        column-gap: 12px;
        display: flex;
        flex-wrap: wrap;
        row-gap: 8px;
      }

      .chip {
        align-items: center;
        background: var(--nspanel-surface-secondary);
        border-radius: 8px;
        column-gap: 7px;
        display: inline-flex;
        font-size: var(--nspanel-font-small);
        font-weight: var(--nspanel-font-weight-semiBold);
        height: 28px;
        padding: 0 12px;
        --mdc-icon-size: 18px;

        &.chip--ok ha-icon {
          color: var(--nspanel-content-positive);
        }

        &.chip--warn ha-icon {
          color: var(--nspanel-surface-action);
        }

        &.chip--alert ha-icon {
          color: var(--nspanel-content-negative);
        }
      }
    `;
    }
}
customElements.define('nspanel-water-status', $67790e33267db729$export$7f785ffde32b2b2f);


const $bf513b85805031e6$var$WATER_SWITCHES = [
    {
        name: 'Lawn Sprinklers',
        icon: 'mdi:sprinkler-variant',
        entity: 'switch.water_timer_1',
        timer: 1
    },
    {
        name: 'Garden Hose',
        icon: 'mdi:water-pump',
        entity: 'switch.water_timer_2',
        timer: 2
    }
];
class $bf513b85805031e6$export$60332b2344f7fe41 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static get properties() {
        return {
            hass: {
                attribute: false
            },
            config: {
                attribute: false
            },
            activeTab: {
                attribute: false
            }
        };
    }
    constructor(){
        super();
        this.activeTab = 'music';
    }
    render() {
        const water = this.activeTab === 'water';
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div class="nspanel-card ${water ? 'nspanel-card--water' : ''}">
        <div class="top-section">
          <div class="header">
            <div class="time">${this.getTime(this.hass.states['sensor.time'].state)}</div>
            <div class="tabs">
              <nspanel-button text="Music" active=${!water} icon="speaker" @click=${()=>this.activeTab = 'music'}></nspanel-button>
              <nspanel-button text="Water" active=${water} icon="sprinkler-variant" @click=${()=>this.activeTab = 'water'}></nspanel-button>
            </div>
          </div>
          <div class="button-card-grid">
            ${water ? this.renderWaterCards() : this.config.rooms.map((room)=>{
            return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                <nspanel-button-card
                  hass=${this.hass}
                  room=${room}
                ></nspanel-button-card>
              `;
        })}
          </div>
        </div>
        <div class="bottom-section">
          ${water ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <nspanel-water-status hass=${this.hass}></nspanel-water-status>
          ` : (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <nspanel-track-info hass=${this.hass}></nspanel-track-info>
            <nspanel-media-control hass=${this.hass}></nspanel-media-control>
            <nspanel-volume-control hass=${this.hass}></nspanel-volume-control>
          `}
        </div>
      </div>
    `;
    }
    // The two water switches as room cards, with the amount and runtime lines in
    // place of the on/off text; the timed-run buttons sit under the sprinklers.
    renderWaterCards() {
        const [sprinklers, hose] = $bf513b85805031e6$var$WATER_SWITCHES.map((sw)=>{
            const { amount: amount, runtime: runtime } = (0, $67790e33267db729$export$1a8eefb3b80e4a61)(this.hass, sw.timer);
            return {
                room: {
                    ...sw,
                    status: amount,
                    detail: runtime
                }
            };
        });
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div class="water-column">
        <nspanel-button-card hass=${this.hass} room=${sprinklers}></nspanel-button-card>
        <div class="timers">
          ${[
            10,
            20,
            30
        ].map((minutes)=>(0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <nspanel-button text="${minutes} min" icon="" @click=${()=>this.runLawn(minutes)}></nspanel-button>
          `)}
        </div>
      </div>
      <nspanel-button-card hass=${this.hass} room=${hose}></nspanel-button-card>
    `;
    }
    // Server-side timed run: the script turns the sprinklers on and off again itself.
    runLawn(minutes) {
        this.hass.callService("script", "turn_on", {
            entity_id: `script.lawn_${minutes}_minutes`
        });
    }
    /**
   * Convert a time string of the form "HH:MM" to a human-readable
   * 12-hour time with AM/PM indicator.
   * @param {string} time - Time string in 24-hour format
   * @returns {string} Time string in 12-hour format with AM/PM
   */ getTime(time) {
        const [hours, minutes] = time.split(":");
        const period = hours < 12 ? "AM" : "PM";
        return `${hours % 12 || 12}:${minutes.padStart(2, '0')} ${period}`;
    }
    setConfig(config) {
        this.config = config;
    }
    static styles = [
        (0, $eb8eb2c95a750207$export$2e2bcd8739ae039),
        (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
      .nspanel-card {
        background: linear-gradient(
          180deg,
          var(--nspanel-surface-primary) 0%,
          var(--nspanel-surface-primary) 50%,
          var(--nspanel-surface-special) 50%,
          var(--nspanel-surface-primary) 100%
        );
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
        padding: 24px;

        /* The split background exists for the album art; the water screen is flat. */
        &.nspanel-card--water {
          background: var(--nspanel-surface-primary);
        }
      }

      .header {
        align-items: center;
        display: flex;
        justify-content: space-between;

        .tabs {
          column-gap: 12px;
          display: flex;
        }
      }

      .time {
        color: var(--nspanel-content-primary);
        font-size: var(--nspanel-font-large);
        font-weight: var(--nspanel-font-weight-medium);
      }

      .button-card-grid {
        align-items: start;
        display: grid;
        column-gap: 24px;
        grid-template-columns: 1fr 1fr;
        margin-top: 24px;
      }

      .timers {
        column-gap: 8px;
        display: flex;
        margin-top: 12px;

        nspanel-button {
          flex: 1;
        }
      }

      .top-section,
      .bottom-section {
        display: flex;
        flex-direction: column;
        flex: 1;
        position: relative;
      }
    `
    ];
}


function $d832f2ef8a5ce6ac$var$loadCSS(url) {
    const link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
}
$d832f2ef8a5ce6ac$var$loadCSS("https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap");
window.customCards = window.customCards || [];
window.customCards.push({
    type: 'nspanel-card',
    name: 'NSPanel Card',
    description: 'NSPanel display for the garden/kitchen',
    preview: true
});
customElements.define('nspanel-card', (0, $bf513b85805031e6$export$60332b2344f7fe41));


//# sourceMappingURL=card.js.map
