import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { endpoint } from 'src/app/endpoint';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer(customer: Customer) {
    throw new Error('');
  }
  
  private serviceURL = `${endpoint}customers`; 
  
  constructor(private http: HttpClient) { }
  
  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.serviceURL);
  }
  
  addCustomer(customer: Customer): Observable<Customer> {
    // const token = localStorage.getItem('token');
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.post<Customer>(this.serviceURL, customer);
    // return this.http.post<Customer>(this.serviceURL, customer, { headers });
  }
  
}

