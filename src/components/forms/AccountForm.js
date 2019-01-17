import React from 'react';

export default class AccountForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            firstName: props.account ? props.account.firstName : '',
            lastName: props.account ? props.account.lastName : '',
            email: props.account ? props.account.email : '',
            classCost: props.account ? props.account.classCost : '',
            bio: props.account ? props.account.bio : '',
            error: ''
        };
    }
    onFirstNameChange = (e) => {
        const firstName = e.target.value;
        this.setState(() => ({ firstName }));
    };
    onLastNameChange = (e) => {
        const lastName = e.target.value;
        this.setState(() => ({ lastName }));
    };
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };
    onClassCostChange = (e) => {
        const classCost = e.target.value;
        this.setState(() => ({ classCost }));
    };
    onBioChange = (e) => {
        const bio = e.target.value;
        this.setState(() => ({ bio }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.firstName || !this.state.lastName) {
            this.setState(() => ({ error: 'Please enter a first and last name.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                classCost: this.state.classCost,
                bio: this.state.bio
            });
        }
    };
    render() {
        return (
            <div>
            {this.state.error && <p className="autoreply autoreply--error">{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
                <div className="input-group">
                    <label>First Name</label>
                    <input
                        type='text'
                        placeholder='First Name'
                        name="firstName"
                        autoFocus
                        value={this.state.firstName}
                        onChange={this.onFirstNameChange}
                    />
                </div>
                <div className="input-group">
                    <label>Last Name</label>
                    <input
                        type='text'
                        placeholder='Last Name'
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.onLastNameChange}
                    />
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <input
                        type='text'
                        placeholder='Email'
                        name="email"
                        value={this.state.email}
                        onChange={this.onEmailChange}
                    />
                </div>
                <div className="input-group">
                    <label>Class Cost</label>
                    <input
                        type='text'
                        placeholder='Class Cost'
                        name="classCost"
                        value={this.state.classCost}
                        onChange={this.onClassCostChange}
                    />
                </div>
                <div className="input-group">
                    <label>Bio</label>
                    <textarea
                    placeholder='Bio'
                        value={this.state.bio}
                        onChange={this.onBioChange}
                    />
                </div>
                <div className="button-group">
                    <button>Save Profile</button>
                </div>
            </form>
            </div>
        );
    }
}