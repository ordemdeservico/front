import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import CardComponent from './card.component';
import { DialogModule } from 'primeng/dialog';
import { ModalAprovarOsModule } from '../modal-os-adm/modal-aprovar-os/modal-aprovar-os.module';
import { ModalFinalizarOsModule } from "../modal-os-adm/modal-finalizar-os/modal-finalizar-os.module";
import { ModalDeclinarOsModule } from '../modal-os-adm/modal-declinar-os/modal-declinar-os.module';


@NgModule({
    declarations: [
        CardComponent
    ],
    exports: [
        CardComponent
    ],
    imports: [
        CommonModule,
        DialogModule,
        ModalAprovarOsModule,
        ModalFinalizarOsModule,
        ModalDeclinarOsModule
    ]
})
export class CardModule { }
