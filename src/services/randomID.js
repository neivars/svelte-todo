// Random enough I guess
// Rollup was being a right tool with npm installs

function generate() {
    const id = (new Array(8)).fill(null, 0, 8);
    return id
        .map(() => String.fromCharCode(Math.floor(Math.random() * 65535)))
        .join('');
}

export {
    generate
};