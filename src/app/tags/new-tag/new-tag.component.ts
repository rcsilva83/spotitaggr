import { Component, OnInit, Input } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-new-tag',
  templateUrl: './new-tag.component.html',
  styleUrls: ['./new-tag.component.scss'],
})
export class NewTagComponent implements OnInit {
  name: string;

  constructor(private tagService: TagService) { }

  ngOnInit() {}

  onSave() {
    this.tagService.saveTag(this.name);
  }
}
