import React from 'react'

class DelayedButton extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={ event => {
                        event.persist()
                        setTimeout( () => this.props.onDelayedClick(event), this.props.delay)
                    }}
                >
                    DelayedButton
                </button>
            </div>
        )
    }
}

export default DelayedButton