import {SwitchTheme} from "./switchTheme.js"
import {MenuMobile} from "./menuMobile.js"
import {gitStatus} from "./footergit.js"


new SwitchTheme('.btn-theme','#popup')
new MenuMobile(".btn-mobile",'.navigation')
new gitStatus('#git_stars',"#git_fork")