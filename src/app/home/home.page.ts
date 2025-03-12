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
      seguindo: 0,
      amigos: 0,
    },
    postagens: [
      {
        foto: 'https://i.pinimg.com/736x/15/4b/28/154b2837a5ee9a2ee369c4085f0294c7.jpg',
        nome: 'Ana',
        nome_usuario: '@AnaclaraVich',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, asperiores facilis alias dolores porro optio sit modi distinctio rem saepe consequatur at voluptatibus molestias quasi omnis assumenda cum! Quasi, maiores!',
        data: '12/03/2025 14:00'
      },
      {
        foto: 'https://i.pinimg.com/736x/b3/fc/ce/b3fccecc20923e597b03c154c9b42d58.jpg',
        nome: 'Ana',
        nome_usuario: '@AnaclaraVich',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, asperiores facilis alias dolores porro optio sit modi distinctio rem saepe consequatur at voluptatibus molestias quasi omnis assumenda cum! Quasi, maiores!',
        data: '12/03/2025 14:10'
      },
      {
        foto: 'https://i.pinimg.com/736x/b0/ee/6f/b0ee6f661250598488a9d4e426acba20.jpg',
        nome: 'Ana',
        nome_usuario: '@AnaclaraVich',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, asperiores facilis alias dolores porro optio sit modi distinctio rem saepe consequatur at voluptatibus molestias quasi omnis assumenda cum! Quasi, maiores!',
        data: '12/03/2025 14:30'
      }
    ]
  }

  constructor( ){ }

}
