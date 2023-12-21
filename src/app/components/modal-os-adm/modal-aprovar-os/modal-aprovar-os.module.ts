import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAprovarOsComponent } from './modal-aprovar-os.component';

import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { GaleriaSolicitadasModule } from '../../galeria-solicitadas/galeria-solicitadas.module';




@NgModule({
    declarations: [
        ModalAprovarOsComponent
    ],
    exports: [
        ModalAprovarOsComponent
    ],
    imports: [
        CommonModule,
        DynamicDialogModule,
        InputTextareaModule,
        DropdownModule,
        ButtonModule,
        FormsModule,
        DialogModule,
        ReactiveFormsModule,
        ToastModule,
        ConfirmDialogModule,
        GalleriaModule,
        ImageModule,
        GaleriaSolicitadasModule
    ]
})
export class ModalAprovarOsModule { }
