import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-voting-details',
  templateUrl: './voting-details.page.html',
  styleUrls: ['./voting-details.page.scss'],
})
export class VotingDetailsPage implements OnInit {
  votingId = null;
  voting = null;
  comments = [];

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.votingId = this.route.snapshot.paramMap.get('id');
    this.api.getVoting(this.votingId).subscribe(res => {
      this.voting = res;
    });

    this.api.getComments(this.votingId).subscribe(res => {
      this.comments = res;
    });
  }

  upvote() {

  }

  downvote() {

  }
}
