import { Component } from 'react';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleInput = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
            onInput={this.handleInput}
            value={this.state.inputValue}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
