import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users = [
    { name: 'User1', email: 'user1@example.com', phone: '1234567890' },
    { name: 'User2', email: 'user2@example.com', phone: '0987654321' }
  ];
  selectedUser: any;
  sortDirection: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.users = data;
      });
  }

  

  openModal(user: any) {
    this.selectedUser = { ...user };
  }

  closeModal() {
    this.selectedUser = null;
  }

  saveUser() {
    const index = this.users.findIndex(user => user.email === this.selectedUser.email);
    if (index !== -1) {
      this.users[index] = { ...this.selectedUser };
    }
    this.closeModal();

  
}}



