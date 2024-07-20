"use strict";
class Aulas {
    constructor(p, d, ch) {
        this.professor = p;
        this.disciplina = d;
        this.cargaHoraria = ch;
    }
}
let aulas01;
aulas01 = new Aulas('Caitson', 'Dev Mobile', '20Horas');
console.log('Aulas de TIC: ', aulas01);
