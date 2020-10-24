import { Box, Button, Card, CardContent, Checkbox, CheckboxProps, FormControlLabel, FormGroup, MenuItem, TextField, Typography} from '@material-ui/core';
import React from 'react';
import { Form, Formik, Field, useField, ErrorMessage } from 'formik';
import { InvestmentDetails } from './InvestmentDetails';
import { array, boolean, mixed, number, object, string } from 'yup';

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

        <Formik
          validationSchema={
            object({
              fullName: string().required("Name is mandatory").min(2).max(100),
              initialInvestment: number().required().min(100),
              dependents: number().required().min(0).max(6),
              acceptedTermsAndConditions: boolean().oneOf([true]),
              investmentRisk: array(string().oneOf(['High', 'Medium', 'Low'])).min(1),
              commentAboutInvestmentRisk: mixed().when('investmentRisk', {
                is: (investmentRisk: string[] ) => investmentRisk.find(ir => ir === "High"),
                then: string().required().min(20).max(100),
                otherwise: string().min(20).max(100)
              })
            })
          }
          initialValues={initialValues}
          onSubmit={(values, formikHelpers) => {
            return new Promise(res => {
              setTimeout(() => {
                console.log("values", values)
                console.log("helpers", formikHelpers)
                console.log('===')
                res();
              }, 3000)
            })
          }}>
          {({ values, errors, touched, isSubmitting }) => (
            <Form>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="fullName" as={TextField} label="Full Name" />
                  {/* {touched.fullName && errors.fullName ? errors.fullName : null } */}
                  <ErrorMessage name="fullName" />
                </FormGroup>
              </Box>

              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="initialInvestment" type="number" as={TextField} label="Initial Investment"/>
                  <ErrorMessage name="initialInvestment" />
                </FormGroup>
              </Box>

              <FormGroup>
                <label>Select the risk</label>
                <CustomCheckbox name="investmentRisk" value="High" label="High" />
                <CustomCheckbox name="investmentRisk" value="Medium" label="Medium" />
                <CustomCheckbox name="investmentRisk" value="Low" label="Low" />
                <ErrorMessage name="investmentRisk" />
              </FormGroup>
              
              <FormGroup>
                <Field name="commentAboutInvestmentRisk"
                  as={TextField}
                  multiline rows={3} 
                  rowsMax={5}
                  label="Your comments"
                />
              <ErrorMessage name="commentAboutInvestmentRisk" />
              </FormGroup>
              
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="dependents" as={TextField} select label="Number of dependents">
                    <MenuItem value={-1}>Select ...</MenuItem>
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Field>
                  <ErrorMessage name="dependents" />
                </FormGroup>
              </Box>

              <Box marginBottom={2}>
                <CustomCheckbox name="acceptedTermsAndConditions" label="Accept Terms & Conditions" />
                <ErrorMessage name="acceptedTermsAndConditions" />
              </Box>

              <Button type="submit" disabled={isSubmitting}>Submit</Button>

              <pre>{JSON.stringify(errors, null, 4)}</pre>
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