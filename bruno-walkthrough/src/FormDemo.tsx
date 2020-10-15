import { Card, CardContent, Checkbox, FormControlLabel, MenuItem, TextField, Typography} from '@material-ui/core';
import React from 'react';
import { Form, Formik, Field } from 'formik';
import { InvestmentDetails } from './InvestmentDetails';

const initialValues: InvestmentDetails = {
  fullName: '',
  initialInvestment: undefined,
  investmentRisk: [],
  commentAboutInvestmentRisk: '',
  dependents: -1,
  acceptedTermsAndConditions: false
};

export function FormDemo() {

  return(
    <Card>
      <CardContent>
        <Typography variant="h4">New Account</Typography>

        <Formik initialValues={initialValues} onSubmit={() => {}}>
          {({ values }) => (
            <Form>
              <Field name="fullName" as={TextField} label="Full Name" />
              <Field name="initialInvestment" type="number" as={TextField} label="Initial Investment"/>

              <CustomCheckbox />
              
              <Field name="investmentRisk" value="High" type="checkbox" as={Checkbox} label="high" />
              <Field name="investmentRisk" value="Medium" type="checkbox" />
              <Field name="investmentRisk" value="Low" type="checkbox" />

              <Field name="commentAboutInvestmentRisk" as={TextField} multiline rows={3} rowsMax={5} />
              
              <Field name="dependents" as={TextField} select>
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Field>

              <Field name="acceptedTermsAndConditions" type="checkbox" />
              
              <pre>{JSON.stringify(values, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  )
}

export function CustomCheckbox() {
  return <FormControlLabel control={ <Checkbox />} label="Secondary" />
}