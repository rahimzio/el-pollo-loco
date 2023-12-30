/**
 * Base class for objects that can be drawn on a canvas.
 */
class Drawdown {
    /**
     * X-coordinate of the object.
     * @type {number}
     */
    x = 400;

    /**
     * Y-coordinate of the object.
     * @type {number}
     */
    y = 280;

    /**
     * Height of the object.
     * @type {number}
     */
    height = 220;

    /**
     * Width of the object.
     * @type {number}
     */
    width = 200;

    /**
     * Image object representing the drawn element.
     * @type {HTMLImageElement}
     */
    img;

    /**
     * Path to the image file.
     * @type {string}
     */
    path;

    /**
     * Cache for loaded images.
     * @type {Object.<string, HTMLImageElement>}
     */
    imgcache = {};

    /**
     * Load a single image for the object.
     * @param {string} path - Path to the image file.
     */
    loadimg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Cache multiple images.
     * @param {string[]} arr - Array of paths to image files.
     */
    loadimgcache(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imgcache[path] = img;
        });
    }
}