// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }
}
declare module "svelte-filepond";

declare module "apexcharts" {
    type ApexGrid = ApexGridType & {
        strokeDashArray?: number | number[];
    };

    type ApexStroke = ApexStrokeType & {
        dashArray: number | number[];
    };

    type ApexForecastDataPoints = ApexForecastDataPointsType & {
        dashArray: number | number[];
    };
}

export {};
