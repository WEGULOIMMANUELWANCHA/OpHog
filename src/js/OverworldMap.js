( function() {

    window.game.OverworldMapData = {
        
        /**
         * The graphic indices for each tile.
         * @type {Array:Number}
         */
        overworldMapTileIndices: [
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,72,72,72,70,72,72,72,70,72,70,72,70,72,72,72,70,72,72,72,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,72,70,72,70,72,70,72,70,72,70,72,70,72,70,72,70,72,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,72,70,72,72,72,72,72,72,72,72,72,72,72,70,72,72,72,70,72,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,72,70,72,70,72,70,70,70,72,70,72,70,72,70,72,70,72,70,72,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,72,72,72,70,72,70,70,70,72,70,72,70,72,72,72,70,72,72,72,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            ],

        /**
         * The width of overworldMapTileIndices
         * @type {Number}
         */
        overworldMapWidth: 50,

        /**
         * Each node in this array is an Object with the following:
         *     x - Number - x coordinate in tiles
         *     y - Number - y coordinate in tiles
         *     description - String - this will show verbatim over the node
         *     difficulty - Number - difficulty of the map that will be generated
         * @type {Array:Object}
         */
        overworldMapNodes: [
        {
            x: 1,
            y: 3,
            description: 'Green Hill Zone',
            difficulty: 1
        },
        {
            x:7,
            y:1,
            description: 'Pumpkin Hill',
            difficulty: 2
        },
        {
            x:9,
            y:5,
            description: 'Bot Land',
            difficulty: 3
        },
        {
            x:11,
            y:1,
            description: 'The Casino',
            difficulty: 4
        },
        {
            x:14,
            y:5,
            description: 'The Future',
            difficulty: 5
        },
        {
            x:19,
            y:3,
            description: 'Lazy Town',
            difficulty: 6
        }
        ],

        /**
         * Searches this.overworldMapNodes for a node whose x and y match the
         * specified coordinates.
         * @param  {Number} tileX - x, in tile coordinates
         * @param  {Number} tileY - y, in tile coordinates
         * @return {Object}       - an overworld map node. See
         * overworldMapNodes.
         */
        getOverworldNode: function(tileX, tileY) {
            for (var i = 0; i < this.overworldMapNodes.length; i++) {
                var node = this.overworldMapNodes[i];
                if ( node.x == tileX && node.y == tileY ) {
                    return node;
                }
            };
            return null;
        },

        /**
         * Initializes the overworld map. This should only be called once.
         */
        initializeOverworldMap: function() {
            var mapTileIndices = this.overworldMapTileIndices;

            // Put each node into the map
            for (var i = 0; i < this.overworldMapNodes.length; i++) {
                var node = this.overworldMapNodes[i];
                var index = node.y * this.overworldMapWidth + node.x;

                // Make them look like blue spawners
                mapTileIndices[index] = 65;
            };

            var doodadIndices = new Array(mapTileIndices.length);
            var tilesetID = game.TilesetManager.MARSH_TILESET_ID;
            game.overworldMap = new game.Map(mapTileIndices, doodadIndices, tilesetID, this.overworldMapWidth, 1, true);

            // Clear fog around the "first" node.
            game.overworldMap.setFog(1, 3, 3, false);
        }
    };
}());
