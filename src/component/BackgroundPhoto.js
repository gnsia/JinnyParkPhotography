import Component from "../core/Component.js";

export default class BackgroundPhoto extends Component {
    template() {
        const { photo } = this.props;
        return `
            <img src="${photo.url}" style="max-height: 100vh"/>
        `
    }
}