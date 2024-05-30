import Component from "../core/Component.js"

export default class Header extends Component {
    template() {
        const { title } = this.props;
        const [title1, title2] = title.split(' ');
        return `
            <h1>${title1}<br/>${title2}</h1>
        `
    }
}