import React, { ReactElement } from "react";

import Card from "../../brain4good/ui-comps/card/Card";
import Form from "../../brain4good/ui-comps/form/Form";
import { InputField } from "../../brain4good/ui-comps/input-field/InputField";
import { Layout } from "../../brain4good/ui-comps/layout/Layout";

export const Create: React.FC = (): ReactElement => (
    <Card>
        <Form>
            <Layout>
                <Layout type="vertical">
                    <InputField name="username" label="Username" type="text" />
                    <InputField name="password" label="Password" type="password" />
                </Layout>
                <Layout type="vertical">
                    <InputField name="gender" label="Gender" type="radio" options={[
                        { "label": "Male", "value": "Male" },
                        { "label": "Female", "value": "Female" }
                    ]} optionLayout="vertical" />
                    <InputField name="role" label="Role" type="select" options={[
                        { "label": "", "value": "" },
                        { "label": "Student", "value": "Student" },
                        { "label": "Teacher", "value": "Teacher" },
                        { "label": "Admin", "value": "Admin" }
                    ]} />
                </Layout>
                <InputField name="terms" label="I agree to the terms and conditions" type="checkbox" />
                <Layout type="vertical">
                    <InputField name="save" label="Save" type="submit" />
                    <InputField name="discard" label="Discard" type="submit" btnType="secondary" />
                </Layout>
            </Layout>
        </Form>
    </Card>
);