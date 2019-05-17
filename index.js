module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {}


// Методы коллекции
/*
*Метод values возвращает массив элементов коллекци
*/
Collection.prototype.values = function () {
}

/*
*Метод at возвращает iтое свойство коллекции
*/
Collection.prototype.at = function(i) {
return this[i];
}

/*
*Метод append добавляет новые свойства коллекции
*/
Collection.prototype.append = function(item) {
/*
*если прилетела другая коллекция то разбираем ее и добавляем свойсва
*/
if (item instanceof Collection) {
for (key in item){
	if (!item.hasOwnProperty(key)) {continue}
		else {
			this[getNumProp(this)] = item[key];
		}
	}
}
/*
*Если это не наша коллеккция то просто добавляем аргумент
*в следующее по счету свойство
*/
else {
	this[getNumProp(this)] = item;
}
	return this;
}

/*
*Метод removeAt удаляет свойства по указанному номеру
*в случае успеха возвращает true иначе false
*/
Collection.prototype.removeAt = function(i) {
if (this.hasOwnProperty(i)){
	delete this[i];
	return true
}
else return false;
}

//вспомогательная функия возвращает номер следуюещего свойства
function getNumProp (collection){
	/*
	*Так как свойства могут удаляться то имена свойств могу идти не подряд,
	*что бы не перезаписать какое то свойство следущее имя в коллекции
	*должно быть на 1 больше чем самое большое имя(номер)
	*/
	var bigestNum = Object.keys(collection).sort(function compareNumbers(a, b) {return a - b;}).pop();
	return ++bigestNum;
	/*
	*Предполагаеться что коллекции создаются и изменяются только методами
	*/
}



/**
 * Создание коллекции из массива значений
 */
Collection.from = function (arrItems) {
var obj = new Collection();
for (var i = 0, countProp = 1; i<arrItems.length; i++, countProp++){
	obj[countProp] = arrItems[i];
}

return obj;
}
