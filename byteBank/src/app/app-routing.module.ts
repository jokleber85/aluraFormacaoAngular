import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExtratoComponent } from "./extrato/extrato-component";
import { NovaTransferenciaComponent } from "./novaTransferencia/novaTransferencia-component";

export const routes: Routes = [
    { path: '', redirectTo: 'extrato', pathMatch: 'full'},
    { path: 'extrato', component: ExtratoComponent },
    { path: 'novaTransferencia', component: NovaTransferenciaComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}