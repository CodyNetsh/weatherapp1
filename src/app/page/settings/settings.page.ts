import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from '@ionic/angular';
//import { HomePage } from 'src/app/home/home.page';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  city: string;
 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage,
    private firestore:AngularFirestoreModule,
    private router:Router
  ) {

    this.storage.get('location').then((val) => {
      if (val != null) {
        let location = JSON.parse(val);
        this.city = location.city;
       
      } else {
        this.city = 'Pretoria';
       
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm() {
    let location = {
      city: this.city
      
    }
    this.storage.set('location', JSON.stringify(location));
    //this.router.navigateByUrl('home')
  }
}
