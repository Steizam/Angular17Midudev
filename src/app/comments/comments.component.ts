import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
  <h3>Comentarios de lo que sea</h3>
  <img src="https://media.printables.com/media/prints/858986/images/6601464_287b1b48-c02e-40a4-af53-bb85e46b5fe0_3cb0d0f5-0da0-4a06-8ef1-b57597ad1c1d/thumbs/inside/1280x960/jpg/this-is-fine-meme.webp" />
  <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
     Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
     cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos 
     y los mezcló de tal manera que logró hacer un libro de textos especimen. 
     No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
     quedando esencialmente igual al original. 
     Fue popularizado en los 60s con la creación de las hojas "Letraset", 
     las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, 
     como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. 
</p>
  `,
  styles: `
  img {
    width: 100%;
    height: auto;
  }`
})
export class CommentsComponent {

}
