import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailDirasakanPage } from './detail-dirasakan.page';

describe('DetailDirasakanPage', () => {
  let component: DetailDirasakanPage;
  let fixture: ComponentFixture<DetailDirasakanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDirasakanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
