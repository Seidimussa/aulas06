class Aulas {
    professor: string;
    disciplina: string;
    cargaHoraria: string;

    constructor(p: string, d: string, ch: string ){
        this.professor = p;
        this.disciplina = d;
        this.cargaHoraria = ch;
    }
}

let aulas01: Aulas
aulas01 = new Aulas('Caitson', 'Dev Mobile', '20Horas' )

console.log('Aulas de TIC: ', aulas01)