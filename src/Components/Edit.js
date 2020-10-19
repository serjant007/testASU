import React from 'react';
import ButtonSave from './ButtonSave';

function Edit({ closeEditPop, onAdd, list }) {
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
        onAdd({ id: list.length + 1, firstName: inputName, lastName: inputSurname });
        closeEditPop();
    };
    return (
        <div className="overlay">
            <div className="edit">
                <div className="create__form-block">
                    <div className="create__header">
                        <h3 className="create__form-title">Редактирование сотрудника</h3>
                    </div>
                    <div className="wrapper">
                        <div className="create__back">
                            <button onClick={closeEditPop}>Назад к списку</button>
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
                            onCloseCreate={closeEditPop}
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

export default Edit;
