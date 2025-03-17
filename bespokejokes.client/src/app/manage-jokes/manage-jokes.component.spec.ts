import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageJokesComponent } from './manage-jokes.component';

describe('CreateJokeComponent', () => {
  let component: ManageJokesComponent;
  let fixture: ComponentFixture<ManageJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageJokesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
