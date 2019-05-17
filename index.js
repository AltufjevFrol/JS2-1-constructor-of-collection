module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {}


// Методы коллекции
Collection.prototype.values = function () {};
// другие методы


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
