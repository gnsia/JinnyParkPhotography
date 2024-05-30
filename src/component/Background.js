import Component from "../core/Component.js";

export default class Background extends Component {
    setup() {
        this.state = {
            'photos': [
                {
                    'id': '0',
                    'title': 'dummy-01',
                    'url': 'https://images.pexels.com/photos/19562913/pexels-photo-19562913.jpeg',
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
            <span>I am Background</span>
            <div data-component="background-photos"></div>
        `
    }
    mounted() {

    }
}