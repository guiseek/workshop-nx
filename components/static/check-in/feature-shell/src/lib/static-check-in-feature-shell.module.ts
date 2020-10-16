import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  StaticSharedSeatmapFeatureSeatmapModule,
  staticSharedSeatmapFeatureSeatmapRoutes,
} from '@workshop-nx/static/shared/seatmap/feature-seatmap';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: 'static-shared-seatmap-feature-seatmap',
        children: staticSharedSeatmapFeatureSeatmapRoutes,
      },
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),

    StaticSharedSeatmapFeatureSeatmapModule,
  ],
})
export class StaticCheckInFeatureShellModule {}
