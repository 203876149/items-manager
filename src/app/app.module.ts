import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsViewComponent } from './componenents/items-view/items-view.component';
import { ItemsTableComponent } from './componenents/items-table/items-table.component';
import {MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable} from '@angular/material/table';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatIcon} from '@angular/material/icon';
import { ItemsTileComponent } from './componenents/items-tile/items-tile.component';
import {MatCardModule, MatCardSubtitle} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltip} from '@angular/material/tooltip';
import { EditItemComponent } from './componenents/edit-item/edit-item.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    ItemsViewComponent,
    ItemsTableComponent,
    ItemsTileComponent,
    EditItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTable,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatIcon,
    MatCardModule,
    MatCardSubtitle,
    MatButtonModule,
    MatGridList,
    MatGridTile,
    FormsModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatTooltip,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
