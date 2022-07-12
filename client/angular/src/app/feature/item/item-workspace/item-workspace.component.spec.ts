import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemWorkspaceComponent } from './item-workspace.component';

describe('ItemWorkspaceComponent', () => {
  let component: ItemWorkspaceComponent;
  let fixture: ComponentFixture<ItemWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemWorkspaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
