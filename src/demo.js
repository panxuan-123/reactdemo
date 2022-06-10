import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React from 'react';
import ReactDOM from 'react-dom/client';

var Item = React.createClass({
    render: function () {
        return (
            <div className="item">{this.props.children}</div>
        );
    }
});


var TodoList = React.createClass({
    getInitialState: function () {
        return {items: ["hello", "world"]};
    },
    handleAdd: function () {
        var newItems =
            this.state.items.concat([prompt('Enter some text')]);
        this.setState({items: newItems});
    },
    handleRemove: function (i) {
        var newItems = this.state.items;
        newItems.splice(i, 1);
        this.setState({items: newItems});
    },
    render: function () {

        var items = [];
        for(var i = 0 ; i < this.state.items.length ; i++) {
            var item = this.state.items[i];
            items.push(
                <Item key={item}>
                    <div onClick={this.handleRemove.bind(this, i)}>
                        {item}
                    </div>
                </Item>
            );
        }
        return (
            <div>
                <button onClick={this.handleAdd}>Add Item</button>
                <ReactCSSTransitionGroup
                                         transitionAppear={true}
                                         transitionName="example"
                                         transitionLeaveTimeout={5000}
                                         transitionEnterTimeout={5000}
                                         component="div">
                    {items}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

ReactDOM.render(<TodoList/>, document.getElementById("app"));
