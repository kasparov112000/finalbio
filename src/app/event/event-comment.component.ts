import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { Comment, User, UserService } from '../core';

@Component({
  selector: 'app-event-comment',
  templateUrl: './event-comment.component.html'
})
export class EventCommentComponent implements OnInit {
  constructor(
    private userService: UserService
  ) {}

  @Input() comment: Comment;
  @Output() deleteComment = new EventEmitter<boolean>();

  canModify: boolean;

  ngOnInit() {
    // Load the current user's data
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.canModify = (userData.username === this.comment.author.username);
      }
    );
  }

  deleteClicked() {
    this.deleteComment.emit(true);
  }


}
