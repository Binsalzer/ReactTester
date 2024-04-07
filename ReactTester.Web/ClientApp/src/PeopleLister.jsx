import React from 'react';
import PeopleForm from './PeopleForm';
import PeopleList from './PeopleList';

class PeopleLister extends React.Component {


    state = {
        currentPerson: {
            firstName: '',
            lastName: '',
            age: ''
        },
        people: []
    }
    onFirstNameChange = e => {
        const newPerson = {
            firstName: e.target.value,
            lastName: this.state.currentPerson.lastName,
            age: this.state.currentPerson.age
        }
        this.setState({ currentPerson: newPerson })
        console.log(this.state.currentPerson)
    }

    onLastNameChange = e => {
        console.log(this.state.currentPerson)
        const newPerson = {
            firstName: this.state.currentPerson.firstName,
            lastName: e.target.value,
            age: this.state.currentPerson.age
        }
        this.setState({ currentPerson: newPerson })
    }

    onAgeChange = e => {
        console.log(this.state.currentPerson)
        const newPerson = {
            firstName: this.state.currentPerson.firstName,
            lastName: this.state.currentPerson.lastName,
            age: e.target.value
        }
        this.setState({ currentPerson: newPerson })
    }

    onClearClick = () => {
        const clear = {
            firstName: '',
            lastName: '',
            age: ''
        }
        this.setState({ currentPerson: clear })

        this.setState({people:[]})
    }

    onAddClick = () => {
        const copy = [...this.state.people]
        copy.push(this.state.currentPerson)
        const clear = {
            firstName: '',
            lastName: '',
            age: ''
        }
        this.setState({ people: copy, currentPerson: clear })
    }

    render() {
        return (
            <div className='container ,mt-5'>
                <PeopleForm
                    onFirstNameChange={this.onFirstNameChange}
                    onLastNameChange={this.onLastNameChange}
                    onAgeChange={this.onAgeChange}
                    currentPerson={this.state.currentPerson} d
                    onClearClick={this.onClearClick}
                    onAddClick={this.onAddClick} />
                <div className='container'>
                    <table className="table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody className="table table-hover table-striped table-bordered">

                        </tbody>
                    </table>
                </div>
                <PeopleList people={this.state.people} />
            </div>
        )
    }
}

export default PeopleLister