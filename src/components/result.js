import React, {Component} from 'react';

class ResultComponent extends Component {

    render() {
        let {result} = this.props;
        console.log({result});
        return (
            <div className="result">
                <p>{result}</p>
            </div>
    )
        ;
    }
}


export default ResultComponent;