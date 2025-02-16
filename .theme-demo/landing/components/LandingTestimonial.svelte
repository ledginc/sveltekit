<script lang="ts">
    const testimonials = [
        {
            id: "landing-testimonial-1",
            image: "/images/landing/testimonial-avatar-1.jpg",
            name: "Pouya Saadeghi",
            role: "Creator of daisyUI",
            comment:
                "This is the ultimate admin dashboard template, with all the essential blocks and features you need. Save you months of development time and helps you launch your app faster",
        },
        {
            id: "landing-testimonial-2",
            image: "/images/landing/testimonial-avatar-2.jpg",
            name: "Alexandre Cohen",
            role: "Co-owner / CTO of Disphere",
            comment:
                "Exceptional dashboard with a sleek design and seamless integration of DaisyUI components. Perfect for my existing project !",
        },
    ] as const;

    let currentPosition = $state(0);

    const next = () => {
        changePosition(currentPosition < testimonials.length - 1 ? currentPosition + 1 : 0);
    };

    const prev = () => {
        changePosition(currentPosition == 0 ? testimonials.length - 1 : currentPosition - 1);
    };

    const changePosition = (position: number) => {
        currentPosition = position;
        document.getElementById(testimonials[position].id)?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
        });
    };
</script>

<section id="testimonial" class="relative container py-8 md:py-12 xl:py-16 2xl:py-24">
    <div
        class="absolute inset-0 bg-[url('/images/landing/testimonial-background.svg')] bg-cover bg-center bg-no-repeat opacity-8 dark:opacity-6">
    </div>

    <div class="relative">
        <div class="text-center">
            <div class="inline-flex items-center rounded border border-orange-500/10 bg-orange-500/5 p-2">
                <span class="iconify lucide--sparkles size-5 text-orange-600"></span>
            </div>
            <h2 class="mt-4 text-3xl font-semibold">Voices That Matter</h2>
            <p class="text-base-content/70 mt-3 inline-block max-w-lg">
                Read honest testimonials from those who have experienced the value we bring to the table
            </p>
        </div>

        <div class="relative mt-24 w-full">
            <div class="carousel w-full">
                {#each testimonials as testimonial, index (index)}
                    <div id={testimonial.id} class="carousel-item flex w-full flex-col items-center justify-center">
                        <div class="text-center">
                            <div class="avatar">
                                <div class="mask mask-squircle bg-base-200 w-24">
                                    <img src={testimonial.image} alt="testimonial" />
                                </div>
                            </div>
                            <p class="mt-6 text-xl font-medium">{testimonial.name}</p>
                            <p class="text-base-content/80">{testimonial.role}</p>
                            <div class="mt-6 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    class="size-6 text-yellow-500"
                                    viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
                                    ></path>
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    class="size-6 text-yellow-500"
                                    viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
                                    ></path>
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    class="size-6 text-yellow-500"
                                    viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
                                    ></path>
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    class="size-6 text-yellow-500"
                                    viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
                                    ></path>
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    class="size-6 text-yellow-500"
                                    viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
                                    ></path>
                                </svg>
                            </div>
                            <p class="mt-6 inline-block max-w-[600px]">{testimonial.comment}</p>
                        </div>
                    </div>
                {/each}
            </div>
            <div class="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between">
                <button onclick={prev} class="btn btn-circle" aria-label="prev">
                    <span class="iconify lucide--chevron-left size-4"></span>
                </button>
                <button onclick={next} class="btn btn-circle" aria-label="next">
                    <span class="iconify lucide--chevron-right size-4"></span>
                </button>
            </div>
        </div>
    </div>
</section>
