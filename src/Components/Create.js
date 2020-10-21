import axios from 'axios';
import React from 'react';
import ButtonSave from './ButtonSave';

function Create({ closeCreatePop, onAdd }) {
  const [inputName, setInputName] = React.useState('');
  const [inputSurname, setInputSurname] = React.useState('');

  const addPerson = () => {
    if (!inputName) {
      alert('Введите имя сотрудника');
      return;
    } else if (!inputSurname) {
      alert('Введите фамилию сотрудника');
      return;
    }
    axios
      .post('http://localhost:3001/persons', { firstName: inputName, lastName: inputSurname })
      .then(({ data }) => {
        onAdd(data);
      })
      .then(() => {
        alert('Успешно добавлено');
      });
    closeCreatePop();
  };
  return (
    <div className="overlay">
      <div className="create">
        <div className="create__form-block">
          <div className="create__header">
            <h3 className="create__form-title">Создание сотрудника</h3>
          </div>
          <div className="wrapper">
            <div className="create__back">
              <button onClick={closeCreatePop}>Назад к списку</button>
            </div>
            <div className="create__form">
              <input
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                className="contacts__form-input"
                type="text"
                name="name"
                placeholder="Введите имя сотрудника"
              />
              <input
                value={inputSurname}
                onChange={(e) => setInputSurname(e.target.value)}
                className="contacts__form-input"
                type="text"
                name="surname"
                placeholder="Введите фамилию сотрудника"
              />
            </div>
            <ButtonSave
              onCloseCreate={closeCreatePop}
              onClick={addPerson}
              text="Сохранить"
              pos="create__btn-save"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
