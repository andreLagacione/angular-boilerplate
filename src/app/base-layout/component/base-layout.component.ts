import { Component, OnInit, OnDestroy } from '@angular/core';

// services
import { BaseLayoutService } from '../services/base-layout.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ToasterService } from 'src/app/toaster/services/toaster.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  public toggleMenu = false;
  private companies: object[];

  constructor(
    private baseLayoutService: BaseLayoutService,
    private storageService: StorageService,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
    this.getEssentialComponents();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private getEssentialComponents() {
    this.baseLayoutService.getBaseApp()
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(
        _response => {
          this.storageService.setPermissions(_response[0]);
          this.companies = _response[1];
          this.baseLayoutService.updateMenuList(_response[2]);
        },
        _error => this.toasterService.error(_error)
      )
  }

}
