// Team
export const SET_TEAM_NAME = 'SET_TEAM_NAME';
export const SET_TEAM_SCORE = 'SET_TEAM_SCORE';
export const INCREMENT_TEAM_SCORE = 'INCREMENT_SCORE';

// @return { string } name
export const setTeamName = (team, name) => ({
  type: SET_TEAM_NAME,
  data: { team, name }
});

export const setTeamScore = (team, score) => ({
  type: SET_TEAM_SCORE,
  data: { team, score }
});
export const incrementTeamScore = (team, amount) => ({
  type: INCREMENT_TEAM_SCORE,
  data: { team, amount }
});




// Clock
export const START_CLOCK = 'START_CLOCK';
export const STOP_CLOCK = 'STOP_CLOCK';
export const RESET_CLOCK = 'RESET_CLOCK';
export const SET_CLOCK_TIME_REMAINING = 'SET_CLOCK_TIME_REMAINING';
export const SET_CLOCK_TIME_TOTAL = 'SET_CLOCK_TIME_TOTAL';
// ??
export const startClock = (clock) => ({});
export const stopClock = (clock) => ({});
export const resetClock = (clock) => ({});

// Timer
export const SET_MINUTE = 'SET_MINUTE'; // [int, int]
export const SET_SECOND = 'SET_SECOND'; // [int, int]
export const RUN_MINUTE = 'RUN_MINUTE';
export const RUN_SECOND = 'RUN_SECOND';

export const setMinute = (value) => ({
  type: SET_MINUTE,
  data: value
});
export const setSecond = (value) => ({
  type: SET_SECOND,
  data: value
});
export const runMinute = () => ({
  type: RUN_MINUTE
});
export const runSecond = () => ({
  type: RUN_SECOND
});



// Period
export const SET_PERIOD_TYPE = 'SET_PERIOD_TYPE';
export const SET_PERIOD_VALUE = 'SET_PERIOD_VALUE';
export const INCREMENT_PERIOD_VALUE = 'INCREMENT_PERIOD_VALUE';

export const setPeriodType = (type) => ({
  type: SET_PERIOD_TYPE,
  data: type
});
export const setPeriodValue = (value) => ({
  type: SET_PERIOD_VALUE,
  data: value
});
export const incrementPeriodValue = () => ({
  type: INCREMENT_PERIOD_VALUE
});
