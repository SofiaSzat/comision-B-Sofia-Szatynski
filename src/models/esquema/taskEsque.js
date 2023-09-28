import { body } from "express-validator";

//para crear prueba sin null > no funciona
export const ctrlCreateEsq = [
    body ('titulo')
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No puede estar vacio'),
    body ('image')
        .isURL().withMessage('Debe ser string')
        .notEmpty().withMessage('No puede estar vacio'),
    body ('posteo')
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No puede estar vacio'),

    ]   