import {Component, Input} from '@angular/core';
import {IProject} from '../models';

@Component({
  selector: 'app-project',
  templateUrl: 'project.template.html',
  styleUrls: ['project.style.less']
})
export class ProjectComponent {
  @Input() project: IProject;
}
