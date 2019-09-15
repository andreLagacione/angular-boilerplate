import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerOfflineRoutes } from './server-offline.routes';

describe('ServerOfflineRoutes', () => {
  let component: ServerOfflineRoutes;
  let fixture: ComponentFixture<ServerOfflineRoutes>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerOfflineRoutes ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerOfflineRoutes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
