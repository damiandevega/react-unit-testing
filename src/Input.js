import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

export class UnconnectedInput extends Component {
  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input 
          type="text" 
          className="mb-2 mx-sm-3" 
          placeholder="enter guess"
          data-test="input-box" 
          />
          <button 
            type="submit" 
            className="btn btn-primary mb-2"
            onClick={() => this.props.guessWord('train')}
            data-test="submit-button"
          >
            Submit
          </button>
      </form>
    );

    return (
      <div data-test="component-input">
        {contents}
      </div>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);