import { Component } from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
    templateUrl: 'app/Components/samplepagination.component.html',
})

export class SamplePaginationComponent {
    length = 100;
    pageSize = 10;
    pageSizeOptions = [5, 10, 25, 100];

    pageEvent: PageEvent;

}