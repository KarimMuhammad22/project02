import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerRankProfileComponent } from './container-rank-profile.component';

describe('ContainerRankProfileComponent', () => {
  let component: ContainerRankProfileComponent;
  let fixture: ComponentFixture<ContainerRankProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerRankProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerRankProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
