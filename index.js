module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection(x){
this.length = 0;//добавляем псевдо length для работы метода values
	return 
}


/*
*Метод values возвращает массив элементов коллекци
*/
Collection.prototype.values = function () {
var arr =  Array.prototype.slice.call(this);
/*
*slice записывает в arr[0] undefined, а до последнего не доходит,
*последним (в хроме покрайней мере) всегда будет length нам он не нужен.
*Нет ни какой гарантии что всех реализациях JS будет так.
*Этот надо переделать
*/
arr.shift();
return arr;
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
	if ((item.hasOwnProperty(key)) && (key != 'length')) {
			this[getNumProp(this)] = item[key];
			} 
		else {continue}
	}
}
/*
*Если это не наша коллеккция то просто добавляем аргумент
*в следующее по счету свойство
*/
else {
	this[getNumProp(this)] = item;
}
	this.length = fakeLength(this);
	return this;
}

/*
*Метод removeAt удаляет свойства по указанному номеру
*в случае успеха возвращает true иначе false
*/
Collection.prototype.removeAt = function(i) {
if (this.hasOwnProperty(i)){
	delete this[i];
this.length = fakeLength(this);
return true;
}
else return false;
}

//Вспомогательная функии

// возвращает номер следуюещего свойства
function getNumProp (collection){
	/*
	*Так как свойства могут удаляться то имена свойств могу идти не подряд,
	*что бы не перезаписать какое то свойство следущее имя в коллекции
	*должно быть на 1 больше чем самое большое имя(номер)
	*/
	var _keys = Object.keys(collection);
	/*
	* в колекции только одно не номерное свойство 
	*/
	var _i = _keys.indexOf('length');
	_keys.splice(_i,1);
	var bigestNum =_keys.sort(function compareNumbers(a, b) {return a - b;}).pop();
	return ++bigestNum;	
}

// определим псевдо length
function fakeLength (collection) {
	return Object.keys(collection).length;//свойство length то же считаем оно отвалится после slice в методе values
}



/*
* Создание коллекции из массива значений
*/
Collection.from = function (arrItems) {
var obj = new Collection();
for (var i = 0, countProp = 1; i<arrItems.length; i++, countProp++) {
	obj[countProp] = arrItems[i];
}
obj.length = fakeLength(obj);//обновляем псевдо length для работы метода values
return obj;
}
