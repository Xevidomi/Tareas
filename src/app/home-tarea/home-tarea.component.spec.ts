import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTareaComponent } from './home-tarea.component';

describe('HomeTareaComponent', () => {
  let component: HomeTareaComponent;
  let fixture: ComponentFixture<HomeTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
