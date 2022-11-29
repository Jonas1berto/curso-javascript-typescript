import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Register() {
  const dispacth = useDispatch();
  const id = useSelector((state) => state.auth.user.id);
  const nomeStored = useSelector((state) => state.auth.user.nome);
  const emailStored = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {
    if (!id) return;

    setNome(nomeStored);
    setEmail(emailStored);
  }, [emailStored, id, nomeStored]);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 80) {
      formErrors = true;
      toast.error('Seu nome precisa conter entre 3 a 80 caracteres!');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Digite um email válido!');
    }

    if (!id && password.length < 5) {
      formErrors = true;
      toast.error('A senha precisa ter mais de 5 caracteres!');
    }

    if (formErrors) return;

    dispacth(actions.registerRequest({ nome, email, password, id }));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1> {id ? 'Editar dados' : 'Crie sua conta'}</h1>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="nome">
          Nome:
          <input
            className="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
          />
        </label>

        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            className="senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua password"
          />
        </label>

        <button type="submit">
          {id ? 'Editar minha conta' : 'Criar minha conta'}
        </button>
      </Form>
    </Container>
  );
}
