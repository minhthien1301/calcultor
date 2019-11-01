import React from 'react';
import * as actions from './actions';
import { connect } from 'react-redux';
import reducer from './reducers';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { makeSelectValue } from './selectors';
import Calculator from './../../components/Calculator'

const key = 'home';

function HomePage({ number, onSetValue }) {
  useInjectReducer({ key, reducer });

  const addNumber = e => {
    if (Number.isInteger(number)) {
      number = '';
    }
    onSetValue(number + e);
  };
  const getResult = () => {
    number = number.replace(/^0+/, '');
    for (let i = 0; i < number.length; i++) {
      if (
        (number[i] === '+' ||
          number[i] === '-' ||
          number[i] === '*' ||
          number[i] === '/') &&
        number[i + 1] === '0'
      ) {
        let j = i;
        while (j < number.length && number[j + 1] === '0') {
          j++;
        }
        const checkNumber = /^[1-9]/;
        const resultCheck = checkNumber.test(number[j + 1]);
        if (number[j] === '0' && !resultCheck) {
          number = number.slice(0, i + 2) + number.slice(j + 1, number.length);
        } else {
          number = number.slice(0, i + 1) + number.slice(j + 1, number.length);
        }
      }
    }
    if (
      number.length === 0 ||
      number[0] === '+' ||
      number[0] === '-' ||
      number[0] === '*' ||
      number[0] === '/'
    )
      number = ''.concat('0', number);
    onSetValue(eval(number));
  };
  const clear = () => {
    onSetValue('');
  };
  const del = () => {
    onSetValue(number.toString(10).slice(0, -1));
  };
  return (
    <Calculator
      number = {number}
      addNumber = {addNumber}
      getResult = {getResult}
      clear = {clear}
      del= {del}
    />
  );
}
const mapStateToProps = createStructuredSelector({
  number: makeSelectValue(),
});
export function mapDispatchToProps(dispatch) {
  return {
    onGetResult: a => dispatch(actions.getResult(a)),
    onSetValue: a => dispatch(actions.setValue(a)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
