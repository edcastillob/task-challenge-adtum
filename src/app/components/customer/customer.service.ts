import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer(customer: Customer) {
    throw new Error('Method not implemented.');
  }
  
  private apiUrl = 'http://localhost:3000/customers'; 
  
  constructor(private http: HttpClient) { }
  
  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }
  
  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }
  
}

