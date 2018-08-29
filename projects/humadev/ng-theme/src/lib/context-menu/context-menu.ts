export class ContextMenu {
    icon: String;
    title: String;
    callback: Function;
    groupPermission?: [number];
    display?: Boolean | Function;
    children?: [ContextMenu]
}
