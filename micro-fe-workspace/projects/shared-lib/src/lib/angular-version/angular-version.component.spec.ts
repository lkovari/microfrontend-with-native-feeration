import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularVersionComponent } from './angular-version.component';

describe('AngularVersionComponent', () => {
  let component: AngularVersionComponent;
  let fixture: ComponentFixture<AngularVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularVersionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
