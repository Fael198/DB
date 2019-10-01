import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export class Usuario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      senha: '',
      email: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNomeChange = this.handleNomeChange.bind(this);
    this.handleSenhaChange = this.handleSenhaChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleSubmit(e) {
    alert('Um usuario foi enviado: ' + JSON.stringify(this.state));
    this.setState({
      nome: '',
      senha: '',
      email: ''
    });
    e.preventDefault();
  }

  handleNomeChange(e) {
    this.setState({
      nome: e.target.value
    });
  }

  handleSenhaChange(e) {
    this.setState({
      senha: e.target.value
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control type='text' size="sm" placeholder='Nome' value={this.state.nome} onChange={this.handleNomeChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Senha</Form.Label>
          <Form.Control type='password' size="sm" placeholder='Senha' value={this.state.senha} onChange={this.handleSenhaChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' size="sm" placeholder='name@example.com' value={this.state.email} onChange={this.handleEmailChange} />
        </Form.Group>

        <Button variant='primary' type='submit'>
            Cadastrar
        </Button>
      </Form>
    );
  }
}