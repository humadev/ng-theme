declare class GroupPermission {
    permissions: [number];
    groups: [number];
}
export declare class ContextMenu {
    icon: String;
    title: String;
    callback: Function;
    groupPermission?: GroupPermission;
    display?: Boolean | Function;
    displayCallback?: Boolean;
    children?: [ContextMenu];
}
export {};
