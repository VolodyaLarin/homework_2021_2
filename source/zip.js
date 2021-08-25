function zip_1(target, ...sources) {
    sources.forEach((source) => {
        for (let item in source) {
            if (target[item] !== undefined) continue;
            target[item] = source[item];
        }
    })
    return target
}

function zip(...sources) {
    return Object.assign(...sources.reverse());
}