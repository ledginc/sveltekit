<script lang="ts">
    import FileUploader from "$lib/components/forms/FileUploader.svelte";

    let showPassword = $state(false);
</script>

<div>
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div class="card bg-base-100 shadow">
            <div class="card-body">
                <div class="card-title">Basic Information</div>
                <div class="fieldset mt-2 grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div class="space-y-2">
                        <label class="fieldset-label" for="name"> Name </label>
                        <input type="text" class="input w-full" placeholder="Name" id="name" />
                    </div>
                    <div class="space-y-2">
                        <label class="fieldset-label">Email</label>
                        <input type="email" class="input w-full" placeholder="Email" id="email" />
                    </div>
                    <div class="space-y-2">
                        <label class="fieldset-label">Mobile</label>
                        <input type="tel" class="input w-full" placeholder="(098) 765 4321" />
                    </div>
                    <div class="space-y-2">
                        <label class="fieldset-label" for="DOB"> DOB </label>
                        <input type="date" class="input w-full" aria-label="DOB" id="DOB" />
                    </div>
                    <div class="flex items-center gap-3">
                        <input class="toggle toggle-sm" type="checkbox" id="verified" />
                        <label class="label" for="verified"> Verified </label>
                    </div>
                    <div class="flex items-center gap-3">
                        <input
                            class="radio radio-sm"
                            type="radio"
                            value="male"
                            defaultChecked
                            name="apps-seller-gender"
                            id="apps-seller-gender-male" />
                        <label class="fieldset-label" for="apps-seller-gender-male"> Male </label>
                        <input
                            class="radio radio-sm"
                            value="female"
                            type="radio"
                            name="apps-seller-gender"
                            id="apps-seller-gender-female" />
                        <label class="fieldset-label" for="apps-seller-gender-female"> Female </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card bg-base-100 shadow">
            <div class="card-body">
                <div class="card-title">Address</div>
                <div class="fieldset mt-2 grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div class="space-y-2">
                        <label class="fieldset-label" for="street-address"> Street Address </label>
                        <input type="text" class="input w-full" id="street-address" placeholder="Street Address" />
                    </div>
                    <div class="space-y-2">
                        <label class="fieldset-label" for="city"> City </label>
                        <input type="text" class="input w-full" id="city" placeholder="City" />
                    </div>
                    <div class="space-y-2">
                        <label class="fieldset-label" for="state"> State </label>
                        <input type="text" class="input w-full" id="state" placeholder="State" />
                    </div>
                    <div class="space-y-2">
                        <label class="fieldset-label" for="postal-code"> Postal Code </label>
                        <input type="text" class="input w-full" id="postal-code" placeholder="564-879" />
                    </div>
                    <div class="flex items-center gap-3">
                        <input class="checkbox checkbox-sm" type="checkbox" id="set-as-permanent" />
                        <label class="label" for="set-as-permanent"> Set as permanent </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card bg-base-100 shadow">
            <div class="card-body">
                <div class="card-title">Upload Image</div>
                <div class="mt-4">
                    <FileUploader
                        labelIdle={`<div>Drag and Drop your files or <span style="text-decoration: underline">Browse</span></div>`} />
                </div>
            </div>
        </div>
        <div class="bg-base-100 card shadow">
            <div class="card-body gap-0">
                <div class="card-title">Change Password</div>
                <div class="mt-2 fieldset grid grid-cols-1 gap-5 gap-y-3 lg:grid-cols-2">
                    <div class="space-y-2">
                        <label class="fieldset-label" for="old-password">Old Password</label>
                        <label class="input w-full focus:outline-0">
                            <span class="iconify lucide--key-round text-base-content/60 size-4"></span>
                            <input
                                class="grow focus:outline-0"
                                placeholder="Password"
                                id="old-password"
                                type={showPassword ? "text" : "password"} />
                            <button
                                aria-label="Password"
                                class="btn btn-xs btn-ghost btn-circle text-base-content/60"
                                onclick={() => (showPassword = !showPassword)}>
                                {#if showPassword}
                                    <span class="iconify lucide--eye-off size-4"></span>
                                {:else}
                                    <span class="iconify lucide--eye size-4"></span>
                                {/if}
                            </button>
                        </label>
                    </div>
                    <div class="space-y-2">
                        <label class="fieldset-label" for="new-password">New Password</label>
                        <label class="input w-full focus:outline-0">
                            <span class="iconify lucide--key-round text-base-content/60 size-4"></span>
                            <input
                                class="grow focus:outline-0"
                                placeholder="New Password"
                                id="new-password"
                                type={showPassword ? "text" : "password"} />
                            <button
                                aria-label="Confirm Password"
                                class="btn btn-xs btn-ghost btn-circle"
                                onclick={() => (showPassword = !showPassword)}>
                                {#if showPassword}
                                    <span class="iconify lucide--eye-off size-4"></span>
                                {:else}
                                    <span class="iconify lucide--eye size-4"></span>
                                {/if}
                            </button>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-6 flex justify-end gap-3">
        <a class="btn btn-sm btn-ghost" href="/apps/ecommerce/customers">
            <span class="iconify lucide--x size-4"></span>
            Cancel
        </a>
        <a class="btn btn-sm btn-primary" href="/apps/ecommerce/customers">
            <span class="iconify lucide--arrow-up-from-line size-4"></span>
            Update
        </a>
    </div>
</div>
