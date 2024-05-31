import Component from "../core/Component.js";
import BackgroundPhotos from "./BackgroundPhotos.js";

export default class Background extends Component {
    template() {
        return `
            <div data-component="background-photos"></div>
        `
    }
    mounted() {
        const $backgroundPhotos = this.$target.querySelector('[data-component="background-photos"]');
        console.log($backgroundPhotos);
        new BackgroundPhotos($backgroundPhotos);
    }
}