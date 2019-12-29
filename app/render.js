export class Render {
    constructor(tilesClass) {
        this.tiles = document.getElementsByClassName(tilesClass);

        this.tilesNum = this.tiles.length;
    }

    /** Draws specific content on selected tile */
    drawTile(tileId, content, isEmoji = true) {
        if (this.tileId >= this.tilesNum) {
            return new Error(`Render.drawTile: tileId should be between 0 and ${this.tilesNum}.`);
        }

        if (isEmoji === true) {
            this.tiles[tileId].innerText = this.getEmoji(content);
        } else {
            this.tiles[tileId].innerText = content;
        }
    }

    /** Gets emoji by its code. */
    getEmoji(emojiCode) {
        return String.fromCodePoint(emojiCode);
    }

    /** Draws array of tiles with given content. */
    drawTiles(contentArray, isEmoji = true) {
        for (let i in contentArray) {
            this.drawTile(i, contentArray[i], isEmoji);
        }
    }
}