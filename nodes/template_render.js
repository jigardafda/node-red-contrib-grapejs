module.exports = function(RED) {

	var nunjucks = require("nunjucks");

    function GrapejsRenderNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        const templateNode = RED.nodes.getNode(config.template);

		this.on('input', function(msg) {
			const data = JSON.parse(templateNode.template || '{}');
			const content = (data.style ? `<style>${data.style}<style>` : '') + (data.html || '')
			const cString = nunjucks.renderString(content, msg);
			msg.payload = cString;
			node.send(msg);
		});

    }

    RED.nodes.registerType("grapejs_render", GrapejsRenderNode);
};