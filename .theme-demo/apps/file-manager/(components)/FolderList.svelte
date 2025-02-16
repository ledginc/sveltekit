<script lang="ts">
    import FolderItem, { type IFolderItem } from "./FolderItem.svelte";

    const folders: IFolderItem[] = [
        {
            icon: "lucide--image",
            name: "My Images",
            filesCount: 450,
            iconClass: "bg-primary/5 text-primary",
        },
        {
            icon: "lucide--folder-archive",
            name: "Archive",
            filesCount: 54,
            iconClass: "bg-secondary/5 text-secondary",
        },
        {
            icon: "lucide--music",
            name: "Music",
            filesCount: 874,
            iconClass: "bg-warning/5 text-warning",
        },
        {
            icon: "lucide--video",
            name: "Videos",
            filesCount: 125,
            iconClass: "bg-info/5 text-info",
        },
        {
            icon: "lucide--shield-check",
            name: "Private",
            filesCount: 8,
            iconClass: "bg-error/5 text-error",
        },
    ];
</script>

<div class="grid grid-cols-1 gap-5 md:grid-cols-3 2xl:grid-cols-5">
    {#each folders as folder, index (index)}
        <FolderItem {...folder} />
    {/each}
</div>
