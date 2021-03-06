import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
})
export class DeleteUserComponent implements OnInit {
  userId: string = '';
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.userId = data['id'];
    });
    if (this.userId) {
      this.userService.deletUser(this.userId).subscribe(
        (data) => {
          this._snackBar.open('User Deleted successfully');
          //back to listuser
          this.router.navigateByUrl('http://lovalhost:4200/users/list');
        },
        (err) => {
          this._snackBar.open('Unable to delete the  user.');
        }
      );
    }
  }
}
