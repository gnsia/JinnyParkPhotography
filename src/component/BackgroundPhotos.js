import Component from "../core/Component.js";
import BackgroundPhoto from "./BackgroundPhoto.js";

export default class BackgroundPhotos extends Component {
    setup() {
        this.state = {
            'photos': [
                {
                    'id': '0',
                    'title': 'dummy-01',
                    'url': '/assets/photos/People(A2).jpg',
                    'width': 0,
                    'height': 0,
                    'category': 'live',
                    'hashtag': ['live', '24hours', 'indoor'],
                },
            ]
        }
    }
    template() {
        return `
            <div data-component="background-photo"></div>
        `
    }
    mounted() {
        const { photos } = this.state;
        const $backgroundPhoto = this.$target.querySelector('[data-component="background-photo"]');

        new BackgroundPhoto($backgroundPhoto, { photo: photos[0] });
    }
}