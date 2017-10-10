import { Component, Input, Output, EventEmitter } from '@angular/core';
import {DataGridUtil} from './datagrid.util'
import { Format } from './format';
import { PageEvent, MdPaginator } from "@angular/material/material";
import { Observable } from "rxjs/Observable";

export interface GridAction {
    action: string,
    values: {
        key: string,
        value: string
    }[]
}

@Component({
    selector: 'data-grid',
    styleUrls: ['app/shared/datagrid/datagrid.style.css'],
    templateUrl: 'app/shared/datagrid/datagrid.component.html'
})

export class DataGrid {

    //Input Variables
    @Input() columns: any[];
    @Input() data: any[];
    @Input() sort: any;
    @Input() gridbtns: any[];
    @Input() hdrbtns: any[];
    @Input() isshowfilter: boolean;
    @Input() isExporttoCSV: boolean;
    @Input() exportFileName: string;
    @Input() filter: any;
    @Input() totalRecords: number;

    //Output Variable
    @Output()
    btnclick: EventEmitter<GridAction> = new EventEmitter<GridAction>();

    //Local Variable
    pdata: any[] = this.data;
    listFilter: string;
    searchTitle: string = "Search:";
    total: number = this.totalRecords;
    limit = 2;
    page = 1;
    pageSizeOptions = [
        { value: '2', viewValue: '2' },
        { value: '5', viewValue: '5' },
        { value: '10', viewValue: '10' },
        { value: '25', viewValue: '25' },
        { value: '100', viewValue: '100' }
    ];
    startIndex: number;
    endIndex: number;
    pagesToShow: number;

    pageEvent: PageEvent;

    ngOnChanges(changes: any) {
        if (JSON.stringify(changes).indexOf("data") != -1){
            this.pdata = this.data;
        }
        this.criteriaChange(this.listFilter);
        //this.length = this.data.length;        
        this.getData();
    }
    
    selectedClass(columnName: string): any {
        return columnName == this.sort.column ? 'sort-' + this.sort.descending : false;
    }

    changeSorting(columnName: string): void {
        var sort = this.sort;
        if (sort.column == columnName) {
            sort.descending = !sort.descending;
        } else {
            sort.column = columnName;
            sort.descending = false;
        }
    }

    convertSorting(): string {
        return this.sort.descending ? '-' + this.sort.column : this.sort.column;
    }

    click(btn: any, row: any): void {
        let keyds = <GridAction>{};
        keyds.action = btn.action;

        if (row != null) {
            keyds.values = [];
            btn.keys.forEach((key: any) => {
                keyds.values.push({ key: key, value: row[key] });
            });
        }
        this.btnclick.emit(keyds);
    }

    criteriaChange(value: any) {
        if (this.filter != null) {
            if (value != '[object Event]') {
                this.listFilter = value;
                this.pdata = this.filter.transform(this.data, this.listFilter);
            }
        }
    }

    exporttoCSV() {
        let exprtcsv: any[] = [];
        (<any[]>JSON.parse(JSON.stringify(this.data))).forEach(x => {
            var obj = new Object();
            var frmt = new Format();
            for (var i = 0; i < this.columns.length; i++) {
                let transfrmVal = frmt.transform(x[this.columns[i].variable], this.columns[i].filter);
                obj[this.columns[i].display] = transfrmVal;
            }
            exprtcsv.push(obj);
        }
        );
        DataGridUtil.downloadcsv(exprtcsv, this.exportFileName);
    }

    getData(): void {
        
        this.startIndex = (this.page * this.limit) - this.limit;
        this.endIndex = this.startIndex + this.limit - 1;
        if (JSON.stringify(this.data) != undefined)
        {
            this.total = this.totalRecords;
            this.pdata = this.filter.paging(this.data, this.startIndex, this.endIndex);
        }

        this.setPagesToShow();
    }

    goToPage(n: number): void {
        this.page = n;
        this.getData();
    }

    onNext(): void {
        this.page++;
        this.getData();
    }

    onPrev(): void {
        this.page--;
        this.getData();
    }

    onPageSizeChanged(p: number): void {
        this.limit = p;
        this.setPagesToShow();
    }

    setPagesToShow(): void {
        if (this.total % this.limit == 0)
            this.pagesToShow = this.total / this.limit;
        else
            this.pagesToShow = Math.floor(this.total / this.limit) + 1;
    }
    
}
