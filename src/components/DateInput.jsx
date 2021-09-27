import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import jaLocale from 'date-fns/locale/ja';

const useStyles = makeStyles({
  datePicker:{
    marginTop:10,
  }
});

export const DateInput = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedData] = useState(null);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale} className={classes.root}>
      <DatePicker
        className={classes.datePicker}
        disableToolbar
        variant="inline"
        inputVariant="standard"
        format="yyyy/MM/dd"
        id="@material-ui/pickers"
        label="日付"
        value={selectedDate}
        onChange={setSelectedData}
      />
    </MuiPickersUtilsProvider>
  );
};