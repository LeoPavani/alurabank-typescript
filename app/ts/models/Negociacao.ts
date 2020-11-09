// Para criar a classe, sempre começamos o nome do arquivo e o nome da classe com letra maiúscula
// No caso de um Model,
// Colocamos o constructor, que vai ditar as regras...
// ou seja, ele vai estabelecer os atributos da classe, para que, sempre que ela or instanciada ela tenha esses 3 atributos


class Negociacao{
  
  constructor(private _data: Date, private _quantidade: number, private _valor: number){}

  get data(){
    return this._data;
  }

  get quantidade(){
    return this._quantidade;
  }

  get valor(){
    return this._valor;
  }

  get volume(){
    return this._quantidade * this._valor;
  }
}