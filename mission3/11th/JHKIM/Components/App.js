export default class App {
    constructor({ $app }) {
        this.$app = $app;

        this.$children = [];

    }

    register(component) {
        this.$children.push(component);
    }

}
