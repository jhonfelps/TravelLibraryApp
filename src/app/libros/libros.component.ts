import { Component, OnInit, ViewChild } from '@angular/core';
import { libro } from './libro';
import { libroService } from './libro.service';
import { merge, catchError, map, startWith, switchMap, of as observableOf } from 'rxjs';
import { ModalService } from './detalle/modal.service';
import { MatPaginator, PageEvent} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort} from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class librosComponent implements OnInit {
  libros: libro[];
  paginador: any;
  search:string = '';
  pageEvent: PageEvent;
  totalData: number;
  isLoading = false;
  filterValue: string = null;
  isRateLimitReached = false;
  libroSeleccionado:libro;
  displayedColumns: string[] = ['Isbn', 'Titulo', 'Sinopsis', 'Npaginas', 'VerDetalle'];
  dataSource = new MatTableDataSource<libro>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('item') item;

  constructor(private libroService: libroService,
    private modalService: ModalService,
    private _liveAnnouncer: LiveAnnouncer){ }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {

  }

  searchKeywordFilter = new FormControl();

  getTableData$(pageNumber: number, pageSize: number, search: string) {
    return this.libroService.getlibros(pageNumber, pageSize, search);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  ngAfterViewInit() {
    merge(this.searchKeywordFilter.valueChanges, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          if(this.item){
            this.isLoading = true;
          }          
          var filterValue = this.searchKeywordFilter.value == null ? '' : this.searchKeywordFilter.value;
          return this.getTableData$(
            this.paginator.pageIndex + 1,
            this.paginator.pageSize,
            filterValue
          ).pipe(catchError(() => observableOf(null)));
        }),
        map((data) => {
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }
          this.totalData = data.Total;
          if(this.item){
            this.isLoading = false;
          }  
          return data.registers;
        })
      )
      .subscribe((empData) => {
        this.libros = empData['$values'];
        this.dataSource = new MatTableDataSource(this.libros);
      });
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  filterData($event: any){
    this.dataSource.filter = $event.target.value;
  }

  abrirModal(libro: libro) {
    console.log('libro'+ libro);
    this.libroSeleccionado = libro;
    this.modalService.abrirModal();
  }

}
