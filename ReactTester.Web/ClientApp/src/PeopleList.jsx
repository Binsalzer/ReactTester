import React from 'react'

class PeopleList extends React.Component {

    getClassName = person => {
        if (person.age >= 65) {
            return 'text-danger';
        }

        return '';
    }

    render() {
        if (this.props.people.length === 0) {
            return <h2>No data entered yet</h2>
        }

        return (
            <>
            
                {this.props.people.map(person =>
                    <tr className={this.getClassName(person)}>
                        <td> {person.firstName}</td>
                        <td> {person.lastName}</td>
                        <td> {person.age}</td>
                    </tr >)}           
            </>
        )
    }
}

export default PeopleList
