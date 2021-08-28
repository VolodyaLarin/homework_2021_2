/**
 * Функция реализует объединение полей нескольких объектов в один. 
 * 
 * Если одно и то же поле встретилось в нескольких объектах,
 * остается значение, которое встретилось раньше.
 * @param  {...object} sources - объекты, поля которых будут добавлены в новый объект
 * @returns {object} объект, содержащий все поля из всех объектов
 * переданных в аргументы функции
 */
function zip(...sources) {
    const target = {}
    sources.forEach((source) => {
        Object.keys(source).forEach((item)=>{
            if (target[item] !== undefined) {
                return
            }
            target[item] = source[item]
        })
    })
    return target
}
