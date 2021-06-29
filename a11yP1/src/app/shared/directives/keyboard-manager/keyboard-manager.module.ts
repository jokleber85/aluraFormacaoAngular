import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { KeyBoardManagedItemDirective } from "./keyboard-managed-item.directive";
import { KeyBoardManagerDirective } from "./keyboard-manager.directive";

@NgModule({
    declarations: [
        KeyBoardManagerDirective,
        KeyBoardManagedItemDirective],
    imports: [CommonModule],
    exports: [
        KeyBoardManagerDirective,
        KeyBoardManagedItemDirective,
    ],
})

export class KeyboardManagerModule {

}