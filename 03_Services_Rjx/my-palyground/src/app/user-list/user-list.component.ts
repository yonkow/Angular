import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../types/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  @Input('users') userListData: User[] = [];
}
