// @flow
import React, { Component } from 'react';
import Button from 'material-ui/Button';
type Props = {};

export default class StartCom extends Component<Props> {
  props: Props;

  render() {
    return (
        <div>
          <Button variant="raised" color="primary">
            blub...
          </Button>
        </div>
    );
  }
}
