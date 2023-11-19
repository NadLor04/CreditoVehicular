import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  basePath: string = environment.basePath;
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get<User[]>(this.basePath);
  }
  addUser(user: User) {
    return this.http.post<User>(this.basePath, user);
  }
  getUserById(id: any){
    return this.http.get<User>(`${this.basePath}/${id}`);
  }
}
