import React from 'react';
// import person from './Assets/img/user.svg';
import './App.css';
import Button from './Components/Button';
import Create from './Components/Create';
import Header from './Components/Header';
import Person from './Components/Person';

function App() {
    const [showCreatePop, setShowCreatePop] = React.useState(false);
    const [showEditPop, setShowEditPop] = React.useState(false);

    const showCreate = () => {
        setShowCreatePop(!showCreatePop);
    };
    const closeCreate = () => {
        setShowCreatePop(false);
    };

    const showEdit = () => {
        setShowEditPop(!showEditPop);
    };
    const closeEdit = () => {
        setShowEditPop(false);
    };

    return (
        <div className="App">
            <div className="container">
                <Header />
                <Person onEdit={showEdit} />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Button text="Добавить сотрудника" onCreate={showCreate} />
            </div>
            {showCreatePop && (
                <Create visible="create" title="Создание сотрудника" closeCreatePop={closeCreate} />
            )}
            {showEditPop && (
                <Create visible="edit" title="Редактирование сотрудника" closeEditPop={closeEdit} />
            )}
        </div>
    );
}

export default App;

{
    /* <img src={person} className="App-logo" alt="logo" /> */
}
