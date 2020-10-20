import React from 'react';
import './App.css';
import axios from 'axios';
import { Button, Create, Edit, Header, Person } from './Components';

function App() {
    const [list, setList] = React.useState(null);
    const [editUser, setEditUser] = React.useState({});

    const onAddPerson = (obj) => {
        const newPerson = [...list, obj];
        setList(newPerson);
    };

    const onEditPerson = (obj) => {
        const newList = list.map((el) => {
            if (el.id === obj.id) {
                return obj;
            }
            return el;
        });
        setList(newList);
        axios.patch('http://localhost:3001/persons/' + obj.id, {
            id: obj.id,
            firstName: obj.firstName,
            lastName: obj.lastName,
        });
    };

    const editPersone = (item) => {
        setEditUser(item);
    };

    React.useEffect(() => {
        axios.get('http://localhost:3001/persons').then(({ data }) => {
            setList(data);
        });
    }, []);

    const onRemove = (item, id) => {
        if (
            window.confirm(` Вы действительно хотите удалить ${item.firstName} ${item.lastName}?`)
        ) {
            axios.delete('http://localhost:3001/persons/' + item.id).then(() => {
                const listUpd = [...list];
                listUpd.splice(id, 1);
                setList(listUpd);
            });
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
                    <Person
                        showEdit={showEdit}
                        items={list}
                        onRemove={onRemove}
                        editItem={editPersone}
                    />
                ) : (
                    <h4>Загрузка данных...</h4>
                )}
                <Button text="Добавить сотрудника" onCreate={showCreate} />
            </div>
            {showCreatePop && (
                <Create list={list} onAdd={onAddPerson} closeCreatePop={closeCreate} />
            )}
            {showEditPop && (
                <Edit
                    list={list}
                    onAdd={onEditPerson}
                    closeEditPop={closeEdit}
                    editItem={showEdit}
                    editPersonItem={editPersone}
                    editData={editUser}
                />
            )}
        </div>
    );
}

export default App;
