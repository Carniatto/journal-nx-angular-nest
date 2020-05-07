import { Component, OnInit } from '@angular/core';
import { JournalEntry } from '@trombonix/types';

import { DataService } from './services/data.service';

@Component({
 selector: 'trombonix-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 entries: JournalEntry[];

 constructor(private dataService: DataService) {}

 ngOnInit(): void {
   this.fetch();
 }

 fetch() {
   this.dataService.fetch().subscribe({
     next: (response: JournalEntry[]) => (this.entries = response)
   });
 }

 onSaveEntry(titleInput: HTMLInputElement, bodyInput: HTMLInputElement) {
   const entry = {
     title: titleInput.value,
     body: bodyInput.value
   };
   this.dataService.save(entry).subscribe({
     next: () => {
       this.fetch();
       titleInput.value = '';
       bodyInput.value = '';
     }
   });
 }

 onDeleteEntry(index: number) {
   this.dataService.delete(index).subscribe({
     next: () => {
       this.fetch();
     }
   });
 }
}
