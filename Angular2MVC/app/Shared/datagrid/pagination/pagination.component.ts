// pagination.component.ts
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'my-pagination',
    templateUrl: 'app/Shared/datagrid/pagination/pagination.component.html',
    styleUrls: ['app/Shared/datagrid/pagination/pagination.component.css']
})
export class PaginationComponent {
    @Input() page: number;
    @Input() count: number;
    @Input() perPage: number;
    @Input() loading: boolean;
    @Input() pagesToShow: number;
    @Input() pageSizeOptions: any[];

    @Output() goPrev = new EventEmitter<boolean>();
    @Output() goNext = new EventEmitter<boolean>();
    @Output() goPage = new EventEmitter<number>();
    @Output() changePageSize = new EventEmitter<number>();

    constructor() { }

    getMin(): number {
        return ((this.perPage * this.page) - this.perPage) + 1;
    }

    getMax(): number {
        let max = this.perPage * this.page;
        if (max > this.count) {
            max = this.count;
        }
        return max;
    }

    onPage(n: number): void {
        this.goPage.emit(n);
    }

    onPrev(): void {
        this.goPrev.emit(true);
    }

    onNext(next: boolean): void {
        this.goNext.emit(next);
    }

    onPageSizeChanged(pageSize: number) {
        console.log("Page Size: " + pageSize);
        this.changePageSize.emit(pageSize);
    }

    totalPages(): number {
        return Math.ceil(this.count / this.perPage) || 0;
    }

    lastPage(): boolean {
        return this.perPage * this.page > this.count;
    }

    getPages(): number[] {
        const c = Math.ceil(this.count / this.perPage);
        const p = this.page || 1;
        const pagesToShow = this.pagesToShow || 9;
        const pages: number[] = [];
        pages.push(p);
        const times = pagesToShow - 1;
        for (let i = 0; i < times; i++) {
            if (pages.length < pagesToShow) {
                if (Math.min.apply(null, pages) > 1) {
                    pages.push(Math.min.apply(null, pages) - 1);
                }
            }
            if (pages.length < pagesToShow) {
                if (Math.max.apply(null, pages) < c) {
                    pages.push(Math.max.apply(null, pages) + 1);
                }
            }
        }
        pages.sort((a, b) => a - b);
        return pages;
    }
}