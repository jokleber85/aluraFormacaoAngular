import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FocusTrapDirectives } from "./focus-trap.directive";

@NgModule({
    declarations: [FocusTrapDirectives],
    imports: [CommonModule],
    exports: [FocusTrapDirectives],
})


export class FocusTrapModule {}