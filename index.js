module.exports = Collection;
/*
*Конструктор коллекции
*/
function Collection(){
this.list = [];
}


/*
* Создание коллекции из массива значений
*/
Collection.from = function (arrItems) {
var obj = new Collection();
obj.list = obj.list.concat(arrItems)
return obj;
}

// Методы коллекции

/*
*Метод values возвращает массив элементов коллекци
*/
Collection.prototype.values = function () {
return this.list;
}
/*
*Метод at возвращает iтое свойство коллекции
*/
Collection.prototype.at = function(i) {
if (i<=0 || !Math.floor(i)) return null;//целый, положительный, не ноль
else if (this.list[i-1] === undefined) return null;// элемент отсутствует
else return this.list[i-1];
}

/*
*Метод append добавляет новые свойства коллекции
*/
Collection.prototype.append = function(item) {
/*
*если прилетела другая коллекция то разбираем ее и добавляем свойсва
*/
if (item instanceof Collection)
	this.list = this.list.concat(item.list);
	/*
*Если это не наша коллеккция то просто добавляем аргумент
*в следующее по счету свойство
*/
else 
	this.list = this.list.concat(item);
}

/*
*Метод removeAt удаляет свойства по указанному номеру
*в случае успеха возвращает true иначе false
*/
Collection.prototype.removeAt = function(i) {
if (i<=0 || !Math.floor(i)) return false;//целый, положительный, не ноль
var indexList = i-1;
if (indexList>=this.list.length) return false;// хотим отобрать больше чем есть
this.list.splice(indexList,1);
return true;
}

/*
*Метод count не описан но присутствует в проверках
*/
Collection.prototype.count = function(){
return this.list.length;// вот так вот 
}