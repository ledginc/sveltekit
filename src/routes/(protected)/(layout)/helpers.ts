import type { ISidebarMenuItem } from "./components/SidebarMenuItem.svelte";

export const adminMenuItems: ISidebarMenuItem[] = [
    {
        id: "dashboard",
        icon: "lucide--monitor-dot",
        label: "Tableau de bord",
        url: "/",
    },
    {
        id: "apps-label",
        isTitle: true,
        label: "Modules",
    },
    {
        id: "submissions",
        icon: "lucide--pen-box",
        label: "Soumissions",
        children: [
            {
                id: "submissions-new",
                label: "Créer une soumission",
                url: "/submissions/new",
            },
            {
                id: "submissions-list",
                label: "Voir les soumissions",
                url: "/submissions/list",
            },
        ],
    },
];

const findItem = (menuItems: ISidebarMenuItem[], url: string): ISidebarMenuItem | null => {
    for (const item of menuItems) {
        if (item.url == url) {
            return item;
        }
        if (item.children) {
            const fItem = findItem(item.children, url);
            if (fItem) {
                return fItem;
            }
        }
    }
    return null;
};

export const getActivatedItemParentKeys = (menuItems: ISidebarMenuItem[], url: string): string[] => {
    const menuItem = findItem(menuItems, url);

    if (!menuItem) return [];
    const list = [];

    for (const item of menuItems) {
        if (item.id == menuItem.id) {
            list.push(item.id);
        }
        if (item.children) {
            for (const iItem of item.children) {
                if (iItem.id == menuItem.id) {
                    list.push(item.id);
                    list.push(iItem.id);
                }
                if (iItem.children != null) {
                    for (const i2Item of iItem.children) {
                        if (i2Item.id == menuItem.id) {
                            list.push(item.id);
                            list.push(iItem.id);
                            list.push(i2Item.id);
                        }
                    }
                }
            }
        }
    }
    return list;
};
