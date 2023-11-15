import { Component, OnInit } from '@angular/core';
import { DataService, item } from '../data.service';
import { ActivatedRoute } from '@angular/router';

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

  // searchItems(itemName: string) {
  //   return (this.searchedItems = this.items.find(
  //     (nav) => nav.name === itemName
  //   ));
  // }

  constructor(public DataServ: DataService, private route: ActivatedRoute) {}

  async ngOnInit() {
    await this.DataServ.storage.create();

    this.itemName = this.route.snapshot.paramMap.get('item');
    this.categoryName = this.route.snapshot.paramMap.get('category');

    console.log('The selected item is', this.categoryName, this.itemName);

    if (this.DataServ.getDataFromStorageButton) {
      this.DataServ.storage.get('SearchedItemsLocalList').then((response) => {
        if (response) {
          this.searchedItems = response;
        } else {
          this.DataServ.loadJsonData().subscribe((data) => {
            this.items = data; // loading jsonFile into the array items
            console.log('Data loaded:', this.items);

            this.searchedItems =
              this.items[Number(this.categoryName)].nav[Number(this.itemName)];
            console.log('Searched items:', this.searchedItems);
          });
        }
      });
    } else if (this.DataServ.getDataFromFileButton) {
      this.DataServ.loadJsonData().subscribe((data) => {
        this.items = data; // loading jsonFile into the array items
        console.log('Data loaded:', this.items);

        this.searchedItems =
          this.items[Number(this.categoryName)].nav[Number(this.itemName)];
        console.log('Searched items:', this.searchedItems);
      });
    }
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
    await this.DataServ.storage.create();

    this.DataServ.storage
      .set('SearchedItemsLocalList', this.searchedItems)
      .then(() => {
        alert('Successfully saved to local storage');
      })
      .catch((err) => {
        alert('Error saving to local storage');
      });

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
}
