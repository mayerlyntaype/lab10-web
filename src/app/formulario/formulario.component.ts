import { Component } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';

  showConfirmation() {
    if (confirm('¿Estás seguro de enviar el formulario?')) {
      this.openNewWindow();
    }
  }


    openNewWindow() {
      const formData = {
        nombre: this.nombre,
        email: this.email
      };
    
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        newWindow.document.write(`
          <style>
            body {
        
              font-family: 'Arial', sans-serif;
              background-color: #5a9fe7;
              padding: 20px;
            }
    
            .container {
              width: 300px;
              margin: 0 auto;
              background-color: #ffffff;
              border: 1px solid #cccccc;
              border-radius: 5px;
              padding: 20px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
    
            h1 {
              color: #333333;
              font-size: 24px;
              margin-bottom: 20px;
            }
    
            p {
              color: #666666;
              font-size: 16px;
              margin-bottom: 10px;
            }
          </style>
          <div class="container">
            <h1>Datos del formulario:</h1>
            <p>Nombre: ${formData.nombre}</p>
            <p>Email: ${formData.email}</p>
          </div>
        `);
        newWindow.document.close();
      }
    }
    


  onSubmit() {
    // Este método ya no se utiliza, se reemplazó por showConfirmation() y openNewWindow()
  }
  
}

