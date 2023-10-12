(()=>{
    "use strict";
    let e = ()=>localStorage.getItem("theme") || "auto"
      , t = e=>localStorage.setItem("theme", e)
      , a = ()=>{
        let t = e();
        return t || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    }
      , r = e=>{
        "auto" === e ? window.matchMedia("(prefers-color-scheme: dark)").matches ? document.documentElement.setAttribute("data-bs-theme", "dark") : window.matchMedia("(prefers-color-scheme: light)").matches && document.documentElement.setAttribute("data-bs-theme", "light") : document.documentElement.setAttribute("data-bs-theme", e)
    }
    ;
    r(a());
    let c = (e,t=!1)=>{
        let a = document.querySelector("#bd-theme");
        if (!a)
            return;
        let r = document.querySelector("#bd-theme-text")
          , c = document.querySelector(".theme-icon-active")
          , s = document.querySelector(`[data-bs-theme-value="${e}"]`)
          , d = new RegExp(/\bbi-[\w-]+\b/)
          , l = s.querySelector("i").className.match(d)[0];
        if (document.querySelectorAll("[data-bs-theme-value]").forEach(e=>{
            e.classList.remove("active"),
            e.setAttribute("aria-pressed", "false")
        }
        ),
        s.classList.add("active"),
        s.setAttribute("aria-pressed", "true"),
        c && (c.className = c.className.replace(d, l)),
        r) {
            let e = `${r.textContent} (${s.dataset.bsThemeValue})`;
            a.setAttribute("aria-label", e)
        }
        t && a.focus()
    }
    ;
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ()=>{
        let t = e();
        "light" !== t && "dark" !== t && r(a())
    }
    ),
    window.addEventListener("DOMContentLoaded", ()=>{
        c(a()),
        document.querySelectorAll("[data-bs-theme-value]").forEach(e=>{
            e.addEventListener("click", ()=>{
                let a = e.getAttribute("data-bs-theme-value");
                t(a),
                r(a),
                c(a, !0)
            }
            )
        }
        )
    }
    )
}
)();
//# sourceMappingURL=theme.js.map
