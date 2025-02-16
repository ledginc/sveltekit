<script lang="ts">
    import FileUploader from "$lib/components/forms/FileUploader.svelte";
</script>

<button
    class="btn btn-ghost border-base-300 btn-sm"
    aria-label="Upload file"
    onclick={() => document.querySelector<HTMLDialogElement>("#apps-file-upload-modal")?.showModal()}>
    <span class="iconify lucide--upload size-4"></span>
    Upload
</button>
<dialog id="apps-file-upload-modal" class="modal">
    <div class="modal-box">
        <div class="flex items-center justify-between">
            <p class="font-medium">Upload Files</p>
            <form method="dialog">
                <button class="btn btn-ghost btn-sm btn-circle" aria-label="Close upload file modal">
                    <span class="iconify lucide--x size-5"></span>
                </button>
            </form>
        </div>
        <div class="mt-4">
            <FileUploader />
            <div class="mt-5 text-end">
                <button class="btn btn-primary btn-sm">
                    <span class="iconify lucide--arrow-down-to-line size-4"></span>
                    Import
                </button>
            </div>
        </div>
    </div>
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>
