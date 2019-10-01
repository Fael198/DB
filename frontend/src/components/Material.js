import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export class Material extends Component {
    constructor(props) {
        super(props);

        this.state = {
            partnumber: '',
            quantidade: 0,
            quantidadeMin: 0,
            quantidadeMax: 0,
            descricao: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePartNumberChange = this.handlePartNumberChange.bind(this);
        this.handleQuantidadeChange = this.handleQuantidadeChange.bind(this);
        this.handleQuantidadeMinChange = this.handleQuantidadeMinChange.bind(this);
        this.handleQuantidadeMaxChange = this.handleQuantidadeMaxChange.bind(this);
        this.handleDescricaoChange = this.handleDescricaoChange.bind(this);
    }

    handleSubmit(e) {
        alert('Um material foi enviado: ' + JSON.stringify(this.state));
        this.setState({
            partnumber: '',
            quantidade: 0,
            quantidadeMin: 0,
            quantidadeMax: 0,
            descricao: ''
        });
        e.preventDefault();
    }

    handlePartNumberChange(e) {
        this.setState({
            partnumber: e.target.value
        });
    }

    handleQuantidadeChange(e) {
        this.setState({
            quantidade: e.target.value
        });
    }

    handleQuantidadeMinChange(e) {
        this.setState({
            quantidadeMin: e.target.value
        })
    }

    handleQuantidadeMaxChange(e) {
        this.setState({
            quantidadeMax: e.target.value
        })
    }

    handleDescricaoChange(e) {
        this.setState({
            descricao: e.target.value
        })
    }

    render() {
        return (
        <Form onSubmit={this.handleSubmit}>
            <Form.Group>
                <Form.Label>Part Number</Form.Label>
                <Form.Control type='text' size="sm" placeholder='Part Number' value={this.state.partnumber} onChange={this.handlePartNumberChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Quantidade</Form.Label>
                <Form.Control type='number' size="sm" placeholder='Quantidade' value={this.state.quantidade} onChange={this.handleQuantidadeChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Quantidade Minima</Form.Label>
                <Form.Control type='number' size="sm" placeholder='Quantidade Minima' value={this.state.quantidadeMin} onChange={this.handleQuantidadeMinChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Quantidade Máxima</Form.Label>
                <Form.Control type='number' size="sm" placeholder='Quantidade Máxima' value={this.state.quantidadeMax} onChange={this.handleQuantidadeMaxChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Descrição</Form.Label>
                <Form.Control type='text' size="sm" placeholder='Descrição' value={this.state.descricao} onChange={this.handleDescricaoChange} />
            </Form.Group>

            <Button variant='primary' type='submit'>
                Cadastrar
            </Button>
        </Form>
        );
    }
}