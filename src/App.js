import React from "react";
import JSONDATA from "./MOCK_DATA.json";
import "./App.css";

export default function App() {
  return (
    <div className="main">
      <SearchForm />
    </div>
  );
}

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "" };
    this.SearchInputModes = {
      Immediate: "Immediate",
      PressEnter: "PressEnter",
      AfterStop: "AfterStop",
    };
    this.timeout = 1000;
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onEnterHandler = this.onEnterHandler.bind(this);
    this.onStopHandler = this.onStopHandler.bind(this);
  }
  onSearchHandler(e) {
    this.setState({ inputText: e.target.value });
  }
  onEnterHandler(e) {
    if (e.key === "Enter") {
      this.setState({ inputText: e.target.value });
    }
  }
  onStopHandler(e) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({ inputText: e.target.value });
    }, 2000);
  }

  render() {
    return (
      <div>
        <InputSearch
          placeholder="Search"
          onSearch={this.onStopHandler}
          mode={this.SearchInputModes.AfterStop}
        />
        <List result={this.state.inputText} />
      </div>
    );
  }
}

class InputSearch extends React.Component {
  render() {
    const mode = this.props.mode;
    if (mode === "Immediate") {
      return (
        <div>
          <input
            type="text"
            value={this.inputText}
            placeholder={this.props.placeholder}
            onChange={this.props.onSearch}
          ></input>
        </div>
      );
    } else if (mode === "PressEnter") {
      return (
        <div>
          <input
            type="text"
            placeholder={this.props.placeholder}
            onKeyPress={this.props.onSearch}
          ></input>
        </div>
      );
    } else if (mode === "AfterStop") {
      return (
        <div>
          <input
            type="text"
            placeholder={this.props.placeholder}
            onChange={this.props.onSearch}
          ></input>
        </div>
      );
    }
  }
}
class List extends React.Component {
  render() {
    const inputText = this.props.result;
    return (
      <ul>
        {JSONDATA.filter((val) => {
          if (inputText === "") {
            return val;
          } else if (
            val.first_name
              .toLocaleLowerCase()
              .startsWith(inputText.toLocaleLowerCase()) ||
            val.last_name
              .toLocaleLowerCase()
              .startsWith(inputText.toLocaleLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return (
            <li key={key}>
              {val.first_name} {val.last_name}
            </li>
          );
        })}
      </ul>
    );
  }
}
