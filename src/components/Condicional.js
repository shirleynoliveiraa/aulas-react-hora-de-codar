import React from 'react'

const Condicional = () => {
  const [email, setEmail] = React.useState();
  const [userEmail, setUserEmail] = React.useState();

function enviarEmail() {
  setUserEmail(email);
}

function limparEmail() {
  setUserEmail('');
}

  return (
    <div>
      <h2>Cadastre seu e-mail: </h2>
      <form onSubmit={enviarEmail}>
        <label htmlFor="email">E-mail: </label>
        <input
          type="email"
          placeholder="Digite seu e-mail..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={enviarEmail}>
        Enviar e-mail
      </button>
      {userEmail && (
        <div>
          <p> O e-mail do usuário é: {userEmail} </p>
          <button onClick={limparEmail}>Limpar e-mail</button>
        </div>
      )}
      </form>
    </div>
  );
}

export default Condicional