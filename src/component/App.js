import Component from "../core/Component.js";
import Background from "./Background.js";
import Header from "./Header.js";

export default class App extends Component {
    setup() {
        this.state = {
            'title': 'JinnyPark Photography',
        }
    }
    template() {
        return `
            <div class="header" data-component="header"></div>
            <div class="main" data-component="main"></div>
            <div class="footer" data-component="footer"></div>
            <div class="background" data-component="background"></div>
        `;
    }
    render() {
        this.$target.innerHTML = this.template();
        this.mounted()
    }
    mounted() {
        const { title } = this.state;
        const $header = this.$target.querySelector('[data-component="header"]');
        new Header($header, { title });

        const $background = this.$target.querySelector('[data-component="background"]');
        new Background($background, { title });

    }
}