import SwitchTheme from "./switchTheme.js";
import MenuMobile from "./menuMobile.js";
import GitStatus from "./footergit.js";
import { SmoothScroll, activeSmoothScrollEfect } from "./SmoothScroll.js";
import initTooltip from "./tooltip.js";

new SwitchTheme(".btn-theme", "#popup");
new MenuMobile(".btn-mobile", ".navigation");
new GitStatus("#git_stars", "#git_fork", "KaikSelhorstPixel");
new SmoothScroll('a[href^="#"]');
new activeSmoothScrollEfect(".content > section");
new initTooltip("[data-tooltip]");

// Functions
import initFetchOtherWorks from "./fetchOtherWorks.js";
initFetchOtherWorks();
