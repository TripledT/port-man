import * as React from "react";
import Button from '@material-ui/core/Button';

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
            <div>
                <h1>Welcome to the Portfolio Manager !!</h1>
                <Button variant="contained" color="primary">
                    Login
                </Button>
            </div>
        )
    }
}