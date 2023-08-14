//#ECMAScript2019 #ECMAScript10 #ES10 #2019 #spread #spreadObject #objectSpread #спред #спрэд

//аналогично Object.assign
//перезапись свойств двух объектов в новый:

const defaults = {
    host: 'localhost',
    drName: 'blog',
    user: 'admin',
};

const userData = {
    user: 'Veronika',
    password: 'qwerty',
};

const result = { ...defaults, ...userData};
console.log(result);


