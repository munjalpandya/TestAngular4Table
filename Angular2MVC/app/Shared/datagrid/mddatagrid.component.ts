import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataGridUtil } from './datagrid.util'
import { Format } from './format';
import { PageEvent, MdPaginator } from "@angular/material/material";
import { Observable } from "rxjs/Observable";
import { DataGrid } from "./datagrid.component";

@Component({
    selector: 'md-data-grid',
    styleUrls: ['app/shared/datagrid/datagrid.style.css'],
    templateUrl: 'app/shared/datagrid/mddatagrid.component.html'
})

export class MDDataGrid extends DataGrid {

    @Input() detcolumns: any[];
    @Input() detTable: any[];
    
}