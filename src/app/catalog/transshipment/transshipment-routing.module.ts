import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatformSwingOutComponent } from './platform-swing-out/platform-swing-out.component';
import { PlatformTelescopicLipComponent } from './platform-telescopic-lip/platform-telescopic-lip.component';
import { PlatformMechanicalComponent } from './platform-mechanical/platform-mechanical.component';
import { PlatformConsoleTypeComponent } from './platform-console-type/platform-console-type.component';
import { PlatformMechanicalMinidockComponent } from './platform-mechanical-minidock/platform-mechanical-minidock.component';
import { HermeticFoldingFrameComponent } from './hermetic-folding-frame/hermetic-folding-frame.component';
import { HermeticRigidFrameComponent } from './hermetic-rigid-frame/hermetic-rigid-frame.component';
import { HermeticInflatableComponent } from './hermetic-inflatable/hermetic-inflatable.component';
import { HermeticCushionComponent } from './hermetic-cushion/hermetic-cushion.component';
import { TambourOverloadStandardComponent } from './tambour-overload-standard/tambour-overload-standard.component';
import { TambourOverloadLightSeriesComponent } from './tambour-overload-light-series/tambour-overload-light-series.component';
import { FarmRemoteComponent } from './farm-remote/farm-remote.component';
import { BridgeFoldingSlidingComponent } from './bridge-folding-sliding/bridge-folding-sliding.component';
import { BridgePortableComponent } from './bridge-portable/bridge-portable.component';

const routes: Routes = [
  { path: 'catalog/transshipment/platform-swing-out', component: PlatformSwingOutComponent },
  { path: 'catalog/transshipment/platform-telescopic-lip', component: PlatformTelescopicLipComponent },
  { path: 'catalog/transshipment/platform-mechanical', component: PlatformMechanicalComponent },
  { path: 'catalog/transshipment/platform-console-type', component: PlatformConsoleTypeComponent },
  { path: 'catalog/transshipment/platform-mechanical-minidock', component: PlatformMechanicalMinidockComponent },
  { path: 'catalog/transshipment/hermetic-folding-frame', component: HermeticFoldingFrameComponent },
  { path: 'catalog/transshipment/hermetic-rigid-frame', component: HermeticRigidFrameComponent },
  { path: 'catalog/transshipment/hermetic-inflatable', component: HermeticInflatableComponent },
  { path: 'catalog/transshipment/hermetic-cushion', component: HermeticCushionComponent },
  { path: 'catalog/transshipment/tambour-overload-standard', component: TambourOverloadStandardComponent },
  { path: 'catalog/transshipment/tambour-overload-light-series', component: TambourOverloadLightSeriesComponent },
  { path: 'catalog/transshipment/farm-remote', component: FarmRemoteComponent },
  { path: 'catalog/transshipment/bridge-folding-sliding', component: BridgeFoldingSlidingComponent },
  { path: 'catalog/transshipment/bridge-portable', component: BridgePortableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransshipmentRoutingModule { }
