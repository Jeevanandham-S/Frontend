import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModuleRoutingModule } from './product-module-routing.module';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  declarations: [
    ViewProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    ProductModuleRoutingModule
  ],
  exports:[]
})
export class ProductModuleModule { }
