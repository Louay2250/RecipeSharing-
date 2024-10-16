import { NgModule } from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from  "@angular/material/toolbar";
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule} from "@angular/material/select";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatMenuModule} from "@angular/material/menu";
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { DIALOG_DATA } from "@angular/cdk/dialog";



@NgModule({
    exports: [
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatDialogModule,
        MatRadioModule,
        

    ]
})
export class DemoAngularMaterialModule {

}
