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
import {FormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    ItemsViewComponent,
    ItemsTableComponent,
    ItemsTileComponent,
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
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
