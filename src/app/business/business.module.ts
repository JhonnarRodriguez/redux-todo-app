import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../layout/footer/footer.component';
import {
  TodoComponent,
  TodoAddComponent,
  TodoFooterComponent,
  TodoItemComponent,
  TodoListComponent,
} from './business.index';

import { FilterPipe } from '../filter/filter.pipe';

const BUSINESS_COMPONENTS = [
  TodoComponent,
  TodoAddComponent,
  TodoFooterComponent,
  TodoItemComponent,
  TodoListComponent,
  FilterPipe
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    BUSINESS_COMPONENTS,
    FooterComponent
  ],
  exports: [
    BUSINESS_COMPONENTS,
    FooterComponent
  ]
})

export class BusinessModule { }
