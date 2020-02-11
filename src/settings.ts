import { Template } from "./templateSettings";
import { Env, Layout, Page } from "./layoutSettings";

export interface Settings {
    template: Template,
    env: Env,
    layout: Layout,
    page: Page
}