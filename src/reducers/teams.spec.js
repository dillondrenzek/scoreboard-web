import React from 'react';
import ReactDOM from 'react-dom';

// Test Subject
import teamsReducer from './teams';

import * as Actions from '../actions';

describe('teams', () => {
  describe('incrementTeamScore', () => {

    let preState,
      action,
      postState,
      result,
      expected;


    beforeEach(() => {
      preState = [
        { name: 'test a', score: 0 },
        { name: 'test b', score: 0 }
      ];
      action = Actions.incrementTeamScore(0, 2);
      postState = teamsReducer(preState, action);
      result = postState[0].score;
      expected = preState[0].score + 2;
    });

    it('should return new array', () => {
      expect(postState).not.toBe(preState);
    });

    it('should return new object', () => {
      expect(postState[0]).not.toBe(preState[0]);
    });

    it('should return the right result', () => {
      expect(result).toEqual(expected);
    });

  });

});
