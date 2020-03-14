import * as React from "react";
import Button from '@material-ui/core/Button';

export interface LoginProps { compiler: string; framework: string; }

export class Login extends React.Component<LoginProps, {}> {
    render() {
        return (
            <div>
                <h1>Welcome to Portfolio Manager!</h1>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </div>
        );
    }
}