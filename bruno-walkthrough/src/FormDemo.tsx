import { Card, CardContent, Checkbox, CheckboxProps, FormControlLabel, MenuItem, TextField, Typography} from '@material-ui/core';
import React from 'react';
import { Form, Formik, Field, useField } from 'formik';
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

              <CustomCheckbox name="investmentRisk" value="High" label="High" />
              <CustomCheckbox name="investmentRisk" value="Medium" label="Medium" />
              <CustomCheckbox name="investmentRisk" value="Low" label="Low" />
              
              <Field name="commentAboutInvestmentRisk" as={TextField} multiline rows={3} rowsMax={5} />
              
              <Field name="dependents" as={TextField} select>
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Field>

              <CustomCheckbox name="acceptedTermsAndConditions" label="Accept Terms & Conditions" />

              <pre>{JSON.stringify(values, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  )
}

export function CustomCheckbox(props: CustomCheckboxProps) {
  const [field] = useField({
    name: props.name,
    type: 'checkbox',
    value: props.value
  })
  return <FormControlLabel control={ <Checkbox {...props} {...field} />} label={props.label} />
}

export interface CustomCheckboxProps extends CheckboxProps {
  name: string;
  value?: string | number;
  label?: string;
}