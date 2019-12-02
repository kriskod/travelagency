import { tourStructure } from '../models/tourStructure.model';

export const tourData: tourStructure[] = [
    {
        id: 0,
        name: 'Super wycieczka',
        destinationCountry: 'Malediwy',
        startDate: new Date('2019-06-12'),
        finishDate: new Date('2019-06-22'),
        price: 4000,
        maxSeats: 5,
        leftSeats: 2,
        description: 'Opis tej wycieczki',
        imagePath: 'assets/malediwy.jpg',
        rate: []
    },

    {
        id: 1,
        name: 'Słońce morze góry zorze',
        destinationCountry: 'Grecja',
        startDate: new Date('2019-06-12'),
        finishDate: new Date('2019-06-22'),
        price: 2000,
        maxSeats: 8,
        leftSeats: 8,
        description: 'Opis wycieczki',
        imagePath: 'assets/malediwy.jpg',
        rate: []
    },

    {
        id: 2,
        name: 'Lorem ipsum',
        destinationCountry: 'Dubaj',
        startDate: new Date('2019-06-12'),
        finishDate: new Date('2019-06-22'),
        price: 8000,
        maxSeats: 6,
        leftSeats: 5,
        description: 'Opis wycieczki',
        imagePath: 'assets/malediwy.jpg',
        rate: []
    },

    {
        id: 3,
        name: 'Barcelona piękna barcelona',
        destinationCountry: 'Hiszpania',
        startDate: new Date('2019-06-12'),
        finishDate: new Date('2019-06-22'),
        price: 3500,
        maxSeats: 4,
        leftSeats: 3,
        description: 'Opis wycieczki',
        imagePath: 'assets/malediwy.jpg',
        rate: []
    },

    {
        id: 4,
        name: 'Wybrzeże wojny',
        destinationCountry: 'Turcja',
        startDate: new Date('2019-06-12'),
        finishDate: new Date('2019-06-22'),
        price: 4200,
        maxSeats: 12,
        leftSeats: 10,
        description: 'Opis wycieczki',
        imagePath: 'assets/malediwy.jpg',
        rate: []
    },

    {
        id: 5,
        name: 'Portugalskie sekrety',
        destinationCountry: 'Portugalia',
        startDate: new Date('2019-06-12'),
        finishDate: new Date('2019-06-22'),
        price: 6300,
        maxSeats: 3,
        leftSeats: 2,
        description: 'Opis wycieczki',
        imagePath: 'assets/malediwy.jpg',
        rate: []
    },

    {
        id: 6,
        name: '4000 brutto minmalna',
        destinationCountry: 'Polska',
        startDate: new Date('2019-06-12'),
        finishDate: new Date('2019-06-22'),
        price: 1500,
        maxSeats: 10,
        leftSeats: 10,
        description: 'Opis wycieczki',
        imagePath: 'assets/malediwy.jpg',
        rate: []
    },

    {
        id: 7,
        name: 'Wycieczka objazdowa',
        destinationCountry: 'Ukraina',
        startDate: new Date('2019-06-12'),
        finishDate: new Date('2019-06-22'),
        price: 3700,
        maxSeats: 6,
        leftSeats: 6,
        description: 'Opis wycieczki',
        imagePath: 'assets/malediwy.jpg',
        rate: []
    }
]