import React from 'react';
import Button from './Button';

function Create({ visible, title, closeCreatePop, closeEditPop }) {
    return (
        <div className="overlay">
            <div className={visible}>
                <form className="create__form-block">
                    <div className="create__header">
                        <h3 className="create__form-title">{title}</h3>
                    </div>
                    <div className="wrapper">
                        <div className="create__back">
                            <button onClick={closeCreatePop || closeEditPop}>Назад к списку</button>
                        </div>
                        <div className="create__form">
                            <input
                                className="contacts__form-input"
                                type="text"
                                name="name"
                                placeholder="Введите имя сотрудника"
                            />
                            <input
                                className="contacts__form-input"
                                type="text"
                                name="surname"
                                placeholder="Введите фамилию сотрудника"
                            />
                        </div>
                        <Button text="Сохранить" pos="create__btn-save" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Create;
