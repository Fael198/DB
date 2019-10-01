import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export class Fornecedor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNomeChange = this.handleNomeChange.bind(this);
    }

    handleSubmit(e) {
        alert('Um estoque foi enviado: ' + JSON.stringify(this.state));
        this.setState({
            nome: ''
        });
        e.preventDefault();
    }

    handleNomeChange(e) {
        this.setState({
            nome: e.target.value
        });
    }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control type='text' size="sm" placeholder='Nome' value={this.state.nome} onChange={this.handleNomeChange} />
        </Form.Group>

        <Button variant='primary' type='submit'>
            Cadastrar
        </Button>
      </Form>
    );
  }
}