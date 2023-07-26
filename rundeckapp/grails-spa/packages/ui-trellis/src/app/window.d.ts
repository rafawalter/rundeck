import type {RundeckContext, AppLinks} from "../library";

declare global {
    interface Window {
        _rundeck: RundeckContext
        appLinks: AppLinks
        Messages: any
    }
}