import { Component, OnInit } from '@angular/core';
import { DataService, item } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tut4-details',
  templateUrl: './tut4-details.page.html',
  styleUrls: ['./tut4-details.page.scss'],
})
export class Tut4DetailsPage implements OnInit {
  items: item[] = [];
  searchedItems: any; // Array to store the search results
  itemName: any;
  categoryName: any;
  editButton: Boolean = true;
  editTrigger: Boolean = false;
  saveButton: Boolean = false;
  addButton: Boolean = false;
  addDeviceButton: Boolean = false;
  CPU = '';
  RAM = '';
  Storage = '';
  Screen = '';

  searchItems(categoryN: Number, itemN: Number) {
    this.searchedItems = this.items[Number(categoryN)].nav[Number(itemN)];
    return this.searchedItems;
  }

  editRecords() {
    this.editTrigger = !this.editTrigger;
    this.addButton = !this.addButton;
    this.addDeviceButton = !this.addDeviceButton;
  }

  addRecords() {
    this.addDeviceButton = !this.addDeviceButton;
  }

  async saveRecords() {
    await this.DataServ.storage.set('MyList', this.searchedItems);
    alert('Successfully saved to local storage');

    this.editButton = !this.editButton;
  }

  addNewDevice(index: number) {
    const newDevice = {
      cpu: this.CPU,
      ram: this.RAM,
      storage: this.Storage,
      screen: this.Screen,
    };
    this.searchedItems.nav[index].nav.push(newDevice);

    alert('New device have been added successfully!');
    this.CPU = '';
    this.RAM = '';
    this.Storage = '';
    this.Screen = '';

    this.addDeviceButton = !this.addDeviceButton;
  }

  // searchItems(itemName: string) {
  //   return (this.searchedItems = this.items.find(
  //     (nav) => nav.name === itemName
  //   ));
  // }

  constructor(
    public DataServ: DataService,
    private route: ActivatedRoute,
    private storage: Storage
  ) {}

  async ngOnInit() {
    this.itemName = this.route.snapshot.paramMap.get('item');
    this.categoryName = this.route.snapshot.paramMap.get('category');

    console.log('The selected item is', this.categoryName, this.itemName);

    this.DataServ.loadJsonData().subscribe((data) => {
      this.items = data;
      console.log('Data loaded:', this.items);

      // Call the search function to populate the search results
      this.searchItems(this.categoryName, this.itemName);
      console.log('Searched items:', this.searchedItems);
    });

    this.storage.create();
  }
}
