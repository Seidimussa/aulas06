"use strict";
class aulas {
    constructor(professor, disciplina, cargaHoraria) {
        this.professor = professor,
            this.disciplina = disciplina,
            this.cargaHoraria = cargaHoraria,
        ;
    }
}
let aulas01;
aulas01 = new aulas('Caitson', 'Dev Mobile', '20Horas');
console.log('Aulas de TIC: ', aulas01);
