import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransshipmentRoutingModule } from './transshipment-routing.module';
import { TransshipmentComponent } from './transshipment.component';
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

@NgModule({
  imports: [
    CommonModule,
    TransshipmentRoutingModule
  ],
  declarations: [TransshipmentComponent, PlatformSwingOutComponent, PlatformTelescopicLipComponent, PlatformMechanicalComponent, PlatformConsoleTypeComponent, PlatformMechanicalMinidockComponent, HermeticFoldingFrameComponent, HermeticRigidFrameComponent, HermeticInflatableComponent, HermeticCushionComponent, TambourOverloadStandardComponent, TambourOverloadLightSeriesComponent, FarmRemoteComponent, BridgeFoldingSlidingComponent, BridgePortableComponent]
})
export class TransshipmentModule { }
