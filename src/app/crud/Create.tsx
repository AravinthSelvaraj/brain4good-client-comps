import React, { ReactElement } from "react";

import Container from "../../brain4good/ui-comps/container/Container";
import Card from "../../brain4good/ui-comps/card/Card";
import Form from "../../brain4good/ui-comps/form/Form";
import { InputField } from "../../brain4good/ui-comps/input-field/InputField";

export const Create: React.FC = (): ReactElement => (
    <Container>
        <Card>
            <Form>
                <InputField name="username" label="Username" type="text" defaultValue="" />
                <InputField name="password" label="Password" type="password" defaultValue="" />
                <InputField name="terms" label="I agree to the terms and conditions" type="checkbox" defaultValue={false} />
                <InputField name="save" label="Save" type="submit" />
                <InputField name="discard" label="Discard" type="submit" btnType="secondary" />
            </Form>
        </Card>
    </Container>
);