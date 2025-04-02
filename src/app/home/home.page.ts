import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  perfil: any = {
    foto: null,
    nome: null,
    profissao: null,
    nome_usuario:null,
    idioma: null,
    localidade: null,
    data_inicio:null,
    biografia:null,
    estatisticas: {
      curtidas: 0,
      seguindo: 1000,
      amigos: 1,
    },
    postagens: [
      {
        foto: 'https://i.pinimg.com/474x/86/43/8f/86438fc6addb3a8cb8d2624f62479142.jpg',
        nome: 'Aila',
        nome_usuario: '@aila_aryam',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, asperiores facilis alias dolores porro optio sit modi distinctio rem saepe consequatur at voluptatibus molestias quasi omnis assumenda cum! Quasi, maiores!',
        data: '12/03/2025 14:00'
      },
      {
        foto: 'https://i.pinimg.com/474x/02/66/a1/0266a10b4de19e2f1146e77fe2ed16ac.jpg',
        nome: 'Aila',
        nome_usuario: '@aila_aryam',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, asperiores facilis alias dolores porro optio sit modi distinctio rem saepe consequatur at voluptatibus molestias quasi omnis assumenda cum! Quasi, maiores!',
        data: '12/03/2025 14:10'
      },
      {
        foto: 'https://i.pinimg.com/474x/f7/7c/96/f77c9678cc2e09e25c0f6c162708f665.jpg',
        nome: 'Aila',
        nome_usuario: '@aila_aryam',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, asperiores facilis alias dolores porro optio sit modi distinctio rem saepe consequatur at voluptatibus molestias quasi omnis assumenda cum! Quasi, maiores!',
        data: '12/03/2025 14:30'
      }
    ]
  }

  constructor( ){ }

}
