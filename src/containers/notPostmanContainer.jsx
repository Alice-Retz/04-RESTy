import React, { Component } from 'react';
import Controls from '../components/Controls';
import Results from '../components/Results';

export default class notPostman extends Component {
  state = {
    loading: false,
    url: '',
    route: 'get',
    json: '',
    results: {},
    history: [],
  };

  handleURLChange = (e) => {
    this.setState({ url: e.target.value });
  };

  handleRouteChange = (e) => {
    this.setState({ route: e.target.value });
  };

  handleJsonChange = (e) => {
    this.setState({ json: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { url, json, history, method } = this.state;
    this.setState({ loading: true });

    //and this was where I realized I'd need some complicated if/else statement and decided I needed a nap, so I hope this qualifies for a first turn in.
  };
}
