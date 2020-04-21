import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TagsPage } from './tags.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { NewTagComponent } from './new-tag/new-tag.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: TagsPage }])
  ],
  declarations: [TagsPage, NewTagComponent],
  entryComponents: [NewTagComponent]
})
export class TagsPageModule {}
