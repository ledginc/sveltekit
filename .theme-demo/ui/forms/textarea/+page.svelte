<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
</script>

<div>
    <PageTitle title="Textarea" items={[{ label: "Forms" }, { label: "Textarea", active: true }]} />
    <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <div class="card card-border bg-base-100">
            <div class="card-body">
                <div class="card-title">Default</div>
                <div class="mt-4 flex flex-col gap-3">
                    <textarea placeholder="Type here" class="textarea"></textarea>
                    <textarea
                        defaultValue="I have already written something for you"
                        class="textarea"
                        aria-label="Textarea"></textarea>
                </div>
            </div>
        </div>
        <div class="card card-border bg-base-100">
            <div class="card-body">
                <div class="card-title">Disabled</div>
                <div class="mt-4 flex flex-col gap-3">
                    <textarea placeholder="Type here" class="textarea" disabled></textarea>
                    <textarea
                        defaultValue="I have already written something for you"
                        class="textarea"
                        aria-label="Textarea"
                        disabled></textarea>
                </div>
            </div>
        </div>
        <div class="card card-border bg-base-100">
            <div class="card-body">
                <div class="card-title">Ghost</div>
                <div class="mt-4 flex flex-col gap-3">
                    <textarea placeholder="Touch to write" class="textarea textarea-ghost"></textarea>
                    <textarea
                        defaultValue="I'm ghost, you can't touch me 👻"
                        class="textarea"
                        disabled
                        aria-label="Textarea"></textarea>
                </div>
            </div>
        </div>
        <div class="card card-border bg-base-100">
            <div class="card-body">
                <div class="card-title">Fieldset</div>
                <div class="mt-4 flex flex-col gap-3">
                    <fieldset class="fieldset">
                        <legend class="fieldset-legend">What is your bio?</legend>
                        <textarea class="textarea" placeholder="Type here" aria-label="Textarea"></textarea>
                        <p class="fieldset-label">Don't worry, we never share anything with others</p>
                    </fieldset>
                </div>
            </div>
        </div>
        <div class="card card-border bg-base-100">
            <div class="card-body">
                <div class="card-title">Color</div>
                <div class="mt-4 grid gap-6 *:w-full md:grid-cols-2">
                    <textarea placeholder="Type here" aria-label="Textarea" class="textarea textarea-primary"
                    ></textarea>
                    <textarea placeholder="Type here" aria-label="Textarea" class="textarea textarea-secondary"
                    ></textarea>
                    <textarea placeholder="Type here" aria-label="Textarea" class="textarea textarea-accent"></textarea>
                    <textarea placeholder="Type here" aria-label="Textarea" class="textarea textarea-success"
                    ></textarea>
                    <textarea placeholder="Type here" aria-label="Textarea" class="textarea textarea-warning"
                    ></textarea>
                    <textarea placeholder="Type here" aria-label="Textarea" class="textarea textarea-info"></textarea>
                    <textarea placeholder="Type here" aria-label="Textarea" class="textarea textarea-error"></textarea>
                    <textarea placeholder="Type here" aria-label="Textarea" class="textarea textarea-neutral"
                    ></textarea>
                </div>
            </div>
        </div>
    </div>
</div>
