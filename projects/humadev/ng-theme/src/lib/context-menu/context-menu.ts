class GroupPermission {
  permissions: [number];
  groups:[number];
}

export class ContextMenu {
    icon: String;
    title: String;
    callback: Function;
    groupPermission?: GroupPermission;
    display?: Boolean | Function;
    displayCallback?: Boolean = true;
    children?: [ContextMenu];
}
