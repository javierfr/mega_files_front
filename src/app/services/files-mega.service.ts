import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesMegaService {

  private apiUrl = 'http://localhost:8080/upload'; // Asegúrate de que la URL sea correcta

  constructor(private http: HttpClient) { }

  uploadFiles(files: File[]): Observable<any> {
    const formData: FormData = new FormData();

    // Añadir cada archivo al FormData
    files.forEach(file => {
      formData.append('file', file, file.name);
    });

    // Realizar la petición POST para subir los archivos
    return this.http.post(this.apiUrl, formData);
  }
}
