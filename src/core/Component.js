export default class Component {
    $target;
    state;
    props;
    constructor($target, props) {
        this.$target = $target;
        this.props = props;
        this.setup();
        this.setEvent();
        this.render();
    }
    setup() { }
    setEvent() { }
    setState(newState) {
        this.state = { ...this.state, newState };
        this.render();
    }
    mounted() { }
    template() {
        return ``;
    }
    render() {
        this.$target.innerHTML = this.template();
        this.mounted()
    }
}