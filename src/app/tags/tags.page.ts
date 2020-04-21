import { Component, OnInit } from '@angular/core';
import { TagService } from '../services/tag.service';

@Component({
  selector: 'app-tags',
  templateUrl: 'tags.page.html',
  styleUrls: ['tags.page.scss']
})
export class TagsPage implements OnInit {
  tags: string[];

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.tagService.getTags().then((data) => {
      this.tags = data;
    });
  }

}
