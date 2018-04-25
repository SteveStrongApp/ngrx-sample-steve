import { NgModule } from '@angular/core';
import { EntityMetadataMap, NgrxDataModule } from 'ngrx-data';

export const entityMetadata: EntityMetadataMap = {
  Hero: {}
};


@NgModule({
  imports: [
    NgrxDataModule.forRoot({
      entityMetadata: entityMetadata
    })
  ]
})
export class EntityStoreModule {}
