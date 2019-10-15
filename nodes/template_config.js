module.exports = function(RED) {

    function GrapejsConfigNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        this.name = config.name;
        this.template = config.template;
    }
 
    RED.nodes.registerType("grapejs_config", GrapejsConfigNode);
};