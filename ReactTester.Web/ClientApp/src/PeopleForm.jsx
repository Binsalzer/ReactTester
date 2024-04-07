import React from 'react';

class PeopleForm extends React.Component {
    render() {
        return (

            <div className='row'>
                <div className='col-md-3 offset-md-2'>
                    <input type='text'

                        className='form-control'
                        placeholder='First Name'
                        onChange={this.props.onFirstNameChange}
                        value={this.props.currentPerson.firstName }
                    />
                </div>
                <div className='col-md-3 offset-md-2'>
                    <input type='text'
                        className='form-control'
                        placeholder='Last Name'
                        onChange={this.props.onLastNameChange}
                        value={this.props.currentPerson.lastName}
                    />
                </div>
                <div className='col-md-3 offset-md-2'>
                    <input type='text'
                        className='form-control'
                        placeholder='Age'
                        onChange={this.props.onAgeChange}
                        value={this.props.currentPerson.age}
                    />
                </div>
                <div className='col-md-1'>
                    <button className='btn btn-dark w-100' onClick={this.props.onAddClick }>Add</button>
                </div>
                <div className='col-md-1'>
                    <button className='btn btn-warning w-100' onClick={this.props.onClearClick }>Clear</button>
                </div>
            </div>

        )
    }

}
export default PeopleForm
