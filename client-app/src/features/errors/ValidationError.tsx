import { Message } from "semantic-ui-react";

interface Props {
    errors: any;
}

export default function ValidationError({ errors }: Props) {
    // Ensure that errors is an array
    const errorArray = Array.isArray(errors) ? errors : [errors];

    return (
        <Message error>
            {errors && (
                <Message.List>
                    {errorArray.map((err: string, i: any) => (
                        <Message.Item key={i}>{err}</Message.Item>
                    ))}
                </Message.List>
            )}
        </Message>
    );
}
