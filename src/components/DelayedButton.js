import React, { Component } from 'react';

class DelayedButton extends Component {
    render() {
        return (
            <div>
                <button
                    onClick={
                        (e) => {
                            e.persist()
                            setTimeout(() => {
                                this.props.onDelayedClick(e)
                            }, this.props.delay)}
                    }
                >
                    Click!
                </button>
            </div>
        );
    }
}

export default DelayedButton;
