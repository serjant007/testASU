import React from 'react';
import './App.css';
import axios from 'axios';
import { Button, Create, Edit, Header, Person } from './Components';

function App() {
    const [list, setList] = React.useState(null);

    const onAddPerson = (obj) => {
        const newPerson = [...list, obj];
        setList(newPerson);
    };

    React.useEffect(() => {
        axios.get('http://localhost:3001/persons').then(({ data }) => {
            setList(data);
        });
    }, []);

    const onRemove = (item) => {
        if (window.confirm(` Вы действительно хотите удалить ${item.lastName}?`)) {
            console.log(item);
        }
    };

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
                {list ? (
                    <Person onEdit={showEdit} items={list} onRemove={onRemove} />
                ) : (
                    <h4>Загрузка данных...</h4>
                )}
                <Button text="Добавить сотрудника" onCreate={showCreate} />
            </div>
            {showCreatePop && (
                <Create list={list} onAdd={onAddPerson} closeCreatePop={closeCreate} />
            )}
            {showEditPop && <Edit list={list} onAdd={onAddPerson} closeEditPop={closeEdit} />}
        </div>
    );
}

export default App;
