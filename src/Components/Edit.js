import React from 'react';
import ButtonSave from './ButtonSave';

function Edit({ closeEditPop, onAdd, editData }) {
    const [inputName, setInputName] = React.useState('');
    const [inputSurname, setInputSurname] = React.useState('');
    const { firstName, lastName, id } = editData;

    const editPerson = () => {
        if (!inputName) {
            alert('Введите имя сотрудника');
            return;
        } else if (!inputSurname) {
            alert('Введите фамилию сотрудника');
            return;
        }
        onAdd({ id: id, firstName: inputName, lastName: inputSurname });
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
                                placeholder={firstName}
                            />
                            <input
                                value={inputSurname}
                                onChange={(e) => setInputSurname(e.target.value)}
                                className="contacts__form-input"
                                type="text"
                                name="surname"
                                placeholder={lastName}
                            />
                        </div>
                        <ButtonSave
                            onCloseCreate={closeEditPop}
                            onClick={editPerson}
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
