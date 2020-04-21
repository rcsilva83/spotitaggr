import { Component, OnInit } from '@angular/core';
import { TagService } from '../services/tag.service';
import { ModalController } from '@ionic/angular';
import { NewTagComponent } from './new-tag/new-tag.component';

@Component({
  selector: 'app-tags',
  templateUrl: 'tags.page.html',
  styleUrls: ['tags.page.scss']
})
export class TagsPage implements OnInit {
  tags: string[];

  constructor(private tagService: TagService, private modalController: ModalController) { }

  ngOnInit() {
    this.tagService.getTags().then((data) => {
      this.tags = data;
    });
  }

  async onNewTag() {
    const modal = await this.modalController.create({
      component: NewTagComponent
    });
    return await modal.present();
  }

  onSave(name: string) {
    this.tagService.saveTag(name);
  }
}
