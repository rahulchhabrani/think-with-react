const container = document.querySelector('#react');
ReactDOM.render("Hello! Welcome to React", container);

const Container = () => {
    return React.createElement(`div`, null, `Hey ProGrads! Welcome to React Learning`,
        React.createElement(`div`, null, `Let's rock and roll`)
    );
}

class ReactContainer extends React.Component {

    render() {
        return React.createElement(`div`, null, `Hey ProGrads`,
            React.createElement(`div`, null, `Let's rock and roll`)
        );
    }

}

ReactDOM.render(React.createElement(Container), container);
ReactDOM.render(React.createElement(ReactContainer), container);
ReactDOM.render(<ReactContainer/>, container);