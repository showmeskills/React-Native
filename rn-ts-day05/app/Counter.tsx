import React from "react";

type Subtract<P,K> = Extract<P,K>
export interface InjectedCounterProps {
    value: number;
    onIncrement(): void;
    onDecrement(): void;
}

interface MakeCounterState {
    value: number;
}

const makeCounter = <P extends InjectedCounterProps>(
    Component: React.ComponentType<P>
) =>
    class MakeCounter extends React.Component<
        Subtract<P, InjectedCounterProps>,
        MakeCounterState
    > {
        state: MakeCounterState = {
            value: 0,
        };

        increment = () => {
            this.setState(prevState => ({
                value: prevState.value + 1,
            }));
        };

        decrement = () => {
            this.setState(prevState => ({
                value: prevState.value - 1,
            }));
        };

        render() {
            return (
                <Component
                    {...this.props as P}
                    value={this.state.value}
                    onIncrement={this.increment}
                    onDecrement={this.decrement}
                />
            );
        }
    };


interface CounterProps extends InjectedCounterProps {
    style?: React.CSSProperties;
}


class Counter extends React.Component<CounterProps>{
    render() {
        return (
            <div style={this.props.style}>
                <button onClick={this.props.onDecrement}> - </button>
                {this.props.value}
                <button onClick={this.props.onIncrement}> + </button>
            </div>
        )
    }
}

export default makeCounter(Counter);
