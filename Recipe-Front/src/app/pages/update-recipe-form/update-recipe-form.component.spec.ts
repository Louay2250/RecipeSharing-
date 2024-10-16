import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRecipeFormComponent } from './update-recipe-form.component';

describe('UpdateRecipeFormComponent', () => {
  let component: UpdateRecipeFormComponent;
  let fixture: ComponentFixture<UpdateRecipeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRecipeFormComponent]
    });
    fixture = TestBed.createComponent(UpdateRecipeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
