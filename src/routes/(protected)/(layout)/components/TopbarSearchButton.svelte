<script lang="ts">
    const showModal = () => {
        document.querySelector<HTMLDialogElement>("#topbar-search-modal")?.showModal();
    };
</script>

<button
    class="btn btn-outline btn-sm btn-ghost border-base-300 text-base-content/70 hidden h-9 w-48 justify-start gap-2 !text-sm md:flex"
    onclick={showModal}>
    <span class="iconify lucide--search size-4"></span>
    <span>Rechercher</span>
</button>
<button
    class="btn btn-outline btn-sm btn-square btn-ghost border-base-300 text-base-content/70 flex size-9 md:hidden"
    aria-label="Search"
    onclick={showModal}>
    <span class="iconify lucide--search size-4"></span>
</button>
<dialog id="topbar-search-modal" class="modal p-0">
    <div class="modal-box p-0">
        <div class="input border-base-300 w-full rounded-none border-0 border-b focus:!outline-0 active:!outline-0">
            <span class="iconify lucide--search text-base-content/60 size-4.5"></span>
            <input type="search" class="grow" placeholder="Rechercher" aria-label="Search" />
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost" aria-label="Close">
                    <span class="iconify lucide--x text-base-content/80 size-4"></span>
                </button>
            </form>
        </div>
        <ul class="menu w-full pt-0">
            <li class="menu-title">Actions</li>
            <li>
                <div>
                    <span class="iconify lucide--folder-plus size-4.5"></span>
                    <p class="grow text-sm">Créer une nouvelle soumission</p>
                </div>
            </li>
            <li>
                <div>
                    <span class="iconify lucide--box size-4.5"></span>
                    <p class="grow text-sm">Gérer l'inventaire</p>
                </div>
            </li>
        </ul>
        <hr class="border-base-300 h-px" />
        <ul class="menu w-full pt-0">
            <li class="menu-title">Liens rapides</li>
            <li>
                <div>
                    <span class="iconify lucide--folders size-4.5"></span>
                    <p class="grow text-sm">Soumissions</p>
                </div>
            </li>
        </ul>
    </div>
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>
