import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StartVotingPage } from '../start-voting/start-voting.page';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-votings',
  templateUrl: './votings.page.html',
  styleUrls: ['./votings.page.scss'],
})
export class VotingsPage implements OnInit {

  votings = [];

  constructor(private modalController: ModalController, private api: ApiService) { }

  ngOnInit() {
    this.loadVotings();
  }

  loadVotings() {
    this.api.getVotings().subscribe(res => {
      console.log(res);
      this.votings = res;
    });
  }

  upvote(voting) {
    this.api.upvote(voting._id).subscribe(res => {
      this.updateCount(voting, res);
    });
  }

  downvote(voting) {
    this.api.downvote(voting._id).subscribe(res => {
      this.updateCount(voting, res);
    });
  }

  updateCount(voting, updated) {
    this.votings = this.votings.map(v => {
      if (voting._id == v._id) {
        v.upvotes = updated['upvotes'];
        v.downvotes = updated['downvotes'];
      }
      return v;
    });
  }

  async startVoting() {
    const modal = await this.modalController.create({
      component: StartVotingPage
    });

    modal.onDidDismiss().then(res => {
      if (res.data && res.data.reload) {
        this.loadVotings();
      }
    });

    modal.present();
  }
}
