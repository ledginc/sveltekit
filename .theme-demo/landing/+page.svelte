<script lang="ts">
    import LandingFAQ from "./components/LandingFAQ.svelte";
    import LandingFeatureList from "./components/LandingFeatureList.svelte";
    import LandingFooter from "./components/LandingFooter.svelte";
    import LandingHero from "./components/LandingHero.svelte";
    import LandingPackage from "./components/LandingPackage.svelte";
    import LandingShowcase from "./components/LandingShowcase.svelte";
    import LandingTestimonial from "./components/LandingTestimonial.svelte";
    import LandingTopbar from "./components/LandingTopbar.svelte";
</script>

<div class="bg-[var(--layout-background)]">
    <LandingTopbar />
    <LandingHero />
    <LandingFeatureList />
    <LandingShowcase />
    <LandingTestimonial />
    <LandingPackage />
    <LandingFAQ />
    <LandingFooter />
</div>
